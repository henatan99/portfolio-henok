import React from "react";
import Image from "next/image";

const PersonalInfoCard = (props) => {
    const { name, phone, email } = props;
    return (
        <div className="flex flex-col items-start gap-4 bg-white p-4 m-4 w-full">
            <h2 className="text-lg">{name}</h2>
            <div className="flex flex-row items-center gap-2 text-xs">
                <Image src='/icons/phone.png' alt='phone' width={20} height={20} />
                <p className="opacity-55">{phone}</p>
            </div>
            <div className="flex flex-row items-center gap-2 text-xs">
                <Image src='/icons/email.png' alt='email' width={20} height={20} />
                <p className="opacity-55">{email}</p>
            </div>
        </div>
    )
}

export default PersonalInfoCard;