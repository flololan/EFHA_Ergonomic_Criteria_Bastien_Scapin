import showdown from "showdown"

const classMap = {
  h1: 'mt-6 text-3xl font-bold',
  h2: 'mt-4 text-2xl font-bold',
  h3: 'mt-2 text-xl',
  h4: 'mt-3',
  ul: 'pl-2',
  li: 'pl-2',
  pre: 'rounded-2',
  code: 'rounded p-1 bg-black text-white',
  blockquote: 'alert alert-warning',
  table: 'table table-striped',
  img: 'w-100'
}

const classInjectionExt = Object.keys(classMap)
  .map(key => ({
    type: 'output',
    regex: new RegExp(`<${key}(.*)>`, 'g'),
    replace: `<${key} class="${classMap[key]}" $1>`
  }));

const getIdLinkReplacerExt = (pageSlug: string) => {
  return {
    type: 'output',
    regex: new RegExp(` href="#(.*)"`, 'g'),
    replace: ` href="${pageSlug}#$1"`
  }
}


export const getMdAsHtml = (markdown: string, params: { pageSlug: string }): string => {
  const converter = new showdown.Converter({ 
    disableForced4SpacesIndentedSublists: true,
    ghCompatibleHeaderId: true,
    tables: true,
    extensions: [
      classInjectionExt,
      getIdLinkReplacerExt(params.pageSlug)
    ]
  });
  return converter.makeHtml(markdown);
}