"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, ExternalLink } from "lucide-react"
import Link from "next/link"

const navigationLinks = [
  { name: "Início", href: "/", description: "Página principal do site" },
  { name: "Jogo", href: "/jogo", description: "Página de download do aplicativo" },
  { name: "Hardware", href: "/hardware", description: "Equipamentos recomendados" },
  { name: "Equipe", href: "/equipe", description: "Conheça nossa equipe" },
  { name: "Referências", href: "/referencias", description: "Artigos científicos" },
  { name: "Dashboard", href: "/dashboard", description: "Painel do usuário" },
  { name: "Admin", href: "/admin", description: "Painel administrativo" },
  { name: "Autenticação", href: "/auth", description: "Login e cadastro" },
]

export function NavigationTest() {
  const [testedLinks, setTestedLinks] = useState<string[]>([])

  const handleLinkTest = (href: string) => {
    setTestedLinks((prev) => [...prev, href])
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ExternalLink className="h-5 w-5" />
          Teste de Navegação
        </CardTitle>
        <CardDescription>Verifique se todos os links de navegação estão funcionando corretamente</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          {navigationLinks.map((link) => {
            const isTested = testedLinks.includes(link.href)
            return (
              <div
                key={link.href}
                className="flex items-center justify-between p-4 border rounded-lg hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-medium">{link.name}</h4>
                    {isTested ? (
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Testado
                      </Badge>
                    ) : (
                      <Badge variant="outline">Não testado</Badge>
                    )}
                  </div>
                  <p className="text-sm text-slate-600">{link.description}</p>
                  <p className="text-xs text-slate-400 font-mono">{link.href}</p>
                </div>
                <div className="flex gap-2">
                  <Button asChild size="sm" variant="outline" onClick={() => handleLinkTest(link.href)}>
                    <Link href={link.href}>Testar</Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Status dos Testes</h3>
          <div className="flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <CheckCircle className="h-4 w-4 text-green-600" />
              Testados: {testedLinks.length}
            </span>
            <span className="flex items-center gap-1">
              <XCircle className="h-4 w-4 text-slate-400" />
              Pendentes: {navigationLinks.length - testedLinks.length}
            </span>
          </div>
          {testedLinks.length === navigationLinks.length && (
            <div className="mt-2 p-2 bg-green-100 rounded text-green-800 text-sm">
              ✅ Todos os links foram testados com sucesso!
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
