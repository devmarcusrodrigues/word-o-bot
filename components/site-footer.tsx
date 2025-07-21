import Link from "next/link"
import { Volume2, Heart, Mail, Phone, MapPin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-2 shadow-lg">
                <Volume2 className="h-6 w-6 text-white" />
              </div>
              <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Palavrobô
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Ajudando crianças com Síndrome de Down a desenvolver habilidades de fala através de tecnologia inovadora e
              amor.
            </p>
            <div className="flex items-center space-x-1 text-sm text-slate-400">
              <Heart className="h-4 w-4 text-red-400" />
              <span>Feito com amor no Brasil</span>
            </div>
          </div>

          {/* Main Navigation Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Navegação</h3>
            <nav className="space-y-2">
              {[
                { name: "Início", href: "/" },
                { name: "Jogo", href: "/jogo" },
                { name: "Hardware", href: "/hardware" },
                { name: "Equipe", href: "/equipe" },
                { name: "Referências", href: "/referencias" },
                { name: "Dashboard", href: "/dashboard" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Suporte</h3>
            <nav className="space-y-2">
              {[
                { name: "Central de Ajuda", href: "#" },
                { name: "Termos de Uso", href: "#" },
                { name: "Política de Privacidade", href: "#" },
                { name: "Acessibilidade", href: "#" },
                { name: "Contato", href: "#" },
                { name: "Admin", href: "/admin" },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-slate-300 hover:text-white transition-colors text-sm hover:translate-x-1 transform duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Mail className="h-4 w-4 text-blue-400" />
                <span>contato@palavrobo.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <Phone className="h-4 w-4 text-green-400" />
                <span>+55 (11) 9999-9999</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-slate-300">
                <MapPin className="h-4 w-4 text-red-400" />
                <span>São Paulo, Brasil</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2024 Palavrobô. Todos os direitos reservados.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <span className="text-slate-400 text-sm">Versão 2.1.0</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" title="Sistema Online" />
          </div>
        </div>
      </div>
    </footer>
  )
}
