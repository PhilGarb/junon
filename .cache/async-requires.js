// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-projekt-js": () => import("/home/philipp/Projects/junon/src/templates/projekt.js" /* webpackChunkName: "component---src-templates-projekt-js" */),
  "component---cache-dev-404-page-js": () => import("/home/philipp/Projects/junon/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-impressum-js": () => import("/home/philipp/Projects/junon/src/pages/impressum.js" /* webpackChunkName: "component---src-pages-impressum-js" */),
  "component---src-pages-index-js": () => import("/home/philipp/Projects/junon/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/philipp/Projects/junon/.cache/data.json")

