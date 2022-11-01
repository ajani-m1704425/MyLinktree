import React from 'react';
import "./Body.css";
import Links from "./Links"

function Body() {
  return (
    <div className='body'>
        <Links title = "Twitter Link" link = "https://twitter.com/malikolalekana" id="twitter" />
        <Links title = "Zuri Team" link='https://training.zuri.team/' id='btn__zuri' />
        <Links title = "Zuri Books" link='http://books.zuri.team ' id='books' subtext='Books on design and coding'/>
        <Links title = "Python Books" link='https://books.zuri.team/python-for-beginners?ref_id=Ajani-Malik-Olalekan' id='book__design' subtext='Best-selling books on Python that are simple to understand for beginners'/>
        <Links title = "Background Check for Coders" link='https://background.zuri.team' id='pitch' subtext='Need a background check before hiring your next employee? we`ve got you covered.' />
        <Links title = "Design Books" link='https://books.zuri.team/design-rules' id='book__design' subtext='If you`re looking for free books on product design, Zuri has you covered.'/>
    </div>
    
  )
}

export default Body