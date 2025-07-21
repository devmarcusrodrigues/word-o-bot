export const navigationRoutes = {
  home: "/",
  game: "/jogo",
  hardware: "/hardware",
  team: "/equipe",
  references: "/referencias",
  dashboard: "/dashboard",
  admin: "/admin",
  auth: "/auth",
  navigationTest: "/navigation-test",
} as const

export type NavigationRoute = (typeof navigationRoutes)[keyof typeof navigationRoutes]

export const navigationItems = [
  {
    name: "Início",
    href: navigationRoutes.home,
    icon: "Home",
    description: "Página principal do Palavrobô",
    public: true,
  },
  {
    name: "Jogo",
    href: navigationRoutes.game,
    icon: "Gamepad",
    description: "Download e informações do aplicativo",
    public: true,
  },
  {
    name: "Hardware",
    href: navigationRoutes.hardware,
    icon: "Hardware",
    description: "Equipamentos recomendados",
    public: true,
  },
  {
    name: "Equipe",
    href: navigationRoutes.team,
    icon: "Users",
    description: "Conheça nossa equipe",
    public: true,
  },
  {
    name: "Referências",
    href: navigationRoutes.references,
    icon: "BookOpen",
    description: "Base científica e pesquisas",
    public: true,
  },
  {
    name: "Dashboard",
    href: navigationRoutes.dashboard,
    icon: "User",
    description: "Painel do usuário",
    public: false,
  },
  {
    name: "Admin",
    href: navigationRoutes.admin,
    icon: "Settings",
    description: "Painel administrativo",
    public: false,
  },
] as const

export function validateNavigation(): boolean {
  // Check if all routes are properly defined
  const routes = Object.values(navigationRoutes)
  return routes.every((route) => typeof route === "string" && route.startsWith("/"))
}

export function getPublicNavigationItems() {
  return navigationItems.filter((item) => item.public)
}

export function getAllNavigationItems() {
  return navigationItems
}
