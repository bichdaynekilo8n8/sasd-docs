import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'SASD Documentation',
  tagline: 'Serving the State, Protecting the People.',
  favicon: 'img/favicon.svg',

  url: 'https://bichdaynekilo8n8.github.io',
  baseUrl: '/sasd-docs/',

  organizationName: 'bichdaynekilo8n8',
  projectName: 'sasd-docs',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'vi',
    locales: ['vi'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/sasd-social-card.svg',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'SASD',
      logo: {
        alt: 'SASD Logo',
        src: 'img/sasd-logo.jpg',
      },
      style: 'dark',
      hideOnScroll: true,
      items: [
        {to: '/', label: 'Home', position: 'left'},
        {to: '/docs/introduction', label: 'Documents', position: 'left'},
        {to: '/docs/training/basic', label: 'Training', position: 'left'},
        {to: '/docs/law/internal', label: 'Law', position: 'left'},
        {to: '/docs/staff/command', label: 'Staff', position: 'left'},
        {
          href: 'https://github.com/bichdaynekilo8n8/sasd-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'SASD',
          items: [
            {label: 'Introduction', to: '/docs/introduction'},
            {label: 'Organization', to: '/docs/organization/structure'},
            {label: 'Training', to: '/docs/training/basic'},
          ],
        },
        {
          title: 'Documents',
          items: [
            {label: 'Law', to: '/docs/law/internal'},
            {label: 'Ranks', to: '/docs/organization/ranks'},
            {label: 'Staff', to: '/docs/staff/command'},
          ],
        },
      ],
      copyright: `SASD Documentation • Serving the State, Protecting the People.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
