import React from "react";
import "../main.css";
import Minting from "./minting";
import image from "../images/flappyg.gif";
import twitter from "../images/twitter.png";
import facebook from "../images/facebook.png";
import discord from "../images/Discord-Logo.png";
import instagram from "../images/insta.png";
import background from "../images/background.png";

class FlappyPage extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div
          className="backgroundAttachement"
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            
          }}
        >
          <div className="parrent">
            <div>
              <div className="heading">
                <h1>
                  {" "}
                  <span>Fantom flappy Birds</span>
                </h1>
              </div>
              <div className="icons">
                <ul>
                  <li>
                    {" "}
                    <a href="#" target="_blank">
                      {" "}
                      <img src={twitter} />{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" target="_blank">
                      <img src={facebook} />{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" target="_blank">
                      <img src={discord} />{" "}
                    </a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" target="_blank">
                      <img src={instagram} />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="FirstPara">
                <p>
                  <span>Fantom flappy birds!</span>
                </p>
                <p>
                  <span>
                    Ernesto was a lonely dog .... until you showed up! will you
                    become his friend
                  </span>
                </p>
              </div>
            </div>

            <div className="InnerContainer">
              <div className="innerContainerpara1">
                <p>
                  <span>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </span>
                </p>
              </div>
              <div className="gifBody">
                <img src={image}></img>
                <Minting />
              </div>
              <div className="InnerContainerlastPara">
                <p>
                  <span>
                    In publishing and graphic design, Lorem ipsum is a
                    placeholder text commonly used to demonstrate the visual
                    form of a document or a typeface without relying on
                    meaningful content. Lorem ipsum may be used as a placeholder
                    before final copy is available.
                  </span>
                </p>
              </div>

            </div>
            
          </div>
         
        </div>
      </>
    );
  }
}
export default FlappyPage;
