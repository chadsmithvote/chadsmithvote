import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chad Smith for District 2', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Chad Smith for Pinellas County School Board District 2' // e.g: Welcome to my website
};


// HERO DATA
export const heroData = {
  title: 'Hello, my name is',//
  name: 'Chad Smith',//
  subtitle: "I'm running for Pinellas County School Board in District 2", //
  cta: 'Meet Chad',
  cta2: ' Donate  ',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hello, my name is Chad Smith. I’m a former football coach and Educational Specialist. I worked with the Exceptional Student Population and as a Social Science Teacher in various Title 1 High Schools throughout Florida. I have a decade of experience in the public-school environment. My tenure included stops at Gibbs High School and Woodlawn in south Pinellas and Anclote and Dunedin in north Pinellas. I hold a Terminal Degree in Education from the University of West Florida, from which I recently became an alumnus. For four years, I worked in higher education as a student assistant with the Arkansas Razorback Football team. Later as an Educational Specialist at Ultimate Medical Academy, I designed courses.',
  // resume: // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'We need to follow the science to keep our children safe from COVID-19.',
    info: 'Currently, the school board is not following the CDC recommendations to protect our children’s safety on COVID 19 Mitigation strategies. Mask, filtration, and distancing. All students deserve a safe and healthy environment in which to learn.',
   // info2: '',
    // url: '',
    //repo: '' // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Education should be equitable for all students regardless of ability.',
    info: 'The district refuses to provide proper support to dyslexic students with a personal physician diagnosis. Any ESE student on an IEP should have their disability specifically diagnosed. Those with private physician diagnoses should have their education designed with evidence-based instruction tailored to the student needs.',
  // info2: '',
  // url: '',
    //repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'We need to do more to retain high-quality teachers.',
    info: 'Teachers should have longer than a yearly contract. Tenure will help retain teachers in title 1 schools, thus increasing the quality of education provided in underserved communities. Protecting expert teachers financially and rewarding longevity with tenure will improve the quality of instruction throughout all our schools. Talented teachers should teach instead of fighting for their job security.',
  //  info2: '',
  //  url: '',
    //repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project4.jpg',
    title: 'Schools are a part of the community safety net.',
    info: 'Schools are a trusting and safe environment for many students. Our underprivileged schools should be working toward becoming a full-service environment that meets the basic needs of our students. Mentors and coaches throughout the educational journey provide meaningful connections with students and are one of the most effective strategies to lower dropout rates.',
  //  info2: '',
  //  url: '',
    //repo: '', // if no repo, the button will not show up
  },
];


// CONTACT DATA
export const contactData = {
  cta: 'Help me bring authentic leadership to our schools',
  btn: 'Join Me!',
  url: 'https://www.mobilize.us/votechadsmith/event/435883/',

};

// CONTACTFORM DATA
export const FormData = {
  Title: 'Donate',
  btn: 'Donate',
  form: "xjvlgvzq",
}

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'fa-brands fa-twitter',
      url: 'https://twitter.com/votechadsmith',
    },
    {
      id: nanoid(),
      name: 'fa-brands fa-tiktok',
      url: 'https://www.tiktok.com/@votechadsmith',
    },
    {
      id: nanoid(),
      name: 'fa-brands fa-facebook',
      url: 'https://www.facebook.com/ChadSmith.Vote',
    },
    {
      id: nanoid(),
      name: 'fa-solid fa-at',
      url: 'info@chadsmith.vote',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
