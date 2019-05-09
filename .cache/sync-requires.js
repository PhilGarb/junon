const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/.cache/dev-404-page.js"))),
  "component---src-pages-arbeitsgruppen-jsx": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/arbeitsgruppen.jsx"))),
  "component---src-pages-impressum-jsx": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/impressum.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/index.jsx"))),
  "component---src-pages-netzwerk-jsx": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/netzwerk.jsx"))),
  "component---src-pages-partner-jsx": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/partner.jsx"))),
  "component---src-pages-projekte-jsx": hot(preferDefault(require("/home/philipp/Projects/junon_website_v2/src/pages/projekte.jsx")))
}

