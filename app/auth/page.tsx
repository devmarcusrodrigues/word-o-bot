"use client"

import { useEffect, useState } from "react"
import { signIn, getSession, useSession } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { DarkModeButton } from "@/components/ui/darktoggle"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Loader2, CheckCircle } from "lucide-react"

export default function AuthPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()
  const searchParams = useSearchParams()
  const { data: session, status } = useSession()

  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard"
  const errorParam = searchParams.get("error")

  useEffect(() => {
    if (status === "authenticated") {
      router.push(callbackUrl)
    }
  }, [status, router, callbackUrl])

  useEffect(() => {
    if (errorParam) {
      switch (errorParam) {
        case "OAuthSignin":
          setError("Erro ao iniciar o processo de autenticação com Google.")
          break
        case "OAuthCallback":
          setError("Erro durante o callback do Google. Tente novamente.")
          break
        case "OAuthCreateAccount":
          setError("Não foi possível criar sua conta. Tente novamente.")
          break
        case "EmailCreateAccount":
          setError("Não foi possível criar sua conta com este email.")
          break
        case "Callback":
          setError("Erro durante o processo de autenticação.")
          break
        case "OAuthAccountNotLinked":
          setError("Esta conta Google já está vinculada a outro usuário.")
          break
        case "EmailSignin":
          setError("Erro ao enviar email de verificação.")
          break
        case "CredentialsSignin":
          setError("Credenciais inválidas.")
          break
        case "SessionRequired":
          setError("Você precisa estar logado para acessar esta página.")
          break
        default:
          setError("Ocorreu um erro durante a autenticação. Tente novamente.")
      }
    }
  }, [errorParam])

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true)
      setError(null)

      const result = await signIn("google", {
        callbackUrl,
        redirect: false,
      })

      if (result?.error) {
        setError("Erro ao fazer login com Google. Tente novamente.")
      } else if (result?.ok) {
        // Wait for session to be updated
        const session = await getSession()
        if (session) {
          router.push(callbackUrl)
        }
      }
    } catch (error) {
      console.error("Sign in error:", error)
      setError("Erro inesperado durante o login. Tente novamente.")
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    router.replace("/auth/login")
  }, [router])

  if (status === "loading") {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
              <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900">Verificando autenticação...</h3>
                <p className="text-sm text-slate-600 mt-1">Por favor, aguarde um momento.</p>
              </div>
            </CardContent>
          </Card>
        </main>
        <DarkModeButton/>
        <SiteFooter />
      </div>
    )
  }

  if (status === "authenticated") {
    return (
      <div className="flex flex-col min-h-screen">
        <SiteHeader />
        <main className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-md">
            <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <div className="text-center">
                <h3 className="text-lg font-semibold text-slate-900">Login realizado com sucesso!</h3>
                <p className="text-sm text-slate-600 mt-1">Redirecionando...</p>
              </div>
            </CardContent>
          </Card>
        </main>
        <DarkModeButton/>
        <SiteFooter />
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />
      <main className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="flex flex-col items-center justify-center p-8 space-y-4">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
            <div className="text-center">
              <h3 className="text-lg font-semibold text-slate-900">Redirecionando...</h3>
              <p className="text-sm text-slate-600 mt-1">Por favor, aguarde um momento.</p>
            </div>
          </CardContent>
        </Card>
      </main>
      <DarkModeButton/>
      <SiteFooter />
    </div>
  )
}
