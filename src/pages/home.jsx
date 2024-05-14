import React from 'react'
import "./home.css"
import { FaCode, FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaReact, FaTwitter } from "react-icons/fa";
function Home() {




    return (
        <>
            <div className="home" >
                <div className="container">
                    <div className="social-icons">
                        <FaLinkedin />
                        <FaGithub />
                        <FaInstagram />
                        <FaTwitter />
                    </div>
                    <div className="textbox">
                        <h1>I'm <span className='name'>Aravindh</span></h1>
                        <p>A passionate web developer for creating visually stunning <br /> and user-friendly websites and web apps.</p>
                        <button className='downbtn'><div>
                            Download CV</div>
                        </button>
                    </div>
                    <div className="profilebox">


                        <div className="circle">
                            <div className="one">
                                <FaCode />

                                Developer</div>
                            <div className="two">

                                FreeLauncer</div>
                            <div className="three">
                                <FaReact />
                                React Developer</div>
                            <div className="four">Web Designer</div>
                        </div>
                        <div className="profile z1">

                            <img src="../public/images/ProfileImage.PNG" alt="Profile Image" />
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Home