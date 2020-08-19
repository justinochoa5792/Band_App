import React, { Component } from "react";

class Bandcamp extends Component {
  render() {
    return (
      <div className="bandcamp">
        <h1>Cloud Shadows EP</h1>
        <iframe
          style={{ height: "340px", width: "50%" }}
          src="https://bandcamp.com/EmbeddedPlayer/album=3319004161/size=large/bgcol=333333/linkcol=2ebd35/artwork=none/transparent=true/"
        />
      </div>
    );
  }
}

export default Bandcamp;
