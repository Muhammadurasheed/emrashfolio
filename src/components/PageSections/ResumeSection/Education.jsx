import React from "react";

import FormatResumeDisplay from "./FormatResumeDisplay";

import { education } from "../../../data/resume-data";

const Education = () => {
  return (
    <section className='timeline'>
      <div className='title-wrapper'>
        <div className='icon-box'>
          <ion-icon name='book-outline'></ion-icon>
        </div>
        <h3 className='h3'>Education</h3>
      </div>
      <FormatResumeDisplay data={education} />
    </section>
  );
};
export default Education;
