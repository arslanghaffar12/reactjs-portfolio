import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaBookOpenReader } from "react-icons/fa6";
import "./Blogreading.scss";

const Blogreading = () => {
    return (
        <div className="blogread_main">
            <div className="container">
                <div className="blog_start">

                    <div className="blog_about">
                        <div className="date">
                            <CiCalendarDate size={20} color="#130F49" /> Date :- 18-01-2024
                        </div>
                        <div className="date">
                            <FaBookOpenReader size={20} color="#130F49" /> Reading Time :- 5min
                        </div>
                    </div>

                    <div className="blog_title">
                        Exploring the Enchanting World of Horse Riding in Yemen:
                    </div>
                    <br />
                    <div className="blog_img">
                        <img
                            src="https://images.pexels.com/photos/18821950/pexels-photo-18821950/free-photo-of-herd-of-horses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Image Error"
                        />
                    </div>

                    <br />
                    <p>
                        As a dedicated programmer, I spend the majority of my days immersed
                        in the digital realm, crafting lines of code that bring ideas to
                        life. However, when the sun sets, and the screens dim, I trade my
                        keyboard for reins, embarking on a unique adventure that takes me
                        beyond the confines of the virtual world. Join me as I share my
                        passion for horse riding in Yemen, a captivating experience that
                        provides the perfect balance to the demands of coding.
                    </p>

                    <br />
                    <p>
                        Yemen, a country often associated with its rich history, diverse
                        landscapes, and ancient architecture, might not be the first place
                        that comes to mind when thinking about horse riding. Yet, hidden
                        within the folds of its mesmerizing topography, lies an unexpected
                        oasis for equestrians. From the rugged mountains to the expansive
                        deserts, Yemen offers a tapestry of terrains that make for an
                        exhilarating riding experience.
                    </p>

                    <br />
                    <div className="blog_img">
                        <img
                            src="https://images.pexels.com/photos/11201285/pexels-photo-11201285.jpeg"
                            alt="Image Error"
                        />
                    </div>
                    <br />
                    <div className="blog_title">
                        Connecting with Nature:
                    </div>
                    <br />
                    <p>
                        One of the most rewarding aspects of horse riding in Yemen is the
                        opportunity to connect with nature in a profound way. Leaving behind
                        the digital landscape, I find solace in the rhythmic sound of hooves
                        against the earth and the gentle breeze as I navigate through the
                        diverse terrain. The bond formed with my horse creates a unique
                        synergy, fostering a sense of harmony that transcends the binary
                        world of coding.
                    </p>

                    <br />
                    <p>
                        Yemen's equestrian culture is deeply intertwined with its rich
                        heritage. Riding through ancient cities and traditional villages,
                        I've had the privilege of witnessing the timeless traditions that
                        have been passed down through generations. From the lively souks to
                        the tranquil oases, every ride is a cultural immersion that adds a
                        layer of depth to my understanding of this remarkable country.
                    </p>

                    <br />
                    <p>
                        As the day draws to a close, there's a special magic in experiencing
                        a Yemeni sunset from the back of a horse. The warm hues paint the
                        sky, casting a surreal glow over the landscapes. Riding through the
                        twilight, I am reminded that life extends beyond the confines of
                        screens and algorithms. It's a serene moment of reflection, a
                        contrast to the fast-paced world of programming.
                    </p>

                    <br />
                    <p>
                        Horse riding in Yemen has become my perfect counterbalance to the
                        demands of a programmer's life. It's a physical and mental escape
                        that rejuvenates me, fostering creativity and resilience. The
                        challenges of coding are met with the challenges of navigating rocky
                        trails and steep inclines, creating a parallel between the virtual
                        and the tangible.
                    </p>
                    <br />
                    <div className="blog_img">
                        <img
                            src="https://images.pexels.com/photos/15744089/pexels-photo-15744089/free-photo-of-kuwait-downtown-at-night.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Image Error"
                        />
                    </div>
                    <br />
                    <div className="blog_title">
                        Chasing Sunsets on Horseback:
                    </div>
                    <br />
                    <p>
                        In the realm of programming, where precision and logic reign
                        supreme, the art of horse riding in Yemen has become my sanctuary.
                        It's a journey that takes me beyond the lines of code, allowing me
                        to appreciate the beauty of the analog world. As I continue to
                        explore this captivating equestrian haven, I am reminded that in the
                        dance between the digital and the natural, true balance is found.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogreading;
