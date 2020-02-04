module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":800},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Junges UNO Netzwerk Deutschland e.V.","short_name":"JUNON","start_url":"/","background_color":"rgb(99, 147, 244)","theme_color":"rgb(99, 147, 244)","display":"minimal-ui","icon":"./src/images/Logo/favicon-32x32.png"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
