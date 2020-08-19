import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
} from "mdbreact";
class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>WhaleTeeth</h1>
        <MDBContainer>
          <MDBCarousel
            activeItem={1}
            length={3}
            showControls={true}
            showIndicators={false}
            className="z-depth-1"
            slide
          >
            <MDBCarouselInner>
              <MDBCarouselItem itemId="1">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="../images/Screen Shot 2020-08-18 at 8.42.23 PM.png"
                    alt="First slide"
                    style={{ height: "35rem" }}
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="2">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="../images/Screen Shot 2020-08-18 at 8.31.23 PM.png"
                    alt="Second slide"
                    style={{ height: "35rem" }}
                  />
                </MDBView>
              </MDBCarouselItem>
              <MDBCarouselItem itemId="3">
                <MDBView>
                  <img
                    className="d-block w-100"
                    src="../images/Screen Shot 2020-08-18 at 8.32.25 PM.png"
                    alt="Third slide"
                    style={{ height: "35rem" }}
                  />
                </MDBView>
              </MDBCarouselItem>
            </MDBCarouselInner>
          </MDBCarousel>
        </MDBContainer>
      </div>
    );
  }
}

export default Home;
