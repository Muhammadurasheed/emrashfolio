import React from 'react';
import FadeIn from '../../FadeIn';
import tensorflow from '../../../assets/images/tensorflow.png';
import keras from '../../../assets/images/keras.png';
import pytorch from '../../../assets/images/pytorch.png';
import pandas from '../../../assets/images/pandas.png';
import numpy from '../../../assets/images/numpy.png';
import scipy from '../../../assets/images/scipy.png';
import scikit from '../../../assets/images/scikit.png';
import opencv from '../../../assets/images/opencv.png';
// import yolo from '../../../assets/images/yolo.png';
// import maskrcnn from '../../../assets/images/maskrcnn.png';
import amazonSageMaker from '../../../assets/images/amazonSageMaker.jpeg';
import docker from '../../../assets/images/docker.png';
import flutter from '../../../assets/images/flutter.png';
import aws from '../../../assets/images/aws.png';
import gcp from '../../../assets/images/gcp.png';
import matplotlib from '../../../assets/images/matplotlib.png';

const ToolsAndFramework = () => {
  const tools = [
    { name: "TensorFlow", src: tensorflow, alt: "TensorFlow" },
    { name: "Keras", src: keras, alt: "Keras" },
    { name: "PyTorch", src: pytorch, alt: "PyTorch" },
    { name: "Pandas", src: pandas, alt: "Pandas" },
    { name: "NumPy", src: numpy, alt: "NumPy" },
    { name: "SciPy", src: scipy, alt: "SciPy" },
    { name: "Scikit-learn", src: scikit, alt: "Scikit-learn" },
    { name: "OpenCV", src: opencv, alt: "OpenCV" },
    // { name: "YOLO", alt: "YOLO" },
    // { name: "Mask RCNN", alt: "Mask RCNN" },
    { name: "Amazon SageMaker", src: amazonSageMaker, alt: "Amazon SageMaker" },
    { name: "Docker", src: docker, alt: "Docker" },
    { name: "Flutter", src: flutter, alt: "Flutter" },
    { name: "AWS", src: aws, alt: "AWS" },
    { name: "GCP", src: gcp, alt: "GCP" },
    { name: "Matplotlib", src: matplotlib, alt: "Matplotlib" },
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
