import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Volume2, ArrowLeft, ShoppingCart, Tablet, Headphones, Smartphone, Monitor, Speaker, Wifi } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"

const hardwareItems = [
  {
    id: 1,
    name: "Tablet Educativo Palavrobô",
    description: "Tablet especialmente configurado com o app Palavrobô pré-instalado e otimizado para crianças.",
    price: "R$ 899,00",
    originalPrice: "R$ 1.199,00",
    category: "Essencial",
    icon: Tablet,
    features: ["Tela 10 polegadas", "Capa protetora", "Controle parental", "Bateria 12h"],
  },
  {
    id: 2,
    name: "Fones de Ouvido Infantis",
    description: "Fones de ouvido seguros com limitador de volume, perfeitos para exercícios de audição.",
    price: "R$ 149,00",
    originalPrice: "R$ 199,00",
    category: "Recomendado",
    icon: Headphones,
    features: ["Limitador de volume", "Confortável", "Cabo reforçado", "Design colorido"],
  },
  {
    id: 3,
    name: "Alto-falante Bluetooth",
    description: "Alto-falante portátil com qualidade de áudio superior para atividades em grupo.",
    price: "R$ 299,00",
    originalPrice: "R$ 399,00",
    category: "Opcional",
    icon: Speaker,
    features: ["Bluetooth 5.0", "Bateria 20h", "À prova d'água", "Som cristalino"],
  },
  {
    id: 4,
    name: "Suporte Ajustável",
    description: "Suporte ergonômico para tablet que se adapta à altura e postura da criança.",
    price: "R$ 89,00",
    originalPrice: "R$ 129,00",
    category: "Acessório",
    icon: Monitor,
    features: ["Altura ajustável", "Rotação 360°", "Base antiderrapante", "Dobrável"],
  },
  {
    id: 5,
    name: "Microfone Infantil",
    description: "Microfone especial para exercícios de pronúncia com cancelamento de ruído.",
    price: "R$ 199,00",
    originalPrice: "R$ 249,00",
    category: "Recomendado",
    icon: Volume2,
    features: ["Cancelamento de ruído", "Cabo USB", "Indicador LED", "Grip antiderrapante"],
  },
  {
    id: 6,
    name: "Roteador Wi-Fi Dedicado",
    description: "Roteador com controle parental e configurações otimizadas para apps educativos.",
    price: "R$ 349,00",
    originalPrice: "R$ 449,00",
    category: "Opcional",
    icon: Wifi,
    features: ["Controle parental", "Wi-Fi 6", "Cobertura ampla", "Configuração fácil"],
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/" className="inline-flex items-center justify-center text-blue-600 hover:text-blue-700 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao início
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600">Hardware Recomendado</h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Equipamentos especialmente selecionados para potencializar a experiência do Palavrobô e garantir o
                  melhor aprendizado para seu filho.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container px-4 md:px-6 mb-6">
          <Breadcrumb items={[{ name: "Hardware" }]} />
        </div>

        {/* Hardware Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
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
                          height="200"
                          src="/placeholder.svg?height=200&width=200"
                          width="200"
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
                        Compre Agora
                      </Button>
                    </CardFooter>
                  </Card>
                )
              })}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Por que usar hardware dedicado?</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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
                  <p className="text-center text-gray-600 text-sm">
                    Hardware especializado garante clareza perfeita para exercícios de pronúncia.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-green-100 rounded-full p-3">
                    <Tablet className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Durabilidade</h3>
                  <p className="text-center text-gray-600 text-sm">
                    Equipamentos resistentes e seguros, projetados para uso infantil intensivo.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">Facilidade de Uso</h3>
                  <p className="text-center text-gray-600 text-sm">
                    Interface simplificada e controles adaptados para crianças com necessidades especiais.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
