import {useState} from "react";
import { Hyperlink } from "../../shared";
import zoboLogo from "../../images/zobomap-icon.svg";
import menu from "../../images/menu.svg";
import downArrow from "../../images/explorenav/arrow-down.png";
import upArrow from "../../images/explorenav/arrow-up.png";
import {data} from "./sidebarcontent";


const DataStyle = ({item, index, openChild, handleChild}) => {
    const {parent, icon, children} = item;

    return(
        <div onClick={() => handleChild(index)} className={`cursor-pointer font-gilmer py-4 px-8 group ${openChild === index && "bg-primary-100 border-r border-primary-600"} hover:bg-primary-100 hover:border-r hover:border-primary-600 active:bg-primary-100 active:border-r active:border-primary-600 focus:bg-primary-100 focus:border-r focus:border-primary-600`}>
            <div className="flex justify-between items-center">
                <div className="flex justify-between items-center">
                    <figure className="mr-2">
                        <img src={openChild === index ? icon[1]:icon[0]} alt={`${parent}-icon`}/>
                    </figure>
                    <p className={`${openChild === index ? "text-primary-600" : "text-neutral-400"}  font-medium `}>{parent}</p>
                </div>

                <figure>
                    <img src={openChild === index ? upArrow : downArrow} alt="arrow"/>
                </figure>
            </div>
        </div>
    );
}

function ExploreNav({className}) {
    const [openChild, setChild] = useState(false);
    
    function handleChild(arg){
        if(openChild === arg){
            return setChild(null)
        }
        setChild(arg)
    }

    console.log(openChild)
    return (
        <section className={className}>
            <div className="py-4 mx-auto w-11/12">
                <nav className="">
                    <Hyperlink
                        to="/"
                        className="flex justify-between items-center cursor-pointer w-[137px]"
                    >
                        <figure>
                            <img src={zoboLogo} className="w-100%" alt="zobo-logo" />
                        </figure>
                    
                        <p className="font-gilmer  font-bold text-primary-600 text-xl">
                            Zobomap
                        </p>
                    </Hyperlink>
                </nav>
                <aside className="absolute z-[402] top-0 left-0 bg-neutral-50 w-[256px] h-[100vh]">
                    <div className="">
                        <div className="p-4 border-b border-b-[#EAEAEA]">
                            <Hyperlink
                                to="/"
                                className="flex justify-between items-center cursor-pointer w-[137px]"
                            >
                                <figure>
                                    <img src={zoboLogo} className="w-100%" alt="zobo-logo" />
                                </figure>
                            
                                <p className="font-gilmer  font-bold text-primary-600 text-xl">
                                    Zobomap
                                </p>
                            </Hyperlink>
                        </div>

                        <div className="mt-4">
                            {
                                data.map((item, index) => {
                                    return(
                                        <DataStyle handleChild={handleChild} openChild={openChild} key={item.id} index={index} item={item}/>
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
