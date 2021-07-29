import React from "react";
import './ContactBlock.css';

import BlockHeader from "../BlockHeader"

class ContactBlock extends React.Component
{
    render() { 
        return (
          <section id="Contact">
            <BlockHeader color={"#b6ac9e"}title={"Contact"} describtion={"Interested in my work?"} />
            <section className="ContactBlockMainContent">
                <p className="ContactText">Reach out to me on my email below or by the social links in the bottom</p>
                <p className="ContactEmail">My email: emilywwarming@gmail.com</p>
            </section>
          </section>
        )
      }
}

export default ContactBlock;