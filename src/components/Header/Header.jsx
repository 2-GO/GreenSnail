import { useState } from 'react';
import './Header.css';
import { FaListUl } from "react-icons/fa";
import OutsideClickHandler from 'react-outside-click-handler';

const Header = () => {
  const [menuOpen, setMenuOpened] = useState(false)
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper"> 
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./gslogo.png"  alt="logo" width={100}/>
            <h1 className='co-name' href="#">GreenSnail Landscaping</h1>

            <OutsideClickHandler onOutsideClick={() => {setMenuOpened(false)}}>
              <div className="flexCenter h-menu"
              style={getMenuStyles(menuOpen)}
              >
                  <a href="">Residencies</a>
                  <a href="">Value</a>
                  <a href="">Contact Us</a>
                  <a href="">Get Started</a>
                  <button className='button'>
                      <a href="">Contact</a>
                  </button>
              </div>
            </OutsideClickHandler>
          <div className="menu-icon" onClick={() => setMenuOpened((prev) => !prev)}>
            <FaListUl size={30} />
         </div>
        </div>
        
    </section>
  )
}

export default Header;