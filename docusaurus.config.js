/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Pika Docs',
  tagline: 'Hello :)',
  url: 'https://docs.pika-soft.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'Pika-Software', // Usually your GitHub org/user name.
  projectName: 'pika-docs', // Usually your repo name.
  themeConfig: {
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'lua',
      additionalLanguages: [
        'lua',
      ]
    },
    navbar: {
      title: 'Pika Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'welcome',
          position: 'left',
          label: 'Welcome',
        },
        {
          type: 'doc',
           docId: 'gmsv_myhttp/intro', 
           position: 'left',
           label: 'gmsv_myhttp',
        },
        //{to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/pika-software/pika-docs',
          label: 'GitHub',
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
      copyright: `Copyright © ${new Date().getFullYear()} Pika Software Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/pika-software/pika-docs/edit/main/',
          
          // Docs-only mode
          routeBasePath: '/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,

        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/pika-software/pika-docs/edit/main/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
