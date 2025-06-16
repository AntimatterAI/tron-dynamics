import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "rounded-2xl border transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground shadow-lg hover:shadow-xl",
        glass: "glass backdrop-blur-md bg-white/5 border-white/10",
        glow: "bg-obsidian-900 border-golden-500/20 shadow-2xl hover:shadow-golden-500/20",
        electric: "bg-obsidian-900 border-electric-500/20 shadow-2xl hover:shadow-electric-500/20",
        copper: "bg-obsidian-900 border-copper-500/20 shadow-2xl hover:shadow-copper-500/20",
        minimal: "bg-background border-border hover:shadow-md",
      },
      padding: {
        none: "",
        sm: "p-4",
        default: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "default",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  hover?: boolean
  glow?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hover = true, glow, children, ...props }, ref) => {
    const Component = hover ? motion.div : "div"
    
    const hoverProps = hover ? {
      whileHover: { y: -4, scale: 1.02 },
      transition: { type: "spring", stiffness: 300, damping: 20 }
    } : {}

    return (
      <Component
        ref={ref}
        className={cn(
          cardVariants({ variant, padding }),
          glow && variant === "glow" && "glow-golden",
          glow && variant === "electric" && "glow-electric", 
          glow && variant === "copper" && "glow-copper",
          className
        )}
        {...hoverProps}
        {...props}
      >
        {children}
      </Component>
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-serif font-bold leading-none tracking-tight",
      className
    )}
    {...props}
  >
    {children}
  </h3>
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } 