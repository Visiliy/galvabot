import { Settings, Cog } from "lucide-react";
import { cn } from "@/lib/utils";

export function GearDecoration({ className, size = "md", animate = true }) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16"
  };

  return (
    <div className={cn("relative", className)}>
      <Settings 
        className={cn(
          sizeClasses[size],
          "text-silver opacity-20",
          animate && "animate-gear-spin"
        )} 
      />
      <Cog 
        className={cn(
          sizeClasses[size],
          "text-silver-light opacity-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-75",
          animate && "animate-gear-spin-reverse"
        )} 
      />
    </div>
  );
}
