import React from "react";
import { Section, Div, Hyperlink, SubTitle } from "../../shared";
import zoboLogo from "../../images/zobomap-icon.svg";
import dti from "../../images/footer/dti-logo.png";
import gjid from "../../images/footer/gjid-logo.png";

function Footer(){
    return(
        <Section className="bg-primary-50">
            <Div>
                <div className="py-[2.3em]">

                    <div className="flex justify-between items-start mb-8">

                        <div>
                            <Hyperlink to="/" className="z-50 flex justify-between items-center cursor-pointer w-[137px] mb-8">
                                <figure>
                                    <img src={zoboLogo} className="w-100%" alt="zobo-logo"/>
                                </figure>

                                <p className="font-gilmer font-bold text-primary-600 text-xl">Zobomap</p>
                            </Hyperlink>

                            <div className="flex justify-between items-center w-[209px]">
                                <a>
                                    <figure>
                                        <img src={gjid} className="w-100%" alt="gjid-logo"/>
                                    </figure>
                                </a>

                                <a>
                                    <figure>
                                        <img src={dti} className="w-100%" alt="dti-logo"/>
                                    </figure>
                                </a>
                            </div>
                        </div>

                        <div>
                            <SubTitle className="text-[#0A142F] font-bold font-gilmer mb-8">Quicklinks</SubTitle>
                            <div className="flex flex-col justify-start items-start">
                                <Hyperlink to="/about" className="mb-4">About us</Hyperlink>
                                <Hyperlink to="/contact">Publication Hub</Hyperlink>
                            </div>
                        </div>

                        <div>
                            form
                        </div>
                        
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t-[1.8px] border-neutral-400">
                        <div className="flex justify-between items-center md:w-[261px]">
                            <p className="text-sm text-primary-900 font-gilmer font-bold">Terms</p>
                            <p className="text-sm text-primary-900 font-gilmer font-bold">Privacy</p>
                            <p className="text-sm text-primary-900 font-gilmer font-bold">Cookies</p>
                        </div>

                        <div className="flex justify-between items-center md:w-[150px]">
                            <a className="w-[40px] h-[40px] border-[1.8px] border-neutral-400 rounded-full flex justify-center items-center"><i className="ri-linkedin-fill text-primary-600"></i></a>
                            <a className="w-[40px] h-[40px] border-[1.8px] border-neutral-400 rounded-full flex justify-center items-center"><i className="ri-facebook-fill text-primary-600"></i></a>
                            <a className="w-[40px] h-[40px] border-[1.8px] border-neutral-400 rounded-full flex justify-center items-center"><i className="ri-twitter-fill text-primary-600"></i></a>
                        </div>
                    </div>

                </div>
            </Div>
        </Section>
    );
}

export default Footer;