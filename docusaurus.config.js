const lightCodeTheme = require('prism-react-renderer/themes/github')
const darkCodeTheme = require('prism-react-renderer/themes/dracula')

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'CriptoNovato',
  tagline: 'Aprende sobre tecnología Blockchain y Criptomonedas',
  url: 'https://criptonovato.es',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo.svg',
  organizationName: 'cryptodevhub',
  projectName: 'site',
  titleDelimiter: '-',
  themeConfig: {
    metadata: [
      {name: 'keywords', content: 'criptomonedas, blockchain, bitcoin, ethereum, cardano, cadena de bloques, criptoactivos, nft'}
    ],
    navbar: {
      title: 'CriptoNovato',
      logo: {
        alt: 'CriptoNovato Logo',
        src: 'img/logo.svg'
      },
      items: [
        //{ to: '/blog', label: 'Blog', position: 'left' },
        // {
        //   href: 'https://cryptodevhub.io/discord',
        //   label: 'Discord',
        //   position: 'right'
        // }
      ]
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Wiki',
      //     items: [
      //       {
      //         label: 'Blockchain Development Tutorial',
      //         to: '/wiki/blockchain-development-tutorial'
      //       },
      //       {
      //         label: 'Blog',
      //         to: '/blockchain-development-tutorials'
      //       },
      //       {
      //         label: 'Tools',
      //         to: '/blockchain-development-tools'
      //       },
      //       {
      //         label: 'Jobs',
      //         to: '/blockchain-developer-jobs'
      //       },
      //       {
      //         label: 'Testnet Faucets',
      //         to: '/blockchain-testnet-faucets'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Discord',
      //         href: 'https://cryptodevhub.io/discord'
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/cryptodevhub'
      //       }
      //     ]
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/cryptodevhub'
      //       }
      //     ]
      //   }
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} CryptoNovato`
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'wiki',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/openfinanzas/criptonovato'
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5
        },
        gtag: {
          trackingID: 'G-WGGZGTT4FJ',
          anonymizeIP: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        indexDocs: true,
        indexPages: true,
        indexBlog: false,
        docsDir: 'wiki',
        docsRouteBasePath: '/'
      }
    ]
  ],
  scripts: [
    {
      src: 'https://static.cloudflareinsights.com/beacon.min.js',
      defer: true,
      'data-cf-beacon': '{"token": "792c3446689844a497532f469b2d394b"}'
    }
  ]
}
