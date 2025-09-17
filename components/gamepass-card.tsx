"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap } from "lucide-react"
import Image from "next/image"
import { ClaimModal } from "./claim-modal"

interface GamepassCardProps {
  name: string
  type: string
  description: string
  image: string
  glowColor: string
  claimUrl: string
}

export function GamepassCard({ name, type, description, image, glowColor, claimUrl }: GamepassCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClaim = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <Card
        className={`group hover:scale-105 transition-all duration-300 border-primary/20 hover:border-primary/40 bg-card/80 backdrop-blur-sm ${glowColor} hover:shadow-2xl`}
      >
        <CardHeader className="pb-4">
          <div className="relative w-30 h-30 mx-auto mb-4">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain rounded-full" />
          </div>
          <CardTitle className="text-center text-lg font-bold text-balance text-foreground">{name}</CardTitle>
          <Badge className="mx-auto bg-secondary/20 text-secondary border-secondary/30 gold-glow">
            <Zap className="w-3 h-3 mr-1" />
            {type}
          </Badge>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-sm text-muted-foreground text-pretty">{description}</p>
          <Button className="w-full energy-glow group-hover:scale-105 transition-transform" onClick={handleClaim}>
            <Zap className="w-4 h-4 mr-2" />
            Claim Now
          </Button>
        </CardContent>
      </Card>

      <ClaimModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        itemName={name}
        itemType="gamepass"
        claimUrl={claimUrl}
      />
    </>
  )
}
