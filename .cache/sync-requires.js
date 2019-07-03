const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-arbeitsgruppen-js": hot(preferDefault(require("/home/philipp/Projects/junon2/src/pages/arbeitsgruppen.js"))),
  "component---src-pages-partner-js": hot(preferDefault(require("/home/philipp/Projects/junon2/src/pages/partner.js"))),
  "component---src-pages-netzwerk-js": hot(preferDefault(require("/home/philipp/Projects/junon2/src/pages/netzwerk.js"))),
  "component---src-pages-projekte-js": hot(preferDefault(require("/home/philipp/Projects/junon2/src/pages/projekte.js"))),
  "component---src-templates-projekt-js": hot(preferDefault(require("/home/philipp/Projects/junon2/src/templates/projekt.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/philipp/Projects/junon2/.cache/dev-404-page.js"))),
  "component---src-pages-datenschutz-js": hot(preferDefault(require("/home/philipp/Projects/junon2/src/pages/datenschutz.js"))),
  "component---src-pages-impressum-js": hot(preferDefault(require("/home/philipp/Projects/junon2/src/pages/impressum.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/philipp/Projects/junon2/src/pages/index.js"))),
  "component---src-pages-thank-you-js": hot(preferDefault(require("/home/philipp/Projects/junon2/src/pages/thank-you.js")))
}

