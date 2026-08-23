
import {
    FaGraduationCap,
    FaYoutube,
    FaExternalLinkAlt,
    FaPlayCircle,
    FaFlask,
    FaProjectDiagram
} from 'react-icons/fa'

import './Research.css'

function Research() {

    const webinars = [
        {
            title: 'Building a Simple Speech Recognition System Webinar',
            description:
                'A technical webinar focused on how CNNs can be applied to audio data for building a simple speech recognition system.',
            videoId: 'Baf0FKIvA90',
        },

        {
            title: 'Understanding Inception Networks for Image Recognition',
            description:
                'Explore the architecture and implementation of Inception Networks for image classification and object detection.',
            videoId: 'MFrbynONvDQ',
        },

        {
            title: 'Neural Style Transfer: The Art of Deep Learning',
            description:
                'Explore how deep learning can blend the content of one image with the artistic style of another.',
            videoId: 'chYU_Fd7Kns',
        },
    ]

    const workshops = [
        {
            title: 'MLOps Hands-on Workshop: Model Monitoring with Weights & Biases',

            description:
                'A hands-on workshop exploring model monitoring, experiment tracking, and hyperparameter tuning using Weights & Biases for deployed AI models.',

            videoId: 'kjOUb1kBC1g',

        },
    ]
    return (
        <div className="research-page">

            {/* =========================
          Research Header
      ========================= */}

            <section className="research-header">

                <div className="research-header-icon">
                    <FaFlask />
                </div>

                <p className="section-label">
                    Research & Knowledge Sharing
                </p>

                <h1>
                    Research, Courses & Webinars
                </h1>

                <p className="research-intro">
                    My work and interests span Generative AI, Large Language Models,
                    Machine Learning, Computer Vision, and emerging AI technologies.
                    I also enjoy creating learning experiences and sharing technical
                    knowledge through courses and webinars.
                </p>

            </section>


            {/* =========================
          Featured Course
      ========================= */}

            <section className="featured-research">

                <div className="research-icon">
                    <FaGraduationCap />
                </div>

                <div className="research-content">

                    <span className="content-label">
                        Featured Course
                    </span>

                    <h2>
                        Vibe Coding React Apps Course
                    </h2>

                    <p>
                        Learn to build powerful React applications with Generative AI, from fundamentals to full-stack apps using AI-driven development and vibe coding.
                    </p>

                    <a
                        href="https://cellstrathub.com/course/gen-ai?cardId=11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="research-button"
                    >
                        Explore Course

                        <FaExternalLinkAlt />
                    </a>

                </div>

            </section>


            {/* Course 2 - Graph Neural Networks */}


            <section className="featured-research">

                <div className="research-icon">
                    <FaGraduationCap />
                </div>

                <div className="research-content">

                    <span className="content-label">
                        Featured Course
                    </span>

                    <h2>
                        Graph Neural Networks
                    </h2>

                    <p>
                        Explore Graph Neural Networks through hands-on learning in
                        graph theory, knowledge graphs, GCNs, GATs, generative graph
                        models, recommendation systems, and graph analysis with Neo4j.
                    </p>

                    <a
                        href="https://cellstrathub.com/packs"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="research-button"
                    >
                        Explore Course

                        <FaExternalLinkAlt />
                    </a>

                </div>

            </section>


            {/* =========================
    Workshops
========================= */}

            <section className="workshops-section">

                <div className="workshops-header">

                    <p className="section-label">
                        Workshops
                    </p>

                    <h2>
                        Workshops & Sessions
                    </h2>

                    <p>
                        Explore workshops and hands-on sessions focused on
                        emerging technologies and practical AI applications.
                    </p>

                </div>


                <div className="workshops-grid">

                    {workshops.map((workshop, index) => (

                        <div
                            className="workshop-card"
                            key={index}
                        >

                            {/* Workshop Video */}

                            <div className="workshop-video">

                                <iframe
                                    src={`https://www.youtube.com/embed/${workshop.videoId}`}
                                    title={workshop.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>

                            </div>


                            {/* Workshop Details */}

                            <div className="workshop-content">

                                <span className="content-label">
                                    Workshop
                                </span>

                                <h3>
                                    {workshop.title}
                                </h3>

                                <p>
                                    {workshop.description}
                                </p>

                                <a
                                    href={`https://www.youtube.com/watch?v=${workshop.videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="watch-button"
                                >
                                    Watch on YouTube

                                    <FaYoutube />

                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </section>




            {/* =========================
    Webinars
========================= */}

            <section className="webinars-section">

                <div className="webinars-header">

                    <p className="section-label">
                        Technical Talks
                    </p>

                    <h2>
                        Webinars & Talks
                    </h2>

                    <p>
                        Explore my technical sessions and webinars covering
                        Generative AI and emerging AI technologies.
                    </p>

                </div>


                <div className="webinars-grid">

                    {webinars.map((webinar, index) => (

                        <div
                            className="webinar-card"
                            key={index}
                        >

                            {/* =========================
                    Embedded YouTube Video
                ========================= */}

                            <div className="webinar-video">

                                <iframe
                                    src={`https://www.youtube.com/embed/${webinar.videoId}`}
                                    title={webinar.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>

                            </div>


                            {/* =========================
                    Webinar Details
                ========================= */}

                            <div className="webinar-content">

                                <span className="content-label">
                                    Webinar
                                </span>

                                <h3>
                                    {webinar.title}
                                </h3>

                                <p>
                                    {webinar.description}
                                </p>

                                {/* Optional YouTube Link */}

                                <a
                                    href={`https://www.youtube.com/watch?v=${webinar.videoId}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="watch-button"
                                >
                                    Watch on YouTube

                                    <FaYoutube />

                                </a>

                            </div>

                        </div>

                    ))}

                </div>

            </section>
        </div>)
}



export default Research

