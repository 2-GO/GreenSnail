import CountUp from "react-countup";
import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <div className="green-circle"/>
            <motion.h1 
            initial={{ y: "2rem", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "ease-in",
            }}
            >
              Elevate <br />Your Home's <br />Exterior Design
            </motion.h1>
          </div>

          <div className="flexColStart hero-description">
            <span className="secondaryText">We’ll factor your style and how you want to live outside</span>
            <span className="secondaryText">The easiest wat to design and build your dream yard.</span>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text" />
            <button className="button">
              Search
            </button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={250} end={1550} duration={4}/>
                <span>+</span>
              </span>
              <span className="secondaryText">Homes Elevated</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={50} end={500} duration={4}/>
                <span>+</span>
              </span>
              <span className="secondaryText">Referred Clients</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={0} end={170} duration={4}/>
                <span>+</span>
              </span>
              <span className="secondaryText">Award Winning</span>
            </div>
          </div>
        </div>

        <div className="flexCenter hero-right">
          <div className="image-container">
            <img src="./gs20.png" alt=""/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero