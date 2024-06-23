import React from 'react';
import Education from './education';
import Experience from './experience';

const Background = () => {
    return (
        <section className='w-full flex flex-col gap-12'>
            <h2 className='text-black font-cabin text-4xl font-semibold text-center'>Background and Experience</h2>
            <Education />
            <Experience />
        </section>
    )
}

export default Background;