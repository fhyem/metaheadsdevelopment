import React from 'react';
import logo from '../images/logo.png';
import discord from '../images/discord.png';
import insta from '../images/insta.png';
import twitter from '../images/twitter.png';
import { Link } from 'react-scroll';

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
        <div className='content'>Content</div>
        <div className='footer'>Footer</div>
      </div>
    );
  }
}

export default Home;
