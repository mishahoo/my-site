import React from 'react';
import './Skill.css'

const Skill = ({skill, imageUrl}) => {
  return (
    <div className="skill-div">
      {imageUrl ? <img src={imageUrl} alt="icon" className="skill-icon" /> : <img alt="" />}
      <div className="skill" >{skill}</div>
    </div>
  )
}

export default Skill;
