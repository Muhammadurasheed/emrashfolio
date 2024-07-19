import React from 'react';
import FadeIn from '../../FadeIn';
import ReactLogo from '../../../assets/images/react.png';

import Docker from '../../../assets/images/docker.png';


import Firebase from '../../../assets/images/firebase.png';
import Aws from '../../../assets/images/aws.png';
import gcp from '../../../assets/images/gcp.png';
import apache from '../../../assets/images/apache.png';
import flutter from '../../../assets/images/flutter.png';
import keras from '../../../assets/images/keras.png';
import react from '../../../assets/images/react.png';
import numpy from '../../../assets/images/numpy.png';
import pandas from '../../../assets/images/pandas.png';
import scikit from '../../../assets/images/scikit.png';
import tensorflow from '../../../assets/images/tensorflow.png';
import amzonSagepaker from '../../../assets/images/amzonSagepaker.jpeg';


const ToolsAndFramework = () => {
  const tools = [
    { name: "TensorFlow", src: tensorflow, alt: "TensorFlow" },
    { name: "Keras", src: keras, alt: "Keras" },
    { name: "Pandas", src: pandas, alt: "Pandas" },
    { name: "NumPy", src: numpy, alt: "NumPy" },
    { name: "Apache Spark", src: apache, alt: "Apache Spark" },
    { name: "Amazon SageMaker", src: amzonSagepaker, alt: "Amazon SageMaker" },
    { name: "Scikit-learn", src: scikit, alt: "Scikit-learn" },
    { name: "Flutter", src: flutter, alt: "Flutter" },
    { name: "React", src: react, alt: "React" },
    { name: "Docker", src: Docker, alt: "Docker" },
    { name: "Firebase", src: Firebase, alt: "Firebase" },
    { name: "AWS", src: Aws, alt: "AWS" },
    { name: "GCP", src: gcp, alt: "GCP" },
  ];

  return (
    <FadeIn className='skill'>
      <h3 className='h3'>Tools & Frameworks</h3>
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
