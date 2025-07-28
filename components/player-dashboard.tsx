"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/components/auth-provider"
import { NotificationPanel } from "@/components/notification-panel"
import { TournamentBrowser } from "@/components/tournament-browser"
import { TeamDashboard } from "@/components/team-dashboard"
import { LiveMatchPage } from "@/components/live-match-page"
import { Trophy, Users, Calendar, Star, Bell, Plus, Target, Award, Clock } from "lucide-react"

export function PlayerDashboard() {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState("dashboard")
  const [showNotifications, setShowNotifications] = useState(false)

  const stats = {
    matchesPlayed: 47,
    wins: 32,
    mvps: 8,
    winRate: 68,
  }

  const upcomingMatches = [
    {
      id: 1,
      tournament: "Summer Basketball League",
      opponent: "Lightning Bolts",
      date: "Today, 6:00 PM",
      location: "Downtown Court",
      status: "confirmed",
    },
    {
      id: 2,
      tournament: "Tennis Championship",
      opponent: "Court Kings",
      date: "Tomorrow, 4:00 PM",
      location: "Tennis Club",
      status: "pending",
    },
  ]

  const recentMatches = [
    {
      id: 1,
      tournament: "Football Cup",
      opponent: "City Strikers",
      result: "Win",
      score: "3-1",
      date: "2 days ago",
      mvp: true,
    },
    {
      id: 2,
      tournament: "Basketball League",
      opponent: "Thunder Hawks",
      result: "Loss",
      score: "78-82",
      date: "1 week ago",
      mvp: false,
    },
  ]

  const myTeams = [
    {
      id: 1,
      name: "Thunder Bolts",
      sport: "Basketball",
      role: "Captain",
      members: 8,
      wins: 12,
      losses: 3,
    },
    {
      id: 2,
      name: "Court Masters",
      sport: "Tennis",
      role: "Player",
      members: 4,
      wins: 6,
      losses: 2,
    },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case "tournaments":
        return <TournamentBrowser />
      case "teams":
        return <TeamDashboard />
      case "live":
        return <LiveMatchPage />
      default:
        return (
          <div className="space-y-8">
            {/* Welcome Section */}
            <div className="text-center py-8">
              <h1 className="text-4xl font-bold gradient-text mb-4">Welcome back, {user?.name}!</h1>
              <p className="text-slate-400 text-lg">Ready to dominate the courts?</p>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card className="glass card-hover">
                <CardContent className="p-6 text-center">
                  <Target className="h-8 w-8 text-white mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stats.matchesPlayed}</div>
                  <div className="text-sm text-gray-400">Matches Played</div>
                </CardContent>
              </Card>
              <Card className="glass card-hover">
                <CardContent className="p-6 text-center">
                  <Trophy className="h-8 w-8 text-green-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-400">{stats.wins}</div>
                  <div className="text-sm text-gray-400">Wins</div>
                </CardContent>
              </Card>
              <Card className="glass card-hover">
                <CardContent className="p-6 text-center">
                  <Award className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-400">{stats.mvps}</div>
                  <div className="text-sm text-gray-400">MVPs</div>
                </CardContent>
              </Card>
              <Card className="glass card-hover">
                <CardContent className="p-6 text-center">
                  <Star className="h-8 w-8 text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-blue-400">{stats.winRate}%</div>
                  <div className="text-sm text-gray-400">Win Rate</div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Upcoming Matches */}
              <Card className="glass neon-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Upcoming Matches
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {upcomingMatches.map((match) => (
                    <div key={match.id} className="p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{match.tournament}</h4>
                        <Badge variant={match.status === "confirmed" ? "default" : "secondary"}>{match.status}</Badge>
                      </div>
                      <p className="text-slate-400 text-sm mb-1">vs {match.opponent}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="flex items-center text-slate-400">
                          <Clock className="h-4 w-4 mr-1" />
                          {match.date}
                        </span>
                        <span className="text-slate-400">{match.location}</span>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full btn-bounce bg-white text-black hover:bg-gray-200">
                    <Plus className="h-4 w-4 mr-2" />
                    Find More Matches
                  </Button>
                </CardContent>
              </Card>

              {/* Recent Matches */}
              <Card className="glass neon-glow">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="mr-2 h-5 w-5 text-primary" />
                    Recent Matches
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentMatches.map((match) => (
                    <div key={match.id} className="p-4 bg-slate-800/30 rounded-lg border border-slate-700">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{match.tournament}</h4>
                        <div className="flex items-center space-x-2">
                          <Badge variant={match.result === "Win" ? "default" : "destructive"}>{match.result}</Badge>
                          {match.mvp && (
                            <Badge variant="outline" className="text-yellow-400 border-yellow-400">
                              MVP
                            </Badge>
                          )}
                        </div>
                      </div>
                      <p className="text-slate-400 text-sm mb-1">vs {match.opponent}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium">{match.score}</span>
                        <span className="text-slate-400">{match.date}</span>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            {/* My Teams */}
            <Card className="glass neon-glow">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-5 w-5 text-primary" />
                  My Teams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {myTeams.map((team) => (
                    <div key={team.id} className="p-4 bg-slate-800/30 rounded-lg border border-slate-700 card-hover">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold">{team.name}</h4>
                        <Badge variant={team.role === "Captain" ? "default" : "secondary"}>{team.role}</Badge>
                      </div>
                      <p className="text-slate-400 text-sm mb-2">
                        {team.sport} • {team.members} members
                      </p>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-green-400">
                          {team.wins}W - {team.losses}L
                        </span>
                        <Button size="sm" variant="outline">
                          View Team
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Trophy className="h-8 w-8 text-white" />
              <h1 className="text-2xl font-bold gradient-text">Sportzy</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Button
                variant={activeTab === "dashboard" ? "default" : "ghost"}
                onClick={() => setActiveTab("dashboard")}
                className="smooth-transition"
              >
                Dashboard
              </Button>
              <Button
                variant={activeTab === "tournaments" ? "default" : "ghost"}
                onClick={() => setActiveTab("tournaments")}
                className="smooth-transition"
              >
                Tournaments
              </Button>
              <Button
                variant={activeTab === "teams" ? "default" : "ghost"}
                onClick={() => setActiveTab("teams")}
                className="smooth-transition"
              >
                Teams
              </Button>
              <Button
                variant={activeTab === "live" ? "default" : "ghost"}
                onClick={() => setActiveTab("live")}
                className="smooth-transition"
              >
                Live Match
              </Button>
            </nav>

            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowNotifications(!showNotifications)}
                className="relative"
              >
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>

              <Avatar className="h-8 w-8 cursor-pointer" onClick={logout}>
                <AvatarImage src={user?.avatar || "/placeholder.svg"} alt={user?.name} />
                <AvatarFallback>{user?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">{renderContent()}</main>

      {/* Notification Panel */}
      <NotificationPanel isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
    </div>
  )
}
