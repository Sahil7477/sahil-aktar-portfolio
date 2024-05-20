import React from 'react'
import './About.css'
import my_profile from"../../assets/my_profile.jpg"


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={my_profile} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I am an experienced Frontend Developer with over a 2+ of professional expertise in the field. </p>
                <p>My passion for frontend development is not only reflected in my extensive experience but also in the enthusiasm and dedication I bring to each project.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"80%"}} /></div>
                <div className="about-skill"><p>React JS</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>Node JS & Express JS</p><hr style={{width:"50%"}} /></div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default About
