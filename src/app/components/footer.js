"use client"
import React from "react";
import Image from "next/image";

const Footer = () => {
    const attributeLink = '<a href="https://www.flaticon.com/free-icons/facebook" title="facebook icons">Facebook icons created by Freepik - Flaticon</a>';
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const socialLinks = [
        {id: 1, iconUrl: '/icons/github.png', href: ''},
        {id: 2, iconUrl: '/icons/linkedin.png', href: ''},
        {id: 3, iconUrl: '/icons/facebook.png', href: ''},
        {id: 4, iconUrl: '/icons/twitter.png', href: ''}
    ]

    return (
        <footer className="bg-[#1D2128] flex flex-col px-12">
            <div className="flex flex-col items-center gap-8 py-16">
                <h2 className="text-center text-white font-nunito text-3xl font-bold">Subscribe to our <br/> Newsletter</h2>
                <form onSubmit={handleSubmit} className="flex p-2">
                    <input placeholder="Input Your Email" className="text-white text-sm bg-transparent outline-none p-2 border-b-2 border-white"/>
                    <button type="submit" className="bg-[#42BDD6] text-white hover:bg-[#3AA9C0] py-2 px-3 border-b-2 border-white">Subscribe</button>
                </form>
            </div>
            <div className="flex flex-row items-center justify-between py-6 text-white border-t-[1px] border-[#FAFAFB]">
                <span className="w-1/3 text-sm">English</span>
                <p className="w-1/3 text-center text-sm">Privacy . Terms . Sitemap</p>
                <ul className="flex flex-row gap-8 w-1/3 justify-end">
                    {
                        socialLinks.map(link => (
                            <li>
                                <a href={link.href}>
                                    <Image src={link.iconUrl} width={24} height={24}/>
                                </a>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </footer>
    )
}

export default Footer;