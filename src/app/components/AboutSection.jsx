"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>HTML</li>
                <li>CSS/SCSS</li>
                <li>JavaScript</li>
                <li>React Js</li>
                <li>Next Js</li>
                <li>Node Js</li>
                <li>Firebase</li>
                <li>SQL/NoSQL</li>
            </ul>
        ),
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>
                    Fullstack Developer Bootcamp <br/>
                    May 2022 - Oct 2022
                </li>
                <li>
                    University of Texas San Antonio <br />
                    2016 - 2021
                </li>
            </ul>
        ),
    },
];

const AboutSection = () => {
    const [tab, setTab] = useState('skills');
    const [ isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image
                    src='/images/about-image.png'
                    alt='computer desk image'
                    priority={true}
                    width={500}
                    height={500}
                />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg '>
                        As a dedicated full-stack web developer, I&apos;ve honed my expertise in JavaScript, while also venturing into a wide array of languages and frameworks. My work isn&apos;t just a job; it&apos;s a genuine passion that drives me to get better every day. I&apos;m eager to explore just how much I can improve and where this journey can take me.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton 
                            selectTab={() => handleTabChange('skills')}
                            active={tab === 'skills'}
                        >
                            {" "}
                            Skills{" "}
                        </TabButton> 
                        <TabButton 
                            selectTab={() => handleTabChange('education')}
                            active={tab === 'education'}
                        >
                            {" "}
                            Education{" "}
                        </TabButton> 
                    </div>
                    <div className='mt-8'>
                        {TAB_DATA.find((t) => t.id === tab).content}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection