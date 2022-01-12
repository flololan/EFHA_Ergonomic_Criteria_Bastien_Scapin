import fs from 'fs'
import path from 'path'

/*
 * Quick script to generate an index used for the navigation
 */

const SRC_DIR = 'static/contents'
const DST_FILE = 'static/content-index.json'

type EntrySlug = string;
export type IndexEntry = {
    slug: EntrySlug
    resource: string
    children?: IndexEntry[]
    next?: EntrySlug
    previous?: EntrySlug
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

const getContentFromPath = (acc: IndexEntry[], pathToFile: string): IndexEntry[] => {
    const indexEntry = {
        slug: pathToFile.split(path.sep).slice(2).join(path.sep), 
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
    const addNextLink = (entry: IndexEntry, i: number, isChild = false, entries=content) => {
        if (entry.children) {
            entry.next = entry.children[0].slug
        } else if (isChild) {
            const children = entries[i].children
            const childIndex = children.findIndex((e) => e.slug === entry.slug)
            const currentEntry = children[childIndex]
            currentEntry.next = (childIndex + 1 < children.length) ? children[childIndex + 1].slug : undefined
        } else if (i + 1 < entries.length) {
            entry.next = entries[i+1].slug
        }
    }

    const addPreviousLink = (entry: IndexEntry, index: number, isChild = false, entries=content) => {
        if (isChild) {
            const children = entries[index].children
            const childIndex = children.findIndex((e) => e.slug === entry.slug)
            const currentEntry = children[childIndex]
            currentEntry.previous = (childIndex - 1 > 0) ? children[childIndex - 1].slug : entries[index].slug
        } else if (index > 0) {
            entry.previous = entries[index - 1].slug
        }
    }

    content.forEach((entry, i) => {
        addNextLink(entry, i)
        addPreviousLink(entry, i)

        // Second level
        if (entry.children) {
            entry.children.forEach((entry) => {
                addNextLink(entry, i, true)
                addPreviousLink(entry, i, true)
            })
        }
    })
}

const main = () => {
    const paths = getAllDirectories(SRC_DIR);

    const content = paths.reduce(getContentFromPath, [] as IndexEntry[])
    addLinks(content) // in-place operation

    fs.writeFileSync(DST_FILE, JSON.stringify(content, undefined, 2))    
}

main()