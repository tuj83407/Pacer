// src/Components/Resume.jsx

import React from 'react';
import './Resume.css'; // Ensure the path to the CSS file is correct
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div className="resume-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <header className="resume-header">
        <h1>Kiran Nixon</h1>
        <p>Philadelphia, PA | linkedin.com/in/kirannixon/ | 267-245-1267 | knixon528@gmail.com</p>
      </header>

      <section>
        <h2>Career Objective</h2>
        <motion.p whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
          Analytical and ambitious software engineer with an interdisciplinary background in automation, UX design, and cybersecurity. Highly interested in developing impactful software for data integrity and analysis.
        </motion.p>
      </section>

      <section>
        <h2>Relevant Coursework</h2>
        <ul>
          {[
            'Software Design',
            'Math Concepts in Computing',
            'Digital Forensics',
            'Data Structures and Algorithms',
            'Wireless Networks and Security',
            'Program Design and Abstraction',
            'Web Application Programming',
            'Computer Programming in C',
            'Automata, Computability and Languages',
            'Computational Systems and Low-Level Programming',
            'Systems Programming and Operating Systems',
            'Excel for Business Application',
          ].map((course) => (
            <motion.li key={course} whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
              {course}
            </motion.li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Work Experience</h2>
        <div className="job">
          <h3>Temple University Hospital</h3>
          <p><em>Dietetic Assistant, Nutrition and Hospitality Services</em> - December 2024 – September 2024</p>
          <ul>
            {[
              'Efficiently communicate to patients assessing dietary needs based on prescribed diet orders to ensure 100% retrieval rate.',
              'Adhere to HIPAA standard to maintain patient integrity, in accordance to industry guidelines and standard practice.',
              'Enhance supply chain efficiency through Performance Improvement Programs to advance quality of healthcare services.',
            ].map((duty) => (
              <motion.li key={duty} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                {duty}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="job">
          <h3>Fabspeed Motorsport</h3>
          <p><em>Software Engineer</em> - December 2021 – February 2022</p>
          <ul>
            {[
              'Managed enterprise resource planning software and customer relationship management, with Webhooks.',
              'Documented and tested modular updates to the project, retail, and wholesale storefront in a sandbox environment in collaboration with the marketing team.',
              'Designed web pages to improve customer experience using the online store management application Bigcommerce.',
              'Optimized customer throughput by streamlining elements on the digital storefront using Elementor and Woocommerce.',
            ].map((duty) => (
              <motion.li key={duty} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                {duty}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2>Projects</h2>
        <div className="project">
          <h3>Discord Classroom</h3>
          <p>
            <a href="https://github.com/Capstone-Projects-2023-Spring/project-discord-classroom" target="_blank" rel="noopener noreferrer">
              <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>GitHub Link</motion.span>
            </a>
          </p>
          <ul>
            {[
              'Designed a Discord Application in Python to increase accessibility to a remote learning environment for educators.',
              'Integrated Artificial Intelligence features to reduce redundant responsibilities and improve workflow efficiency.',
              'Implemented a virtual assistant for studying, a ticket system for asking questions, and lecture tools.',
            ].map((detail) => (
              <motion.li key={detail} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="project">
          <h3>VoiceChess</h3>
          <p>
            <a href="https://github.com/cis3296f22/04-voicechess" target="_blank" rel="noopener noreferrer">
              <motion.span whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>GitHub Link</motion.span>
            </a>
          </p>
          <ul>
            {[
              'Integrated the SpeechRecognition Python library and Google’s speech recognition API to allow players to execute moves via voice commands.',
              'Experimented with various speech recognition APIs to determine accuracy and ease of use.',
              'Constructed and automated an extensive suite of tests with PyTest to validate game logic.',
            ].map((detail) => (
              <motion.li key={detail} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                {detail}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section>
        <h2>Education</h2>
        <div>
          <h3>Temple University</h3>
          <p><em>Bachelors of Science in Computer Science, BS</em></p>
          <p>Distinction In Major</p>
          <p>Computer Security and Digital Forensics, Certificate</p>
        </div>
      </section>

      <footer className="resume-footer">
        <p>For additional information or projects, please reach out via <a href="mailto:knixon528@gmail.com">email</a>.</p>
      </footer>
    </motion.div>
  );
};

export default Resume;
