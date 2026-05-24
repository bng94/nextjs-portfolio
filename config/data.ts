const PORTFOLIO = {
  message: "Successfully Retrieved Data",
  data: {
    role: "Front End Developer",
    aboutInfo: [
      "I'm Brandon, a software engineer based in the New York metropolitan area specializing in front-end development.",
      "I build web applications using React, Next.js, and TypeScript, with experience ranging from AI-powered platforms to e-commerce applications. My work focuses on creating performant, maintainable user interfaces and scalable component architectures.",
      "Since completing my Master's in Software Engineering from Pace University, I've spent over 3 years working with startups where I've developed expertise in modern JavaScript frameworks, performance optimization, and front-end best practices. Currently, I'm expanding my technical knowledge by learning Python and backend fundamentals to gain a deeper understanding of full-stack development.",
      "When I'm not coding, I enjoy board games, 3D printing, exploring coffee shops, and working on side projects.",
    ],
    technologies: [
      "ReactJS",
      "NextJS",
      "NodeJS",
      "TypeScript (ES6+)",
      "GraphQL",
      "AWS",
      "HTML & CSS",
      "Python",
    ],
    src: "/static/brandonNg.jpg",
    experiences: [
      {
        _id: "e1",
        title: "Front End Web Developer",
        company: "Envogue International",
        url: "https://envogueinternational.com/",
        startDate: "2021-11-01T04:00:00.000Z",
        endDate: "2022-11-01T04:00:00.000Z",
        description: [
          "Developed Explore, Profile, and Home page interfaces using React and GraphQL, fetching data from Django/Postgres backend for social commerce platform.",
          "Built content feed, user profiles, and design discovery features, translating Figma designs into 20+ reusable React components.",
          "Integrated AWS Cognito for user authentication and configured Lambda triggers to automatically sync user data with PostgreSQL.",
          "Implemented CI/CD pipelines using AWS CodePipeline, CodeBuild, and CodeDeploy to automate build and deployment workflows.",
          "Collaborated in Agile sprints using JIRA, delivering features on schedule while maintaining front-end performance and code quality.",
        ],
      },
      {
        _id: "e2",
        title: "Software Engineer M.S.",
        company: "Pace University",
        url: "https://www.pace.edu/",
        startDate: "2019-01-01T05:00:00.000Z",
        endDate: "2020-08-01T04:00:00.000Z",
        description: [
          "GPA: 3.95/4.0 - Seidenberg School of Computer Science and Information Systems",
          "Specialized in software engineering practices, agile development, and modern web technologies.",
          "Key coursework: Software Development Lifecycle, Project Management, Web Development, Database Design",
          "Completed capstone project building a full-stack web application with REST API backend.",
        ],
      },
      {
        _id: "e3",
        title: "IT Support Technician",
        company: "RF CUNY",
        url: "https://www.rfcuny.org",
        startDate: "2016-10-01T04:00:00.000Z",
        endDate: "2017-12-01T05:00:00.000Z",
        description: [
          "Supported classroom technology infrastructure including computers, tablets, and educational software across multiple departments.",
          "Deployed and configured endpoint devices, installed applications, and maintained system updates for faculty and student workstations.",
          "Diagnosed and resolved technical issues including hardware failures, software errors, and operating system problems.",
          "Provided technical training and assistance to staff and students on computer systems and classroom technology.",
        ],
      },
      {
        _id: "e4",
        title: "Computer Science B.S.",
        company: "Brooklyn College",
        url: "https://www.brooklyn.cuny.edu/",
        startDate: "2016-12-01T05:00:00.000Z",
        endDate: "2016-12-01T05:00:00.000Z",
        description: [
          "Bachelor of Science in Computer Science, Minor in Multimedia Computing",
          "Focused on computer science fundamentals with emphasis on web and mobile development.",
          "Relevant coursework: Data Structures & Algorithms, Object-Oriented Programming, Web Technologies, Mobile App Development, Database Management",
          "Built Android applications and web projects as part of coursework.",
        ],
      },
      {
        _id: "e5",
        title: "Software Developer",
        company: "Freelance",
        url: "https://ngbrandon.com/",
        startDate: "2022-12-01T04:00:00.000Z",
        description: [
          "Specializing in responsive React applications, performance optimization, and modern front-end development.",
          "Previously developed business websites using React, achieving 95+ Lighthouse scores through performance optimizations including code splitting, lazy loading, and image optimization.",
          "Experienced in REST API integration, form validation, authentication systems, and building mobile-first responsive designs.",
          "Open to contract work, project-based engagements, or permanent positions in NYC or remote. Contact for availability.",
        ],
      },
      {
        _id: "e6",
        company: "Huhu AI",
        startDate: "2024-01-01T05:00:00.000Z",
        title: "Web Developer",
        url: "https://www.huhu.ai/",
        description: [
          "Led development of responsive web applications using Next.js and TypeScript, building AI model generation interfaces, user dashboards, and authentication flows for fashion industry clients.",
          "Implemented secure authentication and role-based access control, reducing unauthorized access attempts and improving session reliability.",
          "Developed image gallery and comparison interfaces for AI-generated models, implementing lazy loading and progressive image rendering to handle high-resolution media efficiently.",
          "Integrated RESTful APIs and optimized component rendering through memoization and code splitting, reducing page load times by 25%.",
          "Developed multi-step form system for AI model customization with real-time validation and preview generation, reducing form errors and abandonment, and implemented SEO optimizations to improve search visibility.",
        ],
      },
    ],
    projects: [
      {
        _id: "p1",
        title: "React Portfolio",
        image: "/static/react-portfolio.png",
        tags: ["React.js", "Styled Components", "JavaScript"],
        description:
          "The second version of my portfolio website, built with ReactJS, featuring a redesigned, more interactive UI and an additional section to highlight noteworthy projects and showcase my accomplishments.",
        codeLink: "https://github.com/bng94/react-portfolio",
        liveLink: "https://bng94.github.io/react-portfolio/",
      },
      {
        _id: "p2",
        title: "Famous Quotes",
        image: "/static/quotesapp.png",
        tags: ["ReactJS", "Styled Components", "SwiperJS"],
        description:
          "A sleek ReactJS app that fetches quotes from the Quotes API, displaying them in an elegant light glassmorphism design.",
        codeLink: "https://github.com/bng94/quotesapp",
        liveLink: "https://bng94.github.io/quotesapp",
      },
      {
        _id: "p3",
        title: "Recipe App",
        image: "/static/recipeapp.png",
        tags: ["ReactJS", "Styled Components", "REST API"],
        description:
          "A simple ReactJS app that lets users look up recipes for cooking. Inspired by my interest in diverse cooking recipes, this project makes it easy to find delicious meal ideas.",
        codeLink: "https://github.com/bng94/recipeapp",
        liveLink: "https://bng94.github.io/recipeapp",
      },
    ],
    noteworthy: [
      {
        _id: "n1",
        title: "NPM Package",
        description:
          "Developed the discord-features-handler, a npm package for developers creating DiscordJS bots. This comprehensive handler provides the flexibility to tailor and manage bot commands efficiently, making the development process smoother and more adaptable to specific needs.",
        tags: ["NodeJS", "DiscordJS"],
        codeLink: "https://github.com/bng94/discord-features-handler",
        liveLink: "https://www.npmjs.com/package/discord-features-handler",
      },
      {
        _id: "n2",
        title: "HTML & CSS Portfolio",
        description:
          "The initial version of my portfolio website, crafted with HTML, CSS, and Vanilla JavaScript.",
        tags: ["HTML", "CSS", "JavaScript"],
        codeLink: "https://github.com/bng94/v1/",
        liveLink: "https://bng94.github.io/v1/",
      },
      {
        _id: "n3",
        title: "Discord Bot",
        description:
          "Created a Discord bot based on a gaming server bot that originally inspired my journey as a NodeJS developer. This bot serves as a demo Discord bot for users of my npm package, providing a practical example of how to implement features using DiscordJS with JavaScript or TypeScript.",
        tags: ["DiscordJS", "JavaScript", "TypeScript"],
        codeLink: "https://github.com/bng94/heroku-bot",
        liveLink: "https://github.com/bng94/heroku-bot",
      },
      {
        _id: "n4",
        title: "Image Editing",
        description:
          "An ReactJS Image Editing App, to crop, resize and change background of an image. ",
        tags: ["ReactJS", "React-Cropper", "Canvas"],
        codeLink: "https://bng94.github.io/imageediting/",
        liveLink: "https://github.com/bng94/imageediting",
      },
    ],
  },
};

export default PORTFOLIO;
