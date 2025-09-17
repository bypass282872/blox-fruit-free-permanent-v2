"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Shield, Zap, CheckCircle, AlertTriangle } from "lucide-react"

interface SetupInstructionsProps {
  onContinue: () => void
}

export function SetupInstructions({ onContinue }: SetupInstructionsProps) {
  const handleContinue = () => {
    onContinue()
    // Scroll to fruits section after showing content
    setTimeout(() => {
      document.getElementById("featured-fruits")?.scrollIntoView({ behavior: "smooth" })
    }, 100)
  }

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-destructive/5 backdrop-blur-sm border-y border-destructive/20">
      <div className="max-w-4xl mx-auto w-full">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-destructive/20 text-destructive border-destructive/30 energy-glow">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Important Setup Required
          </Badge>
          <h2 className="text-3xl font-bold mb-4 text-balance enterprise-text">CONFIGURE BROWSER BEFORE ACCESS</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Enable these Chrome settings to avoid errors and ensure smooth access to your free fruits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Step 1: Access Settings */}
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center energy-glow">
                  <span className="text-primary font-bold">1</span>
                </div>
                <CardTitle className="text-foreground">Open Chrome Settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted/50 rounded-lg p-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250916_214740.jpg-2FxfxDnLEDQxp1iyzRzLVXTiVKT0zV.jpeg"
                  alt="Chrome menu with Settings highlighted"
                  className="w-full rounded border border-border/50"
                />
              </div>
              <CardDescription>Click the three dots menu → Settings</CardDescription>
            </CardContent>
          </Card>

          {/* Step 2: Privacy and Security */}
          <Card className="border-secondary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center gold-glow">
                  <span className="text-secondary font-bold">2</span>
                </div>
                <CardTitle className="text-foreground">Privacy & Security</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted/50 rounded-lg p-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250914_134622.jpg-y0Df06ZdDYFVVYHG9ccHgye0dhZKPX.jpeg"
                  alt="Chrome Settings with Privacy and security highlighted"
                  className="w-full rounded border border-border/50"
                />
              </div>
              <CardDescription>Navigate to "Privacy and security" section</CardDescription>
            </CardContent>
          </Card>

          {/* Step 3: DNS Settings */}
          <Card className="border-primary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center energy-glow">
                  <span className="text-primary font-bold">3</span>
                </div>
                <CardTitle className="text-foreground">Enable Secure DNS</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted/50 rounded-lg p-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250914_134606.jpg-QgJ6KWhMQUZkx0S7QA0XNEV2bGamh7.jpeg"
                  alt="Privacy and security settings with Use secure DNS highlighted"
                  className="w-full rounded border border-border/50"
                />
              </div>
              <CardDescription>Find "Use secure DNS" and ensure it's enabled</CardDescription>
            </CardContent>
          </Card>

          {/* Step 4: Cloudflare DNS */}
          <Card className="border-secondary/20 bg-card/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center gold-glow">
                  <span className="text-secondary font-bold">4</span>
                </div>
                <CardTitle className="text-foreground">Select Cloudflare DNS</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="bg-muted/50 rounded-lg p-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20250914_134552.jpg-GoOA3edhcGIlgvkyD319I5XM7hszgw.jpeg"
                  alt="DNS provider selection with Cloudflare (1.1.1.1) highlighted"
                  className="w-full rounded border border-border/50"
                />
              </div>
              <CardDescription>Choose "Cloudflare (1.1.1.1)" from the dropdown</CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Important Notes */}
        <Card className="border-destructive/20 bg-destructive/5 backdrop-blur-sm mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-destructive">
              <Shield className="w-5 h-5" />
              Why These Settings Are Required
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 gold-glow" />
                <div>
                  <p className="font-medium text-foreground">Bypass Restrictions</p>
                  <p className="text-sm text-muted-foreground">Cloudflare DNS helps bypass network restrictions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 gold-glow" />
                <div>
                  <p className="font-medium text-foreground">Faster Loading</p>
                  <p className="text-sm text-muted-foreground">Improved connection speed and reliability</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 gold-glow" />
                <div>
                  <p className="font-medium text-foreground">Error Prevention</p>
                  <p className="text-sm text-muted-foreground">Prevents common connection errors</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-secondary mt-0.5 gold-glow" />
                <div>
                  <p className="font-medium text-foreground">Enhanced Security</p>
                  <p className="text-sm text-muted-foreground">Secure DNS protects against malicious sites</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Continue Button */}
        <div className="text-center">
          <Button
            size="lg"
            className="energy-glow text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            onClick={handleContinue}
          >
            <Zap className="w-5 h-5 mr-2" />
            Continue to Free Fruits
          </Button>
          <p className="text-sm text-muted-foreground mt-3">
            Complete the setup above, then click to access your free fruits
          </p>
        </div>
      </div>
    </section>
  )
}
