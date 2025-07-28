"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
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
import { Plus, Users, Trophy, UserPlus, Crown, Star } from "lucide-react"

export default function TeamsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [showInviteModal, setShowInviteModal] = useState(false)
  const [selectedTeam, setSelectedTeam] = useState<any>(null)

  const teams = [
    {
      id: 1,
      name: "Thunder Bolts",
      sport: "Basketball",
      logo: "/placeholder.svg?height=60&width=60",
      members: [
        { id: 1, name: "Alex Johnson", role: "Captain", avatar: "/placeholder.svg?height=40&width=40", rating: 4.8 },
        { id: 2, name: "Sarah Chen", role: "Player", avatar: "/placeholder.svg?height=40&width=40", rating: 4.6 },
        { id: 3, name: "Mike Rodriguez", role: "Player", avatar: "/placeholder.svg?height=40&width=40", rating: 4.7 },
        { id: 4, name: "Emma Wilson", role: "Player", avatar: "/placeholder.svg?height=40&width=40", rating: 4.5 },
      ],
      stats: { wins: 12, losses: 3, tournaments: 2 },
      isOwner: true,
    },
    {
      id: 2,
      name: "City Strikers",
      sport: "Football",
      logo: "/placeholder.svg?height=60&width=60",
      members: [
        { id: 5, name: "John Smith", role: "Captain", avatar: "/placeholder.svg?height=40&width=40", rating: 4.9 },
        { id: 6, name: "Lisa Park", role: "Player", avatar: "/placeholder.svg?height=40&width=40", rating: 4.4 },
        { id: 7, name: "David Kim", role: "Player", avatar: "/placeholder.svg?height=40&width=40", rating: 4.6 },
        { id: 8, name: "Alex Johnson", role: "Player", avatar: "/placeholder.svg?height=40&width=40", rating: 4.8 },
      ],
      stats: { wins: 8, losses: 2, tournaments: 1 },
      isOwner: false,
    },
  ]

  const handleInvitePlayer = (team: any) => {
    setSelectedTeam(team)
    setShowInviteModal(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Team Management</h1>
          <p className="text-muted-foreground">Create and manage your sports teams</p>
        </div>
        <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
          <DialogTrigger asChild>
            <Button className="mt-4 sm:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              Create Team
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create New Team</DialogTitle>
              <DialogDescription>Set up your new sports team and start recruiting players.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="team-name">Team Name</Label>
                <Input id="team-name" placeholder="Enter team name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sport">Sport</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basketball">Basketball</SelectItem>
                    <SelectItem value="football">Football</SelectItem>
                    <SelectItem value="tennis">Tennis</SelectItem>
                    <SelectItem value="volleyball">Volleyball</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="logo">Team Logo</Label>
                <Input id="logo" type="file" accept="image/*" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" placeholder="Brief team description" />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowCreateForm(false)}>Create Team</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {teams.map((team) => (
          <Card key={team.id} className="overflow-hidden">
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
                    <Badge variant="secondary">{team.sport}</Badge>
                  </div>
                  <CardDescription className="mt-1">
                    {team.members.length} members • {team.stats.wins}W - {team.stats.losses}L
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Team Stats */}
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{team.stats.wins}</div>
                  <div className="text-xs text-muted-foreground">Wins</div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-red-600">{team.stats.losses}</div>
                  <div className="text-xs text-muted-foreground">Losses</div>
                </div>
                <div className="p-3 bg-muted rounded-lg">
                  <div className="text-2xl font-bold text-primary">{team.stats.tournaments}</div>
                  <div className="text-xs text-muted-foreground">Tournaments</div>
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
                    <Button size="sm" variant="outline" onClick={() => handleInvitePlayer(team)}>
                      <UserPlus className="h-4 w-4 mr-1" />
                      Invite
                    </Button>
                  )}
                </div>
                <div className="space-y-3">
                  {team.members.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                          <AvatarFallback>
                            {member.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
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
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Trophy className="h-4 w-4 mr-2" />
                  View Stats
                </Button>
                {team.isOwner ? (
                  <Button className="flex-1">Manage Team</Button>
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
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Invite Player to {selectedTeam?.name}</DialogTitle>
            <DialogDescription>Send an invitation to a player to join your team.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="player-search">Search Player</Label>
              <Input id="player-search" placeholder="Enter player name or email" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="message">Invitation Message</Label>
              <Input id="message" placeholder="Optional message to the player" />
            </div>
          </div>
          <div className="flex justify-end space-x-2">
            <Button variant="outline" onClick={() => setShowInviteModal(false)}>
              Cancel
            </Button>
            <Button onClick={() => setShowInviteModal(false)}>Send Invitation</Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
