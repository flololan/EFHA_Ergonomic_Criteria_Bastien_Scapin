import * as fs from 'fs'
import * as path from 'path'

export const getDirs = (p: string): string[] => {
  return fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isDirectory())
}

export const getFiles = (p: string): string[] => {
  return fs.readdirSync(p).filter(f => fs.statSync(path.join(p, f)).isFile())
}

export const getDocsHierarchy = () => {
  return getDirs(path.resolve('docs'))
}
