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
          onClick={() => setToggle(false)}
          to="/"
          className="z-50 flex justify-between items-center cursor-pointer"
        >
          <figure>
            <img src={zoboLogo} className="w-[80%]" alt="zobo-logo" />
          </figure>

          {/* <p className="font-gilmer font-semibold text-primary-600 text-[17px] md:text-xl">
            Zobomap
          </p> */}
        </Hyperlink>

        {isDesktop && (
          <div className="flex w-[238px] justify-around items-center">
            <Hyperlink to="/about">About us</Hyperlink>
            {/* <Hyperlink to="/contact">Publication Hub</Hyperlink> */}
          </div>
        )}
        <div className="flex justify-between items-center md:w-fit">
          <Link to="/profiles/nigeria">
            <Button>Open Gosi</Button>
          </Link>
          {isMobile && (
            <figure
              onClick={() => setToggle(!toggle)}
              className="ml-4 w-[40px] h-[40px] rounded-full bg-neutral-100 flex justify-center items-center"
            >
              <img src={menu} className="w-100%" alt="menu" />
            </figure>
          )}
        </div>
      </Nav>

      {isMobile && (
        <div>
          <div
            ref={drawer}
            className="absolute z-40 top-0 left-[-100%] w-[65%] h-[100vh]  py-4 flex flex-col bg-neutral-50"
            style={{ boxShadow: "0px 1px 2px #999 ease-in-out" }}
          >
            <Hyperlink
              onClick={() => setToggle(!toggle)}
              to="/about"
              className="w-full py-4 px-8 mb-4 mt-24"
            >
              About us
            </Hyperlink>
            {/* <Hyperlink to="/contact" className="w-full py-4 px-8">
            Publication Hub
          </Hyperlink> */}
          </div>
          <div
            onClick={() => setToggle(!toggle)}
            className={`${
              toggle ? "left-0" : "left-[-900px]"
            } transition-all z-30 duration-200 absolute top-0 bg-[#00000050]  w-full h-[100vh] md:hidden`}
          ></div>
        </div>
      )}
    </section>
  );
}

export default Navbar;
