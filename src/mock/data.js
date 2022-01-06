import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chad Smith for District 2', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Chad Smith for School Board District 2' // e.g: Welcome to my website
};


// HERO DATA
export const heroData = {
  title: 'Hello, my name is',//
  name: 'Chad Smith',//
  subtitle: "I'm running for School Board in District 2", //
  cta: 'Meet Chad',
  cta2: " Donate  ",
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Hello, my name is Chackras (Chad) Smith. I’m a former football coach and Educational Specialist. I worked with the Exceptional Student Population and as a Social Science Teacher in various Title 1 High Schools throughout Florida. I have a decade of experience in the public-school environment. This includes stops at Gibbs High School and Woodlawn in south Pinellas and Anclote and Dunedin in north Pinellas. I hold a Terminal Degree in Education from the University of West Florida, from which I recently became an alumnus. I have also worked in higher education, first as a student assistant with the Arkansas Razorback Football team for four years and later as an Educational Specialist at Ultimate Medical Academy, where I designed courses.',
  // resume: // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'I believe we need to follow the science to keep our children safe from COVID-19.',
    info: 'Currently the school board is not following the CDC recommendations to protect our children’s safety on COVID 19 Mitigation strategies. Mask, filtration, and distancing. All students deserve a safe and healthy environment in which to learn.',
   // info2: '',
    // url: '',
    //repo: '' // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'I believe education should be equitable for all students regardless of ability',
    info: 'The district refuses to provide support to dyslexic students that have a personal physician diagnosis. Any ESE student that is on an IEP should have their disability specifically diagnosed or a private physicians diagnosed disability should have their education implemented with evidence-based instruction that is tailored to the students needs.',
  // info2: '',
  // url: '',
    //repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'I believe we need to do more to retain high quality teachers.',
    info: 'Teachers should have longer than a yearly contract. Tenure will help retain teachers in title 1 schools and thus increase the quality of education provided in underserved communities.  ',
  //  info2: '',
  //  url: '',
    //repo: '', // if no repo, the button will not show up
  },
];



// CONTACT DATA
export const contactData = {
  cta: 'Help make our schools beter',
  btn: 'Join Me!',
  email: 'info@chadsmith.vote',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: '',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
