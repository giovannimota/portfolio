export type Locale = 'pt-BR' | 'en'

export const PORTFOLIO_LINKS: Record<'email' | 'emailAddress' | 'linkedin' | 'github' | 'treevo' | 'vizenda', string> = {
  email: 'mailto:giovanni.mota01@gmail.com',
  emailAddress: 'giovanni.mota01@gmail.com',
  linkedin: 'https://www.linkedin.com/in/giovanni-mota/',
  github: 'https://github.com/giovannimota',
  treevo: 'https://treevo-web.vercel.app/',
  vizenda: ''
} as const

export const PORTFOLIO_RESUMES: Record<Locale, string> = {
  'pt-BR': '/giovanni-mota-resume.pdf',
  en: '/giovanni-mota-resume-en.pdf'
}

export const PORTFOLIO_CONTENT = {
  'pt-BR': {
    meta: {
      title: 'Giovanni Mota — Desenvolvedor de Software',
      description: 'Portfólio de Giovanni Mota, desenvolvedor de software com mais de cinco anos de experiência em aplicações web e mobile.'
    },
    nav: [
      { id: 'sobre', label: 'Sobre mim' },
      { id: 'projetos', label: 'Projetos' },
      { id: 'experiencia', label: 'Experiência' },
      { id: 'competencias', label: 'Competências' },
      { id: 'pessoal', label: 'Além do código' },
      { id: 'formacao', label: 'Formação' }
    ],
    menu: 'Menu', closeMenu: 'Fechar menu', language: 'Idioma',
    hero: {
      eyebrow: 'Desenvolvedor de software · Campinas, Brasil',
      title: 'Transformo\nideias em\nsoftware.',
      intro: 'Sou Giovanni Mota, desenvolvedor de software com mais de cinco anos de experiência no desenvolvimento e evolução de aplicações web e mobile. Combino engenharia, visão de produto e atenção à experiência do usuário.',
      note: 'Entre código, música e hardware, estou sempre aprendendo e construindo algo novo.',
      projects: 'Explorar projetos', contact: 'Entrar em contato', portraitAlt: 'Retrato de Giovanni Mota', location: 'Campinas, Brasil'
    },
    projects: {
      eyebrow: '01 / Trabalho selecionado', title: 'Ideias que conectam pessoas.',
      treevo: {
        name: 'Treevo', category: 'Genealogia · Produto digital',
        description: 'Uma árvore genealógica para organizar relações familiares, preservar histórias e compartilhar memórias entre gerações.',
        technologies: ['Next.js', 'React', 'TypeScript'], linkLabel: 'Visitar o Treevo',
        visualAlt: 'Logo Treevo, uma árvore que representa raízes e conexões familiares.'
      },
      vizenda: {
        name: 'Vizenda', category: 'Aplicação mobile · Produto digital',
        description: 'Uma aplicação de gestão condominial que reúne serviços, comunicação e funcionalidades do dia a dia dos moradores em uma experiência mobile.',
        technologies: ['React Native', 'Expo', 'Mobile'], linkLabel: 'Projeto em destaque',
        visualAlt: 'Composição gráfica abstrata inspirada em conexões residenciais.'
      },
      visit: 'Abrir projeto', projectNumber: 'Projeto',
      visualWords: ['Memórias de geração em geração', 'Conexões para o dia a dia']
    },
    experience: {
      eyebrow: '02 / Trajetória', title: 'Engenharia com visão de produto.',
      entries: [
        { company: 'Softable', role: 'Desenvolvedor Front-end Sênior', period: 'Jun 2022 — atual', description: 'Desenvolvimento e evolução de aplicações web e mobile para clientes corporativos, incluindo Lupo, Saint-Gobain, Cargill e Votorantim. Criação de interfaces a partir de requisitos e protótipos, refatoração de sistemas, investigação de performance, code reviews e mentoria técnica.', technologies: ['Next.js', 'React', 'React Native', 'TypeScript', 'Zustand', 'Figma'] },
        { company: 'Kumulus', role: 'Desenvolvedor Front-end', period: 'Fev 2021 — Jun 2022', description: 'Desenvolvimento de aplicações web sob medida, colaboração direta com stakeholders e equipes multidisciplinares, evolução de sistemas legados e participação em entregas com Scrum.', technologies: ['Next.js', 'React', 'TypeScript', 'Docker', 'Microsoft Azure', 'Azure DevOps'] }
      ]
    },
    skills: {
      eyebrow: '03 / Ferramentas & prática', title: 'Competências técnicas.',
      groups: [
        { name: 'Desenvolvimento web', items: 'JavaScript · TypeScript · React · Next.js · React Hooks · Context API · Zustand · Redux · HTML · CSS · Tailwind CSS · Styled Components · acessibilidade · design responsivo' },
        { name: 'Desenvolvimento mobile', items: 'React Native · Swift / SwiftUI · SDKs · offline-first · sincronização de dados · publicação e versionamento na App Store e Google Play' },
        { name: 'Engenharia de software', items: 'Arquitetura e organização de código · refatoração · code review · mentoria · Scrum · Jest · React Testing Library' },
        { name: 'Backend & dados', items: 'C# · .NET · Java · Spring Boot · Node.js · Express · APIs REST · autenticação · SQL · PostgreSQL · bancos relacionais · mensageria assíncrona' },
        { name: 'Cloud & ferramentas', items: 'AWS · Docker · Microsoft Azure · Azure DevOps · Vercel · Git · Gitflow · Axios · Figma' }
      ]
    },
    personal: {
      eyebrow: '04 / Curiosidade em movimento', title: 'Quem é o Giovanni fora do código?',
      intro: 'A tecnologia é uma parte importante da minha vida, mas minha curiosidade não termina na tela. Música, eletrônica e hardware fazem parte da maneira como aprendo, crio e entendo o mundo.',
      stories: [
        { title: 'Uma vida entre notas e cordas', description: 'Minha jornada musical começou em 2011. O violino é meu principal instrumento; também aprendi viola, violoncelo e clarinete. Atualmente, estou aprendendo acordeão.', marker: 'Música · Desde 2011' },
        { title: 'Curiosidade que vai além da tela', description: 'Acompanho lançamentos de smartphones e computadores e ajudo amigos e familiares a comparar modelos. Também estudo manutenção de smartphones em um curso.', marker: 'Hardware · Em aprendizado' },
        { title: 'Do circuito ao código', description: 'Minha formação técnica em Mecatrônica abriu as portas para o hardware. Trabalho com Arduino desde 2013, montei uma impressora 3D e desenvolvo projetos que conectam eletrônica e programação.', marker: 'Mecatrônica · Arduino' }
      ]
    },
    education: {
      eyebrow: '05 / Formação', title: 'Uma base para seguir explorando.',
      entries: [
        { institution: 'Fatec Campinas', degree: 'Tecnologia em Análise e Desenvolvimento de Sistemas', period: '2019 — 2022' },
        { institution: 'Colégio Técnico Bento Quirino', degree: 'Técnico em Mecatrônica', period: '2015 — 2017' }
      ], languageTitle: 'Idiomas', languages: ['Português · Nativo', 'Inglês · Avançado em leitura, escrita e conversação']
    },
    contact: {
      eyebrow: '06 / Próximo capítulo', title: 'Vamos construir algo interessante?',
      description: 'Estou sempre aberto a conversar sobre engenharia de software, projetos interessantes e novas oportunidades.',
      email: 'E-mail', linkedin: 'LinkedIn', github: 'GitHub', resume: 'Ver currículo (PDF)',
      backToTop: 'Voltar ao topo', footer: 'Feito com curiosidade e cuidado.'
    }
  },
  en: {
    meta: {
      title: 'Giovanni Mota — Software Developer',
      description: 'Portfolio of Giovanni Mota, a software developer with over five years of experience building web and mobile applications.'
    },
    nav: [
      { id: 'sobre', label: 'About me' },
      { id: 'projetos', label: 'Projects' },
      { id: 'experiencia', label: 'Experience' },
      { id: 'competencias', label: 'Skills' },
      { id: 'pessoal', label: 'Beyond code' },
      { id: 'formacao', label: 'Education' }
    ],
    menu: 'Menu', closeMenu: 'Close menu', language: 'Language',
    hero: {
      eyebrow: 'Software developer · Campinas, Brazil',
      title: 'I turn ideas\ninto software.',
      intro: "I'm Giovanni Mota, a software developer with over five years of experience building and evolving web and mobile applications. I combine engineering, product thinking, and attention to user experience.",
      note: "Between code, music, and hardware, I'm always learning and building something new.",
      projects: 'Explore projects', contact: 'Get in touch', portraitAlt: 'Portrait of Giovanni Mota', location: 'Campinas, Brazil'
    },
    projects: {
      eyebrow: '01 / Selected work', title: 'Ideas that bring people together.',
      treevo: {
        name: 'Treevo', category: 'Genealogy · Digital product',
        description: 'A family tree project to organize family relationships, preserve stories, and share memories across generations.',
        technologies: ['Next.js', 'React', 'TypeScript'], linkLabel: 'Visit Treevo',
        visualAlt: 'Treevo logo, a tree representing roots and family connections.'
      },
      vizenda: {
        name: 'Vizenda', category: 'Mobile application · Digital product',
        description: 'A condominium management application bringing resident services, communication, and everyday features together in a single mobile experience.',
        technologies: ['React Native', 'Expo', 'Mobile'], linkLabel: 'Featured project',
        visualAlt: 'Abstract graphic inspired by residential connections.'
      },
      visit: 'Open project', projectNumber: 'Project',
      visualWords: ['Stories across generations', 'Connections for everyday life']
    },
    experience: {
      eyebrow: '02 / Experience', title: 'Engineering with product thinking.',
      entries: [
        { company: 'Softable', role: 'Senior Front-end Developer', period: 'Jun 2022 — present', description: 'Developing and evolving web and mobile applications for corporate clients, including Lupo, Saint-Gobain, Cargill, and Votorantim. Building interfaces from requirements and prototypes, refactoring systems, investigating performance, reviewing code, and mentoring teammates.', technologies: ['Next.js', 'React', 'React Native', 'TypeScript', 'Zustand', 'Figma'] },
        { company: 'Kumulus', role: 'Front-end Developer', period: 'Feb 2021 — Jun 2022', description: 'Developed custom web applications, worked directly with stakeholders and multidisciplinary teams, evolved legacy systems, and took part in Scrum delivery routines.', technologies: ['Next.js', 'React', 'TypeScript', 'Docker', 'Microsoft Azure', 'Azure DevOps'] }
      ]
    },
    skills: {
      eyebrow: '03 / Tools & practice', title: 'Technical skills.',
      groups: [
        { name: 'Web development', items: 'JavaScript · TypeScript · React · Next.js · React Hooks · Context API · Zustand · Redux · HTML · CSS · Tailwind CSS · Styled Components · accessibility · responsive design' },
        { name: 'Mobile development', items: 'React Native · Swift / SwiftUI · SDKs · offline-first · data synchronization · App Store and Google Play releases' },
        { name: 'Software engineering', items: 'Code architecture · refactoring · code reviews · mentoring · Scrum · Jest · React Testing Library' },
        { name: 'Backend & data', items: 'C# · .NET · Java · Spring Boot · Node.js · Express · REST APIs · authentication · SQL · PostgreSQL · relational databases · asynchronous messaging' },
        { name: 'Cloud & tools', items: 'AWS · Docker · Microsoft Azure · Azure DevOps · Vercel · Git · Gitflow · Axios · Figma' }
      ]
    },
    personal: {
      eyebrow: '04 / Curiosity in motion', title: 'Who is Giovanni beyond the code?',
      intro: "Technology is an important part of my life, but my curiosity doesn't stop at the screen. Music, electronics, and hardware are part of how I learn, create, and understand the world.",
      stories: [
        { title: 'A life between notes and strings', description: 'My musical journey began in 2011. The violin is my primary instrument; over time I also learned the viola, cello, and clarinet. I am currently learning the accordion.', marker: 'Music · Since 2011' },
        { title: 'Curiosity beyond the screen', description: 'I follow smartphone and computer releases and help friends and family compare models. I am also taking a smartphone repair course.', marker: 'Hardware · Learning' },
        { title: 'From circuit to code', description: 'My technical background in Mechatronics introduced me to hardware. I have worked with Arduino since 2013, assembled a 3D printer, and built projects combining electronics and programming.', marker: 'Mechatronics · Arduino' }
      ]
    },
    education: {
      eyebrow: '05 / Education', title: 'A foundation for what comes next.',
      entries: [
        { institution: 'Fatec Campinas', degree: 'Technology degree in Systems Analysis and Development', period: '2019 — 2022' },
        { institution: 'Colégio Técnico Bento Quirino', degree: 'Technical degree in Mechatronics', period: '2015 — 2017' }
      ], languageTitle: 'Languages', languages: ['Portuguese · Native', 'English · Advanced reading, writing, and speaking']
    },
    contact: {
      eyebrow: '06 / Next chapter', title: "Let's build something meaningful.",
      description: "I'm always open to discussing software engineering, interesting projects, and new opportunities.",
      email: 'Email', linkedin: 'LinkedIn', github: 'GitHub', resume: 'View résumé (PDF)',
      backToTop: 'Back to top', footer: 'Made with curiosity and care.'
    }
  }
} as const

export type PortfolioCopy = (typeof PORTFOLIO_CONTENT)[Locale]
