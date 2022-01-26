import React from 'react';

import logo from '../images/logo.png';
import discord from '../images/discord.png';
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';
import { Link } from 'react-scroll';

import backgroundImg from '../images/background.png';
import heading from '../images/heading.png';
import nftGif from '../images/nftGif.gif';
import '../main.css'
import instagram from '../images/insta.png'
import twitter from '../images/twitter.png'
import discord from '../images/Discord-Logo.png'
// import Minting from './minting';
class Home extends React.Component {
  state = {};
  render() {
    return (
      <div className='home-container'>
        <div className='header'>
          <div className='logo'>
            <img src={logo}></img>
          </div>
          <div className='list'>
            <ul>
              <li>
                <Link activeClass='active' to='home' spy={true} smooth={true}>
                  HOME
                </Link>
              </li>
              <li>
                <Link to='mint' spy={true} smooth={true}>
                  MINT
                </Link>
              </li>
              <li>
                <Link to='roadmap' spy={true} smooth={true}>
                  ROADMAP
                </Link>
              </li>
              <li>
                <Link to='faq' spy={true} smooth={true}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className='icon'>
            <ul>
              <li>
                <a href='#' target='_blank'>
                  <img src={insta} />
                </a>
              </li>
              <li>
                <a href='#' target='_blank'>
                  <img src={discord} />
                </a>
              </li>
              <li>
                <a href='#' target='_blank'>
                  <img src={twitter} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className='content'>
          <div
            className='content-first-page'
            style={{
              backgroundImage: `url(${backgroundImg})`,
            }}>
            {/* <img src={background} /> */}
            <p>Lorem ipsum dolor sit amet</p>
          </div>
          <div
            className='content-intro'
            style={{
              backgroundColor: '#2d4762',
            }}>
            <div className='left-div'>
              <h4 className='left-heading'>
                Don't blame this little blazemaker
              </h4>
              <div className='content-div-heading'>
                <img className='left-div-heading-image' src={heading} />
              </div>
              <h5 className='left-div-info'>
                A rebellious imp who has the ability to shapeshift and the
                penchant to create chaos. It enters the digital world to recruit
                you for his army and eventually spread its influence to the
                universe! Reality and the Meta-reality, no one can escape from
                the internets Boogeyman whose name is Metahead.
              </h5>
            </div>
            <div className='right-div'>
              <img className='nft-gif' src={nftGif} />
            </div>
          </div>
          <div className='content-roadmap'>
            <p>Roadmap to MetaHeads</p>
          </div>
          <div className='content-faq'>
            <p>FAQs</p>
          </div>
        </div>
        <div className='content'>Content</div>
        <div className='footer'>
          <div className='footer-left'>
            <span className='footer-heading'>Metahead &copy; 2022 </span>
          </div>
          <div className='footer-right'>
            <a><img src={instagram}/></a>
            <a><img src={twitter}/></a>
            <a><img src={discord}/></a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
