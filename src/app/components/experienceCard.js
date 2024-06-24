import React from "react";

const List = ({listItems}) => {
    return (
        <ul>
            {
                listItems && listItems.length > 0 && 
                listItems.map(item => (
                    <li key={item}>{item}</li>
                ))
            }
        </ul>
    )
}

const BuiltCard = (props) => {
    const { name, tasks, technologies } = props;
    return (
        <div>
            <h3>{name}</h3>
            <div>
                <List listItems={tasks} />
            </div>
            <div>
                <List listItems={technologies} />
            </div>
        </div>
    )
}

const ExperienceDetails = (props) => {
    const { built, achievements } = props;
    return (
        <div>
            <div>
                <h3>Built:</h3>
                <BuiltCard {...built} />
            </div>
        </div>
    )
}

const ExperienceCard = (props) => {
    const { name, role, built, href, imageUrl, started, completed, achievements } = props;
    return (
        <div className="flex flex-col items-start gap-3 justify-between p-4 w-full shadow-customCard rounded-lg">
            <h3 className="font-nunito text-lightText text-lg border-b-2 border-[#F3F4F6]">{role}</h3>
            <div className="flex flex-row items-center justify-between w-full ">
                <h2 className="text-sm text-customBlack">{name}</h2>
                <span className="text-xs text-lightText">{started} - {completed}</span>
            </div>
            <div>

            </div>
        </div>
    )
} 

export default ExperienceCard;