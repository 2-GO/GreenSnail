import "./Footer.css";

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="paddings innerWidth flexCenter f-container">
            
            <div className="flexColStart f-left">
                <img src="gslogo.png" alt="" width={120}/>

                <span className="secondaryText">
                    Making the process of designing and building your home <br />
                    a beautiful and functional outdoor space as easy as possible. <br/>
                    <br />
                    @ 2023 GreenSnail Landscaping LLC. All rights reserved.
                </span>
            </div>

            <div className="flexColStart f-right">
                <span className="subTitle">More Info</span>
                <span className="secondaryText">1234 Lions St, CA 92562</span>

                <div className="flexCenter f-menu">
                    <span>Services</span>
                    <span>About Us</span>
                    <span>Reviews</span>
                    <span>FAQs</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer