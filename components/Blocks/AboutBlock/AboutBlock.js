import React from "react";
import './AboutBlock.css';

import BlockHeader from "../BlockHeader"
import AboutBlockEntry from "./AboutBlockEntry"

class AboutBlock extends React.Component {
  render() { 
      return (
        <section id="About">
          <BlockHeader color={"#d591ee"}title={"About"} describtion={"Who am I"} />
          <section className="aboutBlockMainContent">
              <AboutBlockEntry id={0}/>
              <AboutBlockEntry id={1}/>
          </section>
        </section>
      )
  }
}
export default AboutBlock;