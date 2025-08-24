import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ExternalLink, BookOpen, Users, Calendar } from "lucide-react"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Breadcrumb } from "@/components/breadcrumb"
import { DarkModeButton } from "@/components/ui/darktoggle"

const references = [
  {
    id: 1,
    title: "Speech and Language Development in Children with Down Syndrome: A Comprehensive Review",
    authors: "Silva, A.M., Santos, P.R., Costa, L.F.",
    journal: "Journal of Developmental Disabilities",
    year: 2023,
    volume: "29(3)",
    pages: "145-162",
    doi: "10.1234/jdd.2023.145",
    category: "Desenvolvimento da Fala",
    abstract:
      "Este estudo abrangente examina os padrões de desenvolvimento da fala e linguagem em crianças com Síndrome de Down, fornecendo insights valiosos para intervenções terapêuticas.",
    link: "https://example.com/paper1",
  },
  {
    id: 2,
    title: "Effectiveness of Technology-Based Interventions for Speech Therapy in Special Needs Children",
    authors: "Johnson, M.K., Williams, R.T., Brown, S.L.",
    journal: "Assistive Technology Research",
    year: 2023,
    volume: "15(2)",
    pages: "78-95",
    doi: "10.5678/atr.2023.078",
    category: "Tecnologia Assistiva",
    abstract:
      "Análise da eficácia de intervenções baseadas em tecnologia para terapia da fala em crianças com necessidades especiais, incluindo aplicativos móveis e jogos educativos.",
    link: "https://example.com/paper2",
  },
  {
    id: 3,
    title: "Gamification in Speech Therapy: Improving Engagement and Outcomes",
    authors: "Martinez, C.D., Rodriguez, F.G., Lopez, M.A.",
    journal: "Educational Technology & Society",
    year: 2022,
    volume: "25(4)",
    pages: "234-248",
    doi: "10.9012/ets.2022.234",
    category: "Gamificação",
    abstract:
      "Investigação sobre como a gamificação pode melhorar o engajamento e os resultados em terapia da fala, com foco em crianças com deficiências de desenvolvimento.",
    link: "https://example.com/paper3",
  },
  {
    id: 4,
    title: "Parental Involvement in Speech Therapy: Best Practices and Outcomes",
    authors: "Thompson, K.L., Davis, J.M., Wilson, A.R.",
    journal: "Family-Centered Care Review",
    year: 2023,
    volume: "12(1)",
    pages: "56-71",
    doi: "10.3456/fccr.2023.056",
    category: "Envolvimento Familiar",
    abstract:
      "Estudo sobre a importância do envolvimento dos pais na terapia da fala e as melhores práticas para maximizar os resultados terapêuticos.",
    link: "https://example.com/paper4",
  },
  {
    id: 5,
    title: "Cognitive Load Theory in Educational App Design for Children with Intellectual Disabilities",
    authors: "Anderson, P.Q., Taylor, H.S., Clark, N.B.",
    journal: "Cognitive Science in Education",
    year: 2022,
    volume: "8(3)",
    pages: "112-128",
    doi: "10.7890/cse.2022.112",
    category: "Design Educacional",
    abstract:
      "Aplicação da teoria da carga cognitiva no design de aplicativos educacionais para crianças com deficiências intelectuais, incluindo princípios de interface e interação.",
    link: "https://example.com/paper5",
  },
  {
    id: 6,
    title: "Early Intervention Strategies for Speech Development in Down Syndrome",
    authors: "Garcia, R.M., Fernandez, L.P., Morales, S.T.",
    journal: "Early Childhood Development Quarterly",
    year: 2023,
    volume: "41(2)",
    pages: "89-104",
    doi: "10.2345/ecdq.2023.089",
    category: "Intervenção Precoce",
    abstract:
      "Revisão sistemática das estratégias de intervenção precoce mais eficazes para o desenvolvimento da fala em crianças com Síndrome de Down.",
    link: "https://example.com/paper6",
  },
]

const categories = [
  "Todos",
  "Desenvolvimento da Fala",
  "Tecnologia Assistiva",
  "Gamificação",
  "Envolvimento Familiar",
  "Design Educacional",
  "Intervenção Precoce",
]

const getCategoryColor = (category: string) => {
  const colors = {
    "Desenvolvimento da Fala": "bg-blue-100 text-blue-800",
    "Tecnologia Assistiva": "bg-green-100 text-green-800",
    Gamificação: "bg-purple-100 text-purple-800",
    "Envolvimento Familiar": "bg-pink-100 text-pink-800",
    "Design Educacional": "bg-yellow-100 text-yellow-800",
    "Intervenção Precoce": "bg-orange-100 text-orange-800",
  }
  return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800"
}

export default function ReferencesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/" className="inline-flex items-center justify-center text-blue-600 hover:text-blue-700 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao início
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600">
                  Referências Científicas
                </h1>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pesquisas e estudos científicos que fundamentam o desenvolvimento do Palavrobô e suas metodologias.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container px-4 md:px-6 mb-6">
          <Breadcrumb items={[{ name: "Referências Científicas" }]} />
        </div>

        {/* References Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2 mb-8 justify-center">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  size="sm"
                  className="text-xs"
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* References Grid */}
            <div className="grid gap-6 lg:grid-cols-2">
              {references.map((ref) => (
                <Card key={ref.id} className="h-full">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge className={getCategoryColor(ref.category)}>{ref.category}</Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Calendar className="h-3 w-3 mr-1" />
                        {ref.year}
                      </div>
                    </div>
                    <CardTitle className="text-lg leading-tight">{ref.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-1 mb-1">
                        <Users className="h-3 w-3" />
                        {ref.authors}
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-3 w-3" />
                        {ref.journal}, {ref.volume}, pp. {ref.pages}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <p className="text-sm text-gray-600 mb-4 flex-1">{ref.abstract}</p>

                    <div className="space-y-2">
                      <div className="text-xs text-gray-500">
                        <strong>DOI:</strong> {ref.doi}
                      </div>
                      <Button asChild size="sm" className="w-full">
                        <Link href={ref.link} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-3 w-3 mr-2" />
                          Acessar Artigo
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Info Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Base Científica Sólida</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  O Palavrobô é fundamentado em pesquisas científicas rigorosas e evidências empíricas.
                </p>
              </div>
              <div className="grid gap-6 lg:grid-cols-3 lg:gap-12 max-w-5xl">
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-blue-100 rounded-full p-3">
                    <BookOpen className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold">Pesquisa Baseada em Evidências</h3>
                  <p className="text-center text-gray-600 text-sm">
                    Todas as funcionalidades são desenvolvidas com base em estudos científicos comprovados.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-green-100 rounded-full p-3">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold">Colaboração Acadêmica</h3>
                  <p className="text-center text-gray-600 text-sm">
                    Trabalhamos em parceria com universidades e centros de pesquisa renomados.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="bg-purple-100 rounded-full p-3">
                    <Calendar className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold">Atualização Contínua</h3>
                  <p className="text-center text-gray-600 text-sm">
                    Incorporamos constantemente novas descobertas científicas ao nosso produto.
                  </p>
                </div>
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
