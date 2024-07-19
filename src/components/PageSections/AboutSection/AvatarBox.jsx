import React, { useState } from "react";
import emrash from "../../../assets/images/emrash.png";

const AvatarBox = ({ isActive, setIsActive }) => {
  return (
    <div className='sidebar-info'>
      <figure className='avatar-box'>
        <img src={emrash} alt='Rasheed' />
      </figure>

      <div className='info-content'>
        <h1 className='name'>Rasheed Yekini</h1>

        <p className='title'>Software Engineer</p>
      </div>

      <button
        className='info_more-btn'
        onClick={() => {
          setIsActive((prev) => !prev);
        }}
      >
        <span>{`${isActive ? "Hide" : "Show"} Contacts`}</span>
        <ion-icon name={`chevron-${isActive ? "up" : "down"}`}></ion-icon>
      </button>
    </div>
  );
};

export default AvatarBox;
