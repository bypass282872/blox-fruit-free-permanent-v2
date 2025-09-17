"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, Gift, Users, Star, Crown, Flame, Gamepad2 } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { FruitCard } from "@/components/fruit-card"
import { GamepassCard } from "@/components/gamepass-card"
import { StatsSection } from "@/components/stats-section"
import { SetupInstructions } from "@/components/setup-instructions"
import { useState } from "react"

export default function HomePage() {
  const [showMainContent, setShowMainContent] = useState(false)

  const featuredFruits = [
    {
      name: "Perm Dragon",
      rarity: "Mythical",
      power: "Ancient Zoan",
      image: "/dragon-fruit-new.jpeg",
      glowColor: "energy-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
    {
      name: "Perm Lightning",
      rarity: "Mythical",
      power: "Natural Logia",
      image: "/rumble-fruit.jpeg",
      glowColor: "gold-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
    {
      name: "Perm Kitsune",
      rarity: "Mythical",
      power: "Mystical Zoan",
      image: "/kitsune-fruit.jpeg",
      glowColor: "energy-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
    {
      name: "Perm Gravity",
      rarity: "Mythical",
      power: "Special Paramecia",
      image: "/gravity-fruit.jpeg",
      glowColor: "gold-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
    {
      name: "Perm Yeti",
      rarity: "Mythical",
      power: "Ancient Zoan",
      image: "/yeti-fruit.jpeg",
      glowColor: "energy-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
    {
      name: "Perm Portal",
      rarity: "Mythical",
      power: "Special Paramecia",
      image: "/portal-fruit.png",
      glowColor: "gold-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
    {
      name: "Perm Dough",
      rarity: "Mythical",
      power: "Special Paramecia",
      image: "/dough-fruit-new.jpeg",
      glowColor: "energy-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
    {
      name: "Perm T-Rex",
      rarity: "Mythical",
      power: "Ancient Zoan",
      image: "/trex-fruit.jpeg",
      glowColor: "gold-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
  ]

  const featuredGamepasses = [
    {
      name: "Dark Blade",
      type: "Legendary Sword",
      description: "Unlock the most powerful sword in Blox Fruits with devastating dark energy attacks",
      image: "/dark-blade-gamepass.webp",
      glowColor: "energy-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
    {
      name: "Fruit Notifier",
      type: "Premium Tool",
      description: "Get instant notifications when rare fruits spawn anywhere on the map",
      image: "/fruit-notifier-gamepass.webp",
      glowColor: "gold-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
    {
      name: "2x Exp",
      type: "Experience Boost",
      description: "Double your experience gain and level up twice as fast in all activities",
      image: "/2x-exp-gamepass.webp",
      glowColor: "energy-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
    {
      name: "2x Money",
      type: "Money Multiplier",
      description: "Earn double the money from all sources and get rich faster than ever",
      image: "/2x-money-gamepass.webp",
      glowColor: "gold-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
    {
      name: "Fast Boat",
      type: "Speed Enhancement",
      description: "Travel across the seas at lightning speed with the fastest boat available",
      image: "/fast-boat-gamepass.webp",
      glowColor: "energy-glow",
      claimUrl:
        "https://roblox.cd/games/2753915549/RIP-Event-Blox-Fruits?privateServerLinkCode=46566751558514295234581042645628",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <SetupInstructions onContinue={() => setShowMainContent(true)} />

      {showMainContent && (
        <>
          {/* Featured Fruits Section */}
          <section id="featured-fruits" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 gold-glow">
                  <Crown className="w-4 h-4 mr-2" />
                  Featured Fruits
                </Badge>
                <h2 className="text-4xl font-bold mb-4 text-balance enterprise-text">{"LEGENDARY FRUIT ARSENAL"}</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                  {"Claim these mythical fruits and ascend to ultimate power in the seas of Blox Fruits"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuredFruits.map((fruit, index) => (
                  <FruitCard key={index} {...fruit} />
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 px-4 bg-card/20 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30 energy-glow">
                  <Gamepad2 className="w-4 h-4 mr-2" />
                  Elite Gamepasses
                </Badge>
                <h2 className="text-4xl font-bold mb-4 text-balance enterprise-text">{"PREMIUM POWER COLLECTION"}</h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                  {"Unlock exclusive abilities and dominate with these legendary gamepass powers"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {featuredGamepasses.map((gamepass, index) => (
                  <GamepassCard key={index} {...gamepass} />
                ))}
              </div>
            </div>
          </section>

          <StatsSection />

          {/* How It Works Section */}
          <section className="py-20 px-4 bg-card/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30 gold-glow">
                  <Zap className="w-4 h-4 mr-2" />
                  Elite Process
                </Badge>
                <h2 className="text-4xl font-bold mb-4 text-balance enterprise-text">
                  {"CLAIM YOUR POWER IN 3 STEPS"}
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 energy-glow">
                      <Users className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">1. Join Elite Community</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">
                      {"Enter your Roblox username and join our exclusive community of elite players"}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="text-center border-secondary/20 hover:border-secondary/40 transition-colors bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 gold-glow">
                      <Gift className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-foreground">2. Select Your Power</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">
                      {"Choose from our legendary collection of permanent fruits and gamepasses"}
                    </CardDescription>
                  </CardContent>
                </Card>

                <Card className="text-center border-primary/20 hover:border-primary/40 transition-colors bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4 energy-glow">
                      <Flame className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-foreground">3. Ascend to Power</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-muted-foreground">
                      {"Join our private server and claim your legendary power instantly"}
                    </CardDescription>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Card className="border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10 backdrop-blur-sm">
                <CardHeader className="pb-8">
                  <CardTitle className="text-4xl font-bold mb-4 text-balance enterprise-text">
                    {"READY TO CLAIM ULTIMATE POWER?"}
                  </CardTitle>
                  <CardDescription className="text-xl text-pretty text-muted-foreground">
                    {"Join the elite ranks of legendary players who have claimed their destiny. Your power awaits!"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="energy-glow text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                      <Crown className="w-5 h-5 mr-2" />
                      Claim Ultimate Power
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 bg-transparent border-secondary/30 text-secondary hover:bg-secondary/10"
                    >
                      <Users className="w-5 h-5 mr-2" />
                      Join Elite Discord
                    </Button>
                  </div>
                  <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-secondary gold-glow" />
                      {"50,000+ Elite Players"}
                    </div>
                    <div className="flex items-center gap-2">
                      <Zap className="w-4 h-4 text-primary energy-glow" />
                      {"Instant Power Transfer"}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 px-4 border-t border-primary/20 bg-card/30 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 enterprise-text">ROBLOX FREE PERM FRUITS 💫</h3>
              <p className="text-muted-foreground mb-6 text-pretty">
                {
                  "The ultimate destination for legendary permanent fruits in Blox Fruits. Join our elite community and claim your destiny today!"
                }
              </p>
              <div className="flex justify-center gap-4">
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  Discord
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-secondary">
                  YouTube
                </Button>
                <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                  Twitter
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-8">
                {"© 2024 Roblox Free Perm Fruits. Not affiliated with Roblox Corporation."}
              </p>
            </div>
          </footer>
        </>
      )}
    </div>
  )
}
