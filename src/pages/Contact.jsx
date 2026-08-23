import {
    FaEnvelope,
    FaPhone,
    FaGlobe,
    FaGithub,
} from 'react-icons/fa'

import './Contact.css'

function Contact() {
    return (
        <div className="contact-page">

            <section className="contact-section">

                <div className="contact-content">

                    <p className="section-label">
                        Get In Touch
                    </p>

                    <h1>
                        Contact Me
                    </h1>

                    <p className="contact-description">
                        Interested in working together or discussing AI, Machine Learning,
                        Generative AI, or Data Science? Feel free to get in touch.
                    </p>


                    <div className="contact-details">

                        {/* Email */}
                        <a
                            href="mailto:agouthaman1010@gmail.com"
                            className="contact-item"
                        >
                            <div className="contact-icon">
                                <FaEnvelope />
                            </div>

                            <div className="contact-info">
                                <h3>Email</h3>
                                <p>
                                    agouthaman1010@gmail.com
                                </p>
                            </div>
                        </a>


                        {/* Phone */}
                        <a
                            href="tel:+919952856402"
                            className="contact-item"
                        >
                            <div className="contact-icon">
                                <FaPhone />
                            </div>

                            <div className="contact-info">
                                <h3>Phone</h3>
                                <p>
                                    +91 9952856402
                                </p>
                            </div>
                        </a>


                        {/* Website */}
                        <a
                            href="https://in.linkedin.com/in/gouthaman-asokan-521a65a3"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                        >
                            <div className="contact-icon">
                                <FaGlobe />
                            </div>

                            <div className="contact-info">
                                <h3>Linkedin</h3>
                                <p>
                                    Gouthaman-Asokan
                                </p>
                            </div>
                        </a>


                        {/* GitHub */}
                        <a
                            href="https://github.com/GouthamanAsokan"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="contact-item"
                        >
                            <div className="contact-icon">
                                <FaGithub />
                            </div>

                            <div className="contact-info">
                                <h3>GitHub</h3>
                                <p>
                                    github.com/GouthamanAsokan
                                </p>
                            </div>
                        </a>

                    </div>

                </div>

            </section>

        </div>
    )
}

export default Contact

