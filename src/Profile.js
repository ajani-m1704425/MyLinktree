import React from 'react';
import "./Profile.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis} from '@fortawesome/free-solid-svg-icons'
import {} from "@fortawesome/free-regular-svg-icons"
import profile from "./image/profile1.jpeg"
import icon from "./image/Icon.png"
import share_icon from "./image/share_icon.png"

function Profile() {
  return (
    <div className='Profile'>
      <div className='profile_img_container'>
        <img id='profile__img' src={profile} alt='Profile'/>
        <div className='profile_img_overlay'>
          <img className='camera_icon' src={icon} alt='Camera_icon'/>
        </div>
      </div>
      <div className='mobile_menu'>
       <FontAwesomeIcon className='more' icon={faEllipsis} />
      </div>
      <div className='desktop_share'>
        <img className='share_icon' src={share_icon} alt='share_icon'/>
      </div>
      <div className='ids'>
        <p id='twitter'>@malikolalekana</p>
        <p  id='slack'>@Ajani_Malik_Olalekan</p>
      </div>
        
    </div>
  )
}

export default Profile
