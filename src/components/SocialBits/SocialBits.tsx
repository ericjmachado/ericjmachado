import React from "react";
import "./SocialBits.less";

import {
  GithubIcon,
  InstagramIcon,
  FacebookIcon,
} from "icons";

interface Props {}
const SocialBits: React.FC<Props> = () => {
  return (
    <div className="socials-container">
      <a
        title="Github"
        href="https://github.com/ericjmachado/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <GithubIcon size={40} fill="#fff" />
      </a>
      <a
        title="Instagram"
        href="https://www.instagram.com/ericmachado.py/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <InstagramIcon size={40} fill="#fff" />
      </a>
      <a
        title="Facebook"
        href="https://www.facebook.com/eric.machado.7106/"
        rel="noopener noreferrer"
        target="_blank"
      >
        <FacebookIcon size={40} fill="#fff" />
      </a>
    </div>
  );
};

export default SocialBits;
