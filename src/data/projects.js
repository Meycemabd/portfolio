// src/data/projects.js
//import maintenaceImg from '../assets/maitenance.png';
import bookingImg from '../assets/airbnb.png'
import portfolioImg from '../assets/portfolio.png'
import instagramImg from '../assets/insta.png'
import eyouStoreImg from '../assets/EyouStore.png'

export const projects = [
    {
      id: 1,
      title: "Booking Website",
      description: "This booking web app, built with React, Express, and PostgreSQL (managed via DBeaver), is currently a work in progress. I’m still developing it to deliver a smooth and efficient booking experience.",
      image: bookingImg,
      tags: ["React", "Bootstrap", "Express"," Postgres"],
      link: "https://github.com/Meycemabd/Gunns"
    },
    {
      id: 2,
      title: "MeycemDev – Developer Portfolio",
      description: "A responsive portfolio website for MeycemDev, built with React, Bootstrap, and an Express backend. It showcases projects and skills in a clean layout and includes a contact form for easy communication.",
      image: portfolioImg,
      tags: ["React", "Bootstrap", "Javascript", "Jest"],
      link: "https://meycemportfolio.netlify.app/"
    },
    {
      id: 3,
      title: "Insatgram Clone",
      description: "An Instagram clone built with React and TypeScript, styled based on a custom design created in Figma. It features key Instagram-like functionalities and demonstrates modern frontend development skills.",
      image: instagramImg,
      tags: ["React", "TypeScript", "Javascript", "Figma"],
      link: "https://github.com/Meycemabd/instagram-Clone-Web"
    },
    {
      id: 3,
      title: "Eyou Store  – E-Commerce App",
      description: "Modern MERN-Stack web shop. Features include product search, filters, detail pages, and responsive design. Built with React, Node.js (Express & NestJS), MongoDB, Bootstrap and Redux.",
      image: eyouStoreImg,
      tags: ["React", "TypeScript", "Redux", "Bootstrap", "Node.js"],
      link: "https://eyoustoree.netlify.app/"
    }
  ];
  