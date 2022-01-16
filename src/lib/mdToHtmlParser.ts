import showdown from "showdown"

const classMap = {
  h1: 'mt-5 mt-xxl-0',
  h3: 'mt-5',
  h4: 'mt-4',
  ul: 'list-group list-group-flush',
  li: 'list-group-item',
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