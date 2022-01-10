import fs from 'fs'
import path from 'path'

const SRC_DIR = 'static/contents'
const DST_FILE = 'static/content-index.json'

export type IndexEntry = {
    key: string
    lang: 'fr' | 'en'
    path: string
    children?: IndexEntry[]
}

const getAllFiles = function(dirPath: string, arrayOfFiles: string[] = []) {
    const files = fs.readdirSync(dirPath)
    
    files.forEach(function(file) {
      if (fs.statSync(path.join(dirPath, "/", file)).isDirectory()) {
        getAllFiles(path.join(dirPath, "/", file), arrayOfFiles)
      } else {
        arrayOfFiles.push(path.join(dirPath, "/", file))
      }
    })
  
    return arrayOfFiles
}

const main = () => {
    const paths = getAllFiles(SRC_DIR);
    paths.sort((a, b) => a.length - b.length)
    
    const content = paths.reduce((acc, p) => {
        const parsedPath = path.parse(p)

        const indexEntry = {
            key: parsedPath.dir.split(path.sep).pop(),
            lang: parsedPath.name as IndexEntry['lang'],
            path: p,
        }

        const parentKey = parsedPath.dir.split(path.sep).reverse()[1]
        const isChildOfAtIndex = acc.findIndex((entry) => entry.key === parentKey)

        if (isChildOfAtIndex === -1) {
            acc.push(indexEntry)
        } else if (acc[isChildOfAtIndex].children) {
            acc[isChildOfAtIndex].children.push(indexEntry)
        } else {
            acc[isChildOfAtIndex].children = [indexEntry]
        }

        return acc
    }, [] as IndexEntry[])

    fs.writeFileSync(DST_FILE, JSON.stringify(content))    
}

main()