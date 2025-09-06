"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { DarkModeButton } from "@/components/ui/darktoggle"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useAuth } from "@/components/auth-provider"
import { Loader2, AlertCircle, Eye, EyeOff } from "lucide-react"
import Link from "next/link"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()
  const searchParams = useSearchParams()
  const { user, signIn } = useAuth()

  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"

  useEffect(() => {
    if (user) {
      router.push(callbackUrl)
    }
  }, [user, router, callbackUrl])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Basic validation
    if (!email || !password) {
      setError("Por favor, preencha todos os campos.")
      setIsLoading(false)
      return
    }

    if (!email.includes("@")) {
      setError("Por favor, insira um email válido.")
      setIsLoading(false)
      return
    }

    const { error } = await signIn(email, password)

    if (error) {
      // Translate common Supabase errors to Portuguese
      if (error.includes("Invalid login credentials")) {
        setError("Email ou senha incorretos.")
      } else if (error.includes("Email not confirmed")) {
        setError("Por favor, confirme seu email antes de fazer login.")
      } else if (error.includes("Too many requests")) {
        setError("Muitas tentativas de login. Tente novamente em alguns minutos.")
      } else {
        setError(error)
      }
    } else {
      router.push(callbackUrl)
    }

    setIsLoading(false)
  }

  if (user) {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900">Redirecionando...</h3>
                <p className="text-sm text-slate-600 mt-1">Você já está logado.</p>
              </div>
            </CardContent>
          </Card>
        </main>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900 dark:to-gray-950 flex items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Entrar no Palavrobô</CardTitle>
              <CardDescription>Entre com sua conta para acessar o dashboard e acompanhar o progresso.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Senha</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Digite sua senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      disabled={isLoading}
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                      disabled={isLoading}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Entrando...
                    </>
                  ) : (
                    "Entrar"
                  )}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm">
                <p className="text-slate-600">
                  Não tem uma conta?{" "}
                  <Link href="/auth/signup" className="text-blue-600 hover:underline font-medium">
                    Cadastre-se aqui
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Features Card */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Por que criar uma conta?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <div>
                  <h4 className="font-medium text-sm">Acompanhe o Progresso</h4>
                  <p className="text-xs text-slate-600">
                    Veja estatísticas detalhadas do desenvolvimento do seu filho.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <div>
                  <h4 className="font-medium text-sm">Relatórios Personalizados</h4>
                  <p className="text-xs text-slate-600">Receba relatórios semanais sobre as atividades realizadas.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2" />
                <div>
                  <h4 className="font-medium text-sm">Configurações Personalizadas</h4>
                  <p className="text-xs text-slate-600">Ajuste o aplicativo às necessidades específicas da criança.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <DarkModeButton/>
      <SiteFooter />
    </div>
  )
}
