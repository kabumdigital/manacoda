import {
  HeadContent,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'
import globalsCss from '../styles/globals.css?url'
import { structuredData } from '../lib/seo'
import { LenisProvider } from '@/components/layout/LenisProvider'

import type { QueryClient } from '@tanstack/react-query'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'MANA CODA - Mulheres em Tecnologia Moçambique',
      },
      {
        name: 'description',
        content:
          'Comunidade moçambicana de mulheres em tecnologia, inovação e criatividade. Ela Conecta. Ela Cria. Ela Conquista.',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'stylesheet',
        href: globalsCss,
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify(structuredData),
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <HeadContent />
      </head>
      <body className="bg-brand-navy text-white">
        <LenisProvider>
          <a href="#main-content" className="skip-to-main">
            Saltar para o conteúdo principal
          </a>
          <Header />
          <main id="main-content">{children}</main>
          <Footer />
          {import.meta.env.DEV && (
            <TanStackDevtools
              config={{
                position: 'bottom-right',
              }}
              plugins={[
                {
                  name: 'Tanstack Router',
                  render: <TanStackRouterDevtoolsPanel />,
                },
                TanStackQueryDevtools,
              ]}
            />
          )}
        </LenisProvider>
        <Scripts />
      </body>
    </html>
  )
}
