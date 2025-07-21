import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, Linkedin, Github, Heart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"

const teamMembers = [
  {
    id: 1,
    name: "Dr. Ana Silva",
    role: "Fundadora & CEO",
    department: "Liderança",
    bio: "Fonoaudióloga especializada em Síndrome de Down com 15 anos de experiência. Mãe de uma criança com Síndrome de Down, criou o Palavrobô para ajudar outras famílias.",
    expertise: ["Fonoaudiologia", "Síndrome de Down", "Educação Especial"],
    contact: {
      email: "ana@palavrobo.com",
      linkedin: "ana-silva-palavrobo",
    },
  },
  {
    id: 2,
    name: "Carlos Mendes",
    role: "CTO & Desenvolvedor Principal",
    department: "Tecnologia",
    bio: "Engenheiro de software com paixão por tecnologia educativa. Especialista em desenvolvimento mobile e inteligência artificial aplicada à educação.",
    expertise: ["Desenvolvimento Mobile", "IA", "UX/UI Design"],
    contact: {
      email: "carlos@palavrobo.com",
      github: "carlos-palavrobo",
    },
  },
  {
    id: 3,
    name: "Dra. Maria Santos",
    role: "Psicóloga Infantil",
    department: "Desenvolvimento",
    bio: "Psicóloga especializada em desenvolvimento infantil e necessidades especiais. Responsável pela metodologia pedagógica do Palavrobô.",
    expertise: ["Psicologia Infantil", "Desenvolvimento Cognitivo", "Terapia Comportamental"],
    contact: {
      email: "maria@palavrobo.com",
      linkedin: "maria-santos-psi",
    },
  },
  {
    id: 4,
    name: "João Oliveira",
    role: "Designer UX/UI",
    department: "Design",
    bio: "Designer especializado em interfaces para crianças com necessidades especiais. Foca em criar experiências intuitivas e acessíveis.",
    expertise: ["Design de Interface", "Acessibilidade", "Design Inclusivo"],
    contact: {
      email: "joao@palavrobo.com",
      linkedin: "joao-oliveira-design",
    },
  },
  {
    id: 5,
    name: "Fernanda Costa",
    role: "Especialista em Conteúdo",
    department: "Educação",
    bio: "Pedagoga com especialização em educação inclusiva. Desenvolve o conteúdo educacional e atividades do aplicativo.",
    expertise: ["Pedagogia", "Educação Inclusiva", "Desenvolvimento Curricular"],
    contact: {
      email: "fernanda@palavrobo.com",
      linkedin: "fernanda-costa-edu",
    },
  },
  {
    id: 6,
    name: "Roberto Lima",
    role: "Engenheiro de Hardware",
    department: "Hardware",
    bio: "Engenheiro eletrônico responsável pelo desenvolvimento dos dispositivos físicos que complementam o Palavrobô.",
    expertise: ["Engenharia Eletrônica", "IoT", "Prototipagem"],
    contact: {
      email: "roberto@palavrobo.com",
      github: "roberto-hardware",
    },
  },
]

const getDepartmentColor = (department: string) => {
  switch (department) {
    case "Liderança":
      return "bg-purple-100 text-purple-800"
    case "Tecnologia":
      return "bg-blue-100 text-blue-800"
    case "Desenvolvimento":
      return "bg-green-100 text-green-800"
    case "Design":
      return "bg-pink-100 text-pink-800"
    case "Educação":
      return "bg-yellow-100 text-yellow-800"
    case "Hardware":
      return "bg-orange-100 text-orange-800"
    default:
      return "bg-gray-100 text-gray-800"
  }
}

export default function TeamPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600">Nossa Equipe</h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conheça os profissionais dedicados que tornam o Palavrobô uma realidade, unidos pela paixão de ajudar
                  crianças a se comunicarem melhor.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="container px-4 md:px-6 mb-6">
          <Breadcrumb items={[{ name: "Equipe" }]} />
        </div>

        {/* Team Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <Card key={member.id} className="flex flex-col h-full">
                  <CardContent className="flex flex-col p-6 h-full">
                    <div className="flex flex-col items-center text-center mb-4">
                      <div className="aspect-square mb-4 bg-gray-100 rounded-full flex items-center justify-center border-2 border-dashed border-gray-300 w-32 h-32">
                        <Image
                          alt={member.name}
                          className="aspect-square overflow-hidden rounded-full object-cover"
                          height="128"
                          src="/placeholder.svg?height=128&width=128"
                          width="128"
                        />
                      </div>
                      <div className="space-y-2">
                        <Badge className={getDepartmentColor(member.department)}>{member.department}</Badge>
                        <h3 className="text-xl font-bold">{member.name}</h3>
                        <p className="text-blue-600 font-medium">{member.role}</p>
                      </div>
                    </div>

                    <div className="flex-1 space-y-4">
                      <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-sm">Especialidades:</h4>
                        <div className="flex flex-wrap gap-1">
                          {member.expertise.map((skill, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center space-x-3 mt-4 pt-4 border-t">
                      {member.contact.email && (
                        <Link
                          href={`mailto:${member.contact.email}`}
                          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <Mail className="h-4 w-4 text-gray-600" />
                        </Link>
                      )}
                      {member.contact.linkedin && (
                        <Link
                          href={`https://linkedin.com/in/${member.contact.linkedin}`}
                          className="p-2 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors"
                        >
                          <Linkedin className="h-4 w-4 text-blue-600" />
                        </Link>
                      )}
                      {member.contact.github && (
                        <Link
                          href={`https://github.com/${member.contact.github}`}
                          className="p-2 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                        >
                          <Github className="h-4 w-4 text-gray-600" />
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="bg-red-100 rounded-full p-4 mx-auto mb-4 w-16 h-16 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-red-600" />
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nossa Missão</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Somos uma equipe multidisciplinar unida por um propósito comum: criar tecnologia que transforme a vida
                  de crianças com Síndrome de Down e suas famílias.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 max-w-5xl mt-8">
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="text-xl font-bold">💝 Paixão</h3>
                  <p className="text-center text-gray-600 text-sm">
                    Cada membro da nossa equipe tem uma conexão pessoal com nossa causa.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="text-xl font-bold">🔬 Ciência</h3>
                  <p className="text-center text-gray-600 text-sm">
                    Baseamos nosso trabalho em pesquisas científicas e melhores práticas.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <h3 className="text-xl font-bold">🤝 Colaboração</h3>
                  <p className="text-center text-gray-600 text-sm">
                    Trabalhamos em estreita colaboração com famílias e profissionais.
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
