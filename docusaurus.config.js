/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pika Docs',
  tagline: 'Pika Software documentation.',
  url: 'https://docs.pika-soft.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Pika-Software', // Usually your GitHub org/user name.
  projectName: 'pika-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
      defaultLanguage: 'lua',
      additionalLanguages: [
        'lua',
      ]
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true
    },
    // algolia: {
    //   apiKey: 'YOUR_API_KEY',
    //   indexName: 'YOUR_INDEX_NAME',
    // },
    navbar: {
      title: 'Pika Docs',
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          label: 'Home',
        },
        {
          type: 'doc',
          docId: 'gmsv_myhttp/intro', 
          label: 'gmsv_myhttp',
        },
        {
          type: 'doc',
           docId: 'industrial_wars/intro', 
           label: 'Industrial Wars',
        },
        {
          href: 'https://github.com/pika-software/pika-docs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://hub.pika-soft.ru/',
          label: 'Hub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Welcome',
              to: '/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/3UVxhZj',
            },
          ],
        },
        {
          title: 'More',
          items: [
            // {
            //   label: 'Blog',
            //   to: '/blog',
            // },
            {
              label: 'GitHub',
              href: 'https://github.com/pika-software/pika-docs',
            },
          ],
        },
      ],
      copyright: 'Made with ❤️ by Pika Software', //  Inc. Built with Docusaurus. // Да да я именно это сделал
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/pika-software/pika-docs/edit/main/',

          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

        },
        blog: false,
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css')
          ],
        },
      },
    ],
  ],
};
