import React from "react";
import Image from "next/image";

const EducationCard = (props) => {
    const { name, degree, href, imageUrl, started, completed } = props;
    return (
        <a href={href} className="flex flex-col items-start p-2 shadow-customCard w-64 ">
            <div className="w-full flex items-center h-20 overflow-hidden bg-[#F8FAFF]">
                <Image src={imageUrl} width={240} height={20}/>
            </div>
            <div className="flex flex-col items-start w-full h-20">
                <h3 className="font-nunito text-customBlack text-lg py-2">{name}</h3>
                <p className="font-nunito text-lightText text-sm">{degree}</p>
                <span className="font-nunito text-lightText text-sm">{started} - {completed}</span>
            </div>
        </a>
    )
}

export default EducationCard;