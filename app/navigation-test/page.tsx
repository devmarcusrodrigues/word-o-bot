import { NavigationTest } from "@/components/navigation-test"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function NavigationTestPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1 bg-gradient-to-br from-blue-50 to-purple-50 py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">Teste de Navegação</h1>
            <p className="text-slate-600">Verifique se todos os links de navegação estão funcionando corretamente</p>
          </div>

          <NavigationTest />
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
