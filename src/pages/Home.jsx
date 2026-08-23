import { useNavigate } from 'react-router-dom'
import './Home.css'
import profilePic from '../assets/profile.jpg'

function Home() {
    const navigate = useNavigate()

    return (
        <div className="home">

            <section className="hero-section">

                <div className="hero-content">

                    <p className="hero-greeting">
                        Hello, I'm
                    </p>

                    <h1>
                        Gouthaman Asokan
                    </h1>

                    <h2>
                        Full-Stack Data Scientist
                    </h2>

                    <p className="hero-description">
                        I design, build, and deploy intelligent solutions using
                        Machine Learning, Generative AI, Computer Vision,
                        Natural Language Processing, and modern full-stack technologies.
                    </p>


                    {/* Profile Picture */}

                    <div className="profile-image-container">
                        <img
                            src={profilePic}
                            alt="Gouthaman Asokan"
                            className="profile-image"
                        />
                    </div>

                </div>

            </section>

        </div>
    )
}

export default Home