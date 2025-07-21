"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Trophy, Clock, Target, TrendingUp, Calendar, Play, Settings } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProtectedRoute } from "@/components/protected-route"
import { useSession } from "next-auth/react"

const userStats = {
  totalSessions: 45,
  weeklyGoal: 5,
  currentStreak: 12,
  completedExercises: 234,
  level: 8,
  nextLevelProgress: 75,
}

const recentActivities = [
  {
    id: 1,
    exercise: "Pronúncia de Vogais",
    score: 85,
    date: "2024-01-15",
    duration: "15 min",
    status: "completed",
  },
  {
    id: 2,
    exercise: "Sílabas Simples",
    score: 92,
    date: "2024-01-14",
    duration: "20 min",
    status: "completed",
  },
  {
    id: 3,
    exercise: "Palavras com R",
    score: 78,
    date: "2024-01-13",
    duration: "18 min",
    status: "completed",
  },
  {
    id: 4,
    exercise: "Frases Curtas",
    score: 88,
    date: "2024-01-12",
    duration: "25 min",
    status: "completed",
  },
]

const achievements = [
  { name: "Primeira Semana", description: "Complete 7 dias consecutivos", earned: true },
  { name: "Pronunciador", description: "Acerte 100 exercícios de pronúncia", earned: true },
  { name: "Persistente", description: "Mantenha uma sequência de 10 dias", earned: true },
  { name: "Explorador", description: "Experimente todos os tipos de exercício", earned: false },
]

function DashboardContent() {
  const { data: session } = useSession()

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <SiteHeader />

      <main className="flex-1 bg-gray-50">
        <div className="container px-4 md:px-6 py-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                Olá, {session?.user?.name?.split(" ")[0] || "Usuário"}! 👋
              </h1>
              <p className="text-gray-600 mt-1">Acompanhe o progresso do seu filho no Palavrobô</p>
            </div>
            <div className="flex gap-2 mt-4 md:mt-0">
              <Button asChild>
                <Link href="/jogo">
                  <Play className="h-4 w-4 mr-2" />
                  Jogar Agora
                </Link>
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Configurações
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <Breadcrumb items={[{ name: "Dashboard" }]} />
          </div>

          {/* Stats Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sessões Totais</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.totalSessions}</div>
                <p className="text-xs text-muted-foreground">+12% desde o mês passado</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sequência Atual</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.currentStreak} dias</div>
                <p className="text-xs text-muted-foreground">Continue assim!</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Nível Atual</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Nível {userStats.level}</div>
                <div className="mt-2">
                  <Progress value={userStats.nextLevelProgress} className="h-2" />
                  <p className="text-xs text-muted-foreground mt-1">
                    {userStats.nextLevelProgress}% para o próximo nível
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Exercícios Completos</CardTitle>
                <Trophy className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{userStats.completedExercises}</div>
                <p className="text-xs text-muted-foreground">Parabéns pelo progresso!</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Recent Activities */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Atividades Recentes</CardTitle>
                  <CardDescription>Últimos exercícios realizados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{activity.exercise}</h4>
                          <div className="flex items-center gap-4 mt-1 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {activity.duration}
                            </span>
                            <span>{new Date(activity.date).toLocaleDateString("pt-BR")}</span>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-blue-600">{activity.score}%</div>
                          <Badge variant="secondary">Completo</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Conquistas</CardTitle>
                  <CardDescription>Marcos alcançados</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className={`p-2 rounded-full ${achievement.earned ? "bg-yellow-100" : "bg-gray-100"}`}>
                          <Trophy className={`h-4 w-4 ${achievement.earned ? "text-yellow-600" : "text-gray-400"}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className={`font-medium ${achievement.earned ? "text-gray-900" : "text-gray-500"}`}>
                            {achievement.name}
                          </h4>
                          <p className="text-xs text-gray-600">{achievement.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

export default function DashboardPage() {
  return (
    <ProtectedRoute>
      <DashboardContent />
    </ProtectedRoute>
  )
}
