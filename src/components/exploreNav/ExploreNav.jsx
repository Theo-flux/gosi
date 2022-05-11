import { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { Hyperlink } from "../../shared";
import zoboLogo from "../../images/zobomap-icon.svg";
import downArrow from "../../images/explorenav/arrow-down.svg";
import upArrow from "../../images/explorenav/arrow-up.svg";
import { data, help, socials } from "./sidebarcontent";
import { App } from "../../context/applicationContext";
import ExtrasOnMobile from "../../container/ExtrasOnMobile";
import Search from "../Search";

function DataStyle({
  item,
  index,
  openChild,
  handleChild,
  openGrandChild,
  handleGrandChild,
  showChart,
  handleShowchart,
  graphData,
  setShowChart,
  handleActiveSidebar,
  handlePresentSidebarData,
}) {
  const { parent, icon, children } = item;
  const isMobile = useMediaQuery({ maxWidth: 767 });

  function handleSidebarShowChart(arg) {
    if (openChild === index) {
      return setShowChart(null);
    }
    setShowChart(true);
  }

  return (
    <div className={`mb-2 font-gilmer`}>
      <div
        onClick={() => {
          handleSidebarShowChart(index);
          handleChild(index);
          handlePresentSidebarData(parent, children);
        }}
        className={`${
          openChild === index && "bg-eerie"
        } cursor-pointer py-[12px] px-8 flex justify-between items-center hover:bg-eerie active:bg-eerie focus:bg-eerie`}
      >
        <div className={`flex justify-between items-center`}>
          <figure className="mr-1">
            <img
              className="w-[100%]"
              src={openChild === index ? icon[1] : icon[0]}
              alt={`${parent}-icon`}
            />
          </figure>
          <p
            className={`${
              openChild === index ? "text-white" : "text-neutral-400"
            } text-xs font-medium md:text-xs`}
          >
            {parent}
          </p>
        </div>

        <figure>
          <img src={openChild === index ? upArrow : downArrow} alt="arrow" />
        </figure>
      </div>

      {openChild === index && (
        <div className={`w-full transition-all duration-300 ml-[2em] mb-4`}>
          <div className={``}>
            {children.map((child, index) => {
              return (
                <>
                  {isMobile ? (
                    <div
                      key={index}
                      className="border-l border-b w-[100px] border-[#989CA5]"
                    >
                      <p className="bg-neutral-50 relative mx-4 top-[25px] w-[180px] left-0 mb-2">
                        <small
                          onClick={() => {
                            handleActiveSidebar(`${parent} / ${child}`);
                            handleGrandChild(index);
                            handleShowchart();
                          }}
                          className={`cursor-pointer text-xs rounded-md py-2 px-4 flex w-[190px] ${
                            openGrandChild === index
                              ? "bg-neutral-100 text-primary-600"
                              : "text-neutral-400 "
                          } hover:bg-neutral-100 hover:text-primary-600 active:bg-neutral-100 active:text-primary-600 focus:bg-neutral-100 focus:text-primary-600`}
                        >
                          {child}
                        </small>
                      </p>
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="border-l border-b w-[100px] border-[#989CA5]"
                    >
                      <p className="bg-neutral-50 relative mx-4 top-[25px] w-[180px] left-0 mb-2">
                        <small
                          onClick={() => {
                            handleActiveSidebar(`${parent} / ${child}`);
                            handleGrandChild(index);
                          }}
                          className={`cursor-pointer text-xs rounded-md py-2 px-4 flex w-[190px] ${
                            openGrandChild === index
                              ? "bg-neutral-100 text-primary-600"
                              : "text-neutral-400 "
                          } hover:bg-neutral-100 hover:text-primary-600`}
                        >
                          {child}
                        </small>
                      </p>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function ExploreNav({ className, handleShowchart, locationLevel }) {
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

  const [stateLocation, setStateLocation] = useState("")
  const [lgaLocation, setLgaLocation] = useState("")

  useEffect(() => {
    if (locationLevel.name == "state"){
        setStateLocation(graphData.originalArgs?.state)
        setLgaLocation("")
    }

    if (locationLevel.name == "lga"){
      setLgaLocation(graphData.originalArgs?.lga)
    }
  })

  return (
    <section className={className}>
      <div className="py-4 md:py-[.7em] mx-auto w-11/12">
        <nav className="flex justify-between items-center">
          <Hyperlink
            to="/"
            className="flex z-[405] justify-between items-center cursor-pointer w-[137px] md:z-[402]"
          >
            <figure>
              <img src={zoboLogo} className="w-100%" alt="zobo-logo" />
            </figure>

            <p className="font-gilmer  font-bold text-primary-600 text-xl">
              Zobomap
            </p>
          </Hyperlink>
          <ExtrasOnMobile className=" md:hidden" />

          <div className="hidden md:flex items-center justify-end xl:w-[80%]">
            <span className="hidden absolute left-[276px] xl:flex justify-between items-center">
              <span className={`${locationLevel.name == 'country' ? "text-primary-900" : "text-neutral-400" } font-gilmer font-medium text-sm`}>Nigeria</span>
              {
                stateLocation && <p className={`${locationLevel.name == "state" ? "text-primary-900" : "text-neutral-400"} font-gilmer font-medium text-sm flex justify-between items-center`}><i className="text-xl ri-arrow-right-s-line"></i> {stateLocation}</p>
              }
              {
                lgaLocation && <p className={`${locationLevel.name == "lga" ? "text-primary-900" : "text-neutral-400"} font-gilmer font-medium text-sm flex justify-between items-center`}><i className="text-xl ri-arrow-right-s-line"></i> {lgaLocation}</p>
              }
            </span>
            <div className="lg:hidden"></div>

            {/* <div className="px-2 rounded-md overflow-hidden bg-neutral-100 flex justify-between items-center w-[350px]">
              <i className="text-xl font-medium mr-2 text-neutral-400 ri-search-2-line"></i>
              <input
                className="py-2 text-sm outline-0 w-full bg-neutral-100"
                placeholder="Search for a location e.g Lagos"
              />
            </div> */}
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
          <div className="py-[2.1em] md:p-4 border-b border-b-[#EAEAEA]">
            <Hyperlink
              to="/"
              className="hidden md:flex justify-between items-center cursor-pointer w-[137px]"
            >
              <figure>
                <img src={zoboLogo} className="w-100%" alt="zobo-logo" />
              </figure>

              <p className="font-gilmer  font-bold text-primary-600 text-xl">
                Zobomap
              </p>
            </Hyperlink>
          </div>

          <div className="h-[calc(100vh-95px)]">
            <div className="overflow-x-hidden py-2 h-[90%]">
              {data.map((item, index) => {
                return (
                  <DataStyle
                    key={item.id}
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
                      className="cursor-pointer flex rounded-full justify-center items-center h-[32px] w-[32px] bg-neutral-100 mr-4"
                    >
                      <a href={handle.url} className={`text-primary-600 ${handle.icon}`}></a>
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
          } transition-all duration-200 absolute top-0  w-full h-[100vh] md:hidden`}
        ></div>
      </div>
    </section>
  );
}

export default ExploreNav;
