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
      image: 'fab fa-github',
      url: 'https://github.com/eliabntt'
    },
    {
      image: 'fab fa-linkedin',
      url: 'https://www.linkedin.com/in/elia-bonetto/'
    },
    {
      image: 'fas fa-file',
      url: 'https://drive.google.com/file/d/1tVYONqKZDEgR5mPWv-tMlykpMcDTvG47/view?usp=sharing'
    },
  ],
  imgs: [
    {img: require('./img/1.jpg')},
    {img: require('./img/2.jpg')},
    {img: require('./img/3.jpg')},
    {img: require('./img/4.jpg')},
    {img: require('./img/9.jpg')},
    {img: require('./img/5.jpg')},
    {img: require('./img/7.jpg')},
    {img: require('./img/6.jpg')},
    {img: require('./img/8.jpg')},
    {img: require('./img/10.jpg')},
  ]
};

const about = {
  show: true,
  heading: 'About Me',
  imageLink: require('./img/me.jpg'),
  imageSize: 400,
  message:
    'Hello there! I\'m Elia Bonetto, a Ph.D. student at the prestigious Max Planck Institute for Intelligent Systems in Tübingen, Germany. Currently enrolled in the IMPRS-IS program under the guidance of <a href="https://www.aamirahmad.de/">Aamir Ahmad</a> and <a href="https://ps.is.mpg.de/~black">Michael J. Black</a>. \
    With a deep passion for both computer vision and robotics, I am fascinated by the profound connection that exists between these two fields and to explore the exciting intersection where they converge. <br><br>\
    When I\'m not immersed in the world of cutting-edge research, you\'ll find me indulging in old movies, going down hiking trails, unleashing my creativity with Lego masterpieces, and whipping up food in the kitchen. <br><br> \
    I\'m now actively seeking an internship opportunity where I can combine my love for computer vision, robotics, and their dynamic relationship. If you\'re looking for a dedicated and motivated intern to contribute to your team, let\'s connect and explore the possibilities together!',
  resume:
  'https://drive.google.com/file/d/1tVYONqKZDEgR5mPWv-tMlykpMcDTvG47/view?usp=sharing'
};

const repos = {
  show: true,
  heading: 'Latest Code Updates',
  gitHubUsername: 'eliabntt',
  reposLength: 4,
  specificRepos: ["active_v_slam"],
  excludeRepos: ["tmp-react"]
};

const getInTouch = {
  show: true,
  heading: 'Get In Touch',
  message:
    "I'm currently looking for an internship in CV, robotics or ML! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "elia.bonetto@tue.mpg.de"
};

// SKILLS SECTION
const skills = {
  show: false,
  heading: 'Skills',
  hardSkills: [
    { name: 'Python', value: 90 },
    { name: 'SQL', value: 75 },
  ],
  softSkills: [
    { name: 'Goal-Oriented', value: 80 },
    { name: 'Collaboration', value: 90 },
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
      img: require("./img/me.jpg"),
      label: 'First slide label',
      paragraph: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'
    },
    {
      img: require("./img/me.jpg"),
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
  heading: 'Finally, something comes up!',
  quote: {
    text:
    'Imagination is more important than knowledge.',
 //     'Fall seven times and stand up eight.',
    by: 'Albert Einstein'
    //'Japanese proverb' 
  },
  list: [
    
    {
      title:
        ['Synthetic Data-based Detection of Zebras in Drone Imagery ',<span>&#8212;</span>,' unpublished'],
      url: 'https://arxiv.org/abs/2305.00432',
      description:
        'Showing that we can directly learn to detect Zebras from aerial images by using only data generated with GRADE without any real-world manually-labelled image'
    },
    
    {
      title:
        ['GRADE: Generating Realistic Animated Dynamic Environments for Robotics Research ',<span>&#8212;</span>,' unpublished'],
      url: 'https://arxiv.org/abs/2303.04466',
      description:
        'My framework to simulate realistic dynamic environments. Using IsaacSim and the USD file format I developed a set of tools to take care of generating environments, placing animated subjects, control the robot, generate and process the data. I used that to show limitations of the current SOA of dynamic SLAM and sim2real learning transfer.'
    },

    {
      title:
        'iRotate: Active Visual SLAM for Omnidirectional Robots',
      url: 'https://www.sciencedirect.com/science/article/pii/S0921889022000550',
      description:
        'Here, we propose a three-layered Active Visual SLAM system. By leveraging the robot\'s omnidirectional capabilities, we reduce the path length necessary to explore an environment up to 39%.'
    },
    {
      title:
        'Active Visual SLAM with Independently Rotating Camera',
      url: 'https://ieeexplore.ieee.org/document/9568791',
      description:
        'We introduce an independent rotating camera to expand iRotate to different robotic platforms and reduce the overall energy consumption. Moreover, we adopt a novel state estimate to further enhance the performance of the system.'
    },    
    {
      title:
        'AirPose:  Multi-View  Fusion  Network  for Aerial  3D  Human  Pose  and  Shape  Estimation',
      url: 'https://ieeexplore.ieee.org/document/9691814',
      description:
        'In AirPose we obtained a bi-drone markerless 3D motion capture system for unstructured outdoor environments. This is the first method using extrinsically uncalibrated flying cameras.'
    },
    {
      title:
        'AirCapRL: Autonomous Aerial Human Motion Capture Using Deep Reinforcement Learning',
      url: 'https://ieeexplore.ieee.org/document/9158379',
      description:
        'We introduce a deep reinforcement learning based multi-robot formation for human motion capture.'
    },
    {
      title:
      'Enhancing Deep Semantic Segmentation of RGB-D Data with Entangled Forests',
      url:
      'https://ieeexplore.ieee.org/document/9412787',
      description:
      'Merging information coming from Entangled Forests in FuseNet to reduce the parameter size without losing performance.'
    } ,
    {
      title:
      'A Survey on Recent Advances in Transport Layer Protocols',
      url: 'https://ieeexplore.ieee.org/document/8786240',
      description:
      'This paper surveys the main novelties related to transport protocols, i.e. the evolution of congestion control algorithms and the usage of ML, the proposal of brand new transport protocols, and the introduction of multipath capabilities.'
    }
  ]
};

// Blog SECTION
const blog = {
  show: true
};

// news section
const news = {
  show: true,
  heading: "Latest News!",
  list: [{
    date: "May 2023",
    title: 'Learning from synthetic data workshop paper accepted at ICRA 2023',
    url: 'https://openreview.net/forum?id=SUIOuV2y-Ce',
  },{
    date: "May 2023",
    title: 'The limitations of dynamic SLAM systems accepted as workshop paper at ICRA 2023',
    url: 'https://arxiv.org/abs/2305.04286',
  },{
    date: "May 2023",
    title: 'Learning to detect Zebras from aerial views work submitted for review at ECMR2023',
    url: 'https://arxiv.org/abs/2305.00432',
  },{
    date: "March 2023",
    title: 'Our animated dynamic environment generation pipeline (GRADE) submitted for review at T-RO',
    url: 'https://eliabntt.github.io/GRADE-RR',
  },{
    date: "March 2023",
    title: 'GRADE presented at Nvidia GTC',
    url: 'https://www.nvidia.com/en-us/on-demand/session/gtcspring23-s51570/',
    description: 'Our upcoming data generation pipeline presented at GTC 2023.'
},{
  date: "March 2023",
  title: 'GRADE pipeline online',
  url: 'https://eliabntt.github.io/GRADE-RR',
},
{
    date: "June - September 2022",
    title: 'Summer internship at Nissan',
    description: 'Worked on path following and lane change suggestion with minimal information maps and road level localization (not lane-level).'
},{
    date: "August 2022",
    title: 'iRotate published in RAS',
    url: 'https://www.sciencedirect.com/science/article/pii/S0921889022000550',
    //description: 'Third grade students used wireless handhelds and a large  shared display to discover strategies for control of variables in scientific experiments. The technology suite supported       activity requirements including synchronous individual       control, face-to-face discourse, and instantaneous display      updates. In an empirical study, students demonstrated       learning in both original and transfer domains.'
},{
  date: "January 2022",
  title: 'AirPose paper accepted for publication in RA-L!',
  url: 'https://ieeexplore.ieee.org/document/9691814',
  //description: 'Third grade students used wireless handhelds and a large  shared display to discover strategies for control of variables in scientific experiments. The technology suite supported       activity requirements including synchronous individual       control, face-to-face discourse, and instantaneous display      updates. In an empirical study, students demonstrated       learning in both original and transfer domains.'
},
{
    date: "July 2021",
    title: 'Independently rotating camera for active SLAM paper accepted at ECMR 2021!',
    url: 'https://ieeexplore.ieee.org/document/9568791',
    //description: 'Third grade students used wireless handhelds and a large  shared display to discover strategies for control of variables in scientific experiments. The technology suite supported       activity requirements including synchronous individual       control, face-to-face discourse, and instantaneous display      updates. In an empirical study, students demonstrated       learning in both original and transfer domains.'
},
{
  date: "July 2021",
  title: 'Attended the ETH Robotics Summer School and ETH Robotics Symposium',
  url: 'https://robotics-summerschool.ethz.ch/',
  //description: 'Third grade students used wireless handhelds and a large  shared display to discover strategies for control of variables in scientific experiments. The technology suite supported       activity requirements including synchronous individual       control, face-to-face discourse, and instantaneous display      updates. In an empirical study, students demonstrated       learning in both original and transfer domains.'
},
{
  date: "October 2020",
  title: 'M.Sc. Thesis published in ICPR-2020',
  url: 'https://ieeexplore.ieee.org/document/9412787',
  //description: 'Third grade students used wireless handhelds and a large  shared display to discover strategies for control of variables in scientific experiments. The technology suite supported       activity requirements including synchronous individual       control, face-to-face discourse, and instantaneous display      updates. In an empirical study, students demonstrated       learning in both original and transfer domains.'
},
{
  date: "July 2020",
  title: 'AirCapRL accepted for publication in RA-L',
  url: 'https://ieeexplore.ieee.org/document/9158379',
  //description: 'Third grade students used wireless handhelds and a large  shared display to discover strategies for control of variables in scientific experiments. The technology suite supported       activity requirements including synchronous individual       control, face-to-face discourse, and instantaneous display      updates. In an empirical study, students demonstrated       learning in both original and transfer domains.'
},
{
  date: "March 2020",
  title: 'Accepted in the IMPRS-IS program',
  url: 'https://imprs.is.mpg.de/',
  //description: 'Third grade students used wireless handhelds and a large  shared display to discover strategies for control of variables in scientific experiments. The technology suite supported       activity requirements including synchronous individual       control, face-to-face discourse, and instantaneous display      updates. In an empirical study, students demonstrated       learning in both original and transfer domains.'
},
{
  date: "November 2019 - March 2020",
  title: 'Research internship at MPI-PS in Tuebingen.',
  url: '',
  //description: 'Third grade students used wireless handhelds and a large  shared display to discover strategies for control of variables in scientific experiments. The technology suite supported       activity requirements including synchronous individual       control, face-to-face discourse, and instantaneous display      updates. In an empirical study, students demonstrated       learning in both original and transfer domains.'
},
{
  date: "September 2019",
  title: 'Graduated (cum-laude) at University of Padua. ICT for Internet and Multimedia Engineering.',
  url: 'https://mime.dei.unipd.it/',
  //description: 'Third grade students used wireless handhelds and a large  shared display to discover strategies for control of variables in scientific experiments. The technology suite supported       activity requirements including synchronous individual       control, face-to-face discourse, and instantaneous display      updates. In an empirical study, students demonstrated       learning in both original and transfer domains.'
}]
}

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
  onlineWritings,
  news
};
