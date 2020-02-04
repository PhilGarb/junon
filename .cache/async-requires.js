// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-arbeitsgruppen-js": () => import("./../src/pages/arbeitsgruppen.js" /* webpackChunkName: "component---src-pages-arbeitsgruppen-js" */),
  "component---src-pages-partner-js": () => import("./../src/pages/partner.js" /* webpackChunkName: "component---src-pages-partner-js" */),
  "component---src-pages-netzwerk-js": () => import("./../src/pages/netzwerk.js" /* webpackChunkName: "component---src-pages-netzwerk-js" */),
  "component---src-pages-projekte-js": () => import("./../src/pages/projekte.js" /* webpackChunkName: "component---src-pages-projekte-js" */),
  "component---src-templates-projekt-js": () => import("./../src/templates/projekt.js" /* webpackChunkName: "component---src-templates-projekt-js" */),
  "component---cache-dev-404-page-js": () => import("./dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-datenschutz-js": () => import("./../src/pages/datenschutz.js" /* webpackChunkName: "component---src-pages-datenschutz-js" */),
  "component---src-pages-impressum-js": () => import("./../src/pages/impressum.js" /* webpackChunkName: "component---src-pages-impressum-js" */),
  "component---src-pages-index-js": () => import("./../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-thank-you-js": () => import("./../src/pages/thank-you.js" /* webpackChunkName: "component---src-pages-thank-you-js" */)
}

