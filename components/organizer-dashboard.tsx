"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useAuth } from "@/components/auth-provider"
import { NotificationPanel } from "@/components/notification-panel"
import { Trophy, Users, Calendar, Bell, Plus, Settings, BarChart3, DollarSign } from "lucide-react"

export function OrganizerDashboard() {
  const { user, logout } = useAuth()
  const [showNotifications, setShowNotifications] = useState(false)
  const [showCreateTournament, setShowCreateTournament] = useState(false)

  const organizerStats = {
    tournamentsCreated: 12,
    totalParticipants: 248,
    activeEvents: 3,
    revenue: 2450,
  }

  const myTournaments = [
    {
      id: 1,
      name: "Summer Basketball Championship",
      sport: "Basketball",
      status: "Live",
      participants: 32,
      maxParticipants: 32,
      startDate: "2024-02-01",
      prize: "$500",
      entryFee: "$25",
    },
    {
      id: 2,
      name: "Tennis Masters Cup",
      sport: "Tennis",
      status: "Registration Open",
      participants: 18,
      maxParticipants: 24,
      startDate: "2024-02-15",
      prize: "$300",
      entryFee: "$20",
    },
    {
      id: 3,
      name: "Football League",
      sport: "Football",
      status: "Upcoming",
      participants: 16,
      maxParticipants: 16,
      startDate: "2024-03-01",
      prize: "$400",
      entryFee: "$30",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-40 glass border-b border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Trophy className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold gradient-text">Sportzy Organizer</h1>
            </div>

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
      <main className="container mx-auto px-4 py-8 space-y-8">
        {/* Welcome Section */}
        <div className="text-center py-8">
          <h1 className="text-4xl font-bold gradient-text mb-4">Welcome back, {user?.name}!</h1>
          <p className="text-slate-400 text-lg">Manage your tournaments and build the sports community</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="glass card-hover">
            <CardContent className="p-6 text-center">
              <Trophy className="h-8 w-8 text-white mx-auto mb-2" />
              <div className="text-2xl font-bold text-white">{organizerStats.tournamentsCreated}</div>
              <div className="text-sm text-gray-400">Tournaments Created</div>
            </CardContent>
          </Card>
          <Card className="glass card-hover">
            <CardContent className="p-6 text-center">
              <Users className="h-8 w-8 text-green-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-green-400">{organizerStats.totalParticipants}</div>
              <div className="text-sm text-gray-400">Total Participants</div>
            </CardContent>
          </Card>
          <Card className="glass card-hover">
            <CardContent className="p-6 text-center">
              <Calendar className="h-8 w-8 text-yellow-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-yellow-400">{organizerStats.activeEvents}</div>
              <div className="text-sm text-gray-400">Active Events</div>
            </CardContent>
          </Card>
          <Card className="glass card-hover">
            <CardContent className="p-6 text-center">
              <DollarSign className="h-8 w-8 text-blue-400 mx-auto mb-2" />
              <div className="text-2xl font-bold text-blue-400">${organizerStats.revenue}</div>
              <div className="text-sm text-gray-400">Revenue</div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Dialog open={showCreateTournament} onOpenChange={setShowCreateTournament}>
            <DialogTrigger asChild>
              <Button className="btn-bounce bg-white text-black hover:bg-gray-200">
                <Plus className="h-4 w-4 mr-2" />
                Create Tournament
              </Button>
            </DialogTrigger>
            <DialogContent className="glass border-slate-700 max-w-md">
              <DialogHeader>
                <DialogTitle className="gradient-text">Create New Tournament</DialogTitle>
                <DialogDescription>Set up a new tournament for your community</DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="tournament-name">Tournament Name</Label>
                  <Input
                    id="tournament-name"
                    placeholder="Enter tournament name"
                    className="bg-slate-800/50 border-slate-700 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sport">Sport</Label>
                  <Select>
                    <SelectTrigger className="bg-slate-800/50 border-slate-700">
                      <SelectValue placeholder="Select sport" />
                    </SelectTrigger>
                    <SelectContent className="glass border-slate-700">
                      <SelectItem value="basketball">Basketball</SelectItem>
                      <SelectItem value="football">Football</SelectItem>
                      <SelectItem value="tennis">Tennis</SelectItem>
                      <SelectItem value="volleyball">Volleyball</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="entry-fee">Entry Fee</Label>
                    <Input
                      id="entry-fee"
                      placeholder="$0"
                      className="bg-slate-800/50 border-slate-700 focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="prize">Prize Pool</Label>
                    <Input
                      id="prize"
                      placeholder="$0"
                      className="bg-slate-800/50 border-slate-700 focus:border-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Location</Label>
                  <Input
                    id="location"
                    placeholder="Tournament venue"
                    className="bg-slate-800/50 border-slate-700 focus:border-primary"
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setShowCreateTournament(false)}>
                    Cancel
                  </Button>
                  <Button
                    className="bg-white text-black hover:bg-gray-200"
                    onClick={() => setShowCreateTournament(false)}
                  >
                    Create Tournament
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Button variant="outline" className="border-slate-700 hover:bg-slate-800 bg-transparent">
            <BarChart3 className="h-4 w-4 mr-2" />
            View Analytics
          </Button>
        </div>

        {/* My Tournaments */}
        <Card className="glass neon-glow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Trophy className="mr-2 h-5 w-5 text-primary" />
              My Tournaments
            </CardTitle>
            <CardDescription>Manage your created tournaments</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {myTournaments.map((tournament) => (
                <Card key={tournament.id} className="card-hover bg-slate-800/30 border-slate-700">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{tournament.name}</CardTitle>
                      <Badge
                        variant={
                          tournament.status === "Live"
                            ? "default"
                            : tournament.status === "Registration Open"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {tournament.status}
                      </Badge>
                    </div>
                    <CardDescription>{tournament.sport}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center">
                        <Trophy className="h-4 w-4 mr-2 text-yellow-500" />
                        <span>{tournament.prize}</span>
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-4 w-4 mr-2 text-green-500" />
                        <span>{tournament.entryFee}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-blue-500" />
                        <span>
                          {tournament.participants}/{tournament.maxParticipants}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                        <span>{tournament.startDate}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <Settings className="h-4 w-4 mr-1" />
                        Manage
                      </Button>
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="glass neon-glow">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BarChart3 className="mr-2 h-5 w-5 text-primary" />
              Recent Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 bg-slate-800/30 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">New team registered for Summer Basketball Championship</p>
                  <p className="text-xs text-slate-400">2 minutes ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-slate-800/30 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">Tennis Masters Cup registration deadline approaching</p>
                  <p className="text-xs text-slate-400">1 hour ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 p-3 bg-slate-800/30 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm">Match result updated for Football League</p>
                  <p className="text-xs text-slate-400">3 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>

      {/* Notification Panel */}
      <NotificationPanel isOpen={showNotifications} onClose={() => setShowNotifications(false)} />
    </div>
  )
}
