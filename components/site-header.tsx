"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Volume2,
  Menu,
  Home,
  Users,
  HardDriveIcon as Hardware,
  BookOpen,
  Gamepad,
  User,
  LogIn,
  LogOut,
  Settings,
  UserPlus,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { cn } from "@/lib/utils"

const navigationItems = [
  { name: "Início", href: "/", icon: Home },
  { name: "Jogo", href: "/jogo", icon: Gamepad },
  { name: "Hardware", href: "/hardware", icon: Hardware },
  { name: "Equipe", href: "/equipe", icon: Users },
  { name: "Referências", href: "/referencias", icon: BookOpen },
  { name: "Dashboard", href: "/dashboard", icon: User, protected: true },
]

const adminNavigationItems = [
  { name: "Início", href: "/", icon: Home },
  { name: "Dashboard", href: "/dashboard", icon: User, protected: true },
  { name: "Admin", href: "/admin", icon: Settings, protected: true },
  { name: "Jogo", href: "/jogo", icon: Gamepad },
  { name: "Hardware", href: "/hardware", icon: Hardware },
  { name: "Equipe", href: "/equipe", icon: Users },
  { name: "Referências", href: "/referencias", icon: BookOpen },
]

interface SiteHeaderProps {
  variant?: "default" | "admin"
}

export function SiteHeader({ variant = "default" }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const { user, loading, signOut } = useAuth()

  const navItems = variant === "admin" ? adminNavigationItems : navigationItems

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname.startsWith(href)
  }

  const handleSignOut = async () => {
    await signOut()
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const getUserDisplayName = () => {
    if (user?.user_metadata?.full_name) {
      return user.user_metadata.full_name
    }
    if (user?.user_metadata?.first_name) {
      return user.user_metadata.first_name
    }
    return user?.email?.split("@")[0] || "Usuário"
  }

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-200",
        scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white",
        variant === "admin" && "bg-slate-50/95",
      )}
    >
      <div className="container flex h-16 items-center px-4 lg:px-6">
        {/* Logo */}
        <Link className="flex items-center space-x-2 transition-transform hover:scale-105" href="/">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl p-2 shadow-lg">
              <Volume2 className="h-6 w-6 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Palavrobô
            </span>
            {variant === "admin" && <span className="text-xs text-slate-500 font-medium">Admin Panel</span>}
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 ml-8">
          {navItems
            .filter((item) => !item.protected || user)
            .map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-slate-100",
                    isActive(item.href) ? "bg-blue-50 text-blue-700 shadow-sm" : "text-slate-600 hover:text-slate-900",
                  )}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              )
            })}
        </nav>

        {/* Desktop Auth Section */}
        <div className="hidden lg:flex items-center ml-auto space-x-2">
          {loading ? (
            <div className="w-8 h-8 bg-slate-200 rounded-full animate-pulse" />
          ) : user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/placeholder.svg" alt={getUserDisplayName()} />
                    <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                      {getInitials(getUserDisplayName())}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{getUserDisplayName()}</p>
                    <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/dashboard">
                    <User className="mr-2 h-4 w-4" />
                    Dashboard
                  </Link>
                </DropdownMenuItem>
                {variant === "admin" && (
                  <DropdownMenuItem asChild>
                    <Link href="/admin">
                      <Settings className="mr-2 h-4 w-4" />
                      Admin
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleSignOut}>
                  <LogOut className="mr-2 h-4 w-4" />
                  Sair
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex items-center space-x-2">
              <Button asChild variant="outline">
                <Link href="/auth/signup">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Cadastrar
                </Link>
              </Button>
              <Button
                asChild
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <Link href="/auth/login">
                  <LogIn className="h-4 w-4 mr-2" />
                  Entrar
                </Link>
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center ml-auto lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[350px] p-0">
              <div className="flex flex-col h-full bg-gradient-to-b from-slate-50 to-white">
                {/* Mobile Header */}
                <div className="flex items-center space-x-3 p-6 border-b bg-white">
                  <div className="relative">
                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-2 shadow-lg">
                      <Volume2 className="h-6 w-6 text-white" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse" />
                  </div>
                  <div>
                    <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      Palavrobô
                    </span>
                    {variant === "admin" && <div className="text-xs text-slate-500 font-medium">Admin Panel</div>}
                  </div>
                </div>

                {/* Mobile Navigation Items */}
                <nav className="flex-1 p-4">
                  <div className="space-y-2">
                    {navItems
                      .filter((item) => !item.protected || user)
                      .map((item) => {
                        const IconComponent = item.icon
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className={cn(
                              "flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200",
                              isActive(item.href)
                                ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 shadow-sm border border-blue-100"
                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                            )}
                          >
                            <div
                              className={cn(
                                "p-2 rounded-lg transition-colors",
                                isActive(item.href) ? "bg-blue-100 text-blue-600" : "bg-slate-100 text-slate-500",
                              )}
                            >
                              <IconComponent className="h-4 w-4" />
                            </div>
                            <span>{item.name}</span>
                          </Link>
                        )
                      })}
                  </div>
                </nav>

                {/* Mobile Auth Section */}
                <div className="p-4 border-t bg-white">
                  {loading ? (
                    <div className="flex items-center space-x-3 p-3 bg-slate-50 rounded-xl">
                      <div className="w-10 h-10 bg-slate-200 rounded-full animate-pulse" />
                      <div className="flex-1">
                        <div className="h-4 bg-slate-200 rounded animate-pulse mb-1" />
                        <div className="h-3 bg-slate-200 rounded animate-pulse w-2/3" />
                      </div>
                    </div>
                  ) : user ? (
                    <div className="space-y-2">
                      <div className="flex items-center space-x-3 p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src="/placeholder.svg" alt={getUserDisplayName()} />
                          <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                            {getInitials(getUserDisplayName())}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1 min-w-0">
                          <div className="font-medium text-slate-900 truncate">{getUserDisplayName()}</div>
                          <div className="text-xs text-slate-500 truncate">{user.email}</div>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => {
                          setOpen(false)
                          handleSignOut()
                        }}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Sair
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
                        onClick={() => setOpen(false)}
                      >
                        <Link href="/auth/login">
                          <LogIn className="h-4 w-4 mr-2" />
                          Entrar
                        </Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="w-full bg-transparent"
                        onClick={() => setOpen(false)}
                      >
                        <Link href="/auth/signup">
                          <UserPlus className="h-4 w-4 mr-2" />
                          Cadastrar
                        </Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
