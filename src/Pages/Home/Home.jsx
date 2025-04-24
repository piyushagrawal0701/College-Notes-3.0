import React from 'react'
import Hero1 from '../../components/Hero/Hero1'
// import Form1 from '../../components/Form/Form1'
import Hero2 from '../../components/Hero/Hero2'
// import ControlSlider from '../../components/Sliders/Control Slider/ControlSlider'
import Testimonial from '../../components/Testimonial/Testimonial'
import Stats from '../../components/Stats/Stats'
import Whatsapp from '../../components/Whatsapp-icon/Whatsapp'
import ControlSlider from '../../components/Sliders/Control Slider/ControlSlider'
// import Hero1 from '../../components/Hero section/Hero1'
// import HowToOrder from '../../components/How to order/HowToOrder'

const Home = () => {
  return (
    <>
    <Hero1/>
    <Stats/>
    <Hero2/>
    <ControlSlider/>
    {/* <Testimonial/> */}
    {/* <Form1/> */}
    <Whatsapp/>
      {/* <Hero1/>
      <ControlSlider/>
      <HowToOrder/> */}      
    </>
  )
}

export default Home