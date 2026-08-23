import {
    FaBriefcase,
    FaGraduationCap,
    FaCalendarAlt,
} from 'react-icons/fa'

import './ExperienceEducation.css'
import nittlogo from '../assets/logos/nitt_logo.svg.webp'
import iitmlogo from '../assets/logos/iitm_logo.svg.webp'
import wavicle_logo from '../assets/logos/wavicle_logo.jpeg'
import qpiai_logo from '../assets/logos/qpiai_logo.avif'
import sigmoid_logo from '../assets/logos/sigmoid_logo.png'

function ExperienceEducation() {

    const timeline = [

        // =========================
        // EXPERIENCE
        // =========================

        {
            type: 'experience',

            logo: sigmoid_logo,

            title: 'Associate Lead Data Scientist',

            organization: 'Sigmoid',

            period: '2023 - Present',

            description:
                'Built production-ready AI solutions including an LLM-powered invoice extraction platform, an enterprise SmartSearch chatbot for natural language to SQL and root cause analysis, and an agentic LLM-based HR recommendations platform.',

            technologies: [
                'Python',
                'Generative AI',
                'LLMs',
                'GPT',
                'React.js',
                'Snowflake',
                'Databricks',
                'Docker',
                'AWS',
            ],
        },

        {
            type: 'experience',

            logo: qpiai_logo,

            title: 'Lead Data Scientist',

            organization: 'QpiAI India Pvt Ltd',

            period: '2022 - 2023',

            description:
                'Led the development of deep learning and computer vision solutions for environmental compliance and hazard detection, building semantic and instance segmentation models to identify compliance zones and hazardous materials in industrial sites.',

            technologies: [
                'Python',
                'PyTorch',
                'Torchvision',
                'DeepLabV3',
                'Mask R-CNN',
                'SAHI',
                'Computer Vision',
                'Deep Learning',
                'CVAT',
            ],
        },

        {
            type: 'experience',

            logo: wavicle_logo,

            title: 'Data Scientist',

            organization: 'Wavicle Data Solutions',

            period: '2021 - 2022',

            description:
                'Built scalable real-time ML data pipelines using Azure Event Hub, Azure Functions, PySpark, Databricks, and Delta Lake, while developing reinforcement learning and computer vision solutions for supply chain optimization, inventory planning, and warehouse efficiency.',

            technologies: [
                'Python',
                'PySpark',
                'Databricks',
                'Azure',
                'Machine Learning',
                'Reinforcement Learning',
                'PPO',
                'DQN',
                'YOLOv5',
            ],
        },

        // =========================
        // EDUCATION
        // =========================

        {
            type: 'education',

            logo: iitmlogo,

            title: 'M.Tech, Chemical Engineering',

            organization: 'IIT, Madras',

            period: '2016 - 2018',

            description:
                'Master’s degree with a focus on engineering, technology, and advanced analytical methods.',

            technologies: [],
        },

        {
            type: 'education',

            logo: nittlogo,

            title: 'B.Tech, Chemical Engineering',

            organization: 'NIT, Trichy',

            period: '2011 - 2015',

            description:
                'Undergraduate degree with a strong foundation in engineering and technical disciplines.',

            technologies: [],
        },

    ]


    return (

        <div className="experience-education-page">

            {/* =========================
                Header
            ========================= */}

            <section className="experience-header">

                <p className="section-label">
                    My Journey
                </p>

                <h1>
                    Experience & Education
                </h1>

                <p className="experience-intro">
                    A journey through my professional experience and
                    academic background in technology, data science,
                    and artificial intelligence.
                </p>

            </section>


            {/* =========================
                Timeline
            ========================= */}

            <section className="timeline">

                {timeline.map((item, index) => (

                    <div
                        className={`timeline-item ${index % 2 === 0
                            ? 'timeline-left'
                            : 'timeline-right'
                            }`}
                        key={index}
                    >

                        {/* Timeline Icon */}
                        <div className="timeline-dot">

                            {item.type === 'experience'
                                ? <FaBriefcase />
                                : <FaGraduationCap />
                            }

                        </div>


                        {/* Card */}
                        <div className="timeline-card">

                            {/* Company / University Logo */}
                            <div className="timeline-card-header">

                                <div className="timeline-logo">

                                    {item.logo ? (

                                        <img
                                            src={item.logo}
                                            alt={`${item.organization} logo`}
                                        />

                                    ) : (

                                        item.type === 'experience'
                                            ? <FaBriefcase />
                                            : <FaGraduationCap />

                                    )}

                                </div>

                            </div>


                            {/* Type */}
                            <span className="timeline-type">

                                {item.type === 'experience'
                                    ? 'Experience'
                                    : 'Education'}

                            </span>


                            {/* Title */}
                            <h2>
                                {item.title}
                            </h2>


                            {/* Organization */}
                            <h3>
                                {item.organization}
                            </h3>


                            {/* Period */}
                            <div className="timeline-period">

                                <FaCalendarAlt />

                                <span>
                                    {item.period}
                                </span>

                            </div>


                            {/* Description */}
                            <p>
                                {item.description}
                            </p>


                            {/* Technologies */}
                            {item.technologies.length > 0 && (

                                <div className="timeline-technologies">

                                    {item.technologies.map(
                                        (technology, techIndex) => (

                                            <span key={techIndex}>
                                                {technology}
                                            </span>

                                        )
                                    )}

                                </div>

                            )}

                        </div>

                    </div>

                ))}

            </section>

        </div>
    )
}

export default ExperienceEducation