import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="linkedin.com"><BsLinkedin/> </a>
        <a href="github.com"> <FaGithub/></a>
        <a href="dribble.com"><FiDribbble/> </a>
    </div>
  )
}

export default HeaderSocials