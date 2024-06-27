import React from "react";
import Image from "next/image";
import { Bounce } from "./bounce";
import PersonalInfoCard from "./personalInfoCard";

const Hero = () => {
    const title = 'Full Stack Web Developer';
    const intro = [`A passionate full-stack web developer with expertise in React.js, Next.js, Node.js, and Tailwind CSS.`, 
    `I thrive on solving complex problems and have successfully built impactful applications like 
    a ride-hailing app and contributed for a large-scale AI-assisted smart parking application.`,
    `With a knack for creativity and quality, always eager to transform innovative ideas into reality.`]

    const personalInfo = {
        name: 'Henok Mekonnen',
        phone: '+251 995 348317',
        email: 'henatan99@gmail.com'
    }

    return (
        <section className="w-full flex flex-row">
            <div className="flex flex-col items-start gap-8 p-8 lg:pr-20">
                <h1 className="text-4xl font-cabin font-bold text-heading1">{title}</h1>
                <ul className="flex flex-col gap-3">
                    {
                        intro.map(item => (
                            <li key={item} className="font-nunito text-lg text-customBlack">
                                {item}
                            </li>
                        ))
                    }
                </ul>
                <button  className="bg-btnPrimary px-8 py-4 text-white rounded-lg">Download Resume</button>
            </div>
            <div className="hidden lg:flex flex-col items-center justify-center overflow-hidden bg-[#FAD75A] w-[30rem] h-[26rem] rounded-tr-3xl">
                
                <Bounce bouncerStyles='w-28 h-28'>
                    <div className="w-28 h-28 overflow-hidden bg-black rounded-full">
                        <Image src='/images/profile.png' alt='profile' width={120} height={120} objectFit="contain" />
                    </div>
                </Bounce>
                <PersonalInfoCard {...personalInfo} />
            </div>
        </section>
    )
}

export default Hero;