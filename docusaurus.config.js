/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pika Docs',
  tagline: 'Pika Software\'s project documentation.',
  url: 'https://docs.pika-soft.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'Pika-Software', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.
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
          docId: 'gpm',
          label: 'GLua Package Manager'
        },
        {
          type: 'doc',
          docId: 'modules',
          label: 'Modules'
        },
        {
          href: 'https://github.com/pika-software/documentation',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://pika-soft.ru/',
          label: 'Blog',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentations',
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
              href: 'https://discord.gg/Gzak99XGvv',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/pika-software/documentation',
            },
          ],
        },
      ],
      copyright: 'Made with ❤️ by Pika Software, Inc. Built with Docusaurus.',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/pika-software/documentation/edit/main/',

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
