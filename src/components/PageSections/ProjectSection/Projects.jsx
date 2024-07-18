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
      category: "Web Development",
      projectURL: "https://example.com/project-one",
      imageURL: healthify,
    },
    {
      id: 2,
      name: "NotchAI",
      category: "Mobile App",
      projectURL: "https://example.com/project-two",
      imageURL: notchAI,
    },
    {
      id: 3,
      name: "InopLearn",
      category: "Web Development",
      projectURL: "https://example.com/project-three",
      imageURL: inopLearn,
    },
    {
      id: 4,
      name: "Shopflex",
      category: "Mobile App",
      projectURL: "https://example.com/project-four",
      imageURL: shopflex,
    },
    {
      id: 5,
      name: "Wellness",
      category: "Web Development",
      projectURL: "https://example.com/project-five",
      imageURL: wellness,
    },
    {
      id: 6,
      name: "WiselyPay",
      category: "Mobile App",
      projectURL: "https://example.com/project-six",
      imageURL: wiselypay,
    },
    {
      id: 7,
      name: "Smarvium",
      category: "Web Development",
      projectURL: "https://example.com/project-seven",
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
              const { id, name, projectURL, imageURL } = project;
              return (
                <FadeIn key={id}>
                  <li className='project-item active'>
                    <a href={projectURL}>
                      <figure className='project-img'>
                        {projectURL !== "#" && (
                          <div className='project-item-icon-box'>
                            <ion-icon name='eye-outline'></ion-icon>
                          </div>
                        )}
                        <img src={imageURL} alt={name} loading='lazy'/>
                      </figure>
                    </a>
                    <h3 className='project-title'>{name}</h3>
                    <p className='project-category'>{category}</p>
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
