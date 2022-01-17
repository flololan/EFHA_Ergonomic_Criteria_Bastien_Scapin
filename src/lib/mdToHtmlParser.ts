import showdown from "showdown"

const classMap = {
  h1: 'text-start mt-5 mt-xxl-0',
  h2: 'text-start mt-5',
  h3: 'text-start mt-4',
  h4: 'text-start mt-3',
  ul: 'list-group list-group-flush',
  li: 'list-group-item',
  hr: 'my-5',
  pre: 'rounded-2',
  blockquote: 'alert alert-warning',
  table: 'table table-striped',
  img: 'w-100',
  code: 'rounded p-1 bg-black text-white'
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
