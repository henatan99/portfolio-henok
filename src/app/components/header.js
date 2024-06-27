"use client"
import React, {useState} from 'react';
import Link from 'next/link';
import { ButtonOutline, Button } from './button';

const Header = () => {
    const navItems = [
        {id: 1, text: 'Home', href: ''},
        {id: 3, text: 'Skills', href: ''},
        {id: 2, text: 'About me', href: ''}
    ]

    const [active, setActive] = useState(1);

    return (
        <header className='flex flex-row items-center justify-between py-2 px-4 border-b-[1px] border-[#F6F6F6]'>
            <div className='flex flex-row items-center justify-between gap-4'>
                <div className='flex flex-row items-center justify-center bg-btnPrimary text-[#fff] text-lg w-10 h-10 rounded-full border-blue-900 border-1 font-bold'>
                    <span className='font-cabin'>HM</span>
                </div>
                <h2 className='text-customBlack font-manrope text-xl font-bold'>
                    Full Stack Developer
                </h2>
                <nav className='hidden md:block'>
                    <ul className='flex flex-row items-center gap-3'>
                        {
                            navItems.map(navItem => (
                                <li key={navItem.id} className='flex items-center justify-center h-full'>
                                    <Link 
                                        href={navItem.href}
                                        onClick={() => setActive(navItem.id)} 
                                        className={
                                            `
                                                ${
                                                    active === navItem.id ? 
                                                    'text-customBlack bg-lightGray' : 'text-midGray hover:text-customBlack'
                                                }
                                                text-sm
                                                h-full
                                                flex items-center jjustify-center
                                                px-2
                                                py-1
                                                rounded-sm
                                            `
                                        }
                                    >
                                        <span className='m-auto'>
                                            {navItem.text}
                                        </span>
                                    </Link>
                                </li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div className='hidden md:flex flex-row items-center gap-3'>
                <ButtonOutline text='Log in' />
                <Button text='Subscribe' />
            </div>
        </header>
    )
}

export default Header;