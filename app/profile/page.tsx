"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Edit, MapPin, Calendar, Trophy, Users } from "lucide-react"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)

  const userStats = {
    matchesPlayed: 47,
    wins: 32,
    mvps: 8,
    winRate: 68,
  }

  const teams = [
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
      name: "City Strikers",
      sport: "Football",
      role: "Player",
      members: 11,
      wins: 8,
      losses: 2,
    },
  ]

  const tournaments = [
    {
      id: 1,
      name: "Summer Basketball League",
      status: "Ongoing",
      position: "2nd Place",
      sport: "Basketball",
    },
    {
      id: 2,
      name: "Spring Tennis Cup",
      status: "Completed",
      position: "Winner",
      sport: "Tennis",
    },
    {
      id: 3,
      name: "Weekend Football Tournament",
      status: "Upcoming",
      position: "Registered",
      sport: "Football",
    },
  ]

  const achievements = [
    { name: "MVP Master", description: "Won MVP 5+ times", icon: "🏆" },
    { name: "Team Player", description: "Joined 3+ teams", icon: "👥" },
    { name: "Tournament Winner", description: "Won a tournament", icon: "🥇" },
    { name: "Consistent Player", description: "Played 25+ matches", icon: "⚡" },
  ]

  const matchHistory = [
    {
      id: 1,
      opponent: "Lakers",
      sport: "Basketball",
      result: "Win",
      score: "78-65",
      date: "2024-01-15",
      mvp: true,
    },
    {
      id: 2,
      opponent: "Warriors",
      sport: "Basketball",
      result: "Loss",
      score: "82-89",
      date: "2024-01-12",
      mvp: false,
    },
    {
      id: 3,
      opponent: "Celtics",
      sport: "Basketball",
      result: "Win",
      score: "91-76",
      date: "2024-01-10",
      mvp: true,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Profile Header */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Profile" />
              <AvatarFallback className="text-2xl">AJ</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold">Alex Johnson</h1>
                  <div className="flex items-center text-muted-foreground mt-1">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>New York, NY</span>
                    <div className="ml-4 flex items-center">
                      <div className="h-2 w-2 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-sm">Online</span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => setIsEditing(!isEditing)}
                  variant={isEditing ? "default" : "outline"}
                  className="mt-2 sm:mt-0"
                >
                  <Edit className="h-4 w-4 mr-2" />
                  {isEditing ? "Save Profile" : "Edit Profile"}
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">Basketball</Badge>
                <Badge variant="secondary">Tennis</Badge>
                <Badge variant="secondary">Football</Badge>
              </div>

              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Available: Weekday evenings, Weekends</span>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-primary">{userStats.matchesPlayed}</div>
              <div className="text-sm text-muted-foreground">Matches Played</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-green-600">{userStats.wins}</div>
              <div className="text-sm text-muted-foreground">Wins</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-yellow-600">{userStats.mvps}</div>
              <div className="text-sm text-muted-foreground">MVPs</div>
            </div>
            <div className="text-center p-4 bg-muted rounded-lg">
              <div className="text-2xl font-bold text-blue-600">{userStats.winRate}%</div>
              <div className="text-sm text-muted-foreground">Win Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Tabs defaultValue="teams" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="tournaments">Tournaments</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
        </TabsList>

        <TabsContent value="teams" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teams.map((team) => (
              <Card key={team.id}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2" />
                      {team.name}
                    </CardTitle>
                    <Badge variant={team.role === "Captain" ? "default" : "secondary"}>{team.role}</Badge>
                  </div>
                  <CardDescription>{team.sport}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Members: {team.members}</span>
                      <span>
                        Record: {team.wins}W - {team.losses}L
                      </span>
                    </div>
                    <Progress value={(team.wins / (team.wins + team.losses)) * 100} className="h-2" />
                    <div className="flex justify-between pt-2">
                      <Button size="sm" variant="outline">
                        View Team
                      </Button>
                      <Button size="sm">Manage</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="tournaments" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tournaments.map((tournament) => (
              <Card key={tournament.id}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2" />
                    {tournament.name}
                  </CardTitle>
                  <CardDescription>{tournament.sport}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Badge
                        variant={
                          tournament.status === "Ongoing"
                            ? "default"
                            : tournament.status === "Completed"
                              ? "secondary"
                              : "outline"
                        }
                      >
                        {tournament.status}
                      </Badge>
                      <span className="text-sm font-medium">{tournament.position}</span>
                    </div>
                    <Button size="sm" className="w-full">
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="achievements" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl">{achievement.icon}</div>
                    <div>
                      <h3 className="font-semibold">{achievement.name}</h3>
                      <p className="text-sm text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Match History */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Match History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {matchHistory.map((match) => (
                  <div key={match.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-3 h-3 rounded-full ${match.result === "Win" ? "bg-green-500" : "bg-red-500"}`}
                      ></div>
                      <div>
                        <div className="font-medium">vs {match.opponent}</div>
                        <div className="text-sm text-muted-foreground">
                          {match.sport} • {match.date}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium">{match.score}</div>
                      {match.mvp && (
                        <Badge variant="outline" className="text-xs">
                          MVP
                        </Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
