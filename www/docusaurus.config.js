const pkg = require('../package.json')
module.exports = {
  title: pkg.name,
  tagline: pkg.description,
  url: `https://gherciu.github.io`,
  baseUrl: `/${pkg.name}/`,
  favicon: 'img/logo.png',
  organizationName: 'Gherciu', // Usually your GitHub org/user name.
  projectName: pkg.name, // Usually your repo name.
  themeConfig: {
    navbar: {
      title: pkg.name,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      links: [
        {to: 'docs/doc-introduction', label: 'Docs', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: `https://github.com/Gherciu/${pkg.name}`,
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
              label: 'Getting started',
              to: 'docs/doc-introduction',
            },
            {
              label: 'API Reference',
              to: 'docs/doc-api-introduction',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: `https://stackoverflow.com/questions/tagged/${pkg.name}`,
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: `https://github.com/Gherciu/${pkg.name}`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()}. Gherciu Gheorghe`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            `https://github.com/Gherciu/${pkg.name}/edit/master/www/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
