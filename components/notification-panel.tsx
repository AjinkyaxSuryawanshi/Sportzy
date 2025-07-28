"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Bell, Trophy, Users, MessageCircle, Calendar, X, Check } from "lucide-react"

interface NotificationPanelProps {
  isOpen: boolean
  onClose: () => void
}

export function NotificationPanel({ isOpen, onClose }: NotificationPanelProps) {
  const notifications = [
    {
      id: 1,
      type: "match_invite",
      title: "Match Invitation",
      message: "Alex Johnson invited you to a basketball match",
      time: "5 min ago",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40",
      icon: Trophy,
      color: "text-yellow-500",
    },
    {
      id: 2,
      type: "tournament_update",
      title: "Tournament Update",
      message: "Summer Basketball League: Quarter-finals start tomorrow",
      time: "1 hour ago",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40",
      icon: Trophy,
      color: "text-primary",
    },
    {
      id: 3,
      type: "team_invite",
      title: "Team Invitation",
      message: "Sarah Chen invited you to join City Strikers",
      time: "2 hours ago",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
      icon: Users,
      color: "text-blue-500",
    },
    {
      id: 4,
      type: "chat_message",
      title: "New Message",
      message: "Mike Rodriguez: Great game today! 🏀",
      time: "3 hours ago",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
      icon: MessageCircle,
      color: "text-green-500",
    },
    {
      id: 5,
      type: "reminder",
      title: "Match Reminder",
      message: "Your match against Lightning starts in 30 minutes",
      time: "1 day ago",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
      icon: Calendar,
      color: "text-red-500",
    },
  ]

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:inset-auto lg:top-16 lg:right-4 lg:w-96">
      {/* Mobile Overlay */}
      <div className="lg:hidden fixed inset-0 bg-black/50" onClick={onClose} />

      {/* Panel */}
      <Card className="glass neon-glow h-full lg:h-auto lg:max-h-[80vh] border-slate-700 lg:mt-2">
        <CardHeader className="border-b border-slate-700">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center">
              <Bell className="h-5 w-5 mr-2 text-white" />
              Notifications
            </CardTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription>Stay updated with your sports activities</CardDescription>
        </CardHeader>

        <CardContent className="p-0">
          <ScrollArea className="h-full lg:h-96">
            <div className="p-4 space-y-1">
              {notifications.map((notification) => {
                const IconComponent = notification.icon
                return (
                  <div
                    key={notification.id}
                    className={`p-4 rounded-lg cursor-pointer smooth-transition card-hover ${
                      notification.unread
                        ? "bg-primary/10 border border-primary/20"
                        : "bg-slate-800/30 hover:bg-slate-800/50"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <div className={`p-2 rounded-full bg-slate-800 ${notification.color}`}>
                          <IconComponent className="h-4 w-4" />
                        </div>
                        {notification.unread && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <p className="text-sm font-medium truncate">{notification.title}</p>
                          {notification.unread && (
                            <Badge variant="destructive" className="text-xs px-1.5 py-0.5">
                              New
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mb-2 line-clamp-2">{notification.message}</p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-slate-500">{notification.time}</span>
                          {notification.type === "match_invite" || notification.type === "team_invite" ? (
                            <div className="flex space-x-1">
                              <Button size="sm" variant="outline" className="h-6 px-2 text-xs bg-transparent">
                                <X className="h-3 w-3" />
                              </Button>
                              <Button size="sm" className="h-6 px-2 text-xs bg-white text-black hover:bg-gray-200">
                                <Check className="h-3 w-3" />
                              </Button>
                            </div>
                          ) : (
                            <Button size="sm" variant="ghost" className="h-6 px-2 text-xs">
                              View
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollArea>
        </CardContent>

        <div className="p-4 border-t border-slate-700">
          <Button variant="outline" className="w-full border-gray-700 hover:bg-gray-800 bg-transparent text-white">
            Mark All as Read
          </Button>
        </div>
      </Card>
    </div>
  )
}
