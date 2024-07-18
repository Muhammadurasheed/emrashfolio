import React from 'react';
import FadeIn from '../../FadeIn';
import ReactLogo from '../../../assets/images/react.png';
import ReduxLogo from '../../../assets/images/redux.png';
import Node from '../../../assets/images/node.png';
import Docker from '../../../assets/images/docker.png';
import Postgres from '../../../assets/images/postgres.png';
import Graphql from '../../../assets/images/graphql.png';
import Mongodb from '../../../assets/images/mongodb.png';
import Firebase from '../../../assets/images/firebase.png';
import Aws from '../../../assets/images/aws.png';


const ToolsAndFramework = () => {
  const tools = [
    { name: "REACT", src: ReactLogo, alt: "React" },
    { name: "REDUX", src: ReduxLogo, alt: "Redux" },
    { name: "NODE", src: Node, alt: "Node" },
    { name: "DOCKER", src: Docker, alt: "Docker" },
    { name: "POSTGRESQL", src: Postgres, alt: "PostgreSQL" },
    { name: "GRAPHQL", src: Graphql, alt: "GraphQL" },
    { name: "MONGODB", src: Mongodb, alt: "MongoDB" },
    { name: "FIREBASE", src: Firebase, alt: "Firebase" },
    { name: "AWS", src: Aws, alt: "AWS" },
  ];

  return (
    <FadeIn className='skill'>
      <h3 className='h3 skills-title'>Tools & Frameworks</h3>
      <section className='tools-list content-card'>
        <div className="tools-list">
          {tools.map(tool => (
            <div key={tool.name} className="bar-gap">
              <div className="infos">
                <span className="tool-name">{tool.name}</span>
                <span className="tool-icon">
                  <img src={tool.src} alt={tool.alt} className="tool-image" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </FadeIn>
  );
};

export default ToolsAndFramework;
