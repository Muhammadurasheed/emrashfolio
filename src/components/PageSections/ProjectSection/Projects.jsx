import React from "react";
import FadeIn from "../../FadeIn";
import healthify from '../../../assets/project-images/healthify.jpeg';
import notchAI from '../../../assets/project-images/notchAI.jpeg';
import inopLearn from '../../../assets/project-images/inopLearn.jpeg';
import shopflex from '../../../assets/project-images/shopflex.jpeg';
import wellness from '../../../assets/project-images/wellness.png';
import wiselypay from '../../../assets/project-images/wiselypay.jpeg';
import smarvium from '../../../assets/project-images/smarvium.jpeg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Healthify",
      category: "Mobile App",
      projectURL: "https://example.com/project-one",
      demoURL: "https://example.com/demo-one",
      description: "AI-powered app integrated with fitness tracker to detect early heart stroke.",
      imageURL: healthify,
    },
    {
      id: 2,
      name: "NotchAI",
      category: "Mobile App",
      projectURL: "https://example.com/project-two",
      demoURL: "https://example.com/demo-two",
      description: "An AI-powered to detect skin diseases and recommend solution.",
      imageURL: notchAI,
    },
    {
      id: 3,
      name: "InopLearn",
      category: "Mobile App",
      projectURL: "https://example.com/project-three",
      demoURL: "https://example.com/demo-three",
      description: "An e-learning platform for visually impaired people.",
      imageURL: inopLearn,
    },
    {
      id: 4,
      name: "Shopflex",
      category: "Mobile App",
      projectURL: "https://example.com/project-four",
      demoURL: "https://example.com/demo-four",
      description: "A multivendor app for flexible shopping experiences.",
      imageURL: shopflex,
    },
    {
      id: 5,
      name: "Wellness",
      category: "Web Development",
      projectURL: "https://wellness.pipeops.app/",
      demoURL: "https://example.com/demo-five",
      description: "Hospital facility management application.",
      imageURL: wellness,
    },
    {
      id: 6,
      name: "WiselyPay",
      category: "Mobile App",
      projectURL: "https://example.com/project-six",
      demoURL: "https://example.com/demo-six",
      description: "A mobile app for easy and secure payments.",
      imageURL: wiselypay,
    },
    {
      id: 7,
      name: "Smarvium",
      category: "Web Development",
      projectURL: "https://smarvium.onrender.com/",
      demoURL: "",
      description: "Boost farmers productivity and reduce food wastage",
      imageURL: smarvium,
    },
    {
      id: 8,
      name: "Save Persona",
      category: "Mobile App",
      projectURL: "https://example.com/project-seven",
      demoURL: "https://example.com/demo-seven",
      description: "A web application for smart home management.",
      imageURL: smarvium,
    },
  ];

  const categorizedProjects = projects.reduce((acc, project) => {
    acc[project.category] = acc[project.category] || [];
    acc[project.category].push(project);
    return acc;
  }, {});

  return (
    <section className='projects'>
      {Object.keys(categorizedProjects).map(category => (
        <div key={category}>
          <h3 className='project-category-title'>{category}</h3>
          <ul className='project-list'>
            {categorizedProjects[category].map(project => {
              const { id, name, projectURL, demoURL, description, imageURL } = project;
              return (
                <FadeIn key={id}>
                  <li className='project-item active'>
                    <figure className='project-img'>
                      <img src={imageURL} alt={name} loading='lazy' />
                    </figure>
                    <h3 className='project-title'>{name}</h3>
                    {/* <p className='project-category'>{category}</p> */}
                    <p className='project-description'>{description}</p>
                    <div className='project-buttons'>
                      <a href={demoURL} className='form-btn' target='_blank' rel='noopener noreferrer'>
                        Demo
                      </a>
                      <a href={projectURL} className='form-btn' target='_blank' rel='noopener noreferrer'>
                        {category === "Web Development" ? "View Live" : "APK file"}
                      </a>
                    </div>
                  </li>
                </FadeIn>
              );
            })}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Projects;
