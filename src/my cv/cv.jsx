import React from "react";
import styles from "./cv.module.css"
import image from "./output-onlinejpgtools.jpg"
import { BiHome, BiPhoneCall } from "react-icons/bi"
import { BsCodeSlash, BsWhatsapp, BsGithub } from "react-icons/bs"
import { FiUser } from "react-icons/fi"  
import {FaTelegramPlane, FaViber} from "react-icons/fa"
import html from "./html.png"
import css from "./css.png"
import sass from "./sass.png"
import js from "./js.png"
import react from "./react.png"
import redux from "./redux.png"
import { useRef } from "react";
import card from "./Screenshot218.png"
import calc from "./Screenshot219.png"
import password from "./Screenshot220.png"
import weather from "./Screenshot221.png"


function CV() {


    const ref1 = useRef(null)
    const handleClick1 = () => {
        ref1.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const ref2 = useRef(null)
    const handleClick2 = () => {
        ref2.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const ref3 = useRef(null)
    const handleClick3 = () => {
        ref3.current?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <>

            <header ref={ref1}>
                <div className={styles.headDiv}></div>
                <div className={styles.picture}>
                    <img src={image} alt="" />
                </div>
                <div className={styles.head_about}>
                    <h1 style={{ fontSize: "6vh", color: "#2ad684" }}>I'm Artyom Gishyan.</h1>
                    <h1 style={{ fontSize: "6vh", color: "#ffffff", paddingBottom: "40vh" }}>WEB DEVELOPER</h1>
                    <p className={styles.aboutMe}>"I am a junior Front-end developer. My interests are in Front End Engineering, and I love to create beautiful and performant products with delightful user experiences."</p>
                </div>
            </header>
            <nav>
                <div className={styles.icons} onClick={handleClick1}><BiHome style={{ fontSize: "6vh", color: "#ffffff" }} /></div>
                <div className={styles.icons} onClick={handleClick2}><FiUser style={{ fontSize: "6vh", color: "#ffffff" }} /></div>
                <div className={styles.icons} onClick={handleClick3}><BsCodeSlash style={{ fontSize: "6vh", color: "#ffffff" }} /></div>
            </nav>
            <aside ref={ref2}>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "10vh" }}>
                    <h1 style={{ fontSize: "6vh", color: "#ffffff" }}>ABOUT </h1>
                    <h1 style={{ fontSize: "6vh", color: "#2ad684", textIndent: "2vh" }}> ME</h1>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.div1}>
                        <h1>PERSONAL INFO</h1>
                        <div>
                            <p>Name:  Artyom</p>
                            <p>Surname:  Gishyan</p>
                            <p>Age:  26</p>
                        </div>
                        <div className={styles.info}>
                            <p>Language:  English, Russian</p>
                            <p>Address:  Yerevan</p>
                            <p>Email:  Artgish1964@gmail.com</p>
                        </div>
                    </div>
                    <div className={styles.div2}>
                        <h1>MY SKILLS</h1>
                        <div>
                            <div className={styles.circle}>HTML   <img src={html} alt="" /></div>
                            <div className={styles.circle}>JS   <img src={js} alt="" /></div>
                        </div>
                        <div>
                            <div className={styles.circle}>CSS   <img src={css} alt="" /></div>
                            <div className={styles.circle}>REACT JS   <img src={react} alt="" /></div>
                        </div>
                        <div>
                            <div className={styles.circle}>SASS   <img src={sass} alt="" /></div>
                            <div className={styles.circle}>REDUX   <img src={redux} alt="" /></div>
                        </div>
                    </div>
                    <div className={styles.div3}>
                        <h1 className={styles.employ}>EMPLOYMENT & EDUCATION</h1>
                        <div className={styles.expData}><p>Manager: AGA      2017-18</p></div>
                        <div className={styles.expData}><p>Head of Department: Military commissariat      2018-2021</p></div>
                        <div className={styles.expData}><p>Freelancer: Front-end developer      Present</p></div>
                        <div className={styles.expData}><p>Higher education: ANAU</p></div>
                        <div className={styles.expData}><p>Web Development: WebSoft</p></div>
                    </div>
                    <div className={styles.div4}>
                        <h1>QUALITIES</h1>
                        <ul>
                            <li>Punctual</li>
                            <li>Good communication skills</li>
                            <li>Love of learning</li>
                            <li>Patience</li>
                            <li>Perfectionism</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.contacts}>
                    <div className={styles.information} onClick={(e)=>{window.open('tel:+37498148084')}}><BiPhoneCall color="#2ad684" style={{width: "4vh", height: "4vh"}}/><p>  +374 98 14 80 84</p></div>
                    <div className={styles.information} onClick={(e)=>{window.open('tel:+37491012114')}}><BiPhoneCall color="#2ad684" style={{width: "4vh", height: "4vh"}}/><p>  +374 91 01 21 14</p></div>
                    <a href="https://t.me/Gishyan888" style={{textDecoration: "none", color: "#ffffff"}}><div className={styles.information}><FaTelegramPlane color="#2ad684" style={{width: "4vh", height: "4vh"}}/><p>  TELEGRAM</p></div></a>
                    <a href="viber://chat?number=%2B37491012114" style={{textDecoration: "none", color: "#ffffff"}}><div className={styles.information}><FaViber color="#2ad684" style={{width: "4vh", height: "4vh"}}/><p>  VIBER</p></div></a>
                    <a href="https://api.whatsapp.com/send/?phone=%2B37491012114&text&type=phone_number&app_absent=0" style={{textDecoration: "none", color: "#ffffff"}}><div className={styles.information}><BsWhatsapp color="#2ad684" style={{width: "4vh", height: "4vh"}}/><p>  WHATSAPP</p></div></a>
                </div>
            </aside>
            <article ref={ref3}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <h1 style={{ fontSize: "6vh", color: "#ffffff" }}>MY </h1>
                    <h1 style={{ fontSize: "6vh", color: "#2ad684", textIndent: "2vh" }}> PORTFOLIO</h1>
                </div>
                <div className={styles.pics}>
                    <div className={styles.port_pics}><img src={card} alt="" /></div>
                    <div className={styles.port_pics}><img src={calc} alt="" /></div>
                    <div className={styles.port_pics}><img src={password} alt="" /></div>
                    <div className={styles.port_pics}><img src={weather} alt="" /></div>
                </div>
                <div style={{ display: "flex", justifyContent: "center", paddingTop: "5vh"}}>
                    <h1 style={{ fontSize: "4vh", color: "#ffffff" }}>All my git repositories you can find in </h1>
                    <h1 style={{ fontSize: "6vh", color: "#2ad684", textIndent: "2vh" }}> <a href="https://github.com/Gishyan888/Gishyan888.github.io.git" style={{textDecoration: "none", color: "#2ad684"}}><BsGithub/></a> </h1>
                </div>
            </article>
        </>
    )
};

export default CV