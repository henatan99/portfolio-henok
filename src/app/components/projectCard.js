import React from "react";
import Image from "next/image";
import { ButtonOutline } from "./button";

const ProjectCard = (props) => {
    const { title, description, technologies, imageUrl } = props;
    return (
        <div className="flex flex-col items-center gap-3 justify-between p-4 w-80 shadow-customCard rounded-lg h-[28rem]">
            <div className="bg-lightGray w-full h-80 flex">
                <Image src={imageUrl} alt={imageUrl} width={320} height={20} />
            </div>
            <div className="flex flex-col items-start justify-between gap-4 w-full h-full">
                <div className="flex flex-col items-start gap-4 w-full">
                    <h2 className="text-lg text-nunito text-customBlack font-semibold">{title}</h2>
                    <p className="text-sm text-nunito text-lightText">{description}</p>
                    <p className="text-sm text-nunito text-lightText">Technologies: {technologies}</p>
                </div>
                <ButtonOutline text='demo' styles='w-40' />
            </div>
        </div>
    )
}

export default ProjectCard;