import fs from 'fs'
import path from 'path'

/*
 * Quick script to generate an index used for the navigation
 */

const SRC_DIR = 'static/contents'
const DST_FILE = 'static/content-index.json'

const LANGS = ['fr', 'en'] as const
type Langs = typeof LANGS[number]

type EntrySlug = string;
type Titles = Record<Langs, string>
export type IndexEntry = {
    slug: EntrySlug
    title: Titles
    resource: string
    children?: Omit<IndexEntry, 'children'>[]
    next?: EntrySlug
    previous?: EntrySlug
}

export const getDirs = (p: string): string[] => {
return fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
}

const getAllDirectories = function(dirPath: string, arrayOfDirectories: string[] = []) {
    const files = fs.readdirSync(dirPath)
    
    files.forEach((file) => {
        const subpath = path.join(dirPath, "/", file)
        if (fs.statSync(subpath).isDirectory()) {
            arrayOfDirectories.push(subpath)
            getAllDirectories(subpath, arrayOfDirectories)
        }
    })

    return arrayOfDirectories
}

const getTitles = (dir: string, slug: string) => {
    const readTitleInFile = (file) => {
        const content = fs.readFileSync(file)
        return content.slice(2, content.indexOf('\n')).toString()
    }
    
    const getTitleNumeration = (slug: string) => {
        return slug.split('/').reduce((acc, item) => `${acc}${item.match(/^(\d+)/)[1]}.`, '')
    }
    
    return LANGS.reduce((acc, lang) => {
        acc[lang] = `${getTitleNumeration(slug)} ${readTitleInFile(path.join(dir, `${lang}.md`))}`
        return acc
    }, {} as Titles) 
}

const getEntryFromPath = (acc: IndexEntry[], pathToFile: string): IndexEntry[] => {
    const slug = pathToFile.split(path.sep).slice(2).join(path.sep)
    const indexEntry = {
        slug,
        title: getTitles(pathToFile, slug),
        resource: pathToFile,
    }

    const parentKey = indexEntry.slug.split(path.sep)[0]
    const isChildOfAtIndex = (parentKey) ? acc.findIndex((entry) => entry.slug === parentKey): undefined

    if (isChildOfAtIndex === -1) {
        acc.push(indexEntry)
    } else if (acc[isChildOfAtIndex].children) {
        acc[isChildOfAtIndex].children.push(indexEntry)
    } else {
        acc[isChildOfAtIndex].children = [indexEntry]
    }

    return acc
}

const addLinks = (content: IndexEntry[]) => {
    const addNextLink = (entry: IndexEntry, index: number, isChild = false, entries=content) => {
        if (entry.children) {
            entry.next = entry.children[0].slug
        } else if (isChild) {
            const children = entries[index].children
            const childIndex = children.findIndex((e) => e.slug === entry.slug)
            const currentEntry = children[childIndex]
            currentEntry.next = (childIndex + 1 < children.length) ? children[childIndex + 1].slug : (index + 1 < entries.length) ? entries[index + 1].slug: undefined
        } else if (index + 1 < entries.length) {
            entry.next = entries[index+1].slug
        }
    }

    const addPreviousLink = (entry: IndexEntry, index: number, isChild = false, entries=content) => {
        if (isChild) {
            const children = entries[index].children
            const childIndex = children.findIndex((e) => e.slug === entry.slug)
            const currentEntry = children[childIndex]
            currentEntry.previous = (childIndex - 1 >= 0) ? children[childIndex - 1].slug : entries[index].slug
        } else if (index > 0) {
            const previousEntry = entries[index - 1]
            entry.previous = previousEntry.children ? previousEntry.children.slice(-1)[0].slug : previousEntry.slug
        }
    }

    content.forEach((entry, i) => {
        addPreviousLink(entry, i)
        addNextLink(entry, i)

        // Second level
        if (entry.children) {
            entry.children.forEach((entry) => {
                addPreviousLink(entry, i, true)
                addNextLink(entry, i, true)
            })
        }
    })
}

const getHierarchy = (path: string, hierarchy = {}) => {
    // @ts-ignore
    hierarchy.slug = path
    const dirs = getDirs(path)

    // @ts-ignore
    hierarchy.children = dirs.map(dirPath => {
        return getHierarchy(path + '/' + dirPath)
    })

    return hierarchy
}

const main = () => {
    /*
    const paths = getAllDirectories(SRC_DIR);

    const content = paths.reduce(getEntryFromPath, [] as IndexEntry[])
    addLinks(content) // in-place operation

    fs.writeFileSync(DST_FILE, JSON.stringify(content, undefined, 2))
    */

    console.log(getHierarchy(SRC_DIR));
}

main()