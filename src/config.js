// Navigation Bar SECTION
const navBar = {
  show: true
};

// Main Body SECTION
const mainBody = {
  gradientColors: '#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1',
  firstName: 'Elia',
  middleName: '',
  lastName: 'Bonetto',
  message: ' Merging Computer Vision, Robotics and Machine Learning. ',
  icons: [
    {
      image: 'fa-github',
      url: 'https://github.com/eliabntt'
    },
    {
      image: 'fa-instagram',
      url: 'https://www.instagram.com/eliabonetto/'
    },
    {
      image: 'fa-linkedin',
      url: 'https://www.linkedin.com/in/elia-bonetto/'
    }
  ]
};

const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('./img/me.png'),
  imageSize: 400,
  message:
    'I am Elia Bonetto, a Ph.D. student Max Planck Institute for Intelligent Systems in Tübingen, Germany. I am currently enrolled in the IMPRS-IS program under the supervision of Aamir Ahmad, Michael J. Black and Jöerg Stückler. In my free time I like watching movies, hiking, listening to music, and taking photos.',
  resume:
    'https://drive.google.com/file/d/1r53a25Br9VX21EHSwUB2nH5MR0UBE-mX/view?usp=sharing'
};

const repos = {
  show: true,
  heading: 'Latest Code Updates',
  gitHubUsername: 'eliabntt',
  reposLength: 4,
  specificRepos: []
};

const getInTouch = {
  show: true,
  heading: 'Get In Touch',
  message:
    "I'm currently looking for an internship in CV, robotics or ML! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: 'elia.bonetto@tue.mpg.de'
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: 'Skills',
  hardSkills: [
    { name: 'Python', value: 90 },
    { name: 'SQL', value: 75 },
    { name: 'Data Structures', value: 85 },
    { name: 'C/C++', value: 65 },
    { name: 'JavaScript', value: 90 },
    { name: 'React', value: 65 },
    { name: 'HTML/CSS', value: 55 },
    { name: 'C#', value: 80 }
  ],
  softSkills: [
    { name: 'Goal-Oriented', value: 80 },
    { name: 'Collaboration', value: 90 },
    { name: 'Positivity', value: 75 },
    { name: 'Adaptability', value: 85 },
    { name: 'Problem Solving', value: 75 },
    { name: 'Empathy', value: 90 },
    { name: 'Organization', value: 70 },
    { name: 'Creativity', value: 90 }
  ]
};

const experiences = {
  show: false,
  heading: 'Experiences',
  data: [
    {
      role: 'Software Engineer', // Here Add Company Name
      date: 'June 2018 – Present'
    },
    {
      role: 'Front-End Developer',
      date: 'May 2017 – May 2018'
    }
  ]
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: 'Leadership',
  message:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.',
  images: [
    {
      img: require("./img/me.png"),
      label: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      img: require("./img/me.png"),
      label: 'Second slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    }
  ],
  imageSize: {
    width: '615',
    height: '450'
  }
};

const onlineWritings = {
  show: true,
  heading: 'Yup, I sometimes write!',
  quote: {
    text:
      'Getting information off the Internet is like taking a drink from a fire hydrant.',
    by: 'Mitch Kapor'
  },
  list: [
    {
      title:
        'Combining Handhelds with a Whole-Class Display to Support the Learning of Scientific Controversies',
      url: 'https://www.evl.uic.edu/moher/papers/chi2003.pdf',
      description:
        'Third grade students used wireless handhelds and a large  shared display to discover strategies for control of variables in scientific experiments. The technology suite supported       activity requirements including synchronous individual       control, face-to-face discourse, and instantaneous display      updates. In an empirical study, students demonstrated       learning in both original and transfer domains.'
    }
  ]
};

// Blog SECTION
const blog = {
  show: true
};

export {
  navBar,
  mainBody,
  about,
  repos,
  skills,
  leadership,
  getInTouch,
  blog,
  experiences,
  onlineWritings
};
