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
    title: "CONTRIBUIÇÃO FONOAUDIOLÓGICA CLÍNICA PARAODESENVOLVIMENTO DA CRIANÇA COM SÍNDROME DE DOWN",
    authors: "Sena, M. B. S.",
    journal: "Graduação em Fonoaudiologia",
    year: 2018,
    pages: "31",
    category: "Desenvolvimento da Fala",
    abstract:
      "A atuação fonoaudiológica ajudará na evolução das habilidades de fala, e em seu processo de habilitação e reabilitação. Este trabalho tempor objetivo, demonstrar o papel do fonoaudiólogo como facilitador no processodeevolução da criança com SD.",
    link: "https://repositorio.pgsscogna.com.br/bitstream/123456789/27081/1/MARIA_BEATRIZ_SENA_ATIVIDADE%204.pdf",
  },
  {
    id: 2,
    title: "O letramento na síndrome de down: o papel da família e da escola",
    authors: "Feistauer, C. M.",
    journal: "Programa de Pós-Graduação em Letras",
    year: 2014,
    pages: "129",
    category: "Fala e Escrita",
    abstract:
      "Numa sociedade de cultura letrada, em que a leitura é valorizada, não compreender os materiais escritos a circular socialmente é viver em um mundo paralelo. Por isso a leitura e a escrita tornam-se via de acesso para a inclusão social, uma vez que constituem aprendizagens fundamentais para a inserção dos indivíduos nas sociedades ditas letradas. Não obstante, é relevante reconhecer não somente o domínio do código da leitura e da escrita, mas também a competência como leitor e escritor de seu próprio texto, de sua própria história, incluindo-se aqui também indivíduos com necessidades educativas especiais como é o caso das pessoas com Síndrome de Down.",
    link: "https://repositorio.pucrs.br/dspace/handle/10923/6959",
  },
  {
    id: 3,
    title: "Processos fonológicos na fala de sujeitos com síndrome de down: uma interpretação via geometria de traços e teoria métrica da sílaba",
    authors: "Oliveira, M., Pacheco, V., Pereira-Souza, L. P.",
    journal: "Cadernos de ESTUDOS LINGUÍSTICOS - UNICAMP",
    year: 2017,
    pages: "20",
    category: "Fonoaudiologia",
    abstract:
      "Entre as várias descrições que a literatura especializada registra sobre as características da pessoa com síndrome de Down (SD), destacam-se o déficit cognitivo, o atraso no desenvolvimento linguístico e a fala um tanto peculiar com omissões e trocas de segmentos. Na produção oral, essas modificações comprometem o desempenho fonético e podem, em certa medida, comprometer a inteligibilidade da fala dessas pessoas.",
    link: "https://periodicos.sbu.unicamp.br/ojs/index.php/cel/article/view/8649883/16622",
  },
  {
    id: 4,
    title: "A inclusão da criança síndrome de Down na escola regular",
    authors: "Giacomini, V.",
    journal: "TCC Educação Especial",
    year: 2022,
    pages: "14",
    category: "Inclusão na Escola",
    abstract:
      "A escola é contextualizada como método de socialização e aprendizagem para todos, um local que é resguardado por lei, sendo obrigatória e conceituada como educação básica, enquadrada em três níveis: infantil, fundamental e médio somente a partir do ano de 1996.Porém quando trata-se de crianças com alguma deficiência essa “obrigatoriedade” que vem sendo citada desde o ano de 1934, diverge um pouco, visto que o início da inclusão de alunos com deficiência na escola, foi marcado por um imensa exclusão, segregação e integração.",
    link: "https://repositorio.uninter.com/handle/1/888",
  },
  {
    id: 5,
    title: "PROCESSO DE AQUISIÇÃO DA LÍNGUA DE SINAIS POR CRIANÇAS SURDAS",
    authors: "Almeida, M. G., Almeida, H. L. N.",
    journal: "Cognitive Science in Education",
    year: 2019,
    volume: "9(10)",
    pages: "392-401",
    category: "Aquisição de Linguagem para Surdos",
    abstract:
      "A linguagem é considerada crucial para o desenvolvimento da criança, especificamente, ao que se refere à deficiência auditiva. Este trabalho busca despertar, no leitor, o interesse pelo o processo de aquisição da língua de sinais por crianças surdas.",
    link: "https://fatece.edu.br/arquivos/arquivos-revistas/trilhas/volume9/24.pdf",
  },
  {
    id: 6,
    title: "LIBRAS: LÍNGUA BRASILEIRA DE SINAIS E AS POSSIBILIDADES DE COMUNICAÇÃO QUE OFERECE À PESSOA COM SURDEZ",
    authors: "Nascimento, S. M. C. C. do",
    journal: "Revista Acadêmica Online",
    year: 2018,
    volume: " 4(20)",
    pages: "12",
    doi: 10.36238,
    category: "Intervenção Precoce",
    abstract:
      "Com o presente artigo, venho fazer um estudo sobre um dos meios de comunicação da pessoa com surdez, a LIBRAS (Língua Brasileira de Sinais), destacando sua importância na comunicação dos surdos, um breve relato histórico da língua de sinais no Brasil e na França, destacando seus iniciadores nos dois países e a origem da língua de sinais brasileira..",
    link: "https://revistaacademicaonline.com/index.php/rao/article/view/557",
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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-800 dark:to-gray-900">
          <div className="w-full max-w-7xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/" className="inline-flex items-center justify-center text-blue-600 hover:text-blue-700 dark:text-blue-300 dark:hover:text-blue-500 mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao início
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-blue-600 dark:text-white">
                  Referências Científicas
                </h1>
                <p className="max-w-[900px] text-gray-600 dark:text-blue-200 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Pesquisas e estudos científicos que fundamentam o desenvolvimento do Palavrobô e suas metodologias.
                </p>
              </div>
            </div>
          </div>
        </section>

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
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-950">
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
