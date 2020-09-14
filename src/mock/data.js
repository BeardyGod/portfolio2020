import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Prayag | Frontend Developer', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome, come have a look.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, I’m ',
  name: 'Prayag Roy Choudhury, ',
  subtitle: 'Front-end Web-Developer based on India.',
  cta: 'Know More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'I love creating beautiful websites to provide intuitive and dynamic experience to our users. The possibility of writing code from one tiny corner of the world to create websites and applications which can be beneficial to people all around the world through the power of the internet is a truly humbling experience.',
  paragraphTwo: ' ',
  paragraphThree: ' ',
  resume: 'Resume-cv.pdf',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project-1.JPG',
    title: 'Netflix-Clone',
    info:
      'This is a project where I created Netflix clone using React. Here I used TMDB API for movie info and react-youtube for trailer pop-up.',
    info2: ' ',
    url: 'https://netflix-clone-7eec5.web.app/',
    repo: 'https://github.com/BeardyGod/netflix-clone',
  },
  {
    id: nanoid(),
    img: 'project-2.JPG',
    title: 'Covid-19 Tracker',
    info:
      'This is a project where I created Covid Tracker using React and Material-UI. Here I used disease.sh API for Covid related info and Graph.js for line-graph representation and Leaflet.js for map representation.',
    info2: ' ',
    url: 'https://covid-19-tracker-d7cf7.web.app/',
    repo: 'https://github.com/BeardyGod/corona-tracker',
  },
  {
    id: nanoid(),
    img: 'project-3.JPG',
    title: 'Hotel Website',
    info:
      'This is a UI for a hotel booking website. This website is build on HTML, CSS, Bootstrap, Javascript, Jquery.',
    info2: ' ',
    url: 'https://beardygod.github.io/Hotels/',
    repo: 'https://github.com/BeardyGod/Hotels',
  },
  {
    id: nanoid(),
    img: 'project-4.JPG',
    title: 'Blog Website',
    info:
      'This is a landing page for a blog website which I created using HTML, CSS and JS(JQuery) with the help of owl carousel, Font Awesome, Google Font and Animation on scroll(aos).',
    info2: ' ',
    url: 'https://beardygod.github.io/blog/',
    repo: 'https://github.com/BeardyGod/blog',
  },
  {
    id: nanoid(),
    img: 'project-5.JPG',
    title: 'Github Finder',
    info:
      'This is my first react project. In this project, I learned about state management, hooks, react-router and little bit about lifecycle methods. It also helped me understand API request better.',
    info2: ' ',
    url: 'https://githfinder45.netlify.app/',
    repo: 'https://github.com/BeardyGod/github-finder',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Please feel free to contact.',
  btn: 'Email',
  email: 'beardygod@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/prayag-roy-choudhury-529704193',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/BeardyGod',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/beardygod/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
