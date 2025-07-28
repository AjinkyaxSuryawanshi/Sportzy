"use client"

import { Button } from "@/components/ui/button"
import { Home, Trophy, Users, MessageCircle, User, Zap } from "lucide-react"

export function MobileNavigation() {
  return (
    <div className="fixed bottom-0 left-0 right-0 mobile-nav z-40">
      <div className="flex items-center justify-around py-2">
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2 px-3">
          <Home className="h-5 w-5 mb-1" />
          <span className="text-xs">Home</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2 px-3">
          <Trophy className="h-5 w-5 mb-1" />
          <span className="text-xs">Tournaments</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2 px-3">
          <Users className="h-5 w-5 mb-1" />
          <span className="text-xs">Teams</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2 px-3">
          <Zap className="h-5 w-5 mb-1" />
          <span className="text-xs">Live</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2 px-3">
          <MessageCircle className="h-5 w-5 mb-1" />
          <span className="text-xs">Chat</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex-col h-auto py-2 px-3">
          <User className="h-5 w-5 mb-1" />
          <span className="text-xs">Profile</span>
        </Button>
      </div>
    </div>
  )
}
