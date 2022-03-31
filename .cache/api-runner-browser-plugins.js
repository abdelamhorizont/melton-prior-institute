module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-image/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-source-wordpress/gatsby-browser.js'),
      options: {"plugins":[],"url":"http://wordpress.meltonpriorinstitut.org/graphql","type":{"MediaItem":{"localFile":{"requestConcurrency":10,"excludeByMimeTypes":[],"maxFileSizeBytes":15728640},"placeholderSizeName":"gatsby-image-placeholder","createFileNodes":true,"lazyNodes":false},"RootQuery":"{ excludeFieldNames: ['viewer', 'node', 'schemaMd5'], },"},"verbose":true},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Gatsby Starter WordPress Homepage","short_name":"Gatsby","start_url":"/","background_color":"#ffffff","theme_color":"#004ca3","icon":"src/favicon.png","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"771b82de136455ab301bf3c22527a196"},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
