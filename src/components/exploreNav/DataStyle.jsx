import React from "react";
import { useMediaQuery } from "react-responsive";
import downArrow from "../../images/explorenav/arrow-down.svg";
import upArrow from "../../images/explorenav/arrow-up.svg";

export function DataStyle({
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
                <React.Fragment key={index}>
                  {isMobile ? (
                    <div
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
                              ? "bg-eerie text-primary-600"
                              : "text-neutral-400 "
                          } hover:bg-neutral-100 hover:text-primary-600 active:bg-neutral-100 active:text-primary-600 focus:bg-neutral-100 focus:text-primary-600`}
                        >
                          {child}
                        </small>
                      </p>
                    </div>
                  ) : (
                    <div
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
                              ? "bg-eerie text-primary-600"
                              : "text-neutral-400 "
                          } hover:bg-eerie hover:text-primary-600`}
                        >
                          {child}
                        </small>
                      </p>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
