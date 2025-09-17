import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Crown, Zap, Users } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/enterprise-bg.jpeg"
          alt="Enterprise Background"
          fill
          className="object-cover opacity-30"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background/90 to-secondary/20" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-secondary rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary rounded-full animate-pulse delay-700"></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 text-lg px-6 py-2 gold-glow">
          <Crown className="w-5 h-5 mr-2" />
          Free Permanent Fruits
        </Badge>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
          <span className="enterprise-text">ROBLOX FREE</span>
          <br />
          <span className="text-foreground drop-shadow-2xl">PERM FRUITS 💫</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
          {
            "Unlock legendary permanent fruits in Blox Fruits completely free! Join the elite community claiming their ultimate powers daily."
          }
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="energy-glow text-xl px-10 py-6 bg-primary hover:bg-primary/90">
            <Zap className="w-6 h-6 mr-2" />
            Claim Free Fruits
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-xl px-10 py-6 bg-transparent border-secondary/30 text-secondary hover:bg-secondary/10"
          >
            <Users className="w-6 h-6 mr-2" />
            Join Elite Community
          </Button>
        </div>

        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse energy-glow" />
            {"50,000+ Elite Players"}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-secondary rounded-full animate-pulse gold-glow" />
            {"100% Free Forever"}
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse energy-glow" />
            {"Instant Delivery"}
          </div>
        </div>
      </div>
    </section>
  )
}
