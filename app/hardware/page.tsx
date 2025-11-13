import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Volume2, ArrowLeft, ShoppingCart, Tablet, Headphones, Smartphone, Monitor, Speaker, Wifi, HandIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { DarkModeButton } from "@/components/ui/darktoggle"
import cyd from "@/public/cyd.jpeg"
import hand from "@/public/hand.jpeg"
import speaker from "@/public/speaker.jpeg"
import support from "@/public/support.jpeg"
import mic from "@/public/mic.jpeg"
import wifi from "@/public/wifi.jpeg"

const hardwareItems = [
  {
    id: 1,
    name: "ESP32-CYD (Cheap Yellow Display)",
    description: "ESP32 com tela especialmente configurado com o app Palavrobô pré-instalado e otimizado para crianças.",
    price: "R$ 229,00",
    originalPrice: "R$ 299,00",
    category: "Essencial",
    pic: cyd,
    icon: Tablet,
    features: ["Tela de 20 centímetros", "Tela touch", "Stylus inculsa", "Econômico"],
  },
  {
    id: 2,
    name: "Mão Robótica",
    description: "Mão robótica para atividades que sejam do conteúdo de LIBRAS.",
    price: "R$ 249,00",
    originalPrice: "R$ 299,00",
    category: "Essencial",
    pic: hand,
    icon: HandIcon,
    features: ["Funcional", "Plug&Play", "Reforçada", "Faz sinais com precisão"],
  },
  {
    id: 3,
    name: "Speakers",
    description: "Alto-falantes com qualidade de áudio superior para atividades.",
    price: "R$ 299,00",
    originalPrice: "R$ 399,00",
    category: "Recomendado",
    pic: speaker,
    icon: Speaker,
    features: ["Áudio de alta qualidade", "Econômico", "À prova d'água"],
  },
  {
    id: 4,
    name: "Suporte Ajustável para Pilhas",
    description: "Suporte para carregar pilhas.",
    price: "R$ 89,00",
    originalPrice: "R$ 129,00",
    category: "Acessório",
    pic: support,
    icon: Monitor,
    features: ["Carregamento rápido", "Quatro slots", "Seguro", "Dobrável"],
  },
  {
    id: 5,
    name: "Microfone",
    description: "Microfone especial para exercícios de pronúncia.",
    price: "R$ 19,00",
    originalPrice: "R$ 39,00",
    category: "Recomendado",
    pic: mic,
    icon: Volume2,
    features: ["Boa qualidade", "Cabo USB", "Voz cristalina", "Grip antiderrapante"],
  },
  {
    id: 6,
    name: "Wi-Fi Dedicado",
    description: "Rede dedicada ao uso do Palavrobô",
    price: "R$ 349,00",
    originalPrice: "R$ 449,00",
    category: "Opcional",
    pic: wifi,
    icon: Wifi,
    features: ["Wi-Fi 6", "Cobertura ampla", "Configuração fácil"],
  },
]

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Essencial":
      return "bg-red-100 text-red-800"
    case "Recomendado":
      return "bg-blue-100 text-blue-800"
    case "Opcional":
      return "bg-green-100 text-green-800"
    case "Acessório":
      return "bg-purple-100 text-purple-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function HardwarePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50  dark:from-blue-800 dark:to-gray-900">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/" className="inline-flex items-center justify-center text-blue-600 dark:text-blue-300 hover:text-blue-700 CCCC mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao início
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600 dark:text-white">Hardware Recomendado</h1>
                <p className="max-w-[900px] text-gray-600 dark:text-blue-50 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Equipamentos especialmente selecionados para potencializar a experiência do Palavrobô e garantir o
                  melhor aprendizado para seu filho.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hardware Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {hardwareItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <Card key={item.id} className="flex flex-col">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge className={getCategoryColor(item.category)}>{item.category}</Badge>
                        <div className="bg-blue-100 rounded-full p-2">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                      </div>
                      <CardTitle className="text-lg">{item.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <div className="aspect-square mb-4 bg-gray-100 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                        <Image
                          alt={item.name}
                          className="aspect-square overflow-hidden rounded-lg object-cover"
                          height="400"
                          src={item.pic}
                          width="400"
                        />
                      </div>
                      <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Características:</h4>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {item.features.map((feature, index) => (
                            <li key={index} className="flex items-center">
                              <div className="w-1 h-1 bg-blue-600 rounded-full mr-2" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-3">
                      <div className="flex items-center justify-between w-full">
                        <div className="flex flex-col">
                          <span className="text-2xl font-bold text-blue-600">{item.price}</span>
                          <span className="text-sm text-gray-500 line-through">{item.originalPrice}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Compre Agora!
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-800">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Por que usar hardware dedicado?</h2>
                <p className="max-w-[900px] text-gray-600 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Equipamentos otimizados garantem a melhor experiência de aprendizado para crianças com Síndrome de
                  Down.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 max-w-5xl">
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-blue-100 rounded-full p-3">
                    <Volume2 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Qualidade de Áudio</h3>
                  <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                    Hardware especializado garante clareza perfeita para exercícios de pronúncia.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-green-100 rounded-full p-3">
                    <Tablet className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Durabilidade</h3>
                  <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                    Equipamentos resistentes e seguros, projetados para uso infantil intensivo.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">Facilidade de Uso</h3>
                  <p className="text-center text-gray-600 dark:text-gray-400 text-sm">
                    Interface simplificada e controles adaptados para crianças com necessidades especiais.
                  </p>
                </div>
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
