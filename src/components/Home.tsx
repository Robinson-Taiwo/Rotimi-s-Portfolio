/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useEffect, useState } from 'react'
import menu from "/assets/icons/menu.svg"
import gr from "/assets/icons/black_arrow.svg"
import wa from "/assets/icons/whitearrow.svg"

import check from "/assets/icons/check.svg"
import resume from "/assets/icons/resume.svg"

import message from "/assets/icons/message.svg"

import call from "/assets/icons/call.svg"

import rightArrow from "/assets/icons/arrow-up-right.svg"


import taiwo from "/assets/images/taiwo.png"



import t from "/assets/images/omo_3.png"

import "./Home.css"

const Home: FC = () => {

    const [menuBar, setMenuBar] = useState<boolean>(false)

    const [modal, setModal] = useState<boolean>(false)


    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])


    const handleClick = () => {
        setMenuBar(!menuBar);
        setModal(!modal);

        console.log("clicked")
    };


    return (
        <body className={`Home-container ${modal && "h-[100vh]"}`} >

            {/* <div className={modal ? "modal" : "hidden"}>
                

            </div> */}

            <div className={`navbar-container ${scrolled ? 'scrolled' : 'nav-change'}`}>

                <div className="navbar-logo">
                    <span className='R'>R</span>otimi

                </div>


                <div className="nav-menu-icon">
                    <img className='menu-icon' src={menu} onClick={handleClick} alt="" />
                </div>

                <div className={!menuBar ? "hide" : "navbar-items"}>

                    <div className="navbar-item">
                        About
                    </div>


                    <div className="navbar-item">
                        Projects
                    </div>

                    <div className="navbar-item">
                        Contact Me
                    </div>

                    <div className="navbar-item">
                        Stacks
                    </div>

                </div>


            </div>


            <section className="hero-section">



                <h2 className="sub-heading">
                    Hello, i'm <span>&#9995;</span>
                </h2>

                <h1 className="big-text">
                    Omoyeni Taiwo Samuel
                </h1>

                <p className="hero-section-title">
                    ~ Frontend Developer <span>&#128102;</span>
                </p>

                <p className="hero-section-text">

                    Welcome to my digital realm, where innovation meets design. 🚀   I transform ideas into immersive experiences that captivate, inspire, and leave a lasting impression.

                </p>


                <div className="check-button">

                    <div className="hero-section-button">
                        Hire Me  <span><img className='greater' src={gr} alt="" /></span>
                    </div>


                    <div className="download-resume">
                        Download Resume <span className='ml-[0.4rem]' ><img className='greater' src={wa} alt="" /></span>
                    </div>

                </div>


                <section className="stat">

                    <div className="stat-coli ">

                        <div className="num-stat">
                            5+
                        </div>

                        <div className="stat-text">

                            completed projects
                        </div>


                    </div>


                    <div className="stat-col">

                        <div className="num-stat">
                            2+
                        </div>

                        <div className="stat-text">

                            Years Of Experience
                        </div>


                    </div>


                    <div className="stat-col">

                        <div className="num-stat">
                            100%
                        </div>

                        <div className="stat-text">

                            Delivery Rate
                        </div>


                    </div>

                </section>



                <div className="picture-container">


                    <img src={t} className='taiwo' alt="" />

                </div>




            </section>


            <section className="about_me">

                <h4 className="aboutme">
                    About Me
                </h4>

                <h1 className="about_h">
                    Replicating Your <span className="wild"> Wildest Immagination</span> On The Web
                </h1>


                <div className="about_texts">
                    <p>
                        I am an Entrpreneur, Publick Speaker and web developer with a passion for creating responsive and functional websites. Being proficient in HTML, CSS, Javascript and React.js, i build websites from simple landing pages to complex sites with multiple functionalities
                    </p>

                    <ul className="lists">

                        <li className="list">

                            <img src={check} alt="" className="check" />

                            <p>Responsive Web Design</p>

                        </li>
                        <li className="list">

                            <img src={check} alt="" className="check" />

                            <p>Web Development</p>


                        </li>
                        <li className="list">

                            <img src={check} alt="" className="check" />

                            <p>Problem Solving</p>

                        </li>
                        <li className="list">

                            <img src={check} alt="" className="check" />

                            <p>Entrepreneur</p>

                        </li>
                        <li className="list">

                            <img src={check} alt="" className="check" />

                            <p>Public Speaking</p>

                        </li>

                    </ul>

                </div>

                <div className="precontact-u">

                    <div className="pre-contact-details">

                        <div className="pre-contact-us-left">
                            <img src={message} alt="" className="pre-c-" />

                        </div>

                        <div className="pre-contact-us-right">

                            <div className="email-us">
                                Email Me
                            </div>

                            <div className="pre-contact-email">
                                omoyenisamuel66@gmail.com
                            </div>
                        </div>


                    </div>



                    <div className="pre-contact-details">

                        <div className="pre-contact-us-left">
                            <img src={call} alt="" className="pre-c-" />
                        </div>

                        <div className="pre-contact-us-right">

                            <div className="email-us">
                                Make A Call
                            </div>

                            <div className="pre-contact-email">
                                +234 80888704731
                            </div>
                        </div>


                    </div>

                </div>

            </section>


            <section className="resume">

                <img src={resume} alt="" className="resume-icon" />

                <h2 className="my-resume-text">
                    my Resume
                </h2>

                <h1>Real <span className='problem-solu
                ' >problem Solution</span> Experience</h1>



                <div className="experience-section">

                    <div className="es-left">

                        <div className="exp-div">

                            <div className="exp-div-left">
                                <img className='right-arrow' src={rightArrow} alt="" />

                            </div>

                            <div className="exp-div-right">

                                <div className="exp-time">
                                    2023 - present
                                </div>

                                <div className="exp-role">
                                    Frontend Web Developer
                                </div>

                                <div className="exp-company">
                                    Information and Technology Professionals Association
                                </div>

                            </div>





                        </div>

                        <div className="exp-div">

                            <div className="exp-div-left">
                                <img className='right-arrow' src={rightArrow} alt="" />

                            </div>

                            <div className="exp-div-right">

                                <div className="exp-time">
                                    2024 - present
                                </div>

                                <div className="exp-role">
                                    Frontend Developer freelancer
                                </div>

                                <div className="exp-company">
                                    Fivvr
                                </div>

                            </div>



                        </div>

                    </div>


                    <div className="es-right">
                        <div className="exp-div">

                            <div className="exp-div-left">
                                <img className='right-arrow' src={rightArrow} alt="" />

                            </div>

                            <div className="exp-div-right">

                                <div className="exp-time">
                                    2023 - present
                                </div>

                                <div className="exp-role">
                                    Frontend Web Developer (intern)
                                </div>

                                <div className="exp-company">
                                    Oluadepe Farms Nigeria LTD (OFNL)
                                </div>

                            </div>



                        </div>

                    </div>









                </div>




            </section>



        </body>
    )
}

export default Home