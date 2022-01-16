import type { NavItem, NavTitles } from '$lib/type'
import { LANGS } from '../lib/const'
import fs from 'fs'
import path from 'path'

/*
 * Quick script to generate an index used for the navigation
 */

const SRC_DIR = 'static/contents'
const DST_FILE = 'static/content-index.json'

const getDirs = (p: string): string[] => {
    return fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
}

const getTitles = (dir: string, slug: string) => {
    const readTitleInFile = (file: string) => {
        try {
            const content = fs.readFileSync(file)
            return content.slice(2, content.indexOf('\n')).toString()
        } catch (e) {
            console.warn(`WARNING: ${file} is not found. The criteria ${path.dirname(file)} won't be available in the lang ${path.basename(file, 'md')}`)
            return ''
        }
    }
    
    const getTitleNumeration = (slug: string) => {
        return slug.split(path.sep).map((item) => {
            const extractedNumeration = item.match(/^(\d+)/)
            return `${extractedNumeration ? extractedNumeration[1]: ''}`
        }).join('.') + '.'
    }
    
    return LANGS.reduce((acc, lang) => {
        const file = `${lang}.md`
        const title = readTitleInFile(path.join(dir, file))
        if (title) {
            acc[lang] = `${getTitleNumeration(slug)} ${title}`
        }
        return acc
    }, {} as NavTitles) 
}

const bindPreviousNextItems = (hierarchy = {} as NavItem) => {
    if(!hierarchy.slug && hierarchy.children) {
        hierarchy.next = hierarchy.children[0].slug
    }

    if(!hierarchy.children) {
        return
    }

    hierarchy.children.forEach((entry, i, entries)  => {
        if (entry.children) {
            entry.next = entry.children[0].slug
            entry.children[0].previous = entry.slug
            if (i + 1 < entries.length) {
                entry.children[entry.children.length - 1].next = entries[i + 1].slug
            }
        } else if (i < entries.length - 1) {
            entry.next = entries[i + 1].slug 
        }

        if (i === 0) {
            entry.previous = hierarchy.slug
        } else if (entries[i - 1].children) {
            entry.previous = entries[i - 1].children?.slice(-1)[0].slug
        } else {
            entry.previous = entries[i - 1].slug
        }

        bindPreviousNextItems(entry)
    });
}

const getHierarchy = (rootPath = SRC_DIR, hierarchy = {} as NavItem): NavItem => {
    if(rootPath !== SRC_DIR) {
        hierarchy.slug = rootPath.split(path.sep).slice(2).join(path.sep) ?? '/'
        hierarchy.title = getTitles(rootPath, hierarchy.slug)
    }

    const dirs = getDirs(rootPath)

    if (dirs.length > 0) {
        hierarchy.children = dirs.map(dirPath => {
            return getHierarchy(path.join(rootPath, dirPath))
        })
    }

    return hierarchy
}

const main = () => {
    const hierarchy = getHierarchy()
    bindPreviousNextItems(hierarchy)
    fs.writeFileSync(DST_FILE, JSON.stringify(hierarchy, undefined, 2))
}

main()