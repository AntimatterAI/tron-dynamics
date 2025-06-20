const puppeteer = require('puppeteer');
const fs = require('fs').promises;
const path = require('path');

// Configuration
const CONFIG = {
  // PDF generation options
  pdfOptions: {
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      right: '15mm',
      bottom: '20mm',
      left: '15mm'
    },
    displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `
      <div style="font-size: 10px; color: #666; width: 100%; text-align: center; margin: 0 auto;">
        <span class="pageNumber"></span> / <span class="totalPages"></span>
      </div>
    `
  },
  
  // File mapping - HTML files to PDF names
  files: [
    {
      input: 'press-kits/tron-dynamic-company-press-kit.html',
      output: 'press-kits/TRON-Dynamic-Company-Press-Kit.pdf',
      title: 'TRON DYNAMIC - Company Press Kit'
    },
    {
      input: 'press-kits/tron-studios-media-kit.html',
      output: 'press-kits/TRON-Studios-Media-Kit.pdf',
      title: 'TRON Studios - Media Kit'
    },
    {
      input: 'portfolio/tron-ventures-portfolio-overview.html',
      output: 'portfolio/TRON-Ventures-Portfolio-Overview.pdf',
      title: 'TRON Ventures - Portfolio Overview'
    },
    {
      input: 'portfolio/payflow-africa-fact-sheet.html',
      output: 'portfolio/PayFlow-Africa-Fact-Sheet.pdf',
      title: 'PayFlow Africa - Company Fact Sheet'
    },
    {
      input: 'impact/tron-impact-annual-report.html',
      output: 'impact/TRON-Impact-Annual-Report-2024.pdf',
      title: 'TRON Impact - Annual Report 2024'
    }
  ]
};

class PDFConverter {
  constructor() {
    this.browser = null;
  }

  async initialize() {
    console.log('🚀 Initializing PDF Converter...');
    this.browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    console.log('✅ Browser launched successfully');
  }

  async convertFile(fileConfig) {
    const { input, output, title } = fileConfig;
    const inputPath = path.join(__dirname, input);
    const outputPath = path.join(__dirname, output);
    
    try {
      console.log(`📄 Converting: ${title}`);
      
      // Check if input file exists
      await fs.access(inputPath);
      
      // Create output directory if it doesn't exist
      const outputDir = path.dirname(outputPath);
      await fs.mkdir(outputDir, { recursive: true });
      
      // Create a new page
      const page = await this.browser.newPage();
      
      // Set viewport for consistent rendering
      await page.setViewport({
        width: 1200,
        height: 1600,
        deviceScaleFactor: 2
      });
      
      // Load the HTML file
      const fileUrl = `file://${inputPath}`;
      await page.goto(fileUrl, {
        waitUntil: ['networkidle0', 'domcontentloaded'],
        timeout: 30000
      });
      
      // Wait for fonts to load
      await page.evaluateHandle('document.fonts.ready');
      
      // Generate PDF
      const pdfBuffer = await page.pdf({
        ...CONFIG.pdfOptions,
        path: outputPath
      });
      
      await page.close();
      
      // Get file size for reporting
      const stats = await fs.stat(outputPath);
      const fileSizeKB = Math.round(stats.size / 1024);
      
      console.log(`✅ Generated: ${output} (${fileSizeKB} KB)`);
      
      return {
        success: true,
        input,
        output,
        size: fileSizeKB
      };
      
    } catch (error) {
      console.error(`❌ Error converting ${input}:`, error.message);
      return {
        success: false,
        input,
        output,
        error: error.message
      };
    }
  }

  async convertAll() {
    console.log(`🔄 Converting ${CONFIG.files.length} files to PDF...\n`);
    
    const results = [];
    let successCount = 0;
    
    for (const fileConfig of CONFIG.files) {
      const result = await this.convertFile(fileConfig);
      results.push(result);
      
      if (result.success) {
        successCount++;
      }
      
      // Add a small delay between conversions
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Print summary
    console.log('\n📊 Conversion Summary:');
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Failed: ${CONFIG.files.length - successCount}`);
    
    if (successCount > 0) {
      console.log('\n📁 Generated Files:');
      results.filter(r => r.success).forEach(result => {
        console.log(`   • ${result.output} (${result.size} KB)`);
      });
    }
    
    if (successCount < CONFIG.files.length) {
      console.log('\n⚠️  Failed Files:');
      results.filter(r => !r.success).forEach(result => {
        console.log(`   • ${result.input}: ${result.error}`);
      });
    }
    
    return results;
  }

  async cleanup() {
    if (this.browser) {
      await this.browser.close();
      console.log('🔒 Browser closed');
    }
  }
}

// Main execution function
async function main() {
  const converter = new PDFConverter();
  
  try {
    await converter.initialize();
    const results = await converter.convertAll();
    
    // Exit with error code if any conversions failed
    const hasFailures = results.some(r => !r.success);
    process.exit(hasFailures ? 1 : 0);
    
  } catch (error) {
    console.error('💥 Fatal error:', error);
    process.exit(1);
  } finally {
    await converter.cleanup();
  }
}

// Handle process termination
process.on('SIGINT', async () => {
  console.log('\n⏹️  Process interrupted, cleaning up...');
  process.exit(0);
});

process.on('SIGTERM', async () => {
  console.log('\n⏹️  Process terminated, cleaning up...');
  process.exit(0);
});

// Run the script if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('💥 Unhandled error:', error);
    process.exit(1);
  });
}

module.exports = { PDFConverter, CONFIG }; 