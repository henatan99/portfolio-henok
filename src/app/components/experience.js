import React from 'react';
import ExperienceCard from './experienceCard';

const Experience = () => {
    const experiences = [
        {
            id: 1, 
            name: 'Jimma University', 
            role: 'Lecturer in Mechanical Engineering',
            built: [
                
            ],
            href: '', 
            imageUrl: '/images/jimma_university.jpg', 
            started: 'September 2004',
            completed: 'July 2007',
            achievements: []
        },
        {
            id: 2, 
            name: 'Microverse', 
            role: 'Code Reviwer: Part Time',
            built: [], 
            href: '', 
            imageUrl: '/images/jimma_university.jpg', 
            started: 'September 2004',
            completed: 'July 2007',
            achievements: []
        },
        {
            id: 3, 
            name: 'Telesoft', 
            role: 'React Front End Developer',
            built: [
                {
                    id: 1, 
                    name: 'Dashboard for a smart parking application',
                    tasks: [],
                    technologies: ['ReactJS', 'Redux']
                    
                },
                {
                    id: 2, 
                    name: 'Static website for an AI assisted Marketing',
                    tasks: [],
                    technologies: ['NextJS', 'Material UI', 'Story Book', 'Atomic Design Pattern']
                },
            ],
            href: '', 
            imageUrl: '/images/jimma_university.jpg', 
            started: 'September 2004',
            completed: 'July 2007',
            achievements: []
        },
        {
            id: 4, 
            name: 'Aevue Llc', 
            role: 'React Front End Developer', 
            built: [
                {
                    id: 1, 
                    name: 'Video uploading and editing app',
                    tasks: [],
                    technologies: ['NextJS', 'Material UI', 'AWS Amplify']
                },
            ],
            href: '', 
            imageUrl: '/images/jimma_university.jpg', 
            started: 'September 2004',
            completed: 'July 2007',
            achievements: []
        },
    ]
    return (
        <div className="flex flex-col items-center gap-8 w-full">
            <h2 className="text-2xl font-nunito text-customBlack">Experience</h2>
            {
                experiences.reverse().map(experience => (
                    <div key={experience.id} className='w-full max-w-[40rem]'>
                        <ExperienceCard {...experience} />
                    </div>
                ))
            }
        </div>
    )
}

export default Experience;