import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Gift, Star, Zap } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Active Players",
      color: "text-primary",
    },
    {
      icon: Gift,
      value: "100,000+",
      label: "Fruits Claimed",
      color: "text-secondary",
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Player Rating",
      color: "text-yellow-500",
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Instant Delivery",
      color: "text-primary",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-balance">{"Trusted by the Community"}</h2>
          <p className="text-xl text-muted-foreground text-pretty">
            {"Join thousands of satisfied players who have claimed their dream fruits"}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-primary/10 hover:border-primary/20 transition-colors">
              <CardHeader className="pb-2">
                <div className={`w-12 h-12 mx-auto mb-2 ${stat.color}`}>
                  <stat.icon className="w-full h-full" />
                </div>
                <CardTitle className="text-3xl font-bold">{stat.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
