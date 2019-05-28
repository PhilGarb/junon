const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/.cache/dev-404-page.js"))),
  "component---src-pages-arbeitsgruppen-js": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/arbeitsgruppen.js"))),
  "component---src-pages-impressum-js": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/impressum.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/index.js"))),
  "component---src-pages-kontakt-js": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/kontakt.js"))),
  "component---src-pages-netzwerk-js": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/netzwerk.js"))),
  "component---src-pages-partner-js": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/partner.js"))),
  "component---src-pages-projekte-js": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/projekte.js")))
}

