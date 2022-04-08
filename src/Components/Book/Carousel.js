import { Component, Fragment } from "react";

import Books from "../../Constants/DemoValues/Books";
import CardMin from "./Min";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import { Image, Button } from  'semantic-ui-react'
class CarouselComponent extends Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <div className="carousel">
        <CCarousel controls>
        {Books.map((book, key)=>{
            return <CCarouselItem key={key}>
              <CardMin book={book} />
            </CCarouselItem>
          })}
        </CCarousel>
      </div>
    )
  }
}

export default CarouselComponent