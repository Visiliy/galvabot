import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GearDecoration } from "@/components/ui/gear-decoration";
import { cn } from "@/lib/utils";

export function ProjectCard({ title, description, icon, className }) {
  return (
    <Card className={cn(
      "group bg-gradient-dark border-border/50 hover:border-silver/30 transition-all duration-300 hover:shadow-metallic hover:transform hover:scale-105 relative overflow-hidden",
      className
    )}>
      {/* Background gear decoration */}
      <div className="absolute top-4 right-4 opacity-10">
        <GearDecoration size="lg" />
      </div>
      
      <CardHeader className="relative z-10 text-left">
        <div className="flex items-center space-x-3">
          {icon && (
            <div className="text-silver group-hover:text-silver-light transition-colors">
              {icon}
            </div>
          )}
          <CardTitle className="text-silver group-hover:text-silver-light transition-colors text-left">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 text-left">
        <CardDescription className="text-muted-foreground group-hover:text-silver/80 transition-colors text-left">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
