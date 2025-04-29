const activities = {
  categories: {
    'F-House': {
      color: '#2ecc71',
      icon: 'fa-home'
    },
    'F-Life': {
      color: '#3498db',
      icon: 'fa-user'
    },
    'F-Works': {
      color: '#e74c3c',
      icon: 'fa-briefcase'
    },
    'F-Lab': {
      color: '#9b59b6',
      icon: 'fa-flask'
    }
  },
  recentActivities: [
    {
      date: '2024-03-15',
      activities: [
        {
          category: 'F-Works',
          title: 'Reunião com cliente XYZ',
          time: '10:00',
          duration: '1h',
          status: 'completed'
        },
        {
          category: 'F-Lab',
          title: 'Experimento: Nova técnica de produtividade',
          time: '14:00',
          duration: '2h',
          status: 'in-progress'
        },
        {
          category: 'F-Life',
          title: 'Academia',
          time: '07:00',
          duration: '1h',
          status: 'completed'
        }
      ]
    },
    {
      date: '2024-03-14',
      activities: [
        {
          category: 'F-House',
          title: 'Manutenção do jardim',
          time: '09:00',
          duration: '1h30',
          status: 'completed'
        },
        {
          category: 'F-Life',
          title: 'Treino de musculação',
          time: '18:00',
          duration: '1h',
          status: 'completed'
        },
        {
          category: 'F-Works',
          title: 'Desenvolvimento de features',
          time: '14:00',
          duration: '4h',
          status: 'completed'
        },
        {
          category: 'F-Lab',
          title: 'Leitura técnica',
          time: '20:00',
          duration: '1h',
          status: 'completed'
        }
      ]
    },
    {
      date: '2024-03-13',
      activities: [
        {
          category: 'F-Works',
          title: 'Desenvolvimento do projeto F-Guide',
          time: '09:00',
          duration: '4h',
          status: 'completed'
        },
        {
          category: 'F-Lab',
          title: 'Estudo de novas tecnologias',
          time: '14:00',
          duration: '2h',
          status: 'completed'
        },
        {
          category: 'F-Life',
          title: 'Meditação',
          time: '07:00',
          duration: '30min',
          status: 'completed'
        },
        {
          category: 'F-House',
          title: 'Organização do home office',
          time: '16:00',
          duration: '1h',
          status: 'completed'
        }
      ]
    },
    {
      date: '2024-03-12',
      activities: [
        {
          category: 'F-House',
          title: 'Organização do escritório',
          time: '10:00',
          duration: '2h',
          status: 'completed'
        },
        {
          category: 'F-Life',
          title: 'Yoga',
          time: '07:00',
          duration: '1h',
          status: 'completed'
        },
        {
          category: 'F-Works',
          title: 'Code review',
          time: '14:00',
          duration: '2h',
          status: 'completed'
        }
      ]
    },
    {
      date: '2024-03-11',
      activities: [
        {
          category: 'F-Works',
          title: 'Planejamento semanal',
          time: '09:00',
          duration: '1h',
          status: 'completed'
        },
        {
          category: 'F-Life',
          title: 'Leitura',
          time: '20:00',
          duration: '1h',
          status: 'completed'
        },
        {
          category: 'F-Lab',
          title: 'Experimentos com IA',
          time: '14:00',
          duration: '3h',
          status: 'completed'
        }
      ]
    }
  ],
  yearlyData: {
    months: [
      {
        month: 'Março',
        totalActivities: 45,
        breakdown: {
          'F-House': 12,
          'F-Life': 15,
          'F-Works': 10,
          'F-Lab': 8
        },
        activeDays: [1, 2, 3, 4, 5, 7, 8, 9, 11, 12, 13, 14, 15,
          18, 19, 20, 21, 22, 25, 26, 27, 28]
      },
      {
        month: 'Fevereiro',
        totalActivities: 38,
        breakdown: {
          'F-House': 8,
          'F-Life': 12,
          'F-Works': 15,
          'F-Lab': 3
        },
        activeDays: [1, 2, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16,
          19, 20, 21, 22, 23, 26, 27, 28, 29]
      },
      {
        month: 'Janeiro',
        totalActivities: 42,
        breakdown: {
          'F-House': 10,
          'F-Life': 14,
          'F-Works': 12,
          'F-Lab': 6
        },
        activeDays: [2, 3, 4, 5, 8, 9, 10, 11, 12, 15, 16, 17, 18, 19,
          22, 23, 24, 25, 26, 29, 30, 31]
      }
    ]
  },
  streaks: {
    current: 5,
    longest: 15,
    thisWeek: 4,
    thisMonth: 18
  }
};

export default activities; 