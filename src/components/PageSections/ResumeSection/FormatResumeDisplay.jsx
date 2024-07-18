import React from "react";

const FormatResumeDisplay = ({ data }) => {
  return (
    <ol className='timeline-list'>
      {data.map((singleData, index) => {
        const { text, entry_year, final_year, title, company } = singleData;

        return (
          <li key={index} className='timeline-item'>
            <h4 className='h4 timeline-item-title'>{title}</h4>
            <span className='timeline-item-company'>{company}</span>
            <span>{`${entry_year} — ${final_year}`}</span>
            {text && (
              <div className='timeline-text'>
                {text.split('\n').map((line, index) => (
                  <p key={index}>{line}</p>
                ))}
              </div>
            )}
          </li>
        );
      })}
    </ol>
  );
};

export default FormatResumeDisplay;
