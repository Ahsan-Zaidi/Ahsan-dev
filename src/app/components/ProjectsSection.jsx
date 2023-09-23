"use client";
import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
      id: 1,
      title: "Popshop (MERN)",
      description: "Discover Popshop your destination for purchasing top of the line electronics at unbeatable prices. This full-stack e-commerce application, explores features like authentication, user registration, shopping cart, reviews, and a seamlessly integrated PayPal API payment system.",
      image: "/images/projects/project1.jpg",
      tag: ["All", "Web"],
      gitUrl: 'https://github.com/Ahsan-Zaidi/techshop',
      previewUrl: 'https://popshop-6szd.onrender.com/'
    },
    {
      id: 2,
      title: "Real Estate App (React/Firebase)",
      description: "Housing Market project using React for the frontend and Firebase for server functions and database management. It lets users buy, sell, or rent luxury homes with integrated maps and seamless seller communication, offering a user-friendly solution for all your real estate needs.",
      image: "/images/projects/project2.jpg",
      tag: ["All", "Web"],
      gitUrl: 'https://github.com/Ahsan-Zaidi/real-estate-app',
      previewUrl: 'https://real-estate-app-theta-red.vercel.app/'
    },
    {
      id: 3,
      title: "Github Finder (React/Web-Api)",
      description: "GitHub finder application leveraging the GitHub API to pinpoint users based on search criteria. This app offers user insights, including their name, recent repositories, avatar images, and more. It was built using React and styled with libraries like Tailwind CSS and Daisy UI.",
      image: "/images/projects/project3.jpg",
      tag: ["All", "Web"],
      gitUrl: 'https://github.com/Ahsan-Zaidi/github-finder',
      previewUrl: 'https://github-finder-eight-theta.vercel.app/'
    },
    {
      id: 4,
      title: "Bookspot (React/Web-Api)",
      description: "Bookspot serves as an online library where users can find their favorite books by title or author's name. Moreover, it enriches the user experience by offering book descriptions, with data sourced from a web API.",
      image: "/images/projects/project4.jpg",
      tag: ["All", "Mobile"],
      gitUrl: 'https://github.com/Ahsan-Zaidi/library',
      previewUrl: 'https://ahsan-zaidi.github.io/library/'
    },
    {
      id: 5,
      title: "Get Up Exercise (React/Web-Api)",
      description: "Get Up is a dependable workout app featuring thousands of exercises sourced from rapid API. It organizes exercises by muscle groups and incorporates videos to help users enhance their form, all built with React and React Bootstrap.",
      image: "/images/projects/project5.jpg",
      tag: ["All", "Mobile"],
      gitUrl: 'https://github.com/Ahsan-Zaidi/getup-exercise',
      previewUrl: 'https://ahsan-zaidi.github.io/getup-exercise/'
    },
    {
      id: 6,
      title: "Weather App (React/Web-Api)",
      description: "A personalized weather application that enables users to check the weather in any city worldwide. This app utilizes a Web API to retrieve comprehensive data, including temperature, precipitation probability, humidity, and wind speeds.",
      image: "/images/projects/project6.jpg",
      tag: ["All", "Mobile"],
      gitUrl: 'https://github.com/Ahsan-Zaidi/weather-app',
      previewUrl: 'https://ahsan-zaidi.github.io/weather-app/'
    }
];

const ProjectsSection = () => {
    return (
        <section className='my-8 md:my-12' id='projects'>
            <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
                My Projects
            </h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project) => 
                    <ProjectCard 
                        key={project.id} 
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                )}
            </div>
        </section>
    )
}

export default ProjectsSection;