import { EMAIL_REGEX, TITLE } from "./const"

export const isEmailValid = (email: string): boolean => {
  return EMAIL_REGEX.test(String(email).toLowerCase());
}

/**
 * append the title of the website to the page title
 */
export const wrapTitle = (preTitle: string): string => `${preTitle} - ${TITLE}`