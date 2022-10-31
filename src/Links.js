import React from 'react';
import "./Links.css";

function Links(props) {
  return (
    <div className='Links'>
        <a id={props.id} href={props.link} className='link button'>
                <p className='title'>{props.title}</p>
                {props.subtext&&<p className='subtext'>{props.subtext}</p>}
        </a>
        
    </div>
  )
}

export default Links