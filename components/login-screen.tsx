"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/components/auth-provider"
import { Trophy, Users, Zap } from "lucide-react"

export function LoginScreen() {
  const [selectedRole, setSelectedRole] = useState<"player" | "organizer" | null>(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const { login } = useAuth()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedRole) return

    setIsLoading(true)
    try {
      await login(email, password, selectedRole)
    } catch (error) {
      console.error("Login failed:", error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* Meteor Effects */}
      <div className="meteor"></div>
      <div className="meteor"></div>
      <div className="meteor"></div>

      <div className="w-full max-w-md space-y-8">
        {/* Logo and Title */}
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <Trophy className="h-12 w-12 text-white mr-2" />
            <h1 className="text-4xl font-bold gradient-text">Sportzy</h1>
          </div>
          <p className="text-gray-400">Connect. Play. Compete.</p>
        </div>

        {!selectedRole ? (
          /* Role Selection */
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-center mb-6">Choose Your Role</h2>

            <Card className="card-hover cursor-pointer glass neon-glow" onClick={() => setSelectedRole("player")}>
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Player</h3>
                <p className="text-gray-400">Join teams, compete in tournaments, and connect with other players</p>
              </CardContent>
            </Card>

            <Card className="card-hover cursor-pointer glass neon-glow" onClick={() => setSelectedRole("organizer")}>
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Organizer</h3>
                <p className="text-gray-400">Create and manage tournaments, build the sports community</p>
              </CardContent>
            </Card>
          </div>
        ) : (
          /* Login Form */
          <Card className="glass neon-glow">
            <CardHeader>
              <CardTitle className="text-center">
                Welcome {selectedRole === "player" ? "Player" : "Organizer"}
              </CardTitle>
              <CardDescription className="text-center">Sign in to your Sportzy account</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-gray-900 border-gray-700 focus:border-white text-white placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="bg-slate-800/50 border-slate-700 focus:border-primary"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full btn-bounce bg-white text-black hover:bg-gray-200"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing In..." : "Sign In"}
                </Button>
              </form>

              <div className="mt-4 text-center">
                <Button
                  variant="ghost"
                  onClick={() => setSelectedRole(null)}
                  className="text-gray-400 hover:text-white"
                >
                  ← Back to role selection
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
