import React from "react";
import { IconContext } from "react-icons";
import { FaTelegram  } from 'react-icons/fa';
import { AiFillGithub, AiFillTwitterCircle } from 'react-icons/ai';
import { RiDiscordLine } from 'react-icons/ri';
import "../styles/social.scss";

const SocialFooterLinks = () => {
  return (
    <>
      <ul className="list-unstyled list-inline social text-center">
        <li className="list-inline-item li">
          <a className='icons' href="">
            <IconContext.Provider value={{size:"3em"}}>
              <RiDiscordLine />
            </IconContext.Provider>
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