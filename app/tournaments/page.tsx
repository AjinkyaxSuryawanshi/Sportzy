"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Trophy, Users, MapPin, Calendar, DollarSign, Plus, Filter } from "lucide-react"

export default function TournamentsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [selectedTournament, setSelectedTournament] = useState<any>(null)

  const tournaments = [
    {
      id: 1,
      name: "Summer Basketball League",
      sport: "Basketball",
      format: "League",
      prize: "$500",
      entryFee: "$25",
      status: "Live",
      participants: 24,
      maxParticipants: 32,
      location: "Downtown Court",
      startDate: "2024-02-01",
      endDate: "2024-03-15",
      organizer: "City Sports Club",
    },
    {
      id: 2,
      name: "Weekend Football Cup",
      sport: "Football",
      format: "Knockout",
      prize: "$300",
      entryFee: "$15",
      status: "Registration Open",
      participants: 16,
      maxParticipants: 16,
      location: "City Stadium",
      startDate: "2024-02-10",
      endDate: "2024-02-11",
      organizer: "Football Association",
    },
    {
      id: 3,
      name: "Tennis Championship",
      sport: "Tennis",
      format: "Knockout",
      prize: "$200",
      entryFee: "$20",
      status: "Starting Soon",
      participants: 32,
      maxParticipants: 32,
      location: "Tennis Club",
      startDate: "2024-02-05",
      endDate: "2024-02-07",
      organizer: "Tennis Pro Academy",
    },
    {
      id: 4,
      name: "Volleyball Tournament",
      sport: "Volleyball",
      format: "League",
      prize: "$400",
      entryFee: "$30",
      status: "Upcoming",
      participants: 8,
      maxParticipants: 12,
      location: "Sports Complex",
      startDate: "2024-02-20",
      endDate: "2024-03-05",
      organizer: "Volleyball Club",
    },
  ]

  const fixtures = [
    { id: 1, team1: "Thunder Bolts", team2: "Lightning", time: "10:00 AM", court: "Court 1", status: "Live" },
    { id: 2, team1: "Warriors", team2: "Spartans", time: "11:30 AM", court: "Court 2", status: "Upcoming" },
    { id: 3, team1: "Eagles", team2: "Hawks", time: "1:00 PM", court: "Court 1", status: "Upcoming" },
    { id: 4, team1: "Lions", team2: "Tigers", time: "2:30 PM", court: "Court 2", status: "Upcoming" },
  ]

  const leaderboard = [
    { position: 1, team: "Thunder Bolts", played: 5, won: 5, lost: 0, points: 15 },
    { position: 2, team: "Lightning", played: 5, won: 4, lost: 1, points: 12 },
    { position: 3, team: "Warriors", played: 5, won: 3, lost: 2, points: 9 },
    { position: 4, team: "Spartans", played: 5, won: 2, lost: 3, points: 6 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Tournaments</h1>
          <p className="text-muted-foreground">Discover and join sports tournaments in your area</p>
        </div>
        <Dialog open={showCreateForm} onOpenChange={setShowCreateForm}>
          <DialogTrigger asChild>
            <Button className="mt-4 sm:mt-0">
              <Plus className="h-4 w-4 mr-2" />
              Create Tournament
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Create New Tournament</DialogTitle>
              <DialogDescription>Set up a new tournament and start accepting registrations.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto">
              <div className="grid gap-2">
                <Label htmlFor="tournament-name">Tournament Name</Label>
                <Input id="tournament-name" placeholder="Enter tournament name" />
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
                <Label htmlFor="format">Format</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="knockout">Knockout</SelectItem>
                    <SelectItem value="league">League</SelectItem>
                    <SelectItem value="round-robin">Round Robin</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="entry-fee">Entry Fee</Label>
                  <Input id="entry-fee" placeholder="$0" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="prize">Prize Pool</Label>
                  <Input id="prize" placeholder="$0" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input id="location" placeholder="Tournament venue" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input id="start-date" type="date" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="end-date">End Date</Label>
                  <Input id="end-date" type="date" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="max-participants">Max Participants</Label>
                <Input id="max-participants" type="number" placeholder="32" />
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
              <Button onClick={() => setShowCreateForm(false)}>Create Tournament</Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-4 w-4" />
            <span className="font-medium">Filters</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sport" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sports</SelectItem>
                <SelectItem value="basketball">Basketball</SelectItem>
                <SelectItem value="football">Football</SelectItem>
                <SelectItem value="tennis">Tennis</SelectItem>
                <SelectItem value="volleyball">Volleyball</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Registration Open</SelectItem>
                <SelectItem value="live">Live</SelectItem>
                <SelectItem value="upcoming">Upcoming</SelectItem>
              </SelectContent>
            </Select>
            <Input placeholder="Location" />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Entry Fee" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Any Fee</SelectItem>
                <SelectItem value="free">Free</SelectItem>
                <SelectItem value="paid">Paid</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Tournament List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {tournaments.map((tournament) => (
          <Card key={tournament.id} className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{tournament.name}</CardTitle>
                <Badge
                  variant={
                    tournament.status === "Live"
                      ? "default"
                      : tournament.status === "Registration Open"
                        ? "secondary"
                        : tournament.status === "Starting Soon"
                          ? "destructive"
                          : "outline"
                  }
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
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>
                  {tournament.startDate} - {tournament.endDate}
                </span>
              </div>
              <div className="flex space-x-2">
                <Button size="sm" className="flex-1" onClick={() => setSelectedTournament(tournament)}>
                  View Details
                </Button>
                {tournament.status === "Registration Open" && (
                  <Button size="sm" variant="outline">
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
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>{selectedTournament.name}</DialogTitle>
              <DialogDescription>
                {selectedTournament.sport} • {selectedTournament.format} • Organized by {selectedTournament.organizer}
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="fixtures">Fixtures</TabsTrigger>
                <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold">Tournament Details</h4>
                    <div className="text-sm space-y-1">
                      <div>Prize Pool: {selectedTournament.prize}</div>
                      <div>Entry Fee: {selectedTournament.entryFee}</div>
                      <div>
                        Participants: {selectedTournament.participants}/{selectedTournament.maxParticipants}
                      </div>
                      <div>Location: {selectedTournament.location}</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold">Schedule</h4>
                    <div className="text-sm space-y-1">
                      <div>Start: {selectedTournament.startDate}</div>
                      <div>End: {selectedTournament.endDate}</div>
                      <div>Format: {selectedTournament.format}</div>
                      <div>Status: {selectedTournament.status}</div>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button className="flex-1">Join Tournament</Button>
                  <Button variant="outline">Share</Button>
                </div>
              </TabsContent>
              <TabsContent value="fixtures" className="space-y-4">
                <div className="space-y-2">
                  {fixtures.map((fixture) => (
                    <div key={fixture.id} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <Badge variant={fixture.status === "Live" ? "default" : "outline"}>{fixture.status}</Badge>
                        <span className="font-medium">
                          {fixture.team1} vs {fixture.team2}
                        </span>
                      </div>
                      <div className="text-right text-sm">
                        <div>{fixture.time}</div>
                        <div className="text-muted-foreground">{fixture.court}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="leaderboard" className="space-y-4">
                <div className="space-y-2">
                  {leaderboard.map((team) => (
                    <div key={team.position} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                          {team.position}
                        </div>
                        <span className="font-medium">{team.team}</span>
                      </div>
                      <div className="text-right text-sm">
                        <div className="font-medium">{team.points} pts</div>
                        <div className="text-muted-foreground">
                          {team.won}W - {team.lost}L
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
