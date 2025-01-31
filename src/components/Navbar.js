import React, { useRef, useState } from "react";
import { Link } from "react-router";
import "./navbar.css";

function Navbar() {
  const [isMenuActive, setMenuActive] = useState(false);

  const handleMenu = () => {
    setMenuActive(!isMenuActive);
  };
  return (
    <>
      <nav className="  max-md:hidden bg-white absolute  ">
        <div className="nav-top">
          <div>
            <img
              src="https://static.vecteezy.com/ti/vecteur-libre/p1/580057-personnes-de-la-sante-caractere-humain-logo-signe-illustrationle-gratuit-vectoriel.jpg"
              alt=""
              className="w-[100px] "
            />
          </div>
          <div className=" nav-btn nav-items flex items-center gap-10">
            <div>
              <button>
                <Link to="/">Home</Link>
              </button>
            </div>
            <div>
              <button>
                <Link to="Classes">Classes</Link>
              </button>
            </div>
            <div>
              <button>
                <Link to="Plans">Plans & Pricing</Link>
              </button>
            </div>
            <div>
              <button>
                <Link to="About">About</Link>
              </button>
            </div>
            <div>
              <button>
                {" "}
                <Link to="Contact">Contact</Link>
              </button>
            </div>
            <div>
              <button>Login</button>
            </div>
            <div className="book-btns">
              <button className="bg-btn-col px-4 py-2 text-white">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="">
        <div
          className={`Side sidemenu-trigger   ${isMenuActive && "active"}`}
          role="button"
          onClick={handleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <div
          className={`place-content-center hidden p-5 max-md:flex sidemenu ${
            isMenuActive && "active"
          }`}
        >
          <div className=" flex  flex-col items-center gap-5 font-semibold">
            <div>
              <button>
                <Link to="/">Home</Link>
              </button>
            </div>
            <div>
              <button>
                <Link to="Classes">Classes</Link>
              </button>
            </div>
            <div>
              <button>
                <Link to="Plans">Plans & Pricing</Link>
              </button>
            </div>
            <div>
              <button>
                <Link to="About">About</Link>
              </button>
            </div>
            <div>
              <button>
                {" "}
                <Link to="Contact">Contact</Link>
              </button>
            </div>
            <div>
              <button>Login</button>
            </div>
            <div className="book-btns">
              <button className="  bg-btn-col px-4 py-2 text-white hover:bg-foot-bg hover:text-black">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
