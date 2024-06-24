import React from "react";
import { Button } from "./button";

const GetInTouch = () => {
    return (
        <section className="bg-[#FAFAFB] w-full py-16 px-4">
            <div className="flex flex-col items-center gap-6 max-w-[36rem] m-auto">
                <h2 className="text-4xl text-[#42BDD6] font-bold">Get In Touch</h2>
                <p className="text-center">
                    I would love to hear from you! Whether you have a question or just want to connect, 
                    feel free to reach out
                </p>
                <Button text='Send Message' styles='py-2 rounded-none text-lg' />
            </div>
        </section>
    )
}

export default GetInTouch;