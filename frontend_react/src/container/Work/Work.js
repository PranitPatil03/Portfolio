import { motion } from "framer-motion";
import { AppWrap,MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../Client";
import React, { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import "./Work.scss";

const Work = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const [animateCard, setanimateCard] = useState({ y: 0, opacity: 1 });

  const [works, setWorks] = useState([]);

  const [filterWork, setFilterWork] = useState([]);

  useEffect(() => {
    const query = '*[_type=="works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setanimateCard([{y:100,opacity:0}])
    
    setTimeout(() => {
      setanimateCard([{y:0,opacity:1}])

      if(item ==="ALL"){
        setFilterWork(works)
      }
      else{
        setFilterWork(works.filter((work)=>work.tags.includes(item)))
      }

    }, 500);

  };

  return (
    <>
      <h3 className="head-text">
        {" "}
        My Creative <span>Portfolio</span>
      </h3>

      <div className="app__work-filter">
        {["Web App", "React Js", "MERN App", "All"].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>  
        ))}
      </div>

      <motion.div
        animate={animateCard}
        className="app__work-portfolio"
        transition={{ duration: 0.5, delayChildren: 0.5 }}
      >
        {filterWork.map((work, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(work.imgUrl)} alt={work.name} />

              <motion.div
                whileHover={{opacity:[0,1]}}
                className="app__work-hover app__flex"
                transition={{duration:0.25, ease:'easeInOut',staggerChildren:0.25}}
                >
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    className="app__flex"
                    whileInView={{scale:[0,1]}}
                    whileHover={{opacity:[1,0.9]}}
                    transition={{duration:0.25, ease:'easeInOut',staggerChildren:0.25}}
                  >
                    <AiFillEye/>
                  </motion.div>
                </a>

                <a href={work.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    className="app__flex"
                    whileInView={{scale:[0,1]}}
                    whileHover={{opacity:[1,0.9]}}
                    transition={{duration:0.25, ease:'easeInOut',staggerChildren:0.25}}
                  >
                    <AiFillGithub/>
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
               <h4 className="bold-text">{work.title}</h4>
               <p className="p-text" style={{marginTop:10}}>{work.description}</p>

               <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
               </div>
            </div>

          </div>
        ))}
      </motion.div>
    </>
  );
};


export default AppWrap(
  MotionWrap(Work,"app__works"),
  'work',
  "app__whitebg"
);