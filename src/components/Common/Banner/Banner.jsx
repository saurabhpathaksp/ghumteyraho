import React from 'react'
import { Carousel } from 'react-bootstrap';
import sliderImg from '../../../assets/images/slider/1.jpg'
import sliderImg1 from '../../../assets/images/slider/2.png'
import sliderImg2 from '../../../assets/images/slider/3.png'
import '../Banner/banner.css'



const Banner = () => {
  return (
    <>
    <section className='slider'>
    <Carousel variant='dark'>
      <Carousel.Item>
        <img src={sliderImg} className="d-block w-100" alt="First slide" />
        <Carousel.Caption>
        <div className="slider_des">
                <h5 className="heading">
                देवों की भूमि
                </h5>
                <p className="sub_text">
                केदारनाथ मन्दिर भारत के उत्तराखण्ड राज्य के रुद्रप्रयाग जिले में स्थित हिन्दुओं का प्रसिद्ध मंदिर है।
                </p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sliderImg1} className="d-block w-100" alt="Second slide" />
        <Carousel.Caption>
        <div className="slider_des">
                <h5 className="heading">
                देवों की भूमि
                </h5>
                <p className="sub_text">
                ऋषिकेश को “सागों की जगह” के नाम से भी जाना जाता है, चंद्रबाथा और गंगा के संगम पर हरिद्वार से 24 किलोमीटर की ऊंचाई पर स्थित एक आध्यात्मिक शहर है।
                </p>
              </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sliderImg2} className="d-block w-100" alt="Third slide" />
        <Carousel.Caption>
        <div className="slider_des">
                <h5 className="heading">
                देवों की भूमि
                </h5>
                <p className="sub_text">
                हरिद्वार, उत्तराखंड राज्य का एक शहर है और यहां से गंगा नदी हिमालय से मैदान में प्रवेश करती है.
                </p>
              </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
    
    </>
  )
}

export default Banner
