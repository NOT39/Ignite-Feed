import { PostProps } from './components/Post/Post'


export const posts: PostProps[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/not39.png',
      name: 'Not',
      role: 'Front-End Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-20 15:58:13'),
    comments: [
      {
        id: 24372,
        author: {
          avatarUrl: 'https://github.com/davi-lucciola.png',
          name: 'Davi Lucciola',
          role: 'Back-end Developer'
        },
        content: 'Que massa!',
        publishedAt: new Date('2023-02-15 15:53:13'),
      }
    ]
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/davi-lucciola.png',
      name: 'Davi Lucciola',
      role: 'Back-end Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: 'jane.design/doctorcare'},
    ],
    publishedAt: new Date('2023-02-15 15:53:13'),
    comments: [
     {
      id: 27875,
      author: {
        avatarUrl: 'https://github.com/not39.png',
        name: 'Not',
        role: 'Front-End Developer'
      },
      content: 'Muito legal!',
      publishedAt: new Date('2023-02-20 15:58:13'),
     }
    ]
  },
]