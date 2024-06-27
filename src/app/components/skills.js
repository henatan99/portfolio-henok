import React from "react";

const Skills = () => {
    const skills = [
        {id: 1, text: 'HTML', category: 'langauge', rank: 0, animate: 'animate-floating'},
        {id: 2, text: 'CSS', category: 'styling', rank: 1, animate: 'animate-spinning'},
        {id: 3, text: 'JavaScript', category: 'language', rank: 0, animate: 'animate-floating'},
        {id: 4, text: 'TypeScript', category: 'language', rank: 1, animate: 'animate-spinning'},
        {id: 5, text: 'ReactJS', category: 'framework', rank: 0, animate: 'animate-floating'},
        {id: 6, text: 'React Native', category: 'framework', rank: 1, animate: 'animate-spinning'},
        {id: 7, text: 'NextJS', category: 'framework', rank: 0, animate: 'animate-floating'},
        {id: 8, text: 'Ruby on Rails', category: 'framwork', rank: 1, animate: 'animate-spinning'},
        {id: 9, text: 'NodeJS', categoty: 'framework', rank: 1, animate: 'animate-floating'},
        {id: 10, text: 'Redux', category: 'state management', rank: 1, animate: 'animate-spinning'},
        {id: 11, text: 'ExpressJS', categoty: 'framework', rank: 1, animate: 'animate-floating'},
        {id: 12, text: 'TailwindcCSS', category: 'styling', rank: 0, animate: 'animate-spinning'},
        {id: 13, text: 'BootStrap', category: 'styling', rank: 2, animate: 'animate-floating'},
        {id: 14, text: 'Chakra UI', category: 'styling', rank: 1, animate: 'animate-spinning'},
        {id: 15, text: 'MaterialUI', category: 'styling', rank: 2, animate: 'animate-floating'},
        {id: 16, text: 'postgreSQL', category: 'database', rank: 2, animate: 'animate-spinning'},
        {id: 17, text: 'mySQL', category: 'database', rank: 2, animate: 'animate-floating'},
        {id: 18, text: 'MongoDB', category: 'database', rank: 2, animate: 'animate-spinning'},
        {id: 19, text: 'JWT', category: 'auth', rank: 2, animate: 'animate-floating'},
        {id: 20, text: 'Firebase Auth', category: 'auth', rank: 2, animate: 'animate-spinning'},
        {id: 21, text: 'Google Maps SDK', category: 'cloud', rank: 1, animate: 'animate-floating'},
        {id: 22, text: 'Google Maps APIs', category: 'cloud', rank: 1, animate: 'animate-spinning'},
        {id: 23, text: 'Test Driven Development', category: 'best practices', rank: 2, animate: 'animate-floating'},
        {id: 24, text: 'Responsive design', category: 'best practices', rank: 1, animate: 'animate-spinning'},
        {id: 25, text: 'Code review', category: 'professional skills', rank: 2, animate: 'animate-floating'},
        {id: 26, text: 'Agile Methodology', category: 'professional skills', rank: 1, animate: 'animate-spinning'},
        {id: 27, text: 'Remote collaboration', category: 'professional skills', rank: 1, animate: 'animate-floating'},
    ]

    const colors = {
        'language': 'text-customBlue',
        'framework': 'text-customGreen',
        'styling': 'text-customPink',
        'database': 'text-customPurple',
        'state management': 'text-customOrange',
        'auth': 'text-customRed',
        'cloud': 'text-customTeal',
        'best practices': 'text-customYellow',
        'professional skills': 'text-customIndigo'
    };

    const size = ['text-2xl', 'text-lg', 'text-xs']

    return (
        <section className="hidden md:flex flex-col items-center gap-12 w-full bg-white py-8 rounded-3xl">
            <h2 className='text-customBlue font-cabin text-4xl font-semibold'>Skills and Expertise</h2>
            <ul className="flex flex-row justify-between flex-wrap w-[40rem]">
                {
                    skills.map(skill => (
                        <li key={skill.id} className="">
                            <p className={`${size[skill.rank]} ${colors[skill.category]} p-4 opacity-75 font ${skill.animate}`}>{skill.text}</p>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default Skills;