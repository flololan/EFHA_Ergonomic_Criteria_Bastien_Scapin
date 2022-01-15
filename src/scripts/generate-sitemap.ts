import fs from 'fs'
import type { NavItem, NavStructure } from '../lib/type'
import { LANGS, NAVI_HIERARCHY_RESOURCE } from '../lib/const'

const OUTPUT_FILE = 'static/sitemap.xml'
const BASE_URL = "https://efha-ergonomic-criteria-bastien-scapin.vercel.app"
const LAST_MOD = "2022-01-18"
const PAGES = [
  "",
  "contact",
  "docs",
]

const nav: NavStructure = JSON.parse(fs.readFileSync(`./static${NAVI_HIERARCHY_RESOURCE}`).toString())

const toUrl = (lang: string, slug: string) => `${BASE_URL}/${lang}/${slug}`

const navToCriteriaSlugList = (navItems: NavItem[]): string[] => {
  return navItems.reduce((acc, item) => {
    acc.push(item.slug)
    if(item.children) {
      acc.push(...navToCriteriaSlugList(item.children))
    }
    return acc
  }, [] as string[])
}


const render = () => {
  const criteriaSlugs = navToCriteriaSlugList(nav.children)
  
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${ LANGS.map((lang) => `${
      PAGES.map((page) => `    <url>
        <loc>${toUrl(lang, page)}</loc>
        <lastmod>${LAST_MOD}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.5</priority>
    </url>`)
      .join('\n')
    }
    ${
      criteriaSlugs.map((page) => `    <url>
        <loc>${toUrl(lang, page)}</loc>
        <lastmod>${LAST_MOD}</lastmod>
        <changefreq>monthly</changefreq>  
        <priority>0.8</priority>
    </url>`)
      .join('\n')
    }
  `).join('\n')}
  </urlset>
</xml>`
}

fs.writeFileSync(OUTPUT_FILE, render())