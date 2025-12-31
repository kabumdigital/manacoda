// SEO utilities & metadata for MANA CODA
import type { MetaDescriptor } from '@tanstack/react-router'

export const siteMetadata = {
  title: 'MANA CODA - Mulheres em Tecnologia Moçambique',
  description:
    'Comunidade moçambicana de mulheres em tecnologia, inovação e criatividade. Ela Conecta. Ela Cria. Ela Conquista.',
  url: 'https://manacoda.co.mz/',
  logo: 'https://manacoda.co.mz/logo.svg',
  ogImage: 'https://manacoda.co.mz/og-image.jpg',
  keywords: 'mulheres em tecnologia, STEM Moçambique, programação feminina, bootcamps tech, inovação feminina',
  locale: 'pt_MZ',
  siteName: 'MANA CODA',
}

export const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'MANA CODA',
  alternateName: 'MANA CODA Moçambique',
  description: 'Comunidade moçambicana de mulheres em tecnologia, inovação e criatividade',
  url: 'https://manacoda.co.mz',
  logo: 'https://manacoda.co.mz/logo.svg',
  sameAs: [
    'https://www.facebook.com/manacoda',
    'https://www.instagram.com/manacoda',
    'https://www.linkedin.com/company/manacoda',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'general inquiry',
    email: 'hello@manacoda.co.mz',
  },
}

export const buildHomeMeta = (): MetaDescriptor[] => [
  {
    title: siteMetadata.title,
  },
  {
    name: 'description',
    content: siteMetadata.description,
  },
  {
    name: 'keywords',
    content: siteMetadata.keywords,
  },
  {
    name: 'robots',
    content: 'index, follow',
  },
  {
    name: 'theme-color',
    content: '#1A2332',
  },
  {
    property: 'og:title',
    content: siteMetadata.title,
  },
  {
    property: 'og:description',
    content: siteMetadata.description,
  },
  {
    property: 'og:image',
    content: siteMetadata.ogImage,
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:url',
    content: siteMetadata.url,
  },
  {
    property: 'og:site_name',
    content: siteMetadata.siteName,
  },
  {
    property: 'og:locale',
    content: siteMetadata.locale,
  },
  {
    name: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    name: 'twitter:title',
    content: siteMetadata.title,
  },
  {
    name: 'twitter:description',
    content: siteMetadata.description,
  },
  {
    name: 'twitter:image',
    content: siteMetadata.ogImage,
  },
]
