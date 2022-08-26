import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Hyperlink } from "../../shared";
import zoboLogo from "../../images/zobomap-icon.svg";
import { data, help, socials } from "./sidebarcontent";
import { App } from "../../context/applicationContext";
import { DataStyle } from "./DataStyle";
import ExtrasOnMobile from "../../container/ExtrasOnMobile";
import Search from "../Search";

export default function ExploreNav({
  className,
  handleShowchart,
  locationLevel,
}) {
  const {
    showSidebar,
    handleSidebar,
    graphData,
    handleGraphData,
    showChart,
    setShowChart,
    handleActiveSidebar,
    openChild,
    setChild,
    handleChild,
    openGrandChild,
    setGrandChild,
    handleGrandChild,
    handlePresentSidebarData,
  } = useContext(App);

  const [stateLocation, setStateLocation] = useState("");
  const [lgaLocation, setLgaLocation] = useState("");

  useEffect(() => {
    if (locationLevel.name === "state") {
      setStateLocation(graphData.originalArgs?.state);
      setLgaLocation("");
    }

    if (locationLevel.name === "lga") {
      setLgaLocation(graphData.originalArgs?.lga);
    }
  });

  return (
    <section className={className}>
      <div className="py-2 md:py-3 mx-auto w-11/12">
        <nav className="flex justify-between items-center">
          <Hyperlink
            to="/"
            className="flex z-[405] justify-between items-center cursor-pointer md:z-[402]"
          >
            <figure>
              <img src={zoboLogo} className="w-[80%]" alt="zobo-logo" />
            </figure>

            
          </Hyperlink>
          <ExtrasOnMobile className=" md:hidden" />

          <div className="hidden md:flex items-center justify-end xl:w-[80%]">
            <span className="hidden absolute left-[276px] xl:flex justify-between items-center">
              <span
                className={`${
                  locationLevel.name == "country"
                    ? "text-primary-900"
                    : "text-neutral-400"
                } font-gilmer font-medium text-sm`}
              >
                Nigeria
              </span>
              {stateLocation && (
                <p
                  className={`${
                    locationLevel.name == "state"
                      ? "text-primary-900"
                      : "text-neutral-400"
                  } font-gilmer font-medium text-sm flex justify-between items-center`}
                >
                  <i className="text-xl ri-arrow-right-s-line"></i>{" "}
                  {stateLocation}
                </p>
              )}
              {lgaLocation && (
                <p
                  className={`${
                    locationLevel.name == "lga"
                      ? "text-primary-900"
                      : "text-neutral-400"
                  } font-gilmer font-medium text-sm flex justify-between items-center`}
                >
                  <i className="text-xl ri-arrow-right-s-line"></i>{" "}
                  {lgaLocation}
                </p>
              )}
            </span>
            <div className="lg:hidden"></div>

          
            <span>
              <Search variant="nav" />
            </span>
          </div>
        </nav>

        <aside
          className={`fixed z-[404] ${
            showSidebar ? "left-0" : "left-[-400px]"
          } transition-all duration-300 ease-in-out md:z-[402] top-0 md:left-0 bg-neutral-50 w-[250px] md:w-[250px] h-full`}
        >
          <div className="py-6 mt-5 md:mt-0 md:py-3 px-8 border-b border-[#EAEAEA]">
            <Hyperlink
              to="/"
              className="hidden md:flex justify-between items-center cursor-pointer"
            >
              <figure>
                <img src={zoboLogo} className="w-[80%]" alt="zobo-logo" />
              </figure>

              {/* <p className="font-gilmer  font-bold text-primary-600 text-xl">
                Zobomap
              </p> */}
            </Hyperlink>
          </div>

          <div className="h-[calc(100vh-95px)]">
            <div className="overflow-x-hidden py-2 h-[90%]">
              {data.map((item, index) => {
                return (
                  <React.Fragment key={index}>
                    <DataStyle
                      index={index}
                      item={item}
                      handleActiveSidebar={handleActiveSidebar}
                      showChart={showChart}
                      setShowChart={setShowChart}
                      graphData={graphData}
                      handleShowchart={handleShowchart}
                      handleChild={handleChild}
                      openChild={openChild}
                      openGrandChild={openGrandChild}
                      handleGrandChild={handleGrandChild}
                      handlePresentSidebarData={handlePresentSidebarData}
                    />
                  </React.Fragment>
                );
              })}
            </div>

            <div className="px-8">
              {/* <div className="border-t-[0.1px] border-[#EAEAEA] pt-4 px-2 mb-8">
                                {
                                    help.map((el) => {
                                        return(
                                            <div key={el.id} className="cursor-pointer flex text-neutral-400 justify-between w-fit mb-2">
                                                <i className={`text-sm ${el.icon} mr-2`}></i><p className="text-sm text-medium font-gilmer font-medium">{el.name}</p>
                                            </div> 
                                        );
                                    })
                                }
                            </div> */}

              <div className="px-2 flex">
                {socials.map((handle) => {
                  return (
                    <span
                      key={handle.id}
                      className="cursor-pointer flex rounded-full justify-center items-center h-[32px] w-[32px] bg-eerie mr-4"
                    >
                      <a
                        href={handle.url}
                        className={`text-primary-600 ${handle.icon}`}
                      ></a>
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </aside>

        <div
          onClick={() => handleSidebar()}
          className={`${
            showSidebar ? "left-0" : "left-[-400px]"
          } transition-all duration-200 absolute top-0 bg-[#00000050]  w-full h-[100vh] md:hidden`}
        ></div>
      </div>
    </section>
  );
}
