import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <h3 style={{ padding: "10px" }}>
          <h4>For booking and press inquiries, please contact</h4>
        </h3>
        gigs@whaleteethmusic.com
        <h3 style={{ padding: "10px" }}>Find us on Facebook!</h3>
        <a href="https://www.facebook.com/whaleteeth">Facebook</a>
        <h3 style={{ padding: "10px" }}>Follow us on Instagram</h3>
        <a href="https://www.instagram.com/whaleteeth/">Instagram</a>
      </div>
    );
  }
}

export default Contact;
