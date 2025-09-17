"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Crown, Zap } from "lucide-react"
import Image from "next/image"
import { ClaimModal } from "./claim-modal"

interface FruitCardProps {
  name: string
  rarity: string
  power: string
  image: string
  glowColor: string
  claimUrl?: string
}

export function FruitCard({ name, rarity, power, image, glowColor, claimUrl }: FruitCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClaim = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <Card
        className={`group hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary/40 ${glowColor} hover:shadow-2xl bg-card/80 backdrop-blur-sm`}
      >
        <CardHeader className="text-center pb-4">
          <div className="relative w-40 h-40 mx-auto mb-4">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain rounded-lg" />
          </div>
          <Badge className="mb-2 bg-secondary/20 text-secondary border-secondary/30 gold-glow">
            <Crown className="w-3 h-3 mr-1" />
            {rarity}
          </Badge>
          <CardTitle className="text-xl font-bold text-balance text-foreground">{name}</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-sm text-muted-foreground">{power}</p>
          <Button className="w-full group-hover:bg-primary/90 transition-colors energy-glow" onClick={handleClaim}>
            <Zap className="w-4 h-4 mr-2" />
            Claim Now
          </Button>
        </CardContent>
      </Card>

      <ClaimModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemName={name}
        itemType="fruit"
        claimUrl={claimUrl || ""}
      />
    </>
  )
}
