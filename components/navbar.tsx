"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X, Trophy, Users, User, Home, Search } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Trophy className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-primary">Sportzy</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/" className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link
              href="/tournaments"
              className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
            >
              <Trophy className="h-4 w-4" />
              <span>Tournaments</span>
            </Link>
            <Link
              href="/teams"
              className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
            >
              <Users className="h-4 w-4" />
              <span>Teams</span>
            </Link>
            <Link
              href="/discover"
              className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
            >
              <Search className="h-4 w-4" />
              <span>Discover</span>
            </Link>
            <Link
              href="/profile"
              className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
            >
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <ModeToggle />
            <Button variant="outline" size="sm">
              Sign In
            </Button>
            <Button size="sm">Sign Up</Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ModeToggle />
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 animate-fade-in">
            <Link href="/" className="flex items-center space-x-2 px-2 py-2 rounded-md hover:bg-accent">
              <Home className="h-4 w-4" />
              <span>Home</span>
            </Link>
            <Link href="/tournaments" className="flex items-center space-x-2 px-2 py-2 rounded-md hover:bg-accent">
              <Trophy className="h-4 w-4" />
              <span>Tournaments</span>
            </Link>
            <Link href="/teams" className="flex items-center space-x-2 px-2 py-2 rounded-md hover:bg-accent">
              <Users className="h-4 w-4" />
              <span>Teams</span>
            </Link>
            <Link href="/discover" className="flex items-center space-x-2 px-2 py-2 rounded-md hover:bg-accent">
              <Search className="h-4 w-4" />
              <span>Discover</span>
            </Link>
            <Link href="/profile" className="flex items-center space-x-2 px-2 py-2 rounded-md hover:bg-accent">
              <User className="h-4 w-4" />
              <span>Profile</span>
            </Link>
            <div className="flex space-x-2 pt-2">
              <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                Sign In
              </Button>
              <Button size="sm" className="flex-1">
                Sign Up
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
