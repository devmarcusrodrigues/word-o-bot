"use client"

import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"
import { useEffect, type ReactNode } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Loader2, Shield, LogIn } from "lucide-react"
import Link from "next/link"

interface ProtectedRouteProps {
  children: ReactNode
  fallback?: ReactNode
}

export function ProtectedRoute({ children, fallback }: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth/login?callbackUrl=/dashboard")
    }
  }, [loading, user, router])

  if (loading) {
    return (
      fallback || (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="flex-1 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
              <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
                <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-slate-900">Verificando autenticação...</h3>
                  <p className="text-sm text-slate-600 mt-1">Por favor, aguarde um momento.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    )
  }

  if (!user) {
    return (
      fallback || (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="flex-1 flex items-center justify-center p-4">
            <Card className="w-full max-w-md">
              <CardHeader className="text-center">
                <div className="mx-auto w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Acesso Restrito</CardTitle>
                <CardDescription>Você precisa estar logado para acessar esta página.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button asChild className="w-full">
                  <Link href="/auth/login?callbackUrl=/dashboard">
                    <LogIn className="h-4 w-4 mr-2" />
                    Fazer Login
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/">Voltar ao Início</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      )
    )
  }

  return <>{children}</>
}
