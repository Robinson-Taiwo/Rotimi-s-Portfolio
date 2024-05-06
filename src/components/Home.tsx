/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC, useEffect, useState } from 'react'
import menu from "/assets/icons/menu.svg"
import gr from "/assets/icons/black_arrow.svg"
import wa from "/assets/icons/whitearrow.svg"

import check from "/assets/icons/check.svg"
import resume from "/assets/icons/resume.svg"

import message from "/assets/icons/message.svg"

import call from "/assets/icons/call.svg"
import figma from "/assets/icons/figma.svg"
import html from "/assets/icons/html.svg"

import css from "/assets/icons/css.svg"

import js from "/assets/icons/js.svg"

import react from "/assets/icons/react.svg"

import typescript from "/assets/icons/typescript.svg"

import node from "/assets/icons/node.svg"


import redux from "/assets/icons/redux.svg"

import tailwind from "/assets/icons/tailwind.svg"

import python from "/assets/icons/python.svg"

import rightArrow from "/assets/icons/arrow-up-right.svg"


// import taiwo from "/assets/images/taiwo.png"

import getlinked from "/assets/images/getlinked.png"

import artjunks from "/assets/images/artjunks.png"

import itpa from "/assets/images/itpa.png"

import kwtmss from "/assets/images/kwtmss.png"


import finsweet from "/assets/images/finsweet.png"

import store from "/assets/images/store.png"
import me from "/assets/images/me.png"

import azimah from "/assets/images/azimah.png"
import about from "/assets/images/about.jpg"



// import t from "/assets/images/omo_3.png"

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
        <div className={`Home-container ${modal && "h-[100vh]"}`} >

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


            <section className="hero-sectiond">



                <div className="first-hero">

                    <h2 className="sub-heading">
                        Hello, i'm <span>&#9995;</span>
                    </h2>

                    <h1 className="big-text">
                        Omoyeni .S. Taiwo
                    </h1>

                    <p className="hero-section-title">
                        Frontend Developer <span>&#128102;</span>
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


                </div>






                <section className="statd">

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



                <div className="dpc">


                    <div className="picture-container">
                        <div className="taiwo">
                            <img src={me} alt="" className="me_pm" />
                        </div>



                    </div>

                </div>




            </section>



            <section className="hero-section">



                <div className="first-hero">

                    <h2 className="sub-heading">
                        Hello, i'm <span>&#9995;</span>
                    </h2>

                    <h1 className="big-text">
                        Omoyeni .S. Taiwo
                    </h1>

                    <p className="hero-section-title">
                        Frontend Developer <span>&#128102;</span>
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


                </div>


                <div className="picture-container">
                    <div className="taiwo">
                        <img src={me} alt="" className="me_pm" />
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
                {/* <div className="second-hero">


                </div> */}









            </section>


            <div className="about-me-container">


                <div className="about-me-first">

                    <section className="about_me">

                        <h4 className="aboutme">
                            About Me
                        </h4>

                        <h1 className="about_h">
                            Replicating Your <span className="wild"> Wildest Immagination</span> On The Web
                        </h1>


                        <div className="about_texts">
                            <p>
                                I am an Entrpreneur, Public Speaker and web developer with a passion for creating responsive and functional websites. Being proficient in HTML, CSS, Javascript and React.js, i build websites from simple landing pages to complex sites with multiple functionalities
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
                                        Send an Email
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


                    <div className="about-me-second ">
                        <img src={about} alt="" className="ssss" />


                    </div>

                </div>


            </div>


            <section className="resume">


                <img src={resume} alt="" className="resume-icon" />

                <div className="real-resume">

                    <h2 className="my-resume-text">
                        my Resume
                    </h2>

                    <h1>Real <span className='problem-solu
                ' >problem Solution</span> Experience</h1>



                    <div className="experience-section">

                        <div className="es-left">

                            <div className="exp-div">

                                <div className="exp-div-lefti">
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
                                        Fiverr
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




                            <div className="exp-div">

                                <div className="exp-div-left">
                                    <img className='right-arrow' src={rightArrow} alt="" />

                                </div>

                                <div className="exp-div-right">

                                    <div className="exp-time">
                                        2024
                                    </div>

                                    <div className="exp-role">
                                        Frontend Web Developer
                                    </div>

                                    <div className="exp-company">
                                        Azimah Cold Foods
                                    </div>

                                </div>



                            </div>




                        </div>






                    </div>

                </div>


            </section>



            <section className="my-skills">

                <div className="skills-textss">

                    <h5 className="my-skills-text">

                        My Skils
                    </h5>

                    <span className="skills-big-text">
                        Let's Explore My Popular  Skills &  <span className='skills-colour'>
                            Experience
                        </span>


                    </span>

                    <p className="skills-text">

                        with a total of 2+ years learning and writing code, i have learnt a great deal about several Programming Languages, libraries and frameworks. building projects from simple to complex.

                    </p>

                    <div className="skill-button">
                        Learn More <img className='greater' src={gr} alt="" />
                    </div>

                </div>


                <section className="skill-block">

                    <div className="skill-col">


                        <div className="skill-box">

                            <div className="skill-box-icon">
                                <img src={html} alt="" className="box-icon h-[100%]" />
                            </div>

                            <div className="skill-box-title">
                                Html
                            </div>

                            <div className="skill-box-stat">
                                95%
                            </div>


                        </div>


                        <div className="skill-box">

                            <div className="skill-box-icon">
                                <img src={css} alt="" className="box-icon" />
                            </div>

                            <div className="skill-box-title">
                                css
                            </div>

                            <div className="skill-box-stat">
                                95%
                            </div>


                        </div>


                        <div className="skill-box">

                            <div className="skill-box-icon">
                                <img src={js} alt="" className="box-icon" />
                            </div>

                            <div className="skill-box-title">
                                Javascript
                            </div>

                            <div className="skill-box-stat">
                                95%
                            </div>


                        </div>

                        <div className="skill-box">

                            <div className="skill-box-icon">
                                <img src={react} alt="" className="box-icon" />
                            </div>

                            <div className="skill-box-title">
                                React
                            </div>

                            <div className="skill-box-stat">
                                95%
                            </div>


                        </div>

                        <div className="skill-box">

                            <div className="skill-box-icon">
                                <img src={typescript} alt="" className="box-icon" />
                            </div>

                            <div className="skill-box-title">
                                Typescript
                            </div>

                            <div className="skill-box-stat">
                                95%
                            </div>


                        </div>

                        <div className="skill-box">

                            <div className="skill-box-icon">
                                <img src={redux} alt="" className="box-icon" />
                            </div>

                            <div className="skill-box-title">
                                Redux
                            </div>

                            <div className="skill-box-stat">
                                95%
                            </div>


                        </div>

                        <div className="skill-box">

                            <div className="skill-box-icon">
                                <img src={tailwind} alt="" className="box-icon" />
                            </div>

                            <div className="skill-box-title">
                                Tailwind
                            </div>

                            <div className="skill-box-stat">
                                95%
                            </div>


                        </div>

                        <div className="skill-box">

                            <div className="skill-box-icon">
                                <img src={figma} alt="" className="box-icon" />
                            </div>

                            <div className="skill-box-title">
                                figma
                            </div>

                            <div className="skill-box-stat">
                                95%
                            </div>


                        </div>


                        <div className="skill-box">

                            <div className="skill-box-icon">
                                <img src={node} alt="" className="box-icon" />
                            </div>

                            <div className="skill-box-title">
                                Node
                            </div>

                            <div className="skill-box-stat">
                                95%
                            </div>


                        </div>



                        <div className="skill-box">

                            <div className="skill-box-icon">
                                <img src={python} alt="" className="box-icon" />
                            </div>

                            <div className="skill-box-title">
                                python
                            </div>

                            <div className="skill-box-stat">
                                95%
                            </div>


                        </div>


                    </div>




                </section>




            </section>


            <div className="latest-work">



                <div className="lw-head">


                    <h4 className="lw-sub-heading">
                        Latest Works
                    </h4>

                    <h2 className="lw-heading">

                        Explore My Popular <span className="blue-text">Projects</span>
                    </h2>

                </div>


                <div className="project-card">

                    <div className="project-card-image">
                        <img src={getlinked} alt="" className="card-image" />
                    </div>

                    <div className="project-card-details">

                        <div className="card-sub-text">
                            Web Development
                        </div>

                        <div className="card-title">
                            Get-Linked Hackathon Website
                        </div>


                        <div className="project-card-text">

                            Get-Linked Hackathon website is a website is a web development challange released in 2022 to prepare for the get-linked hackathon
                        </div>
                    </div>

                </div>

                <div className="project-cardd  ">

                    <div className="project-card-image">
                        <img src={itpa} alt="" className="card-image" />
                    </div>

                    <div className="project-card-details">

                        <div className="card-sub-text">
                            Web Development (live project)
                        </div>

                        <div className="card-title">
                            Information Technology Professionals Association Website
                        </div>


                        <div className="project-card-text">

                            Official website for information technology professional association built with React.js and Tailwind css
                        </div>
                    </div>

                </div>

                <div className="project-card">

                    <div className="project-card-image">
                        <img src={kwtmss} alt="" className="card-image" />
                    </div>

                    <div className="project-card-details">

                        <div className="card-sub-text">
                            Web Development
                        </div>

                        <div className="card-title">
                            Kwara State Transport Management System Website
                        </div>


                        <div className="project-card-text">

                            KWTMS website is a website project for tacking and obtaining the information of all transport vehicles and drivers in Kwara state
                        </div>
                    </div>

                </div>

                <div className="project-cardd">

                    <div className="project-card-image">
                        <img src={finsweet} alt="" className="card-image" />
                    </div>

                    <div className="project-card-details">

                        <div className="card-sub-text">
                            Web Development (unfinished project with only desktop view)
                        </div>

                        <div className="card-title">
                            Finsweet Blog Website
                        </div>


                        <div className="project-card-text">

                            A blog website built to demonstrate functionality of a blog and routing  with react--router dom
                        </div>
                    </div>

                </div>

                <div className="project-card">

                    <div className="project-card-image">
                        <img src={artjunks} alt="" className="card-image" />
                    </div>

                    <div className="project-card-details">

                        <div className="card-sub-text">
                            Web Development
                        </div>

                        <div className="card-title">
                            ArtJunks Blog Website
                        </div>


                        <div className="project-card-text">

                            Get-Linked Hackathon website is a website is a web development challange released in 2022 to prepare for the get-linked hackathon
                        </div>
                    </div>

                </div>

                <div className="project-cardd">

                    <div className="project-card-image">
                        <img src={store} alt="" className="card-image" />
                    </div>

                    <div className="project-card-details">

                        <div className="card-sub-text">
                            Web Development (unfinished project)
                        </div>

                        <div className="card-title">
                            Tee's Exlusive E-commerce Website

                        </div>


                        <div className="project-card-text">

                            Get-Linked Hackathon website is a website is a web development challange released in 2022 to prepare for the get-linked hackathon
                        </div>
                    </div>

                </div>


                <div className="project-card">

                    <div className="project-card-image">
                        <img src={azimah} alt="" className="card-image" />
                    </div>

                    <div className="project-card-details">

                        <div className="card-sub-text">
                            Web Development
                        </div>

                        <div className="card-title">
                            Azimah Cold Foods

                        </div>


                        <div className="project-card-text">

                            A website developed with typescript and tailwindcss for azimah ltd to show visibility of their company and aiding more information about them
                        </div>
                    </div>

                </div>


            </div>






        </div>
    )
}

export default Home