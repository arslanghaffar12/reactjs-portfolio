import React from 'react'
import profile from '../../assets/profile.png'
import arslan from '../../assets/profile1.jpg'

import './Home.scss'
import Text from '../../components/Text/Text'
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <section className='main_home'>
            <div className="home_content container">

                <div className="left_content">
                    <h1 className="title">
                    <div>
                        Hi, I'm <span>Arslan!</span>
                        </div>
                     Creative Coder
                    Based in Lahore
                        {/* <div>
                        Hi, I'm <span>Shahzaib!</span>
                        </div>
                        <div className='animater_word'>
                        Creative Coder */}
                        {/* <Text/> */}
                        {/* </div>
                        <div>
                        Based in Lahore
                        </div> */}
                    </h1>
                    <p className="para">
                        I'm a Lahore based Mern stack developer with 3+ years of experience
                    </p>
                    <div className="btn_sec">
                        <Link to='/portfolio' >
                        <button className="primary_btn">Got a project?</button>
                        </Link>
                        <Link to='/contactus' >
                        <button className="secondary_btn">
                            Let's talk
                        </button>
                        </Link>
                    </div>

                </div>

                <div className="right_content">
                    <div className="profile_pic">
                        <img src={arslan} alt='Image Error' />
                    </div>
                </div>

            </div>


        </section>
    )
}

export default Home