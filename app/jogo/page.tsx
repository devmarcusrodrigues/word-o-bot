import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DarkModeButton } from "@/components/ui/darktoggle"
import {
  Volume2,
  ArrowLeft,
  Download,
  Play,
  Star,
  Shield,
  Smartphone,
  Tablet,
  Monitor,
  CheckCircle,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"

const gameFeatures = [
  {
    icon: Volume2,
    title: "Exercícios de Pronúncia",
    description: "Atividades interativas para melhorar a articulação e clareza da fala",
  },
  {
    icon: Play,
    title: "Mini-Jogos Educativos",
    description: "Mini-jogos divertidos que tornam o aprendizado uma experiência prazerosa",
  },
  {
    icon: Star,
    title: "Sistema de Recompensas",
    description: "Conquistas e medalhas para manter a motivação e engajamento",
  },
  {
    icon: Shield,
    title: "Ambiente Seguro",
    description: "Plataforma protegida e adequada para crianças, sem anúncios ou conteúdo inadequado",
  },
]

const systemRequirements = {
  android: {
    os: "Android 8.0 ou superior",
    ram: "2 GB RAM",
    storage: "500 MB de espaço livre",
    processor: "Processador quad-core 1.4 GHz",
  },
  ios: {
    os: "iOS 12.0 ou superior",
    ram: "2 GB RAM",
    storage: "500 MB de espaço livre",
    processor: "iPhone 6s ou superior",
  },
  windows: {
    os: "Windows 10 ou superior",
    ram: "4 GB RAM",
    storage: "1 GB de espaço livre",
    processor: "Intel Core i3 ou equivalente",
  },
}

const screenshots = [
  { id: 1, alt: "Tela inicial do jogo", src: "/placeholder.svg?height=300&width=200" },
  { id: 2, alt: "Exercício de pronúncia", src: "/placeholder.svg?height=300&width=200" },
  { id: 3, alt: "Sistema de recompensas", src: "/placeholder.svg?height=300&width=200" },
  { id: 4, alt: "Progresso do usuário", src: "/placeholder.svg?height=300&width=200" },
]

export default function GamePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center text-blue-600 hover:text-blue-700 w-fit"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao início
                </Link>
                <div className="space-y-2">
                  <Badge className="w-fit bg-green-100 text-green-800">Grátis para Download</Badge>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600">Palavrobô: O Jogo
                  </h1>
                  <p className="max-w-[600px] text-gray-600 md:text-xl">
                    Comece hoje mesmo a jornada de aprendizado do seu filho com nosso aplicativo educativo
                    especializado.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    <Download className="mr-2 h-4 w-4" />
                    Download para Android
                  </Button>
                  <Button size="lg" variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download para iOS
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Gratuito
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Sem anúncios
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Seguro para crianças
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  alt="Palavrobô App Interface"
                  className="aspect-[3/4] overflow-hidden rounded-xl object-cover shadow-2xl"
                  height="600"
                  src="/placeholder.svg?height=600&width=450"
                  width="450"
                />
              </div>
            </div>
          </div>
        </section>

        <div className="container px-4 md:px-6 mb-6">
          <Breadcrumb items={[{ name: "Jogo" }]} />
        </div>

        {/* Screenshots Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Capturas de Tela</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Veja como é a interface do Palavrobô: O Jogo e suas principais funcionalidades.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {screenshots.map((screenshot) => (
                <div key={screenshot.id} className="flex justify-center">
                  <Image
                    alt={screenshot.alt}
                    className="aspect-[3/4] overflow-hidden rounded-lg object-cover shadow-lg"
                    height="300"
                    src={screenshot.src || "/placeholder.svg"}
                    width="200"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Recursos do Jogo</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Funcionalidades desenvolvidas especialmente para crianças com Síndrome de Down.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {gameFeatures.map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card key={index}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 rounded-full p-2">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* System Requirements */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Requisitos do Sistema</h2>
              <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed">
                Verifique se seu dispositivo é compatível com o Palavrobô.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Smartphone className="h-8 w-8 text-green-600" />
                    <div>
                      <CardTitle>Android</CardTitle>
                      <CardDescription>Smartphones e Tablets</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <strong>SO:</strong> {systemRequirements.android.os}
                  </div>
                  <div>
                    <strong>RAM:</strong> {systemRequirements.android.ram}
                  </div>
                  <div>
                    <strong>Armazenamento:</strong> {systemRequirements.android.storage}
                  </div>
                  <div>
                    <strong>Processador:</strong> {systemRequirements.android.processor}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Tablet className="h-8 w-8 text-gray-600" />
                    <div>
                      <CardTitle>iOS</CardTitle>
                      <CardDescription>iPhone e iPad</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <strong>SO:</strong> {systemRequirements.ios.os}
                  </div>
                  <div>
                    <strong>RAM:</strong> {systemRequirements.ios.ram}
                  </div>
                  <div>
                    <strong>Armazenamento:</strong> {systemRequirements.ios.storage}
                  </div>
                  <div>
                    <strong>Dispositivo:</strong> {systemRequirements.ios.processor}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Monitor className="h-8 w-8 text-blue-600" />
                    <div>
                      <CardTitle>Windows</CardTitle>
                      <CardDescription>PC e Laptop</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div>
                    <strong>SO:</strong> {systemRequirements.windows.os}
                  </div>
                  <div>
                    <strong>RAM:</strong> {systemRequirements.windows.ram}
                  </div>
                  <div>
                    <strong>Armazenamento:</strong> {systemRequirements.windows.storage}
                  </div>
                  <div>
                    <strong>Processador:</strong> {systemRequirements.windows.processor}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Download CTA */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">Pronto para Começar?</h2>
                <p className="max-w-[600px] text-blue-100 md:text-xl/relaxed">
                  Baixe nosso jogo agora e comece a transformar o aprendizado do seu filho hoje mesmo.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Download className="mr-2 h-4 w-4" />
                  Download Android
                </Button>
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Download className="mr-2 h-4 w-4" />
                  Download iOS (Em breve)
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Windows
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DarkModeButton/>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
