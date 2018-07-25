const pkg = require('./package')

module.exports = {
    mode: 'universal',

    /*
    ** Headers of the page
    */
    head: {
        title: 'White Bodyworks',
        meta: [
            { charset: 'utf-8' },
            { hid: 'og:site_name', name: 'og:site_name', content: 'White Bodyworks' },
            { hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no' },
            { hid: 'og:type', name: 'og:type', content: 'website' },
            { hid: 'og:image:width', name: 'og:image:width', content: '800' },
            { hid: 'og:image:height', name: 'og:image:height', content: '600' },
            { hid: 'og:locale', name: 'og:locale', content: 'en_GB' },
            { hid: 'theme-color', name: 'theme-color', content: '#24bced' },
            { hid: 'format-detection', name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { href: 'https://fonts.googleapis.com/css?family=Hind:400,600|Montserrat:700,800', rel: 'stylesheet' },
            { rel: 'apple-touch-icon', sizes: '57x57', href: '/favicon/57x57.png' },
            { rel: 'apple-touch-icon', sizes: '60x60', href: '/favicon/60x60.png' },
            { rel: 'apple-touch-icon', sizes: '72x72', href: '/favicon/72x72.png' },
            { rel: 'apple-touch-icon', sizes: '76x76', href: '/favicon/76x76.png' },
            { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/114x114.png' },
            { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/120x120.png' },
            { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/144x144.png' },
            { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/152x152.png' },
            { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/180x180.png' },
            { rel: 'icon', type: 'image/png', href: '/favicon/57x57.png' },
            { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/16x16.png' },
            { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/32x32.png' },
            { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon/96x96.png' },
            { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon/192x192.png' }
        ]
    },

    /* Customize the progress-bar color */
    loading: { color: '#0cce6b', height: '5px' },

    /* Global CSS */
    css: [
        'assets/styles/main.scss',
        'assets/styles/desktop.scss',
        'assets/styles/tablet.scss',
        'assets/styles/mobile.scss'
    ],

    /* Plugins to load before mounting the App */
    plugins: [
        { src: '~/plugins/vue-scrollto', ssr: false },
        { src: '~/plugins/vue2-google-maps', ssr: false }
    ],

    /* Nuxt.js modules */
    modules: [
        // Doc: https://github.com/nuxt-community/axios-module#usage
        '@nuxtjs/axios',
        '@nuxtjs/sitemap'
        /*[ '@nuxtjs/google-analytics', { id: ''} ],*/
    ],

    /* Axios module configuration */
    axios: {
        // See https://github.com/nuxt-community/axios-module#options
    },

    /* Build configuration */
    build: {
        /* You can extend webpack config here */
        extractCSS: true,
        extend(config, { isDev, isClient }) {
            // Run ESLint on save
            config.module.rules.forEach((rule) => {
                if (rule.test.toString() === '/\\.(png|jpe?g|gif|svg)$/') {
                    rule.use = [
                        {
                            loader: 'url-loader',
                            options: {
                                limit: 10000,
                                name: 'img/[hash:7].[ext]'
                            }
                        },
                        {
                            loader: 'image-webpack-loader'
                        }
                    ];
                    delete rule.loader;
                    delete rule.options;
                }
                if (rule.test.toString() === '/\.(js|vue)$/') {
                    rule.use = [
                        {
                            loader: 'eslint-loader',
                            exclude: /(node_modules)/,
                            enforce: 'pre'
                        }
                    ];
                    delete rule.loader;
                    delete rule.options;
                }
            })
        }
    },
    router: {
        scrollBehaviour: function (to, from, savedPosition) {
            return { x: 0, y: 0 }
        }
    },
    env: {
        websiteUrl: 'https://www.whitebodyworks.co.uk'
    },
    sitemap: {
        hostname: 'https://www.whitebodyworks.co.uk',
        generate: true
    }
}
