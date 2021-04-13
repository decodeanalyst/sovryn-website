import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "../styles/social.scss";

const SocialFooterLinks = () => {
  return (
    <>
      <ul className="d-inline-block d-flex">
        <li className="list-inline-item li">
          <a className="icons" href="https://discord.gg/J22WS6z">
            <FontAwesomeIcon icon={[ 'fab', 'discord' ]} size="3x" mask={[ 'fas', 'circle' ]} transform="down-1 shrink-6" />
          </a>
        </li>
        <li className="list-inline-item li">
          <a className="icons" href="https://t.me/SovrynBitcoin">
            <FontAwesomeIcon icon={[ 'fab', 'telegram' ]} size="3x"/>
          </a>
        </li>
        <li className="list-inline-item li">
          <a className="icons" href="https://twitter.com/SovrynBTC">
            <FontAwesomeIcon icon={[ 'fab', 'twitter' ]} size="3x" mask={[ 'fas', 'circle' ]} transform="shrink-5" />
          </a>
        </li>
        <li className="list-inline-item li">
          <a className="icons" href="https://github.com/DistributedCollective">
            <FontAwesomeIcon icon={[ 'fab', 'github' ]} size="3x"/>
          </a>
        </li>
      </ul>
    </>
  );
}

export default SocialFooterLinks; 