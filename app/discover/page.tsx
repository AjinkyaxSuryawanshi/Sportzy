"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { MapPin, Star, Users, Clock, Zap, Search, Filter } from "lucide-react"

export default function DiscoverPage() {
  const [skillLevel, setSkillLevel] = useState([3])
  const [distance, setDistance] = useState([5])

  const nearbyPlayers = [
    {
      id: 1,
      name: "Alex Johnson",
      sport: "Basketball",
      skillLevel: "Intermediate",
      rating: 4.8,
      distance: "0.5 miles",
      availability: "Available now",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "online",
    },
    {
      id: 2,
      name: "Sarah Chen",
      sport: "Tennis",
      skillLevel: "Advanced",
      rating: 4.9,
      distance: "1.2 miles",
      availability: "Available in 2 hours",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "online",
    },
    {
      id: 3,
      name: "Mike Rodriguez",
      sport: "Football",
      skillLevel: "Beginner",
      rating: 4.6,
      distance: "2.1 miles",
      availability: "Available tomorrow",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "offline",
    },
    {
      id: 4,
      name: "Emma Wilson",
      sport: "Volleyball",
      skillLevel: "Intermediate",
      rating: 4.7,
      distance: "1.8 miles",
      availability: "Available weekends",
      avatar: "/placeholder.svg?height=60&width=60",
      status: "online",
    },
  ]

  const aiSuggestions = [
    {
      id: 1,
      type: "Perfect Match",
      player: "David Kim",
      sport: "Basketball",
      reason: "Similar skill level and preferred playing times",
      compatibility: 95,
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 2,
      type: "Skill Complement",
      player: "Lisa Park",
      sport: "Tennis",
      reason: "Great doubles partner based on playing style",
      compatibility: 88,
      avatar: "/placeholder.svg?height=50&width=50",
    },
    {
      id: 3,
      type: "Learning Opportunity",
      player: "John Smith",
      sport: "Football",
      reason: "Experienced player who can help improve your game",
      compatibility: 82,
      avatar: "/placeholder.svg?height=50&width=50",
    },
  ]

  const grounds = [
    {
      id: 1,
      name: "Central Sports Complex",
      sports: ["Basketball", "Tennis", "Volleyball"],
      distance: "0.8 miles",
      rating: 4.5,
      priceRange: "$15-25/hour",
      availability: "Available",
    },
    {
      id: 2,
      name: "Downtown Courts",
      sports: ["Basketball", "Football"],
      distance: "1.5 miles",
      rating: 4.2,
      priceRange: "$10-20/hour",
      availability: "Busy",
    },
    {
      id: 3,
      name: "Tennis Pro Academy",
      sports: ["Tennis"],
      distance: "2.3 miles",
      rating: 4.8,
      priceRange: "$25-35/hour",
      availability: "Available",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Discover & Matchmaking</h1>
        <p className="text-muted-foreground">Find players and venues near you</p>
      </div>

      {/* Search and Filters */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Search className="h-4 w-4" />
              <span className="font-medium">Search & Filters</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Sport</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select sport" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sports</SelectItem>
                    <SelectItem value="basketball">Basketball</SelectItem>
                    <SelectItem value="football">Football</SelectItem>
                    <SelectItem value="tennis">Tennis</SelectItem>
                    <SelectItem value="volleyball">Volleyball</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Availability</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="When to play" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="now">Available now</SelectItem>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                    <SelectItem value="weekend">This weekend</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <Input placeholder="Enter location or zip code" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Skill Level: {skillLevel[0]}/5</label>
                <Slider value={skillLevel} onValueChange={setSkillLevel} max={5} min={1} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>Beginner</span>
                  <span>Expert</span>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Distance: {distance[0]} miles</label>
                <Slider value={distance} onValueChange={setDistance} max={25} min={1} step={1} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 mile</span>
                  <span>25+ miles</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Nearby Players */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center">
              <Users className="mr-3 h-6 w-6 text-primary" />
              Nearby Players
            </h2>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {nearbyPlayers.map((player) => (
              <Card key={player.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                        <AvatarFallback>
                          {player.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background ${
                          player.status === "online" ? "bg-green-500" : "bg-gray-400"
                        }`}
                      ></div>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold truncate">{player.name}</h3>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{player.rating}</span>
                        </div>
                      </div>

                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Badge variant="outline" className="mr-2">
                            {player.sport}
                          </Badge>
                          <Badge variant="secondary">{player.skillLevel}</Badge>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-3 w-3 mr-1" />
                          <span>{player.distance}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          <span>{player.availability}</span>
                        </div>
                      </div>

                      <div className="flex space-x-2 mt-4">
                        <Button size="sm" className="flex-1">
                          Quick Connect
                        </Button>
                        <Button size="sm" variant="outline">
                          View Profile
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Available Grounds */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold flex items-center mb-6">
              <MapPin className="mr-3 h-6 w-6 text-primary" />
              Available Grounds
            </h2>

            <div className="space-y-4">
              {grounds.map((ground) => (
                <Card key={ground.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold">{ground.name}</h3>
                          <Badge variant={ground.availability === "Available" ? "secondary" : "outline"}>
                            {ground.availability}
                          </Badge>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-2">
                          {ground.sports.map((sport) => (
                            <Badge key={sport} variant="outline" className="text-xs">
                              {sport}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between text-sm text-muted-foreground">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center">
                              <MapPin className="h-3 w-3 mr-1" />
                              <span>{ground.distance}</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-3 w-3 mr-1" />
                              <span>{ground.rating}</span>
                            </div>
                          </div>
                          <span className="font-medium">{ground.priceRange}</span>
                        </div>
                      </div>

                      <Button size="sm" className="ml-4">
                        Book Ground
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* AI Match Suggestions Sidebar */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-5 w-5 text-primary" />
                AI Match Suggestions
              </CardTitle>
              <CardDescription>Smart recommendations based on your preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {aiSuggestions.map((suggestion) => (
                <div key={suggestion.id} className="p-4 border rounded-lg">
                  <div className="flex items-start space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={suggestion.avatar || "/placeholder.svg"} alt={suggestion.player} />
                      <AvatarFallback>
                        {suggestion.player
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="font-medium text-sm">{suggestion.player}</h4>
                        <Badge variant="outline" className="text-xs">
                          {suggestion.compatibility}%
                        </Badge>
                      </div>

                      <Badge variant="secondary" className="text-xs mb-2">
                        {suggestion.type}
                      </Badge>

                      <p className="text-xs text-muted-foreground mb-3">{suggestion.reason}</p>

                      <Button size="sm" className="w-full text-xs">
                        Connect Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <Button variant="outline" className="w-full bg-transparent">
                View More Suggestions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
