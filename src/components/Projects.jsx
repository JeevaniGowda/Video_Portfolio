import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    number: '01',
    title: 'Military Defense Drone with Night Vision & Thermal Imaging',
    date: 'May 2023',
    type: 'Academic Project',

    description:
      'Developed an autonomous surveillance drone designed for defense and monitoring applications. The system was built using Arduino and a KK2.1 Flight Controller to control the drone and support stable flight operations.',

    explanation:
      'The drone integrated night vision and thermal imaging capabilities to support surveillance in different environmental and visibility conditions. Machine learning was incorporated for threat detection using the captured visual and thermal information. The project also involved PID tuning and sensor calibration to improve flight stability and sensor performance.',

    technologies: [
      'Arduino',
      'KK2.1 Flight Controller',
      'Machine Learning',
      'Thermal Imaging',
      'Night Vision',
      'PID Tuning',
      'Sensor Calibration',
    ],

    achievement:
      'The project was ranked in the Top 70 out of 300+ submissions in a competitive project showcase.',
  },

  {
    number: '02',
    title: 'App-Based Market Access Solution',
    date: 'May 2024',
    type: 'Academic Project',

    description:
      'Developed a Raspberry Pi-based food delivery platform designed to provide a digital market access solution connecting vendors and customers. The platform brought key food delivery operations together into a single system.',

    explanation:
      'The solution included vendor onboarding and order management functionality for handling vendor and customer-related operations. It also included secure payment integration for transactions and real-time GPS tracking for monitoring deliveries. The system was designed with a scalable backend approach to manage vendor, order, payment, and tracking-related data efficiently.',

    technologies: [
      'Raspberry Pi',
      'Python',
      'Payment Integration',
      'Real-Time GPS Tracking',
      'Microservices',
      'Vendor Management',
      'Order Management',
    ],
  },

  {
    number: '03',
    title: 'Full-Stack E-Commerce Application',
    date: 'Feb 2026 – May 2026',
    type: 'QSpiders Internship Project',

    description:
      'Worked on a full-stack e-commerce web application during my internship at QSpiders (Test Yantra Software Solutions Pvt. Ltd.). The application was developed to handle important operations of an online shopping platform through Product, User, Cart, and Order modules.',

    explanation:
      'I worked on the backend business logic using Java and Spring Boot and developed RESTful APIs for the major application modules. CRUD operations were implemented for managing application data, with MySQL used for database storage and Spring Data JPA used for database interaction. The frontend was developed using HTML, CSS, and JavaScript and communicated with the backend through Fetch API. I also worked with global exception handling and used Postman for API testing. Git was used for version control during development.',

    technologies: [
      'Java',
      'Spring Boot',
      'HTML',
      'CSS',
      'JavaScript',
      'REST APIs',
      'MySQL',
      'Spring Data JPA',
      'CRUD',
      'Fetch API',
      'Postman',
      'Git',
    ],
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full bg-black text-white py-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[#ff2a2a] uppercase tracking-[0.3em] text-sm mb-4">
            My Work
          </p>

          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Projects That{' '}
            <span className="text-[#ff2a2a]">Solve Problems</span>
          </h2>

          <p className="text-gray-400 max-w-3xl mt-6 text-base md:text-lg leading-relaxed">
            A selection of academic and professional projects where I worked
            on software development, application development, backend systems,
            databases, APIs, real-time tracking, and practical technology
            solutions.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="space-y-10">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="group relative border border-white/10 rounded-2xl p-6 md:p-10 bg-white/[0.03] hover:border-[#ff2a2a]/50 transition-all duration-500"
            >

              <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-8">

                {/* Project Date & Type */}
                <div>
                  <p className="text-[#ff2a2a] text-sm font-semibold uppercase tracking-wider">
                    {project.date}
                  </p>

                  <p className="text-gray-500 text-sm mt-2">
                    {project.type}
                  </p>
                </div>

                {/* Project Content */}
                <div className="relative z-10">

                  {/* Project Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-6 group-hover:text-[#ff2a2a] transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Main Description */}
                  <p className="text-gray-300 leading-7 text-base md:text-lg mb-5">
                    {project.description}
                  </p>

                  {/* Detailed Explanation */}
                  <p className="text-gray-400 leading-7 text-base md:text-lg">
                    {project.explanation}
                  </p>

                  {/* Technologies */}
                  <div className="mt-8">

                    <p className="text-white font-semibold mb-4">
                      Technologies & Concepts
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 hover:border-[#ff2a2a]/50 hover:text-white transition-all duration-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* Achievement */}
                  {project.achievement && (
                    <div className="mt-8 border-l-2 border-[#ff2a2a] pl-5">

                      <p className="text-sm md:text-base text-gray-300 leading-6">
                        <span className="text-[#ff2a2a] font-semibold">
                          Achievement:
                        </span>{' '}
                        {project.achievement}
                      </p>

                    </div>
                  )}

                </div>
              </div>

              {/* Background Number */}
              <div className="absolute top-6 right-8 text-6xl md:text-8xl font-black text-white/[0.03] select-none">
                {project.number}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Projects;