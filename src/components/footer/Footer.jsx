import React from "react";
import { Section, Div, Hyperlink, SubTitle } from "../../shared";
import zoboLogo from "../../images/zobomap-icon.svg";
import dti from "../../images/footer/dti-logo.png";
import gjid from "../../images/footer/gjid-logo.png";
import Subscribe from "../Subscribe";

function Footer() {
  return (
    <Section className="bg-primary-50">
      <Div className="w-11/12">
        <div className="py-[2.3em]">
          <div className="flex flex-col lg:flex-row justify-between items-start mb-8">
            <div className="flex justify-between items-start mb-8 w-full lg:w-[50%]">
              <div>
                <Hyperlink
                  to="/"
                  className="z-50 flex justify-between items-center cursor-pointer w-[137px] mb-8"
                >
                  <figure>
                    <img src={zoboLogo} className="w-100%" alt="zobo-logo" />
                  </figure>

                  <p className="font-gilmer font-bold text-primary-600 text-xl">
                    Zobomap
                  </p>
                </Hyperlink>

                <div className="flex flex-col justify-start items-start w-fit md:flex-row justify-between items-center w-[209px]">
                  <a className="mb-4 self-start md:mb-0 mr-4">
                    <figure>
                      <img src={gjid} className="w-100%" alt="gjid-logo" />
                    </figure>
                  </a>

                  <a
                    href="https://www.datatrendsintelligence.com"
                    className="self-start"
                  >
                    <figure>
                      <img src={dti} className="w-100%" alt="dti-logo" />
                    </figure>
                  </a>
                </div>
              </div>

              <div>
                <SubTitle className="text-[#0A142F] font-semibold font-gilmer mb-8">
                  Quicklinks
                </SubTitle>
                <div className="flex flex-col justify-start items-start">
                  <Hyperlink to="/about" className="mb-4">
                    About us
                  </Hyperlink>
                  {/* <Hyperlink to="/contact">Publication Hub</Hyperlink> */}
                </div>
              </div>
            </div>

            <Subscribe />
          </div>

          <div className="flex justify-end items-start pt-4 border-t-[1px] border-neutral-400">
            {/* <div className="flex flex-col justify-start items-start md:flex-row justify-between items-center md:w-[261px]">
                            <p className="mb-8 text-sm text-primary-900 font-gilmer font-bold md:mb-0">Terms</p>
                            <p className="mb-8 text-sm text-primary-900 font-gilmer font-bold md:mb-0">Privacy</p>
                            <p className="text-sm text-primary-900 font-gilmer font-bold">Cookies</p>
                        </div> */}

            <div className="flex justify-between items-center w-[110px] md:w-[102px]">
              <a
                href="https://www.facebook.com/DTInigeria/"
                className="w-[40px] h-[40px] border-[1px] border-neutral-400 rounded-full flex justify-center items-center"
              >
                <i className="ri-facebook-fill text-primary-600"></i>
              </a>
              <a
                href="https://twitter.com/dtiGlobal"
                className="w-[40px] h-[40px] border-[1px] border-neutral-400 rounded-full flex justify-center items-center"
              >
                <i className="ri-twitter-fill text-primary-600"></i>
              </a>
            </div>
          </div>
        </div>
      </Div>
    </Section>
  );
}

export default Footer;
