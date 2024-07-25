import React from 'react'
import './About.scss'
import Everything from './components/Everything/Everything'

const About = () => {

    const aboutcards = [
        {
            bg: "#d3f4ec",
            title: "4+",
            para: "Years of Experience"
        },
        {
            bg: "#fce8d4",
            title: "5+",
            para: "PROJECTS COMPLETED"
        },
        {
            bg: "#e3f9e0",
            title: "5+",
            para: "HAPPY CLIENTS"
        },
    ]

    return (
        <div className='main_about'>
            <div className="container">

                <div className="top_about">

                    <div className="left_about">
                        <p className='nice'>- Nice To Meet You!</p>
                        <div className="name">Arslan GHaffar</div>
                        <p className='nice_about'>Web designer & Developer Coder Player</p>
                        <button className="primary_btn">Got a project?</button>
                    </div>
                    <div className="right_about">
                        <p>Hello there! My name is ARSLAN  GHAFFAR. I am a web designer & developer, and I'm very passionate and dedicated to my work.</p>
                        <p>With 4 years experience, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>

                        <div className="personal_main">
                            <div className="personal_content">
                                <div className="person_title">
                                    AGE
                                </div>
                                <div className="person_answer">
                                    26
                                </div>
                            </div>
                            <div className="personal_content">
                                <div className="person_title">
                                    BORN IN
                                </div>
                                <div className="person_answer">
                                    Lahore, PAK
                                </div>
                            </div>
                            <div className="personal_content">
                                <div className="person_title">
                                    MAIL
                                </div>
                                <div className="person_answer">
                                    arslanghaffar21@gmail.com
                                </div>
                            </div>
                            <div className="personal_content">
                                <div className="person_title">
                                    PHONE
                                </div>
                                <div className="person_answer">
                                    +92 320 41 70775
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="aboutcard_main">
                    {aboutcards.map((e, index) => {
                        return (
                            <div className="aboutcard" key={index} style={{ backgroundColor: e.bg }} >
                                <div className="card_title">
                                    {e.title}
                                </div>
                                <div className="card_para">
                                    {e.para}
                                </div>
                            </div>
                        )
                    })}


                </div>

            </div>
            <Everything/>
        </div>
    )
}

export default About