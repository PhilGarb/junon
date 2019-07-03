// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-arbeitsgruppen-js": () => import("/home/philipp/Projects/junon2/src/pages/arbeitsgruppen.js" /* webpackChunkName: "component---src-pages-arbeitsgruppen-js" */),
  "component---src-pages-partner-js": () => import("/home/philipp/Projects/junon2/src/pages/partner.js" /* webpackChunkName: "component---src-pages-partner-js" */),
  "component---src-pages-netzwerk-js": () => import("/home/philipp/Projects/junon2/src/pages/netzwerk.js" /* webpackChunkName: "component---src-pages-netzwerk-js" */),
  "component---src-pages-projekte-js": () => import("/home/philipp/Projects/junon2/src/pages/projekte.js" /* webpackChunkName: "component---src-pages-projekte-js" */),
  "component---src-templates-projekt-js": () => import("/home/philipp/Projects/junon2/src/templates/projekt.js" /* webpackChunkName: "component---src-templates-projekt-js" */),
  "component---cache-dev-404-page-js": () => import("/home/philipp/Projects/junon2/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-datenschutz-js": () => import("/home/philipp/Projects/junon2/src/pages/datenschutz.js" /* webpackChunkName: "component---src-pages-datenschutz-js" */),
  "component---src-pages-impressum-js": () => import("/home/philipp/Projects/junon2/src/pages/impressum.js" /* webpackChunkName: "component---src-pages-impressum-js" */),
  "component---src-pages-index-js": () => import("/home/philipp/Projects/junon2/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-thank-you-js": () => import("/home/philipp/Projects/junon2/src/pages/thank-you.js" /* webpackChunkName: "component---src-pages-thank-you-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/home/philipp/Projects/junon2/.cache/data.json")

