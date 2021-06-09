/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  welcome: [
    'welcome',
    {
      Modules: [
        { type: 'link', label: 'gmsv_myhttp', href: '/gmsv_myhttp/intro' }
      ],

      "Dev Docs": [
        { type: 'link', label: 'Industrial Wars', href: '/industrial_wars/intro' }
      ],
    },
  ],

  gmsv_myhttp: [
    'gmsv_myhttp/intro',
    {
      Global: [
        'gmsv_myhttp/global',
        { type: 'autogenerated', dirName: 'gmsv_myhttp/global' }
      ],

      Thread: [
        'gmsv_myhttp/thread',
        { type: 'autogenerated', dirName: 'gmsv_myhttp/thread' }
      ],
    },
  ],

  industrial_wars: [
    'industrial_wars/intro',
    {
      Остальное: [
        { type: 'autogenerated', dirName: 'industrial_wars/other' }
      ],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Tutorial',
      items: ['hello'],
    },
  ],
   */
};