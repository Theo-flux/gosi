import React, { useState, useRef, useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { Nav, Hyperlink, Button } from "../../shared";
import zoboLogo from "../../images/zobomap-icon.svg";
import menu from "../../images/menu.svg";
import "./floatingNav.css";
import { Link } from "react-router-dom";

function Navbar() {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isDesktop = useMediaQuery({ minWidth: 768 });
  const [toggle, setToggle] = useState(false);
  const drawer = useRef();
  const navRef = useRef();

  useEffect(() => {
    if (drawer.current) {
      if (toggle) {
        drawer.current.style.left = "0px";
        drawer.current.style.transition = "left .3s";
      } else {
        drawer.current.style.left = "-100%";
        drawer.current.style.transition = "left .3s";
      }
    }
  }, [toggle]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navRef.current.classList.add("floatingNav");
      } else {
        navRef.current.classList.remove("floatingNav");
      }
    });
  });

  return (
    <section ref={navRef} className="z-[1001] bg-white fixed w-full">
      {/* the leaflet map button container has a z index of 1000 */}
      <Nav className="relative md:static flex justify-between items-center w-11/12 ">
        <Hyperlink
          to="/"
          className="z-50 flex justify-between items-center cursor-pointer w-[136px]"
        >
          <figure>
            <img src={zoboLogo} className="w-100%" alt="zobo-logo" />
          </figure>

          <p className="font-gilmer font-bold text-primary-600 text-xl">
            Zobomap
          </p>
        </Hyperlink>

        {isDesktop && (
          <div className="flex w-[238px] justify-around items-center">
            <Hyperlink to="/about">About us</Hyperlink>
            {/* <Hyperlink to="/contact">Publication Hub</Hyperlink> */}
          </div>
        )}
        <div className="flex justify-between items-center w-[175px] md:w-fit">
          <Link to="/profiles/nigeria">
            <Button>Open Zobomap</Button>
          </Link>
          {isMobile && (
            <figure
              onClick={() => setToggle(!toggle)}
              className="z-50 w-[40px] h-[40px] rounded-full bg-neutral-100 flex justify-center items-center"
            >
              <img src={menu} className="w-100%" alt="menu" />
            </figure>
          )}
        </div>
      </Nav>

      {isMobile && (
        <div
          ref={drawer}
          className="absolute z-40 top-0 left-[-100%] w-[65%] h-[100vh]  py-4 flex flex-col bg-neutral-50"
          style={{ boxShadow: "0px 1px 2px #999 ease-in-out" }}
        >
          <Hyperlink to="/about" className="w-full py-4 px-8 mb-4 mt-24">
            About us
          </Hyperlink>
          {/* <Hyperlink to="/contact" className="w-full py-4 px-8">
            Publication Hub
          </Hyperlink> */}
        </div>
      )}
    </section>
  );
}

export default Navbar;
