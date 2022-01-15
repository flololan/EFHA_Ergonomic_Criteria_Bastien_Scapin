import type { LANGS } from "./const";

// Lang code available in the interface
export type Langs = typeof LANGS
export type Lang = Langs[number]

/** NAVIGATION (parsing of the criteria) **/
export type EntrySlug = string;
export type NavTitles = Record<Lang, string>

export type NavStructure = {
    children: NavItem[]
    next: EntrySlug
}
export type NavItem = {
    slug: EntrySlug
    title: NavTitles
    resource: string
    children?: NavItem[]
    next?: EntrySlug
    previous?: EntrySlug
}