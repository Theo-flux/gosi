import {useState, useContext} from "react";
import { Hyperlink } from "../../shared";
import zoboLogo from "../../images/zobomap-icon.svg";
import menu from "../../images/menu.svg";
import downArrow from "../../images/explorenav/arrow-down.png";
import upArrow from "../../images/explorenav/arrow-up.png";
import {data, help, socials} from "./sidebarcontent";
import {App} from "../../context/applicationContext";

const DataStyle = ({item, index, openChild, handleChild}) => {
    const {parent, icon, children} = item;

    return(
        <div className={`mb-2 font-gilmer group`}>
            <div onClick={() => handleChild(index)} className={`${openChild === index && "bg-primary-100 border-r border-primary-600"} cursor-pointer py-2 px-8 flex justify-between items-center hover:bg-primary-100 hover:border-r hover:border-primary-600 active:bg-primary-100 active:border-r active:border-primary-600 focus:bg-primary-100 focus:border-r focus:border-primary-600`}>
                <div className={`flex justify-between items-center`}>
                    <figure className="mr-2">
                        <img src={openChild === index ? icon[1]:icon[0]} alt={`${parent}-icon`}/>
                    </figure>
                    <p className={`${openChild === index ? "text-primary-600" : "text-neutral-400"} text-sm font-medium`}>{parent}</p>
                </div>

                <figure>
                    <img src={openChild === index ? upArrow : downArrow} alt="arrow"/>
                </figure>
            </div>

            {
                openChild === index && 
                    <div className="transition-all duration-300 ml-[2em] mb-4">
                        {children.map((child) => {
                            return(
                                
                                <div className="border-l border-b w-[100px] border-[#989CA5]">
                                    <p className="bg-neutral-50 relative mx-4 top-[25px] w-[180px] left-0 mb-2"><small className="cursor-pointer text-neutral-400 text-xs rounded-md py-2 px-4 flex w-[190px] hover:bg-neutral-100 hover:text-primary-600 active:bg-neutral-100 active:text-primary-600 focus:bg-neutral-100 focus:text-primary-600">{child}</small></p>
                                </div>
                                
                            )
                        })}
                    </div>    
            }
        </div>
    );
}

function ExploreNav({className}) {
    const {showSidebar} = useContext(App);
    const [openChild, setChild] = useState(false);
    
    function handleChild(arg){
        if(openChild === arg){
            return setChild(null)
        }
        setChild(arg)
    }

    return (
        <section className={className}>
            <div className="py-4 mx-auto w-11/12">
                <nav className="flex justify-between items-center">
                    <Hyperlink
                        to="/"
                        className="flex z-[500] justify-between items-center cursor-pointer w-[137px]"
                    >
                        <figure>
                            <img src={zoboLogo} className="w-100%" alt="zobo-logo" />
                        </figure>
                    
                        <p className="font-gilmer  font-bold text-primary-600 text-xl">
                            Zobomap
                        </p>
                    </Hyperlink>

                    <div className="hidden md:flex justify-between items-center w-[80%]">
                        <span className="hidden lg:block">
                            {/* Breadcrumbs to be completed later */}
                            <small className="text-primary-900 font-medium text-sm font-gilmer">Nigeria</small> 
                        </span>
                        <div className="lg:hidden"></div>

                        <div className="px-2 rounded-md overflow-hidden bg-neutral-100 flex justify-between items-center w-[350px]">
                        
                            <i className="text-xl font-medium mr-2 text-neutral-400 ri-search-2-line"></i>
                            <input 
                                className="py-2 text-sm outline-0 w-full bg-neutral-100"
                                placeholder="Search for a location e.g Lagos"
                                
                            />
                            
                        </div>
                    </div>
                </nav>
                <aside className={`fixed ${showSidebar ? "left-0" : "left-[-400px]"} transition-all duration-300 md:z-[402] top-0 md:left-0 bg-neutral-50 w-[260px] h-[100vh]`}>
                    
                    <div className="py-[2.1em] border-b border-b-[#EAEAEA]">
                        {/* <Hyperlink
                            to="/"
                            className="flex justify-between items-center cursor-pointer w-[137px]"
                        >
                            <figure>
                                <img src={zoboLogo} className="w-100%" alt="zobo-logo" />
                            </figure>
                        
                            <p className="font-gilmer  font-bold text-primary-600 text-xl">
                                Zobomap
                            </p>
                        </Hyperlink> */}
                    </div>

                    <div className="overflow-x-hidden py-2 h-[65%] scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300">
                        {
                            data.map((item, index) => {
                                return(
                                    <DataStyle handleChild={handleChild} openChild={openChild} key={item.id} index={index} item={item}/>
                                );
                            })
                        }
                    </div>

                    <div className="px-8">
                        <div className="border-t-[0.1px] border-[#EAEAEA] pt-4 px-2 mb-8">
                            {
                                help.map((el) => {
                                    return(
                                        <div key={el.id} className="cursor-pointer flex text-neutral-400 justify-between w-fit mb-2">
                                            <i className={`text-sm ${el.icon} mr-2`}></i><p className="text-sm text-medium font-gilmer font-medium">{el.name}</p>
                                        </div> 
                                    );
                                })
                            }
                        </div>

                        <div className="px-2 flex justify-between items-center">
                            {
                                socials.map((handle) => {
                                    return(
                                        <span key={handle.id} className="cursor-pointer flex rounded-full justify-center items-center h-[32px] w-[32px] bg-neutral-100">
                                            <i className={`text-primary-600 ${handle.icon}`}></i>
                                        </span>
                                    );
                                })
                            }
                        </div>
                    </div>
                    
                
                </aside>
            </div>
        </section>
    );
}

export default ExploreNav;
