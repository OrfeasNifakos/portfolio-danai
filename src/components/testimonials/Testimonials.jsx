import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'


import { Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';


const data = [
  {
    avatar:AVTR1,
    name:"Tina Snow",
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima temporibus numquam vitae consequatur commodi, dicta porro laudantium hic aut. Magni!'
  },
  {
    avatar:AVTR2,
    name:"Snow Tina",
    review:'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima temporibus numquam vitae consequatur commodi, dicta porro laudantium hic aut. Magni!'
  }
]

const Testimonials = () => {
  return (
    <section>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container mySwiper'
           modules={[ Pagination]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({avatar,name,review},index) =>{
            return (
              <SwiperSlide key={index} className='testimonial'>
          <div className='client__avatar'>
           <img src={avatar} alt="" />
          
          </div>
          <h5 className='client__name'>{name}</h5>
           <small className='Client__review'>
            {review}
           </small>
        </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials