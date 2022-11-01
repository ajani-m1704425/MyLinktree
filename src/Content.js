import React from 'react';
import "./Content.css";
import Zuri from "./image/Zuri.Internship_Logo.png";
import I4G from './image/I4G.png';
import Zuri_desk from "./image/Zuri.Internship_Logo_desk.png";
import I4G_desk from './image/I4G_desk.png';


function Content() {
  return (
    <div className='content'>
        <img className='zuri' src={Zuri} alt=''/>
        <img className='zuri_desk' src={Zuri_desk} alt=''/>
        <p className='hng'>HNG Internship 9 Frontend Task</p>
        <img className='i4g' src={I4G} alt=''/>
        <img className='i4g_desk' src={I4G_desk} alt=''/>
    </div>
  )
}

export default Content