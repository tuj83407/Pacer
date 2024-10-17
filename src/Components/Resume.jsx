import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

const Resume = () => {
  return (
    <div className="resume-container">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.5, 0, 0.5, 1] }} // Easing added for smoother animation
        className="resume-header"
      >
        <h1>Kiran Nixon</h1>
        <p>Philadelphia, PA | <a href="https://linkedin.com/in/kirannixon" target="_blank" rel="noopener noreferrer">linkedin.com/in/kirannixon/</a> | 267-245-1267 | knixon528@gmail.com</p>
      </motion.header>

      {['Career Objective', 'Relevant Coursework', 'Work Experience', 'Projects', 'Education', 'Skills'].map((section, index) => (
        <motion.section
          key={index}
          initial={{ opacity: 0, y: 30 }} // Slide in effect
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.5, 0, 0.5, 1] }} // Easing for smooth transitions
          viewport={{ once: true }} // Animation happens only once when in view
          className="resume-section"
        >
          <h2>{section}</h2>
          {renderSectionContent(section)} {/* Function to render content based on the section */}
        </motion.section>
      ))}
    </div>
  );
};

// Function to render content based on the section
const renderSectionContent = (section) => {
  switch (section) {
    case 'Career Objective':
      return (
        <p>
          Analytical and ambitious software engineer with an interdisciplinary background in automation, UX design, and cybersecurity. 
          Highly interested in developing impactful software for data integrity and analysis.
        </p>
      );
    case 'Relevant Coursework':
      return (
        <ul>
          <li>Software Design</li>
          <li>Math Concepts in Computing</li>
          <li>Digital Forensics</li>
          <li>Data Structures and Algorithms</li>
          <li>Wireless Networks and Security</li>
          <li>Web Application Programming</li>
          <li>Computer Programming in C</li>
          <li>Automata, Computability, and Languages</li>
          <li>Systems Programming and Operating Systems</li>
        </ul>
      );
    case 'Work Experience':
      return (
        <>
          <Job title="Temple University Hospital - Dietetic Assistant" date="December 2024 – September 2024">
            Efficiently communicated with patients to assess dietary needs based on prescribed diet orders. Adhered to HIPAA standards to maintain patient integrity.
          </Job>
          <Job title="Fabspeed Motorsport - Software Engineer" date="December 2021 – February 2022">
            Managed enterprise resource planning software and customer relationship management with Webhooks. Designed web pages to improve customer experience using Bigcommerce and optimized customer throughput with Woocommerce.
          </Job>
          <Job title="BeatnikUSA Vehicle Importing - Inventory Manager" date="May 2020 – August 2021">
            Inspected vehicles for damage, documented issues, and promoted the team’s inventory at public events. Transported and stored vehicles while adhering to safety guidelines.
          </Job>
          <Job title="Amazon Logistics - Warehouse Team Member" date="June 2019 – August 2019">
            Processed, packaged, and shipped orders while inspecting products for defects. Contributed ideas to optimize warehousing procedures.
          </Job>
          <Job title="Philly Pretzel Factory - Shift Manager" date="September 2017 – June 2019">
            Balanced the cash drawer, addressed customer complaints, and trained new employees. Managed closing operations and ensured compliance with hygiene regulations.
          </Job>
        </>
      );
    case 'Projects':
      return (
        <>
          <Project title="Discord Classroom" link="https://github.com/Capstone-Projects-2023-Spring/project-discord-classroom">
            Lead Designer - Developed a Discord Application in Python to enhance remote learning accessibility. Integrated AI for automated grading, attendance, and workflow efficiency.
          </Project>
          <Project title="VoiceChess" link="https://github.com/cis3296f22/04-voicechess">
            Lead Designer - Integrated SpeechRecognition library and Google’s API to allow chess moves via voice commands. Created an intuitive GUI using PyGame, with robust tests using PyTest.
          </Project>
          <Project title="DriveRep - Web Design Final Project">
            Utilized HTML, JavaScript, SQL, and Java to conceptualize a social media site with database access and interactive pages.
          </Project>
        </>
      );
    case 'Education':
      return (
        <>
          <p><strong>Temple University</strong>, College of Science and Technology</p>
          <p>Bachelors of Science in Computer Science, BS, Distinction In Major</p>
          <p>Computer Security and Digital Forensics, Certificate</p>
        </>
      );
    case 'Skills':
      return (
        <div className="skills-list">
          {['Python', 'JavaScript', 'SQL', 'HTML', 'CSS', 'Bigcommerce', 'Wordpress', 'Elementor', 'Woocommerce'].map(skill => (
            <motion.button
              key={skill}
              whileHover={{ scale: 1.1 }} // Button hover effect
              whileTap={{ scale: 0.9 }} // Button tap effect
              className="skill-button"
            >
              {skill}
            </motion.button>
          ))}
        </div>
      );
    default:
      return null;
  }
};

// Job Component for rendering job details
const Job = ({ title, date, children }) => (
  <div className="job">
    <h3>{title}</h3>
    <p>{date}</p>
    <p>{children}</p>
  </div>
);

// Project Component for rendering project details
const Project = ({ title, link, children }) => (
  <div className="project">
    <h3>
      {link ? <a href={link} target="_blank" rel="noopener noreferrer">{title}</a> : title}
    </h3>
    <p>{children}</p>
  </div>
);

export default Resume;
