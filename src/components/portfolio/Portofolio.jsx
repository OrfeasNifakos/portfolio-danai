import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'


const data = [
  {
    id:1,
    title:'charts templates & infographics in figma',
    image:IMG1,
    github: "github.com",
    demo:"google.com"
  }
]

const Portofolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
       {
        data.map(({id, image, title,github,demo}) => {
          return(
          <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
                   <img src={image} alt="title"></img>
                   </div>
                   <h3>{title}</h3>
                   <div className='portfolio__item-cta'>
                    <a href={github} className="btn btn">Github</a>
                    <a href={demo} className="btn btn-primary">Live Demo</a>
                   </div>
          </article>
          )
        }) 
       }


      </div>
    </section>
  )
}

export default Portofolio