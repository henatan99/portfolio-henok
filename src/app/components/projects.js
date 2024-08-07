import React from 'react';
import ProjectCard from './projectCard';

const Projects = () => {
    const projects = [
        {
            id: 1, 
            title: 'Ride Sharing App', 
            description: `A ride sharing app connecting riders and drivers. Backed by a NextJS API with admin dashboard`,
            technologies: 'React Native, NextJS, MongoDB, TypeScript, TailwindCSS, GoogleMaps, Firebase',
            imageUrl: '/images/pickup.jpeg',
        },
        {
            id: 2, 
            title: 'Ride Sharing Application', 
            description: `A ride sharing app connecting riders and drivers`,
            technologies: 'React Native, NextJS, MongoDB, TypeScript, TailwindCSS, GoogleMaps, Firebase',
            imageUrl: '/images/getdoctor.png',
        },
        {
            id: 3, 
            title: 'Ride Sharing Application', 
            description: `A ride sharing app connecting riders and drivers`,
            technologies: 'React Native, NextJS, MongoDB, TypeScript, TailwindCSS, GoogleMaps, Firebase',
            imageUrl: '/images/ekhc.png',
        },
    ]

    return (
        <section className='flex flex-col items-center gap-12 w-full bg-white py-8 rounded-3xl'>
            <h1 className='text-customBlue font-cabin text-4xl font-semibold'>My Projects</h1>
            <div className='flex flex-row items-center justify-center gap-4 flex-wrap px-1'>
                {
                    projects.map(project => (
                        <div key={project.id} className='flex items-center justify-center h-full'>
                            <ProjectCard 
                                {...project}
                            />
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Projects;