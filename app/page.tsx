import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Download, Heart, Users, Volume2, Zap, Play, Star, Shield, Sparkles } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DarkModeButton } from "@/components/ui/darktoggle"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="flex justify-center flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:bg-gradient-to-br dark:from-blue-800 dark:via-slate-800 dark:to-gray-950" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
          <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />

          <div className="container relative px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6 max-w-7xl mx-auto px-4 md:px-6">
                <div className="space-y-4">
                  <Badge className="w-fit bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 border-blue-200 hover:from-blue-200 hover:to-purple-200 transition-all duration-300">
                    <Sparkles className="h-3 w-3 mr-1" />
                    Tecnologia Educativa Inovadora
                  </Badge>
                  <h1 className="text-4xl font-bold tracking-tight sm:text-6xl xl:text-7xl">
                    <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent dark:bg-gradient-to-r dark:from-blue-50 dark:via-purple-50 dark:to-pink-50">
                      Palavrobô
                    </span>
                  </h1>
                  <p className="max-w-[600px] text-slate-600 text-lg md:text-xl leading-relaxed dark:text-white">
                    O robozinho fofo que ajuda crianças com Síndrome de Down a aprender a falar corretamente de forma
                    divertida e interativa, com amor e tecnologia de ponta.
                  </p>
                </div>
                <div className="flex flex-col gap-3 min-[400px]:flex-row">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 dark:text-white"
                    asChild
                  >
                    <Link href="/jogo">
                      <Download className="mr-2 h-5 w-5" />
                      Baixar Agora
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 hover:bg-slate-50 transition-all duration-300 bg-transparent dark:hover:bg-blue-800"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Ver Demonstração
                  </Button>
                </div>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3, 4].map((i) => (
                        <div
                          key={i}
                          className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white dark:border-gray-100"
                        />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600 font-medium dark:text-white">+1.200 famílias</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 dark:text-yellow-200 dark:fill-yellow-200" />
                    ))}
                    <span className="text-sm text-slate-600 dark:text-white font-medium ml-1">4.9/5</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-2xl blur-2xl opacity-20 scale-110" />
                  <Image
                    alt="Palavrobô - Robô educativo"
                    className="relative aspect-square overflow-hidden rounded-2xl object-cover shadow-2xl border border-white/20"
                    height="550"
                    src="/placeholder.svg?height=550&width=550"
                    width="550"
                  />
                  <div className="absolute -top-4 -right-4 bg-green-400 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg animate-bounce">
                    NOVO!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full py-12 bg-white border-y dark:bg-gray-800">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">

            <div className="grid gap-8 md:grid-cols-4 text-center">
              {[
                { number: "1.200+", label: "Famílias Atendidas", icon: Users },
                { number: "50K+", label: "Exercícios Realizados", icon: Zap },
                { number: "4.9", label: "Avaliação Média", icon: Star },
                { number: "98%", label: "Taxa de Satisfação", icon: Heart },
              ].map((stat, index) => {
                const IconComponent = stat.icon
                return (
                  <div key={index} className="space-y-2">
                    <div className="mx-auto w-12 h-12 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center dark:bg-gradient-to-br dark:from-slate-500 dark:to-gray-500">
                      <IconComponent className="h-6 w-6 text-blue-600 dark:text-blue-100" />
                    </div>
                    <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:text-white">
                      {stat.number}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-white font-medium">{stat.label}</div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:bg-gradient-to-b dark:from-slate-800 dark:to-gray-950">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 border-purple-200">
                  <Play className="h-3 w-3 mr-1" />
                  Demonstração
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:text-blue-300">
                  Veja o Palavrobô em Ação
                </h2>
                <p className="max-w-[900px] text-slate-600 text-lg md:text-xl leading-relaxed">
                  Descubra como nosso robozinho torna o aprendizado da fala uma experiência alegre e eficaz.
                </p>
              </div>
              <div className="w-full max-w-4xl">
                <div className="relative aspect-video bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl flex items-center justify-center border shadow-xl overflow-hidden group cursor-pointer">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <div className="text-center z-10">
                    <div className="bg-white rounded-full p-6 mx-auto mb-4 w-20 h-20 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Play className="h-8 w-8 text-blue-600 ml-1" />
                    </div>
                    <p className="text-slate-700 font-semibold text-lg">Vídeo Demonstrativo</p>
                    <p className="text-sm text-slate-500">Clique para assistir</p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/5 to-pink-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 dark:bg-">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">

            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
              <div className="space-y-4">
                <Badge className="bg-gradient-to-r from-green-100 to-blue-100 text-green-700 border-green-200">
                  <Shield className="h-3 w-3 mr-1" />
                  Recursos Exclusivos
                </Badge>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                  Por que escolher o Palavrobô?
                </h2>
                <p className="max-w-[900px] text-slate-600 text-lg md:text-xl leading-relaxed">
                  Desenvolvido especialmente para crianças com Síndrome de Down, com recursos únicos e eficazes.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-3">
              {[
                {
                  icon: Heart,
                  title: "Desenvolvido com Amor",
                  description:
                    "Criado especificamente para atender às necessidades únicas de crianças com Síndrome de Down, com muito carinho e dedicação.",
                  gradient: "from-red-100 to-pink-100 dark:from-red-500 dark:to-pink-600",
                  iconColor: "text-red-600 dark:text-red-100",
                },
                {
                  icon: Zap,
                  title: "Aprendizado Interativo",
                  description:
                    "Exercícios divertidos e jogos que tornam o processo de aprendizagem da fala uma experiência prazerosa e eficaz.",
                  gradient: "from-yellow-100 to-orange-100 dark:from-yellow-500 dark:to-orange-600",
                  iconColor: "text-orange-600 dark:text-orange-100",
                },
                {
                  icon: Users,
                  title: "Suporte Familiar",
                  description:
                    "Recursos para pais e cuidadores acompanharem o progresso e participarem ativamente do desenvolvimento da criança.",
                  gradient: "from-blue-100 to-purple-100 dark:from-blue-500 dark:to-purple-600",
                  iconColor: "text-purple-600 dark:text-purple-100",
                },
              ].map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <Card
                    key={index}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-white to-slate-50 dark:bg-gradient-to-br dark:from-slate-800 dark:to-gray-800"
                  >
                    <CardContent className="flex flex-col items-center space-y-4 p-8 text-center">
                      <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-4 shadow-inner`}>
                        <IconComponent className={`h-8 w-8 ${feature.iconColor}`} />
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{feature.title}</h3>
                      <p className="text-slate-600 dark:text-white leading-relaxed">{feature.description}</p>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-slate-50 to-white dark:bg-gradient-to-b dark:from-slate-800 dark:to-gray-900">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">

            <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-4">
                  <Badge className="w-fit bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 border-indigo-200">
                    <Volume2 className="h-3 w-3 mr-1" />
                    Nossa História
                  </Badge>
                  <h2 className="text-3xl font-bold tracking-tight sm:text-5xl bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent dark:text-white">
                    Sobre o Palavrobô
                  </h2>
                  <p className="max-w-[600px] text-slate-600 text-lg leading-relaxed dark:text-slate-100">
                    O Palavrobô é mais do que um aplicativo - é um companheiro de aprendizagem especialmente projetado
                    para crianças com Síndrome de Down.
                  </p>
                </div>
                <div className="space-y-6">
                  {[
                    {
                      emoji: "🎯",
                      title: "Foco Especializado",
                      description:
                        "Desenvolvido com base em pesquisas sobre desenvolvimento da fala em crianças com Síndrome de Down.",
                    },
                    {
                      emoji: "🎮",
                      title: "Gamificação",
                      description:
                        "Transforma exercícios de fala em jogos divertidos que mantêm as crianças engajadas e motivadas.",
                    },
                    {
                      emoji: "📊",
                      title: "Acompanhamento",
                      description: "Relatórios detalhados para pais e terapeutas acompanharem o progresso da criança.",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-4 rounded-xl bg-white shadow-sm border border-slate-100 dark:bg-gray-800 dark:border-gray-900"
                    >
                      <div className="text-2xl">{item.emoji}</div>
                      <div className="space-y-1">
                        <h3 className="font-semibold text-slate-900 dark:text-blue-500">{item.title}</h3>
                        <p className="text-slate-600 dark:text-white text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-500 rounded-2xl blur-2xl opacity-20 scale-110" />
                  <Image
                    alt="Criança usando o Palavrobô"
                    className="relative aspect-square overflow-hidden rounded-2xl object-cover shadow-2xl border border-white/20"
                    height="400"
                    src="/placeholder.svg?height=400&width=400"
                    width="400"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 dark:from-blue-800 dark:via-slate-800 dark:to-gray-950" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
          <div className="container relative w-full max-w-7xl mx-auto px-4 md:px-6 py-8">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl text-white">Comece a Jornada Hoje</h2>
                <p className="max-w-[600px] text-blue-100 text-lg md:text-xl leading-relaxed">
                  Baixe o Palavrobô e veja seu filho desenvolver habilidades de fala de forma divertida e eficaz.
                </p>
              </div>
              <div className="flex flex-col gap-3 min-[400px]:flex-row">
                <Button
                  size="lg"
                  variant="secondary"
                  className="bg-white text-blue-600 hover:bg-slate-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  asChild
                >
                  <Link href="/jogo">
                    <Download className="mr-2 h-5 w-5" />
                    Baixar Grátis
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 bg-transparent transition-all duration-300"
                >
                  Falar com Especialista
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <DarkModeButton/>
      <SiteFooter />
    </div>
  )
}
