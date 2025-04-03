export interface Skill {
  title: string
  description: string
}

export const MY_SKILLS: Skill[] = [
  {
    title: 'Web development',
    description: 'Web application development using NextJS and ReactJS'
  },
  {
    title: 'Mobile',
    description: 'Mobile application development using React Native'
  },
  {
    title: 'Design',
    description: 'Designing user interfaces and experiences using Figma'
  },
  {
    title: 'Stylization',
    description: 'Stylization with styled-components and CSS'
  },
  {
    title: 'State management',
    description: 'State management with context api and redux'
  },
  {
    title: 'Integration',
    description: 'APIs integration with fetch and axios'
  },
  {
    title: 'Git',
    description: 'Version control with Git, GitHub and GitLab'
  },
  {
    title: 'Deployment',
    description:
      'Configuration and deployment of front end projects using Vercel'
  }
]
