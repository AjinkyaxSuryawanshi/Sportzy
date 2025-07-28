"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Bell, MessageCircle, Users, Trophy, Send, Search, MoreVertical } from "lucide-react"

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState<any>(null)
  const [message, setMessage] = useState("")

  const notifications = [
    {
      id: 1,
      type: "match_invite",
      title: "Match Invitation",
      message: "Alex Johnson invited you to a basketball match",
      time: "5 min ago",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      type: "tournament_update",
      title: "Tournament Update",
      message: "Summer Basketball League: Quarter-finals start tomorrow",
      time: "1 hour ago",
      unread: true,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      type: "score_update",
      title: "Match Result",
      message: "Thunder Bolts won 78-65 against Lightning",
      time: "2 hours ago",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 4,
      type: "team_invite",
      title: "Team Invitation",
      message: "Sarah Chen invited you to join City Strikers",
      time: "1 day ago",
      unread: false,
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  const chats = [
    {
      id: 1,
      type: "team",
      name: "Thunder Bolts",
      lastMessage: "Great game today everyone! 🏀",
      time: "2 min ago",
      unread: 3,
      avatar: "/placeholder.svg?height=40&width=40",
      members: 8,
      messages: [
        {
          id: 1,
          sender: "Alex Johnson",
          message: "Hey team! Ready for tomorrow's match?",
          time: "10:30 AM",
          isOwn: false,
        },
        { id: 2, sender: "You", message: "Been practicing my shots", time: "10:32 AM", isOwn: true },
        {
          id: 3,
          sender: "Mike Rodriguez",
          message: "Same here. Let's bring our A-game!",
          time: "10:35 AM",
          isOwn: false,
        },
        { id: 4, sender: "Sarah Chen", message: "Great game today everyone! 🏀", time: "2:15 PM", isOwn: false },
      ],
    },
    {
      id: 2,
      type: "match",
      name: "Basketball Match vs Lightning",
      lastMessage: "GG everyone! Well played",
      time: "1 hour ago",
      unread: 0,
      avatar: "/placeholder.svg?height=40&width=40",
      members: 10,
      messages: [
        {
          id: 1,
          sender: "Game System",
          message: "Match started! Good luck to both teams",
          time: "1:00 PM",
          isOwn: false,
          isSystem: true,
        },
        { id: 2, sender: "David Kim", message: "Let's do this! 💪", time: "1:02 PM", isOwn: false },
        { id: 3, sender: "You", message: "Great shot Alex!", time: "1:45 PM", isOwn: true },
        { id: 4, sender: "Lisa Park", message: "GG everyone! Well played", time: "2:30 PM", isOwn: false },
      ],
    },
    {
      id: 3,
      type: "direct",
      name: "Alex Johnson",
      lastMessage: "Want to practice together this weekend?",
      time: "3 hours ago",
      unread: 1,
      avatar: "/placeholder.svg?height=40&width=40",
      messages: [
        {
          id: 1,
          sender: "Alex Johnson",
          message: "Hey! Great performance in today's match",
          time: "Yesterday",
          isOwn: false,
        },
        { id: 2, sender: "You", message: "Thanks! You played amazing too", time: "Yesterday", isOwn: true },
        {
          id: 3,
          sender: "Alex Johnson",
          message: "Want to practice together this weekend?",
          time: "3 hours ago",
          isOwn: false,
        },
      ],
    },
  ]

  const handleSendMessage = () => {
    if (message.trim() && selectedChat) {
      // Add message to selected chat
      const newMessage = {
        id: selectedChat.messages.length + 1,
        sender: "You",
        message: message.trim(),
        time: "Just now",
        isOwn: true,
      }
      selectedChat.messages.push(newMessage)
      setMessage("")
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-12rem)]">
        {/* Notifications Panel */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Bell className="mr-2 h-5 w-5" />
              Notifications
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-80">
              <div className="space-y-1 p-4">
                {notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      notification.unread ? "bg-primary/10 border border-primary/20" : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={notification.avatar || "/placeholder.svg"} alt="Notification" />
                        <AvatarFallback>
                          {notification.type === "match_invite"
                            ? "🏀"
                            : notification.type === "tournament_update"
                              ? "🏆"
                              : notification.type === "score_update"
                                ? "📊"
                                : "👥"}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium truncate">{notification.title}</p>
                          {notification.unread && <div className="w-2 h-2 bg-primary rounded-full"></div>}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{notification.message}</p>
                        <p className="text-xs text-muted-foreground mt-1">{notification.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat List */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MessageCircle className="mr-2 h-5 w-5" />
              Messages
            </CardTitle>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search conversations..." className="pl-10" />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-96">
              <div className="space-y-1 p-4">
                {chats.map((chat) => (
                  <div
                    key={chat.id}
                    onClick={() => setSelectedChat(chat)}
                    className={`p-3 rounded-lg cursor-pointer transition-colors ${
                      selectedChat?.id === chat.id ? "bg-primary/10 border border-primary/20" : "hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={chat.avatar || "/placeholder.svg"} alt={chat.name} />
                          <AvatarFallback>
                            {chat.type === "team" ? (
                              <Users className="h-4 w-4" />
                            ) : chat.type === "match" ? (
                              <Trophy className="h-4 w-4" />
                            ) : (
                              chat.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")
                            )}
                          </AvatarFallback>
                        </Avatar>
                        {chat.type !== "direct" && (
                          <Badge variant="secondary" className="absolute -bottom-1 -right-1 text-xs px-1">
                            {chat.members}
                          </Badge>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <p className="font-medium truncate">{chat.name}</p>
                          <div className="flex items-center space-x-1">
                            <span className="text-xs text-muted-foreground">{chat.time}</span>
                            {chat.unread > 0 && (
                              <Badge variant="destructive" className="text-xs px-1.5 py-0.5">
                                {chat.unread}
                              </Badge>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground truncate mt-1">{chat.lastMessage}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* Chat Window */}
        <Card className="lg:col-span-2">
          {selectedChat ? (
            <>
              <CardHeader className="border-b">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={selectedChat.avatar || "/placeholder.svg"} alt={selectedChat.name} />
                      <AvatarFallback>
                        {selectedChat.type === "team" ? (
                          <Users className="h-4 w-4" />
                        ) : selectedChat.type === "match" ? (
                          <Trophy className="h-4 w-4" />
                        ) : (
                          selectedChat.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")
                        )}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-lg">{selectedChat.name}</CardTitle>
                      {selectedChat.type !== "direct" && (
                        <CardDescription>{selectedChat.members} members</CardDescription>
                      )}
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col h-full p-0">
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {selectedChat.messages.map((msg: any) => (
                      <div key={msg.id} className={`flex ${msg.isOwn ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`flex items-start space-x-2 max-w-[70%] ${msg.isOwn ? "flex-row-reverse space-x-reverse" : ""}`}
                        >
                          {!msg.isOwn && !msg.isSystem && (
                            <Avatar className="h-6 w-6">
                              <AvatarFallback className="text-xs">
                                {msg.sender
                                  .split(" ")
                                  .map((n: string) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                          )}
                          <div
                            className={`rounded-lg px-3 py-2 ${
                              msg.isSystem
                                ? "bg-muted text-center text-sm text-muted-foreground"
                                : msg.isOwn
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-muted"
                            }`}
                          >
                            {!msg.isOwn && !msg.isSystem && <p className="text-xs font-medium mb-1">{msg.sender}</p>}
                            <p className="text-sm">{msg.message}</p>
                            <p
                              className={`text-xs mt-1 ${
                                msg.isOwn ? "text-primary-foreground/70" : "text-muted-foreground"
                              }`}
                            >
                              {msg.time}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
                <Separator />
                <div className="p-4">
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Type a message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1"
                    />
                    <Button onClick={handleSendMessage} size="sm">
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </>
          ) : (
            <CardContent className="flex items-center justify-center h-full">
              <div className="text-center">
                <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">Select a conversation</h3>
                <p className="text-muted-foreground">Choose a chat from the list to start messaging</p>
              </div>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  )
}
