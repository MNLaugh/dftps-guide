const { description } = require('../../package')

module.exports = {
  base: "/dftps-guide/",
  title: 'DFtpS',
  description: description,

  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],

  locales: {
    '/': {
      lang: 'en-US',
      title: 'DFtpS',
      description: 'Modern FTP Server for Deno 2.x'
    },
    '/fr/': {
      lang: 'fr-FR',
      title: 'DFtpS',
      description: 'Serveur FTP moderne pour Deno 2.x'
    }
  },

  themeConfig: {
    repo: 'https://github.com/MNLaugh/dftps',
    editLinks: true,
    docsDir: 'src',
    docsBranch: 'main',
    lastUpdated: true,

    locales: {
      '/': {
        selectText: 'Languages',
        label: 'English',
        editLinkText: 'Edit this page on GitHub',
        nav: [
          { text: 'Introduction', link: '/guide/' },
          {
            text: 'Setup',
            ariaLabel: 'Setup',
            items: [
              { text: 'Software', link: '/guide/soft-setup' },
              { text: 'Module', link: '/guide/mod-setup' }
            ]
          },
          {
            text: 'CLI',
            ariaLabel: 'CLI',
            items: [
              { text: 'Manage users', link: '/guide/cli/users' },
              { text: 'Run server', link: '/guide/cli/serve' },
              { text: 'Upgrade', link: '/guide/cli/upgrade' }
            ]
          },
          {
            text: 'Module',
            ariaLabel: 'Module',
            items: [
              { text: 'Simple example', link: '/guide/module/simple' },
              { text: 'With database', link: '/guide/module/with-database' }
            ]
          },
          {
            text: 'Docs',
            ariaLabel: 'Docs',
            items: [
              { text: 'JSR', link: 'https://jsr.io/@dftp/server' },
              { text: 'GitHub', link: 'https://github.com/MNLaugh/dftps' }
            ]
          }
        ],
        sidebar: {
          '/guide/': [
            {
              title: 'Getting Started',
              collapsable: false,
              children: ['', 'soft-setup', 'mod-setup']
            },
            {
              title: 'CLI',
              collapsable: false,
              children: ['cli/users', 'cli/serve', 'cli/upgrade']
            },
            {
              title: 'Module',
              collapsable: false,
              children: ['module/simple', 'module/with-database']
            }
          ]
        }
      },
      '/fr/': {
        selectText: 'Langues',
        label: 'Français',
        editLinkText: 'Modifier cette page sur GitHub',
        nav: [
          { text: 'Introduction', link: '/fr/guide/' },
          {
            text: 'Installation',
            ariaLabel: 'Installation',
            items: [
              { text: 'Logiciel', link: '/fr/guide/soft-setup' },
              { text: 'Module', link: '/fr/guide/mod-setup' }
            ]
          },
          {
            text: 'CLI',
            ariaLabel: 'CLI',
            items: [
              { text: 'Gérer utilisateurs', link: '/fr/guide/cli/users' },
              { text: 'Lancer serveur', link: '/fr/guide/cli/serve' },
              { text: 'Mise à jour', link: '/fr/guide/cli/upgrade' }
            ]
          },
          {
            text: 'Module',
            ariaLabel: 'Module',
            items: [
              { text: 'Exemple simple', link: '/fr/guide/module/simple' },
              { text: 'Avec base de données', link: '/fr/guide/module/with-database' }
            ]
          },
          {
            text: 'Docs',
            ariaLabel: 'Docs',
            items: [
              { text: 'JSR', link: 'https://jsr.io/@dftp/server' },
              { text: 'GitHub', link: 'https://github.com/MNLaugh/dftps' }
            ]
          }
        ],
        sidebar: {
          '/fr/guide/': [
            {
              title: 'Pour Commencer',
              collapsable: false,
              children: ['', 'soft-setup', 'mod-setup']
            },
            {
              title: 'CLI',
              collapsable: false,
              children: ['cli/users', 'cli/serve', 'cli/upgrade']
            },
            {
              title: 'Module',
              collapsable: false,
              children: ['module/simple', 'module/with-database']
            }
          ]
        }
      }
    }
  },

  theme: 'yuu',

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
