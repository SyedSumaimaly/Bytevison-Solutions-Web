import React from 'react'
import Sectionabout from '@/components/section/Section-about'
import Contact from '@/components/section/contact'
import Ourstory from '@/components/section/our-story'
import Letswork from '@/components/section/lets-work'
import Testimonial from '@/components/section/testimonial'

const about = () => {
  return (
    <div>
      <Contact heading={'About'} />
      <Sectionabout/>
      <Ourstory/>
      <Letswork/>
      <Testimonial/>
      
    </div>
  )
}

export default about
