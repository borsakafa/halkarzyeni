module.exports = {
    plugins: [
        {
            resolve: 'gatsby-plugin-netlify-cms',
            options: {}
        },
        {
            resolve: 'gatsby-plugin-mailchimp',
            options: {
                endpoint: 'https://gmail.us21.list-manage.com/subscribe/post?u=b71e746b564f99864df2e954e&amp;id=0741b3433d&amp;f_id=004ac3e1f0'
            }
        },
        {
            resolve: `@isamrish/gatsby-plugin-google-adsense`,
            options: {
                googleAdClientId: "ca-pub-1315635756347128",
                head: false
            }
        },
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Halka Arz Takvimi',
                short_name: 'Halka Arz Takvimi',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#5a67d8',
                display: 'minimal-ui',
                icon: 'content/assets/favicon.png'
            }
        },

        {
            resolve: 'gatsby-plugin-google-gtag',
            options: {
                trackingIds: [
                    'G-RH6PQ5VBSL', // Google Analytics / GA
                ],
                pluginConfig: {
                    head: true,
                },
            },
        },
        {
            resolve: 'gatsby-plugin-sitemap',
            options: {}
        },
        {
            resolve: '@elegantstack/gatsby-theme-flexiblog-science',
            options: {
                siteUrl: 'https://halkaarz.app',
                services: {
                    graphComment: true,
                    mailchimp: true
                },
                sources: {
                    local: true,
                }
            }
        },

    ],
    siteMetadata: {
        //General Site Metadata
        title: '2023 Halka Arz Edilecek Hisseler',
        name: 'Halka Arz Takvimi',
        description: 'Halka arz olan şirketler ve halka arz onayı bekleyen şirketler yeni halka arzlar. 2023 halka arz takvimi ve sermaye artırımları hakkında tüm bilgiler.',
        address: '',
        email: 'info@halkaarzhisseler.com',
        phone: '',
        siteUrl: "https://halkaarz.app",

        //Site Social Media Links
        social: [
            {
                name: 'Facebook',
                url: 'https://facebook.com/halkaarzhisseler'
            },
            {
                name: 'YouTube',
                url: 'https://www.youtube.com/@halkaarzapp'
            },

            {
                name: 'Instagram',
                url: 'https://instagram.com/halkaarzapp'
            },
            {
                name: 'Twitter',
                url: 'https://twitter.com/halkaarzapp'
            },
            {
                name: 'Facebook',
                url: 'https://facebook.com/groups/516578562693332'
            }
        ],

        //Header Menu Items
        headerMenu: [
            {
                name: 'Anasayfa',
                slug: '/'
            },


            {
                name: 'İletişim',
                slug: '/contact'
            }
        ],

        //Footer Menu Items (2 Sets)
        footerMenu: [
            {
                title: 'Linkler',
                items: [
                    {
                        name: 'Reklam İçin',
                        slug: '/contact'
                    },
                    {
                        name: 'İletişim',
                        slug: '/contact'
                    },
                    {
                        name: 'Çerez Politikası',
                        slug: '/cerezler'
                    },
                    {
                        name: 'Gizlilik Politikası',
                        slug: '/gizlilik-ilkeleri'
                    },
                    {
                        name: 'Künye',
                        slug: '/kunye'
                    }
                ]
            },

        ]
    }
}