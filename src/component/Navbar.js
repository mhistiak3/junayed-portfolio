import { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "../img/menu.svg";
const Navbar = () => {
  let [menu, setMenu] = useState(true);
  return (
    <>
      <nav>
        <div className="nav-container max-width">
          <div className="logo">
            <h2>Junayed Alhasan</h2>
          </div>
          <ul className={menu ? "menu showNav" : "menu "}>
            <li>
              <Link className="hvr-underline-from-left" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hvr-underline-from-left" to="/post">
                Post
              </Link>
            </li>
            <li>
              <Link className="hvr-underline-from-left" to="/video">
                Videos
              </Link>
            </li>
            <li>
              <a className="hvr-underline-from-left" href="#about-me">
                About
              </a>
            </li>
            <li>
              <a className="hvr-underline-from-left" href="#education">
                Education
              </a>
            </li>
            <li>
              <a className="hvr-underline-from-left" href="#certificate">
                Certificate
              </a>
            </li>
            <li>
              <a className="hvr-underline-from-left" href="#calligraphy">
                Calligraphy
              </a>
            </li>
           
            <li>
              <a className="hvr-underline-from-left" href="#contact">
                Contact
              </a>
            </li>
          </ul>
          <img
          onClick={()=>setMenu(!menu)}
            src={MenuIcon}
            width="40px"
            height="40px"
            className='mobile-menu'
            alt=""
          />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
