import { getDirs } from "$lib/utils";
import * as path from "path";

export async function get() {
  return getDirs(path.resolve(__dirname, 'docs'))
}
