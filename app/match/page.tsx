"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Play, Pause, RotateCcw, Trophy, MessageCircle, Star, Clock } from "lucide-react"

export default function MatchPage() {
  const [isLive, setIsLive] = useState(true)
  const [matchTime, setMatchTime] = useState(1245) // seconds
  const [homeScore, setHomeScore] = useState(78)
  const [awayScore, setAwayScore] = useState(65)
  const [quarter, setQuarter] = useState(3)

  // Simulate live updates
  useEffect(() => {
    if (isLive) {
      const interval = setInterval(() => {
        setMatchTime((prev) => prev + 1)
        // Randomly update scores
        if (Math.random() > 0.95) {
          if (Math.random() > 0.5) {
            setHomeScore((prev) => prev + (Math.random() > 0.7 ? 3 : 2))
          } else {
            setAwayScore((prev) => prev + (Math.random() > 0.7 ? 3 : 2))
          }
        }
      }, 1000)
      return () => clearInterval(interval)
    }
  }, [isLive])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const playerStats = [
    {
      name: "Alex Johnson",
      team: "Thunder Bolts",
      points: 24,
      rebounds: 8,
      assists: 6,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Mike Rodriguez",
      team: "Thunder Bolts",
      points: 18,
      rebounds: 5,
      assists: 4,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "Sarah Chen",
      team: "Lightning",
      points: 22,
      rebounds: 6,
      assists: 7,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      name: "David Kim",
      team: "Lightning",
      points: 16,
      rebounds: 9,
      assists: 3,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const comments = [
    {
      id: 1,
      user: "SportsFan23",
      message: "Great game so far! Thunder Bolts looking strong",
      time: "2 min ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 2,
      user: "BasketballPro",
      message: "Alex Johnson is on fire! 🔥",
      time: "5 min ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 3,
      user: "CoachMike",
      message: "Lightning needs to step up their defense",
      time: "8 min ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    {
      id: 4,
      user: "GameWatcher",
      message: "This is going to be a close one!",
      time: "12 min ago",
      avatar: "/placeholder.svg?height=32&width=32",
    },
  ]

  const mvpCandidates = [
    {
      name: "Alex Johnson",
      team: "Thunder Bolts",
      votes: 45,
      percentage: 60,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    { name: "Sarah Chen", team: "Lightning", votes: 23, percentage: 31, avatar: "/placeholder.svg?height=40&width=40" },
    {
      name: "Mike Rodriguez",
      team: "Thunder Bolts",
      votes: 7,
      percentage: 9,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Live Match Header */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              {isLive && <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>}
              <Badge variant={isLive ? "destructive" : "secondary"}>{isLive ? "LIVE" : "FINISHED"}</Badge>
              <span className="text-sm text-muted-foreground">Quarter {quarter}</span>
            </div>
            <h1 className="text-2xl font-bold mb-4">Summer Basketball League</h1>
          </div>

          {/* Scoreboard */}
          <div className="grid grid-cols-3 gap-8 items-center mb-6">
            {/* Home Team */}
            <div className="text-center">
              <div className="mb-2">
                <Avatar className="h-16 w-16 mx-auto mb-2">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Thunder Bolts" />
                  <AvatarFallback>TB</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">Thunder Bolts</h2>
              </div>
              <div className="text-4xl font-bold text-primary">{homeScore}</div>
            </div>

            {/* Match Info */}
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">{formatTime(matchTime)}</div>
              <div className="flex justify-center space-x-2 mb-4">
                <Button size="sm" variant={isLive ? "default" : "outline"} onClick={() => setIsLive(!isLive)}>
                  {isLive ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                </Button>
                <Button size="sm" variant="outline">
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
              <div className="text-sm text-muted-foreground">Downtown Court • Live Updates</div>
            </div>

            {/* Away Team */}
            <div className="text-center">
              <div className="mb-2">
                <Avatar className="h-16 w-16 mx-auto mb-2">
                  <AvatarImage src="/placeholder.svg?height=64&width=64" alt="Lightning" />
                  <AvatarFallback>LT</AvatarFallback>
                </Avatar>
                <h2 className="text-xl font-bold">Lightning</h2>
              </div>
              <div className="text-4xl font-bold text-primary">{awayScore}</div>
            </div>
          </div>

          {/* Quarter Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Quarter {quarter} Progress</span>
              <span>{formatTime(matchTime % 720)}/12:00</span>
            </div>
            <Progress value={((matchTime % 720) / 720) * 100} className="h-2" />
          </div>
        </CardContent>
      </Card>

      {/* Match Details Tabs */}
      <Tabs defaultValue="scorecard" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="scorecard">Scorecard</TabsTrigger>
          <TabsTrigger value="stats">Player Stats</TabsTrigger>
          <TabsTrigger value="comments">Comments</TabsTrigger>
        </TabsList>

        <TabsContent value="scorecard" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Quarter by Quarter */}
            <Card>
              <CardHeader>
                <CardTitle>Quarter by Quarter</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-5 gap-2 text-sm font-medium">
                    <div>Team</div>
                    <div className="text-center">Q1</div>
                    <div className="text-center">Q2</div>
                    <div className="text-center">Q3</div>
                    <div className="text-center">Total</div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 text-sm">
                    <div className="font-medium">Thunder Bolts</div>
                    <div className="text-center">22</div>
                    <div className="text-center">18</div>
                    <div className="text-center">38</div>
                    <div className="text-center font-bold">{homeScore}</div>
                  </div>
                  <div className="grid grid-cols-5 gap-2 text-sm">
                    <div className="font-medium">Lightning</div>
                    <div className="text-center">20</div>
                    <div className="text-center">24</div>
                    <div className="text-center">21</div>
                    <div className="text-center font-bold">{awayScore}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Team Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Field Goal %</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">52%</span>
                      <div className="w-20 h-2 bg-muted rounded">
                        <div className="w-[52%] h-full bg-primary rounded"></div>
                      </div>
                      <span className="text-sm">48%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">3-Point %</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">38%</span>
                      <div className="w-20 h-2 bg-muted rounded">
                        <div className="w-[38%] h-full bg-primary rounded"></div>
                      </div>
                      <span className="text-sm">35%</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Rebounds</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">32</span>
                      <div className="w-20 h-2 bg-muted rounded">
                        <div className="w-[55%] h-full bg-primary rounded"></div>
                      </div>
                      <span className="text-sm">26</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Assists</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">18</span>
                      <div className="w-20 h-2 bg-muted rounded">
                        <div className="w-[45%] h-full bg-primary rounded"></div>
                      </div>
                      <span className="text-sm">22</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* MVP Voting */}
          {!isLive && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2 h-5 w-5 text-yellow-500" />
                  MVP Voting
                </CardTitle>
                <CardDescription>Vote for the Most Valuable Player of this match</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mvpCandidates.map((candidate, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={candidate.avatar || "/placeholder.svg"} alt={candidate.name} />
                          <AvatarFallback>
                            {candidate.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{candidate.name}</div>
                          <div className="text-sm text-muted-foreground">{candidate.team}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <div className="text-sm font-medium">{candidate.percentage}%</div>
                          <div className="text-xs text-muted-foreground">{candidate.votes} votes</div>
                        </div>
                        <Button size="sm">
                          <Star className="h-4 w-4 mr-1" />
                          Vote
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="stats" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Player Statistics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {playerStats.map((player, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarImage src={player.avatar || "/placeholder.svg"} alt={player.name} />
                        <AvatarFallback>
                          {player.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{player.name}</div>
                        <div className="text-sm text-muted-foreground">{player.team}</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 text-center">
                      <div>
                        <div className="text-lg font-bold">{player.points}</div>
                        <div className="text-xs text-muted-foreground">PTS</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">{player.rebounds}</div>
                        <div className="text-xs text-muted-foreground">REB</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold">{player.assists}</div>
                        <div className="text-xs text-muted-foreground">AST</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comments" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5" />
                Live Comments
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="You" />
                  <AvatarFallback>You</AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-2">
                  <Textarea placeholder="Share your thoughts about the match..." className="min-h-[80px]" />
                  <Button size="sm">Post Comment</Button>
                </div>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {comments.map((comment) => (
                  <div key={comment.id} className="flex space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={comment.avatar || "/placeholder.svg"} alt={comment.user} />
                      <AvatarFallback>{comment.user[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-medium text-sm">{comment.user}</span>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {comment.time}
                        </span>
                      </div>
                      <p className="text-sm">{comment.message}</p>
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
