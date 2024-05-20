import React from 'react'
import './Hero.css'
import my_profile from"../../assets/my_profile.jpg"
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={my_profile} alt="" className='profile-img' />
      <h1><span>I'm Sahil Aktar,</span> frontend developer based in India.</h1>
      <p>I am a frontend developer from Siliguri,WB, India with 2 years of experience.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div  className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero
