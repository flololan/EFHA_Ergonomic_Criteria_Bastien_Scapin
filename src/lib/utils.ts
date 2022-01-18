import { EMAIL_REGEX, TITLE } from "./const"

export const isEmailValid = (email: string): boolean => {
  return EMAIL_REGEX.test(String(email).toLowerCase());
}

export const getUrlWithUpdatedLang = (url: string, lang: string, newLang: string): string => {
  if (url.endsWith('/')) url = url.slice(0, -1)

  return `${url}`.replace(`/${lang}`, `/${newLang}`)
}

/**
 * append the title of the website to the page title
 */
export const getPageTitle = (preTitle: string): string => `${preTitle} - ${TITLE}`