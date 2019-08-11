const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-projekt-js": hot(preferDefault(require("/home/philipp/projects/junon/src/templates/projekt.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/philipp/projects/junon/.cache/dev-404-page.js"))),
  "component---src-pages-datenschutz-js": hot(preferDefault(require("/home/philipp/projects/junon/src/pages/datenschutz.js"))),
  "component---src-pages-impressum-js": hot(preferDefault(require("/home/philipp/projects/junon/src/pages/impressum.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/philipp/projects/junon/src/pages/index.js"))),
  "component---src-pages-thank-you-js": hot(preferDefault(require("/home/philipp/projects/junon/src/pages/thank-you.js")))
}

