module.exports = {
  title: 'WarsawLO OSS',
  tagline: 'WarsawLO open-source center',
  url: 'https://oss.warsawlo.pl',
  baseUrl: '/',
  favicon: 'img/logo.png',
  organizationName: 'WarsawLO', // Usually your GitHub org/user name.
  projectName: 'WarsawLO', // Usually your repo name.
  themeConfig: {
    announcementBar: {
      id: 'beta_warning', // Any value that will identify this message
      content: 'This site is under active development',
      backgroundColor: '#965BD4', // Defaults to `#fff`
      textColor: 'white', // Defaults to `#000`
    },
    navbar: {
      title: 'WarsawLO OSS',
      logo: {
        alt: 'WarsawLO logo',
        src: 'img/logo.png',
      },
      links: [
        {
          to: 'docs/frontend/overview',
          activeBasePath: 'docs/frontend',
          label: 'Frontend docs',
          position: 'left',
        },
        {
          to: 'docs/backend/overview',
          activeBasePath: 'docs/backend',
          label: 'Backend docs',
          position: 'left',
        },
        {
          to: 'docs/packages/overview',
          activeBasePath: 'docs/packages',
          label: 'Packages docs',
          position: 'left',
        },
        {
          href: 'https://warsawlo.pl',
          label: 'WarsawLO.pl',
          position: 'right',
        },
        {
          href: 'https://github.com/WarsawLO',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Frontend docs',
              to: 'docs/frontend/overview',
            },
            {
              label: 'Backend docs',
              to: 'docs/backend/overview',
            },
            {
              label: 'Packages docs',
              to: 'docs/packages/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://fb.com/WarsawLO',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/WarsawLO',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/WarsawLO',
            },
          ],
        },
        {
          title: 'Our supporters',
          items: [
            {
              label: 'ePaństwo Foundation',
              href: 'https://epf.org.pl',
            },
            {
              label: 'Code for Poland',
              href: 'https://codeforpoland.org',
            },
          ],
        },
      ],
      copyright: `Built by WarsawLO Team with a little help from Docusaurus.`,
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
            'https://github.com/WarsawLO/oss/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
