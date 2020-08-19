import React, { Component } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardGroup,
  MDBCardImage,
  MDBCardText,
  MDBCardBody,
} from "mdbreact";

class About extends Component {
  render() {
    return (
      <div>
        {" "}
        <MDBCardGroup>
          <MDBCard>
            <MDBCardImage
              src="../images/Screen Shot 2020-08-18 at 8.32.38 PM.png"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
              style={{ height: "24rem" }}
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Nico</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="../images/Screen Shot 2020-08-18 at 8.32.34 PM.png"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
              style={{ height: "24rem" }}
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Rodney</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="../images/Screen Shot 2020-08-18 at 8.32.42 PM.png"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Christian</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </div>
    );
  }
}

export default About;
