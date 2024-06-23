import React from "react";
import EducationCard from "./educationCard";

const Education = () => {
    const institutes = [
        {
            id: 1, 
            name: 'Jimma University', 
            degree: 'BSc. in Mechanical Enginering', 
            href: '', 
            imageUrl: '/images/jimma_university.jpg', 
            started: 'September 2004',
            completed: 'July 2007'
        },
        {
            id: 2, 
            name: 'Addis Ababa University', 
            degree: 'MSc. in Mechanical Enginering',
            href: '',
            imageUrl: '/images/addis_ababa_university.png',
            started: 'September 2009',
            completed: 'September 2012'
        },
        {
            id: 3, 
            name: 'Microverse', 
            degree: 'MSc. in Mechanical Enginering',
            href: '',
            imageUrl: '/images/microverse.png',
            started: 'September 2020',
            completed: 'October 2021'
        },
    ]

    return (
        <div className="flex flex-col items-center gap-8 w-full">
            <h2 className="text-2xl font-nunito text-customBlack">Education</h2>
            <div className="flex flex-row items-center justify-center gap-16 w-full">
                {
                    institutes.map(institute => (
                        <div className="transform transition duration-500 hover:scale-105 hover:bg-[#F8FAFF]">
                            <EducationCard {...institute} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Education;