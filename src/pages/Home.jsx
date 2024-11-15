import React from 'react'
import Banner from '../components/Common/Banner/Banner'
import AdvanceSearch from '../components/AdvanceSearch/AdvanceSearch'
import Features from '../components/Features/Features'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container, Row, Col,  } from "react-bootstrap";
import Cards from "../components/Cards/Cards";
import PopularCard from "../components/Cards/PopularCard"
import { destinationsData, popularsData } from "../components/utils/data";



const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };




  return (
    <>
    <Banner/>
    <AdvanceSearch/>
    <Features/>



     {/* tour seciton start */}

     <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <h1> Top Destination For Your Next Vacation </h1>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinationsData.map((destination, inx) => {
                  return (
                    <Cards destination={destination} key={inx} />
                  );
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      {/* tour seciton start */}
      <section className="popular py-5">
      <Container>
        <Row>
          <Col md="12">
            <div className="main_heading">
              <h1> Popular Activities </h1>
            </div>
          </Col>
        </Row>
        <Row>
        {popularsData.map((val, inx)=>{
          return(
          <Col  md={3} sm={6} xs={12} className="mb-5" key={inx}>
            <PopularCard val={val} />
          </Col>
        )
        })}
        </Row>
      </Container>
    </section>

    </>
  )
}

export default Home
