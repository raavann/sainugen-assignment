import { useState } from "react";
import './nav.css';

const Nav = () => {
  const [navCollapsed, setNavCollapsed] = useState(false);
  const collapse = () => {
    // console.log(navCollapsed);
    setNavCollapsed(!navCollapsed);
  }
  return (
    <>
    { !navCollapsed  && <div id="nav">
            <div id="close-1">
                <img src="img/Screenshot 2022-07-20 at 11.29.33 AM.png" alt="logo" />

                <div className="closebtn">
                    <button onClick={()=>{collapse()}}><span className="arrow">&#60;</span></button>
                </div>
            </div>

            <div className="option" id="activeoption">
                <img src="img/216242_home_icon.svg" alt="op"/>
                <span>Dashboard</span>
            </div>

            <div className="option">
                <img src="img/8678808_article_fill_icon.svg" alt="op"/>
                <span>menu item 3</span>
            </div>

            <div className="option">
                <img src="img/353442_bookmark_circle_favorite_star_favorites_icon.svg" alt="op"/>
                <span>menu item 4</span>
            </div>

            <div className="option">
                <img src="img/353442_bookmark_circle_favorite_star_favorites_icon.svg" alt="op"/>
                <span>menu item 5</span>
            </div>

        </div>
    }
    { navCollapsed && 
        <div className="closebtn canopen">
            <button onClick={()=>{collapse()}}><span className="arrow">&#x3e;</span></button>
        </div>
    }
    </>
  );
}

export default Nav;