const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-projekt-js": hot(preferDefault(require("/home/philipp/Projects/junon/src/templates/projekt.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/philipp/Projects/junon/.cache/dev-404-page.js"))),
  "component---src-pages-impressum-js": hot(preferDefault(require("/home/philipp/Projects/junon/src/pages/impressum.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/philipp/Projects/junon/src/pages/index.js")))
}

