import React, { useState, useEffect } from "react";
import {urlFor,client} from "../../Client"
import { motion } from "framer-motion";
import { AppWrap } from "../../wrapper";
import { MotionWrap } from "../../wrapper";
import "./About.scss";

// const abouts = [
//   {
//     imgUrl: images.about01,
//     title: "Frontend Deveoplement",
//     description: "I am a good frontend developer",
//   },
//   {
//     imgUrl: images.about02,
//     title: "Backend Deveoplement",
//     description: "I am a good Backend developer.",
//   },
//   {
//     imgUrl: images.about03,
//     title: "UI/UX",
//     description: "I am a good at UI/UX.",
//   },
//   {
//     imgUrl: images.about04,
//     title: "Web Design",
//     description: "I am a good at Web Design.",
//   },
// ];

const About = () => {

  const [abouts, setAbouts] = useState([])

  useEffect(() => {
    const query = '*[_type=="abouts"]';

    client.fetch(query)
      .then((data) =>setAbouts(data))
  }, [])

  return (
    <>
      <h3 className="head-text"> I know that <span>Quality Development</span> Ensures <span>Business Excellence</span></h3>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opcity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt='about img'/>
            <h2 className="bold-text" style={{marginTop:20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop:10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About,"app__about"),
  'about',
  "app__whitebg"
);
