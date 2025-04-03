export interface Language {
  title: string
  img: string
  level?: number // 1 to 4
  // 1 = Beginner
  // 2 = Intermediate
  // 3 = Advanced
  // 4 = Expert
}

export const MY_LANGUAGES: Language[] = [
  {
    title: 'JavaScript',
    img: '/images/logos/JS.png',
    level: 4
  },
  {
    title: 'TypeScript',
    img: '/images/logos/TS.png',
    level: 4
  },
  {
    title: 'HTML',
    img: '/images/logos/html.png',
    level: 4
  },
  {
    title: 'CSS',
    img: '/images/logos/css.webp',
    level: 4
  },
  {
    title: 'React',
    img: '/images/logos/react.png',
    level: 4
  },
  {
    title: 'Next.js',
    img: '/images/logos/nextjs.jpeg',
    level: 4
  },
  {
    title: 'React native',
    img: '/images/logos/react-native.png',
    level: 4
  },
  {
    title: 'Node.js',
    img: '/images/logos/nodejs.png',
    level: 4
  }
]
