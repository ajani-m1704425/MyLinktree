import React from 'react';
import "./Social.css";
import github from "./image/github.png";
import slack from "./image/slack.png";

function Social() {
  return (
    <div className='social'>
        <img className='slack' src={slack} alt='slack'/>
        <img className='github' src={github} alt='github'/>
    </div>
  )
}

export default Social