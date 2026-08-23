import { FaRobot, FaFileInvoice, FaUsers, FaImage, FaDatabase, FaCogs } from 'react-icons/fa'
import './Projects.css'

function Projects() {

    const projects = [
        {
            icon: <FaRobot />,
            title: 'SmartSearch – LLM-Powered Enterprise Chatbot',
            category: 'Generative AI',
            description:
                'Built an enterprise chatbot using OpenAI GPT to convert natural language questions into Snowflake SQL, with multilingual support, causal reasoning, and conversational follow-up interactions.',
            technologies: [
                'OpenAI GPT',
                'LLM',
                'Snowflake',
                'React.js',
                'SQL'
            ],
            result:
                'Reduced analyst workload by 40%.'
        },

        {
            icon: <FaFileInvoice />,
            title: 'Invoice Extraction Automation',
            category: 'Generative AI',
            description:
                'Built an LLM-powered invoice extraction platform to automate the event closure process by extracting vendor details, line items, totals, and taxes from unstructured invoices.',
            technologies: [
                'GPT Models',
                'Databricks',
                'LLM',
                'Python'
            ],
            result:
                'Reduced invoice processing time from 3–10 days to 2–3 hours with approximately 90% extraction accuracy.'
        },

        {
            icon: <FaUsers />,
            title: 'HR Recommendations App',
            category: 'Agentic AI',
            description:
                'Built an HR Recommendations platform using an agentic LLM to provide personalized L&D career pathways, course recommendations, project fit recommendations, and organization-wide skill analysis.',
            technologies: [
                'Agentic AI',
                'LLM',
                'React.js',
                'Docker',
                'AWS'
            ],
            result:
                'Built and deployed a scalable AI-powered HR recommendation platform.'
        },

        {
            icon: <FaImage />,
            title: 'Polaris – Environmental Compliance',
            category: 'Computer Vision',
            description:
                'Developed a DeepLabV3-based semantic segmentation model to detect compliance zones in industrial sites and support environmental compliance monitoring.',
            technologies: [
                'PyTorch',
                'DeepLabV3',
                'Torchvision',
                'Albumentations',
                'Docker'
            ],
            result:
                'Achieved 0.74 mIOU and helped improve monitoring accuracy while reducing audit effort.'
        },

        {
            icon: <FaImage />,
            title: 'Polaris 2.0 – Hazard Detection',
            category: 'Computer Vision',
            description:
                'Upgraded the segmentation pipeline using Mask R-CNN with SAHI to detect hazardous material containers and identify potential safety violations.',
            technologies: [
                'Mask R-CNN',
                'SAHI',
                'Computer Vision',
                'Instance Segmentation'
            ],
            result:
                'Achieved 0.84 mAP and enabled spatial analytics for hazardous zone monitoring.'
        },

        {
            icon: <FaDatabase />,
            title: 'CarMax – Real-Time ML Data Pipeline',
            category: 'Data Engineering',
            description:
                'Designed and implemented a scalable real-time machine learning data pipeline to process vehicle data and persist features for downstream ML training.',
            technologies: [
                'Azure Event Hub',
                'Azure Functions',
                'PySpark',
                'Databricks',
                'Delta Lake',
                'ADLS'
            ],
            result:
                'Reduced data pipeline latency by 30%.'
        },

        {
            icon: <FaCogs />,
            title: 'Supply Chain Optimization with Reinforcement Learning',
            category: 'Reinforcement Learning',
            description:
                'Developed a reinforcement learning system using PPO for multi-period inventory planning under demand uncertainty and built a bin-packing optimization solution using YOLOv5 and DQN.',
            technologies: [
                'PPO',
                'DQN',
                'YOLOv5',
                'Reinforcement Learning',
                'Computer Vision'
            ],
            result:
                'Achieved a 20% reduction in stockouts and improved warehouse efficiency.'
        }
    ]

    return (
        <div className="projects-page">

            {/* Header */}

            <section className="projects-header">

                <p className="section-label">
                    My Work
                </p>

                <h1>
                    Featured Projects
                </h1>

                <p className="projects-intro">
                    A collection of AI, Machine Learning, Generative AI,
                    Computer Vision, and Data Engineering projects I have
                    worked on throughout my career.
                </p>

            </section>


            {/* Projects Grid */}

            <section className="projects-grid">

                {projects.map((project, index) => (

                    <div
                        className="project-card"
                        key={index}
                    >

                        <div className="project-icon">
                            {project.icon}
                        </div>

                        <span className="project-category">
                            {project.category}
                        </span>

                        <h2>
                            {project.title}
                        </h2>

                        <p className="project-description">
                            {project.description}
                        </p>


                        {/* Technologies */}

                        <div className="technologies">

                            {project.technologies.map((technology, techIndex) => (

                                <span
                                    key={techIndex}
                                    className="technology-tag"
                                >
                                    {technology}
                                </span>

                            ))}

                        </div>


                        {/* Result */}

                        <div className="project-result">

                            <strong>
                                Key Result
                            </strong>

                            <p>
                                {project.result}
                            </p>

                        </div>

                    </div>

                ))}

            </section>

        </div>
    )
}

export default Projects

