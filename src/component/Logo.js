import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import one from'../Photos/logoOne.png'
import two from'../Photos/logoTwo.png'
import'./Logo.css'
export default class Logo extends Component {
  render() {
    return (
        <Carousel className='logo'>
        <Carousel.Item className='bg-img'>
          <img
            className="d-block w-100"
            src={one}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item className='bg-img'>
          <img
            className="d-block w-100"
            src={two}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
      

    )
  }
}

