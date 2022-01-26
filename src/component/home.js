import React from 'react';
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
        <div className='header'>Header</div>
        <div className='content'>Content</div>
        <div className='footer'>
          <div className='footer-left'>

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
