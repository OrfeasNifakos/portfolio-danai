import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
           <article className="contact__option">
              <MdOutlineEmail className='contact__option-icon'/>
              <h4>dummyegator@mail.com</h4>
              <a href="mailto:dummyegator@gmail.com">Send a messages</a>
           </article>
           <article className="contact__option">
              <RiMessengerLine lassName='contact__option-icon'/>
              <h4>Messenger</h4>
              <a href="https://m.me/ernest.achiever">Send a messages</a>
           </article>
           <article className="contact__option">
              <BsWhatsapp lassName='contact__option-icon'/>
              <h4>WhatsApp</h4>
              <h5>12312312</h5>
              <a href="https://api.whatsapp.com/send?phone+12312312">Send a messages</a>
           </article>
        </div>
        <form action="">
          <input type="text" name='name' placeholder="your full name" required/>
          <input type="email" name='email' placeholder="your Email" required/>
          <textarea  name="message" rows="7" placeholder="Your Message" required/>
          <button type="submit" className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact