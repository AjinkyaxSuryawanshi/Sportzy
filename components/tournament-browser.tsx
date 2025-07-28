"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Trophy, Users, MapPin, Calendar, DollarSign, Filter, Star, Search } from "lucide-react"

export function TournamentBrowser() {
  const [selectedTournament, setSelectedTournament] = useState<any>(null)
  const [searchTerm, setSearchTerm] = useState("")

  const tournaments = [
    {
      id: 1,
      name: "Summer Basketball Championship",
      sport: "Basketball",
      format: "Knockout",
      prize: "$500",
      entryFee: "$25",
      status: "Registration Open",
      participants: 24,
      maxParticipants: 32,
      location: "Downtown Court",
      startDate: "2024-02-15",
      organizer: "City Sports Club",
      teams: [
        { id: 1, name: "Thunder Bolts", members: 8, captain: "Alex Johnson", rating: 4.8 },
        { id: 2, name: "Lightning", members: 7, captain: "Sarah Chen", rating: 4.6 },
        { id: 3, name: "Storm Hawks", members: 8, captain: "Mike Rodriguez", rating: 4.7 },
      ],
    },
    {
      id: 2,
      name: "Tennis Masters Cup",
      sport: "Tennis",
      format: "League",
      prize: "$300",
      entryFee: "$20",
      status: "Live",
      participants: 16,
      maxParticipants: 16,
      location: "Tennis Club",
      startDate: "2024-02-01",
      organizer: "Tennis Pro Academy",
      teams: [
        { id: 4, name: "Court Kings", members: 4, captain: "David Kim", rating: 4.9 },
        { id: 5, name: "Net Masters", members: 4, captain: "Lisa Park", rating: 4.5 },
      ],
    },
    {
      id: 3,
      name: "Football Championship",
      sport: "Football",
      format: "League",
      prize: "$400",
      entryFee: "$30",
      status: "Upcoming",
      participants: 22,
      maxParticipants: 24,
      location: "City Stadium",
      startDate: "2024-03-01",
      organizer: "Football Association",
      teams: [
        { id: 6, name: "City Strikers", members: 11, captain: "John Smith", rating: 4.7 },
        { id: 7, name: "Goal Hunters", members: 11, captain: "Emma Wilson", rating: 4.4 },
      ],
    },
  ]

  const filteredTournaments = tournaments.filter(
    (tournament) =>
      tournament.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tournament.sport.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold gradient-text mb-4">Tournament Browser</h1>
        <p className="text-slate-400 text-lg">Discover and join exciting tournaments</p>
      </div>

      {/* Search and Filters */}
      <Card className="glass neon-glow">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-4 w-4 text-primary" />
            <span className="font-medium">Search & Filters</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input
                placeholder="Search tournaments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-900 border-gray-700 focus:border-white text-white placeholder-gray-400"
              />
            </div>
            <Select>
              <SelectTrigger className="bg-gray-900 border-gray-700 text-white">
                <SelectValue placeholder="Sport" />
              </SelectTrigger>
              <SelectContent className="glass border-gray-700 bg-gray-900">
                <SelectItem value="all">All Sports</SelectItem>
                <SelectItem value="basketball">Basketball</SelectItem>
                <SelectItem value="football">Football</SelectItem>
                <SelectItem value="tennis">Tennis</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="bg-slate-800/50 border-slate-700">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent className="glass border-slate-700">
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Registration Open</SelectItem>
                <SelectItem value="live">Live</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="bg-slate-800/50 border-slate-700">
                <SelectValue placeholder="Entry Fee" />
              </SelectTrigger>
              <SelectContent className="glass border-slate-700">
                <SelectItem value="all">Any Fee</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tournament Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTournaments.map((tournament) => (
          <Card key={tournament.id} className="glass card-hover neon-glow cursor-pointer">
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
                  className="pulse-glow"
                >
                  {tournament.status}
                </Badge>
              </div>
              <CardDescription>
                {tournament.sport} • {tournament.format}
              </CardDescription>
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
                  <MapPin className="h-4 w-4 mr-2 text-red-500" />
                  <span className="truncate">{tournament.location}</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-slate-400">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{tournament.startDate}</span>
              </div>
              <div className="flex space-x-2">
                <Button
                  size="sm"
                  className="flex-1 btn-bounce bg-white text-black hover:bg-gray-200"
                  onClick={() => setSelectedTournament(tournament)}
                >
                  View Details
                </Button>
                {tournament.status === "Registration Open" && (
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                  >
                    Join
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tournament Details Modal */}
      {selectedTournament && (
        <Dialog open={!!selectedTournament} onOpenChange={() => setSelectedTournament(null)}>
          <DialogContent className="glass border-slate-700 max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="gradient-text text-2xl">{selectedTournament.name}</DialogTitle>
              <DialogDescription>
                {selectedTournament.sport} • {selectedTournament.format} • Organized by {selectedTournament.organizer}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6">
              {/* Tournament Info */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <Trophy className="h-6 w-6 text-yellow-500 mx-auto mb-2" />
                  <div className="font-semibold">{selectedTournament.prize}</div>
                  <div className="text-xs text-slate-400">Prize Pool</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <DollarSign className="h-6 w-6 text-green-500 mx-auto mb-2" />
                  <div className="font-semibold">{selectedTournament.entryFee}</div>
                  <div className="text-xs text-slate-400">Entry Fee</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <Users className="h-6 w-6 text-blue-500 mx-auto mb-2" />
                  <div className="font-semibold">
                    {selectedTournament.participants}/{selectedTournament.maxParticipants}
                  </div>
                  <div className="text-xs text-slate-400">Participants</div>
                </div>
                <div className="text-center p-4 bg-slate-800/30 rounded-lg">
                  <Calendar className="h-6 w-6 text-purple-500 mx-auto mb-2" />
                  <div className="font-semibold">{selectedTournament.startDate}</div>
                  <div className="text-xs text-slate-400">Start Date</div>
                </div>
              </div>

              {/* Registered Teams */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Registered Teams
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {selectedTournament.teams.map((team: any) => (
                    <Card key={team.id} className="bg-slate-800/30 border-slate-700 card-hover">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h4 className="font-semibold">{team.name}</h4>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-1" />
                            <span className="text-sm">{team.rating}</span>
                          </div>
                        </div>
                        <div className="text-sm text-slate-400 mb-2">Captain: {team.captain}</div>
                        <div className="text-sm text-slate-400">{team.members} members</div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4">
                <Button className="flex-1 btn-bounce bg-white text-black hover:bg-gray-200">Request to Join</Button>
                <Button variant="outline" className="border-slate-700 bg-transparent">
                  Share Tournament
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
