import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
    {
      id: 1,
      title: "Popshop",
      description: "Ecommerce app: MERN",
      image: "/images/projects/project1.jpg",
      tag: ["All", "Web"],
      gitUrl: 'https://github.com/Ahsan-Zaidi/techshop',
      previewUrl: 'https://popshop-6szd.onrender.com/'
    },
    {
      id: 2,
      title: "Bookspot",
      description: "Online library to find your favorite books: React Js",
      image: "/images/projects/project2.jpg",
      tag: ["All", "Web"],
      gitUrl: 'https://github.com/Ahsan-Zaidi/library',
      previewUrl: 'https://ahsan-zaidi.github.io/library/'
    },
    {
      id: 3,
      title: "Get-up-Exercise",
      description: "Find a workout plan for you: React Js",
      image: "/images/projects/project3.jpg",
      tag: ["All", "Web"],
      gitUrl: 'https://github.com/Ahsan-Zaidi/getup-exercise',
      previewUrl: 'https://ahsan-zaidi.github.io/getup-exercise/'
    },
    {
      id: 4,
      title: "Weather-app",
      description: "Check the weather in your area: React Js",
      image: "/images/projects/project4.jpg",
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