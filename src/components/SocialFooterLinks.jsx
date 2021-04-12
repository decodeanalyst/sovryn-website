import React from "react";
import { IconContext } from "react-icons";
import { FaTelegram  } from 'react-icons/fa';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { RiDiscordLine } from 'react-icons/ri';
import "../styles/social.scss";
import discord from '../static/discord-1.png'

const SocialFooterLinks = () => {
  return (
    <>
      <ul className="d-inline-block d-flex">
        <li className="list-inline-item li">
          <a className='icons' href="">
          <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 48 48" fill="none">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM33.8949 10.4H14.9051C13.3038 10.4 12 11.688 12 13.284V32.212C12 33.808 13.3038 35.096 14.9051 35.096H30.9755L30.2245 32.506L32.0384 34.172L33.7531 35.74L36.8 38.4V13.284C36.8 11.688 35.4962 10.4 33.8949 10.4Z" fill="black"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M28.4247 28.684C28.4247 28.684 27.9145 28.082 27.4894 27.55C29.3458 27.032 30.0544 25.884 30.0544 25.884C29.4734 26.262 28.9207 26.528 28.4247 26.71C27.7161 27.004 27.0359 27.2 26.3698 27.312C25.0094 27.564 23.7623 27.494 22.6994 27.298C21.8917 27.144 21.1973 26.92 20.6162 26.696C20.2903 26.57 19.936 26.416 19.5817 26.22C19.5392 26.192 19.4967 26.178 19.4542 26.15C19.4258 26.136 19.4117 26.122 19.3975 26.108C19.1424 25.968 19.0007 25.87 19.0007 25.87C19.0007 25.87 19.6809 26.99 21.4807 27.522C21.0555 28.054 20.5312 28.684 20.5312 28.684C17.3993 28.586 16.2089 26.556 16.2089 26.556C16.2089 22.048 18.2496 18.394 18.2496 18.394C20.2903 16.882 22.2318 16.924 22.2318 16.924L22.3735 17.092C19.8226 17.82 18.6464 18.926 18.6464 18.926C18.6464 18.926 18.9582 18.758 19.4825 18.52C20.9989 17.862 22.2034 17.68 22.6994 17.638C22.7845 17.624 22.8553 17.61 22.9403 17.61C23.8048 17.498 24.7826 17.47 25.803 17.582C27.1493 17.736 28.5947 18.128 30.0686 18.926C30.0686 18.926 28.949 17.876 26.5399 17.148L26.7383 16.924C26.7383 16.924 28.6798 16.882 30.7205 18.394C30.7205 18.394 32.7611 22.048 32.7611 26.556C32.7611 26.556 31.5566 28.586 28.4247 28.684ZM22.2341 22.4C21.4327 22.4 20.8 23.1207 20.8 24C20.8 24.8793 21.4467 25.6 22.2341 25.6C23.0355 25.6 23.6682 24.8793 23.6682 24C23.6822 23.1207 23.0355 22.4 22.2341 22.4ZM27.3659 22.4C26.5645 22.4 25.9318 23.1207 25.9318 24C25.9318 24.8793 26.5786 25.6 27.3659 25.6C28.1673 25.6 28.8 24.8793 28.8 24C28.8 23.1207 28.1673 22.4 27.3659 22.4Z" fill="black"/>
          </svg>
          </a>
        </li>
        <li className="list-inline-item li">
          <a className="icons" href="">
            <IconContext.Provider value={{size:"3em"}}>
              <FaTelegram />
            </IconContext.Provider>
          </a>
        </li>
        <li className="list-inline-item li">
          <a className="icons" href="">
            <IconContext.Provider value={{size:"3em"}}>
              <AiFillTwitterCircle />
            </IconContext.Provider>
          </a>
        </li>
        <li className="list-inline-item li">
          <a className="icons" href="">
            <IconContext.Provider value={{size:"3em"}}>
              <AiFillGithub />
            </IconContext.Provider>
          </a>
        </li>
      </ul>
    </>
  );
}

export default SocialFooterLinks; 