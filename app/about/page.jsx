import React from 'react'
import Sectionabout from '@/components/section/SectionAbout'
import Contact from '@/components/section/Contact'
import Ourstory from '@/components/section/OurStory'
import Letswork from '@/components/section/LetsWork'
import Testimonial from '@/components/section/Testimonial'

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
