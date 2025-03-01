import vu from "../Images/vu.png";
import jsp from "../Images/jsp.jpeg";
import hhs from "../Images/hhs.jpg";
import echobazar from "../Images/echobazar.png";
import vishwaevents from "../Images/vishwaevents.png";
import film from "../Images/film.png";
import react from '../Images/re.svg';
import express from '../Images/express.svg';
import node from '../Images/nodejs.svg';
import mongodb from '../Images/mongodb.svg';
import nextjs from '../Images/next.svg';
import tailwind from '../Images/tail.svg';
import stripe from '../Images/stripe.svg';
import redux from '../Images/redux.svg';
import exp1 from '../Images/exp1.svg'
import exp2 from '../Images/exp2.svg'

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Education", link: "#education" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

export const education = [
  {
    course: "Bachelor Of Technology In Computer Engineering",
    collegeName: "Vishwakarma University, Pune",
    completion: "2022 - 2025 | Pursuing",
    img: vu,
  },
  {
    course: "Diploma In Computer Engineering",
    collegeName: "Jaywantrao Sawant Polytechnic, Pune",
    completion: "2019 - 2022 | Completed",
    img: jsp,
  },
  {
    course: "Secondary School Of Certificate",
    collegeName: "Hillgreen High School, Pune",
    completion: "2015 - 2019 | Completed",
    img: hhs,
  },
];

export const projects = [
    {
      id: 1,
      title: "Echobazar - Ecommerce",
      des: "Developed a comprehensive ECommerce platform enabling users to seamlessly browse products, manage their shopping cart, and process orders. Implemented a dynamic product browsing and checkout, with integrated Stripe payment processing.",
      img: echobazar,
      iconLists: [react , nextjs, mongodb, tailwind, stripe],
      link: "https://echobazar.vercel.app/",
    },
    {
      id: 2,
      title: "VishwaEvents",
      des: "Event Management System enabling students to create, manage, and register for events within the college community. Implemented an event creation and registration, with integrated ticket generation upon registration to provide attendees with personalized access to events.",
      img: vishwaevents,
      iconLists: [mongodb ,express, react, node, tailwind],
      link: "https://vishwa-events.vercel.app/",
    },
    {
      id: 3,
      title: "FilmJunction",
      des: "A dynamic web application built using React and Redux Toolkit, designed to provide users with a seamless experience for discovering and exploring movies and TV shows. Leveraging the Movies Database API, FilmJunction offers an extensive collection of titles, ensuring users can easily find their favorite entertainment content.",
      img: film,
      iconLists: [react, redux, tailwind],
      link: "https://film-junction.vercel.app/",
    },
]

export const workExperience = [
  {
    id: 1,
    title: "Software Enginner - Intern",
    company : "Syngenta",
    desc: "Currently working on the Cropwise Planting project, specifically focusing on Zone Management. Responsible for improving UI/UX, optimizing performance, developing new features, and writing test cases to ensure application reliability and robustness. Enhancing system performance to provide a seamless user experience in large-scale agricultural planning.",
    className: "md:col-span-2",
    img: exp1,
    date : 'Jan 2025 - Present'
  },
  {
    id: 2,
    title: "Full Stack Developer - Freelancer",
    company : "Visionary Matrix",
    desc: "Designed the complete system architecture using Figma, followed by meticulous development in Next.js. Implemented custom forms integrated with RESTful APIs and facilitated client-specific report requests, enhancing user engagement and functionality.",
    className: "md:col-span-2",
    img: exp2,
    date : 'Jan 2024 - May 2024'
  },
  {
    id: 3,
    title: "Frontend Developer - Intern",
    company : "Fyoocher",
    desc: "Optimizing the website for performance and user experience, such as improving page load speed and mobile responsiveness. Maintaining the website by updating content, fixing bugs, and adding new features as required.",
    className: "md:col-span-2", 
    img: exp2,
    date : 'Jun 2024 - Dec 2024'
  },
  {
    id: 4,
    title: "Guest Lecture on Git & Github",
    company : "Vishwakarma University",
    desc: "Instructed students on version control concepts, emphasizing its importance in collaborative projects. Provided hands-on training in Git, covering installation, configuration, and fundamental commands and operations. Guided students in using GitHub for collaboration, including account setup and workflows involving pull requests and branches.",
    className: "md:col-span-2", 
    img: exp1,
    date : '1 Jan 2024'
  }
];

export const skillsData = [
  'HTML',
  'CSS',
  'javascript',
  'Typescript',
  'React',
  'nextjs',
  'Tailwind',
  'MongoDB',
  'MySQL',
  'Git',
  'Github',
  'Bootstrap',
  'Figma',
  'Firebase',
  'MaterialUI',
  'Stripe',
  'Nodejs',
  'Markdown',
  'redux',
  'Java',
  'Python'
]
