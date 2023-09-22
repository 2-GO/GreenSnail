import "./Contact.css";
import { FaTiktok, FaHeadset, FaPhoneAlt, FaMailBulk } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact-us" className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* left side */}
        <div className="flexColStart c-left">
          <span className="blueText">Have Questions?</span>
          <span className="subTitle">Contact Us</span>
          <span className="secondaryText">
            Our experts are ready to answer any of your questions.{" "}
          </span>

          <div className="flexColStart contactModes">
            {/* first row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaPhoneAlt size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">909-555-1234</span>
                  </div>
                </div>
                <div className="flexCenter button">Call now</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaHeadset size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">with an agent</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat now</div>
              </div>
            </div>

            {/* second row */}
            <div className="flexStart row">
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaMailBulk size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Email</span>
                    <span className="secondaryText">GSL@gmail.com</span>
                  </div>
                </div>
                <div className="flexCenter button">Email us</div>
              </div>

              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <FaTiktok size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Socials</span>
                    <span className="secondaryText">@GSLandscaping</span>
                  </div>
                </div>
                <div className="flexCenter button">Follow us</div>
              </div>
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="flexEnd c-right">
          <div className="image-container">
            <img src="./gs18.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;