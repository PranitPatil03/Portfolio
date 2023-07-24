import React from "react";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://twitter.com/Patilpranit3112">
          <BsTwitter />
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/patilpranit03/">
          <FaLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/PranitPatil03/">
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
