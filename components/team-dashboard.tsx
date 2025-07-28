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
import { Users, Plus, Crown, Star, Trophy, UserPlus, Settings, Mail } from "lucide-react"

export function TeamDashboard() {
  const [showCreateTeam, setShowCreateTeam] = useState(false)
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState<any>(null)

  const myTeams = [
    {
      id: 1,
      name: "Thunder Bolts",
      sport: "Basketball",
      role: "Captain",
      logo: "/placeholder.svg?height=60&width=60",
      members: [
        {
          id: 1,
          name: "Alex Johnson",
          role: "Captain",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4.8,
          status: "online",
        },
        {
          id: 2,
          name: "Sarah Chen",
          role: "Player",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4.6,
          status: "online",
        },
        {
          id: 3,
          name: "Mike Rodriguez",
          role: "Player",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4.7,
          status: "offline",
        },
        {
          id: 4,
          name: "Emma Wilson",
          role: "Player",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4.5,
          status: "online",
        },
      ],
      stats: { wins: 12, losses: 3, tournaments: 2, mvps: 8 },
      isOwner: true,
    },
    {
      id: 2,
      name: "Court Masters",
      sport: "Tennis",
      role: "Player",
      logo: "/placeholder.svg?height=60&width=60",
      members: [
        {
          id: 5,
          name: "David Kim",
          role: "Captain",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4.9,
          status: "online",
        },
        {
          id: 6,
          name: "Lisa Park",
          role: "Player",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4.4,
          status: "offline",
        },
        {
          id: 7,
          name: "Alex Johnson",
          role: "Player",
          avatar: "/placeholder.svg?height=40&width=40",
          rating: 4.8,
          status: "online",
        },
      ],
      stats: { wins: 6, losses: 2, tournaments: 1, mvps: 3 },
      isOwner: false,
    },
  ]

  const handleInvitePlayer = (team: any) => {
    setSelectedTeam(team)
    setShowInviteModal(true)
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl font-bold gradient-text mb-4">Team Dashboard</h1>
          <p className="text-slate-400 text-lg">Create and manage your sports teams</p>
        </div>
        <Dialog open={showCreateTeam} onOpenChange={setShowCreateTeam}>
          <DialogTrigger asChild>
            <Button className="mt-4 sm:mt-0 btn-bounce bg-white text-black hover:bg-gray-200">
              <Plus className="h-4 w-4 mr-2" />
              Create Team
            </Button>
          </DialogTrigger>
          <DialogContent className="glass border-slate-700 max-w-md">
            <DialogHeader>
              <DialogTitle className="gradient-text">Create New Team</DialogTitle>
              <DialogDescription>Set up your new sports team and start recruiting players</DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="team-name">Team Name</Label>
                <Input
                  id="team-name"
                  placeholder="Enter team name"
                  className="bg-gray-900 border-gray-700 focus:border-white text-white placeholder-gray-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="sport">Sport</Label>
                <Select>
                  <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                    <SelectValue placeholder="Select sport" />
                  </SelectTrigger>
                  <SelectContent className="glass border-gray-700 bg-gray-900">
                    <SelectItem value="basketball">Basketball</SelectItem>
                    <SelectItem value="football">Football</SelectItem>
                    <SelectItem value="tennis">Tennis</SelectItem>
                    <SelectItem value="volleyball">Volleyball</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="logo">Team Logo</Label>
                <Input
                  id="logo"
                  type="file"
                  accept="image/*"
                  className="bg-slate-800/50 border-slate-700 focus:border-primary"
                />
              </div>
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setShowCreateTeam(false)}>
                  Cancel
                </Button>
                <Button className="bg-white text-black hover:bg-gray-200" onClick={() => setShowCreateTeam(false)}>
                  Create Team
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {myTeams.map((team) => (
          <Card key={team.id} className="glass neon-glow card-hover">
            <CardHeader>
              <div className="flex items-center space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={team.logo || "/placeholder.svg"} alt={team.name} />
                  <AvatarFallback>
                    {team.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center">
                      {team.name}
                      {team.isOwner && <Crown className="h-4 w-4 ml-2 text-yellow-500" />}
                    </CardTitle>
                    <Badge variant={team.role === "Captain" ? "default" : "secondary"}>{team.role}</Badge>
                  </div>
                  <CardDescription className="mt-1">
                    {team.sport} • {team.members.length} members
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Team Stats */}
              <div className="grid grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <div className="text-lg font-bold text-green-400">{team.stats.wins}</div>
                  <div className="text-xs text-slate-400">Wins</div>
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <div className="text-lg font-bold text-red-400">{team.stats.losses}</div>
                  <div className="text-xs text-slate-400">Losses</div>
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <div className="text-lg font-bold text-primary">{team.stats.tournaments}</div>
                  <div className="text-xs text-slate-400">Tournaments</div>
                </div>
                <div className="p-3 bg-slate-800/30 rounded-lg">
                  <div className="text-lg font-bold text-yellow-400">{team.stats.mvps}</div>
                  <div className="text-xs text-slate-400">MVPs</div>
                </div>
              </div>

              {/* Team Members */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold flex items-center">
                    <Users className="h-4 w-4 mr-2" />
                    Team Roster
                  </h3>
                  {team.isOwner && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleInvitePlayer(team)}
                      className="border-white text-white hover:bg-white hover:text-black"
                    >
                      <UserPlus className="h-4 w-4 mr-1" />
                      Invite
                    </Button>
                  )}
                </div>
                <div className="space-y-3">
                  {team.members.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-3 bg-slate-800/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="relative">
                          <Avatar className="h-8 w-8">
                            <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                            <AvatarFallback>
                              {member.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div
                            className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-slate-800 ${
                              member.status === "online" ? "bg-green-500" : "bg-gray-400"
                            }`}
                          ></div>
                        </div>
                        <div>
                          <div className="font-medium text-sm">{member.name}</div>
                          <div className="flex items-center space-x-2">
                            <Badge variant={member.role === "Captain" ? "default" : "outline"} className="text-xs">
                              {member.role}
                            </Badge>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 text-yellow-500 mr-1" />
                              <span className="text-xs">{member.rating}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button variant="outline" className="flex-1 border-slate-700 hover:bg-slate-800 bg-transparent">
                  <Trophy className="h-4 w-4 mr-2" />
                  View Stats
                </Button>
                {team.isOwner ? (
                  <Button className="flex-1 bg-white text-black hover:bg-gray-200">
                    <Settings className="h-4 w-4 mr-2" />
                    Manage Team
                  </Button>
                ) : (
                  <Button variant="secondary" className="flex-1">
                    Leave Team
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Invite Player Modal */}
      <Dialog open={showInviteModal} onOpenChange={setShowInviteModal}>
        <DialogContent className="glass border-slate-700">
          <DialogHeader>
            <DialogTitle className="gradient-text">Invite Player to {selectedTeam?.name}</DialogTitle>
            <DialogDescription>Send an invitation to a player to join your team</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="player-search">Search Player</Label>
              <Input
                id="player-search"
                placeholder="Enter player name or email"
                className="bg-slate-800/50 border-slate-700 focus:border-primary"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Invitation Message</Label>
              <Input
                id="message"
                placeholder="Optional message to the player"
                className="bg-slate-800/50 border-slate-700 focus:border-primary"
              />
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowInviteModal(false)}>
                Cancel
              </Button>
              <Button className="bg-white text-black hover:bg-gray-200" onClick={() => setShowInviteModal(false)}>
                <Mail className="h-4 w-4 mr-2" />
                Send Invitation
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
