import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'San Andreas Special Department',
  tagline: 'Honor • Duty • Integrity',
  favicon: 'img/favicon.svg',

  future: {
    v4: true,
  },

  url: 'https://YOUR_USERNAME.github.io',
  baseUrl: '/sasd-docs/',

  organizationName: 'YOUR_USERNAME',
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
          showLastUpdateTime: false,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/sasd/rank-system.png',

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'SASD DOCUMENTATION',
      logo: {
        alt: 'SASD Logo',
        src: 'img/sasd/logo-sasd.jpg',
      },
      style: 'dark',
      hideOnScroll: true,
      items: [
        {to: '/', label: 'Trang chủ', position: 'left'},
        {to: '/docs/introduction', label: 'Tài liệu', position: 'left'},
        {to: '/docs/training/basic', label: 'Huấn luyện', position: 'left'},
        {to: '/docs/law/internal', label: 'Nội quy', position: 'left'},
        {to: '/docs/law/disciplinary', label: 'Mức phạt', position: 'left'},
        {to: '/docs/staff/command', label: 'Nhân sự', position: 'left'},
        {
          href: 'https://github.com/YOUR_USERNAME/sasd-docs',
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
            {label: 'Giới thiệu', to: '/docs/introduction'},
            {label: 'Cơ cấu tổ chức', to: '/docs/organization/structure'},
            {label: 'Huấn luyện', to: '/docs/training/basic'},
          ],
        },
        {
          title: 'Tài liệu',
          items: [
            {label: 'Nội quy', to: '/docs/law/internal'},
            {label: 'Quân hàm', to: '/docs/organization/ranks'},
            {label: 'Nhân sự', to: '/docs/staff/command'},
          ],
        },
      ],
      copyright: `SASD Documentation • Honor • Duty • Integrity`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
