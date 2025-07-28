"use client"

import { Button } from "@/components/ui/button"
import { Trophy, Users, Calendar, Star } from "lucide-react"
import Link from "next/link"
import { useAuth } from "@/components/auth-provider"
import { LoginScreen } from "@/components/login-screen"
import { PlayerDashboard } from "@/components/player-dashboard"
import { OrganizerDashboard } from "@/components/organizer-dashboard"
import { MobileNavigation } from "@/components/mobile-navigation"
import { useEffect, useState } from "react"

export default function HomePage() {
  const { user, isLoading } = useAuth()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-400">Loading Sportzy...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return <LoginScreen />
  }

  return (
    <>
      <div className="pb-20 md:pb-0">{user.role === "player" ? <PlayerDashboard /> : <OrganizerDashboard />}</div>
      {isMobile && <MobileNavigation />}
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Play. Connect. Compete.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Join the ultimate sports community. Find players, create teams, and compete in tournaments near you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="w-full sm:w-auto">
                Sign Up Now
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                <Trophy className="mr-2 h-4 w-4" />
                Join Tournament
              </Button>
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                <Users className="mr-2 h-4 w-4" />
                Find Players Near You
              </Button>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            {/* Ongoing Tournaments */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold flex items-center">
                  <Trophy className="mr-3 h-8 w-8 text-primary" />
                  Ongoing Tournaments
                </h2>
                <Link href="/tournaments">
                  <Button variant="outline">View All</Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.role === "player" && (
                  <>
                    {/* Existing code for ongoing tournaments */}
                    {/* ... */}
                  </>
                )}
              </div>
            </div>

            {/* Available Pickup Matches */}
            <div className="mb-16">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold flex items-center">
                  <Calendar className="mr-3 h-8 w-8 text-primary" />
                  Available Pickup Matches
                </h2>
                <Link href="/discover">
                  <Button variant="outline">Find More</Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.role === "player" && (
                  <>
                    {/* Existing code for pickup matches */}
                    {/* ... */}
                  </>
                )}
              </div>
            </div>

            {/* Local Top Players */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold flex items-center">
                  <Star className="mr-3 h-8 w-8 text-primary" />
                  Local Top Players
                </h2>
                <Link href="/discover">
                  <Button variant="outline">View Leaderboard</Button>
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.role === "player" && (
                  <>
                    {/* Existing code for top players */}
                    {/* ... */}
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
