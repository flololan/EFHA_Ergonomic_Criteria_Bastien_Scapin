import { EMAIL_REGEX } from "./const"

export const isEmailValid = (email: string): boolean => {
  return EMAIL_REGEX.test(String(email).toLowerCase());
}
