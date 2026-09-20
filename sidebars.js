const sidebars = {
  sasdSidebar: [
    'introduction',
    {
      type: 'category',
      label: '🏛️ Tổ chức SASD',
      collapsed: false,
      items: [
        'organization/structure',
        'organization/ranks',
        'organization/teams',
      ],
    },
    {
      type: 'category',
      label: '🎓 Training',
      collapsed: false,
      items: [
        'training/basic',
        'training/commands',
        'training/roleplay',
        'training/situations',
      ],
    },
    {
      type: 'category',
      label: '📜 Law & Regulations',
      collapsed: false,
      items: [
        'law/internal',
        'law/rp',
        'law/disciplinary',
      ],
    },
    {
      type: 'category',
      label: '👮 Staff',
      collapsed: false,
      items: [
        'staff/command',
        'staff/teams',
        'staff/teachers',
      ],
    },
  ],
};

export default sidebars;
