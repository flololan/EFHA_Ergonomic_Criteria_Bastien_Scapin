export const LANGS = [ 'en', 'fr'] as const
export const DEFAULT_LANG = 'en'

export const TITLE = 'is-ergonomic'
export const DEVS = [
  {
    name: '@johannchopin',
    link: 'https://github.com/johannchopin'
  },
  {
    name: '@Alexandre Guidoux',
    link: 'https://github.com/Lyokolux'
  },
  {
    name: '@Florian Weiss',
    link: 'https://fweiss.com/'
  }
]

/** `/[lang].md` should be added to fetch this ressource */
export const CRITERIA_PRESENTATION_PAGE = '/contents'
export const NAVI_HIERARCHY_RESOURCE = "/content-index.json";

export const EMAIL_REGEX = /[^@\s]+@[^@\s]+\.[^@\s]+/

export const REPO_LINK = 'https://github.com/flololan/EFHA_Ergonomic_Criteria_Bastien_Scapin'

export const EDIT_CRITERIA_ROOT_PATH = `${REPO_LINK}/edit/main/static/contents`

export const DYSLEXIC_CLASSNAME = 'dyslexic-help'
