import {useContext} from "react";
import {App} from "../context/applicationContext";

function ExtrasOnMobile({className}) {
  const {handleSidebar} = useContext(App);

  return (
    <div className={`${className} flex justify-between items-center w-[85px]`}>
        <span className="flex justify-center items-center h-[36px] w-[36px] rounded-full bg-[#00000080]">
            <i class="text-white text-lg ri-search-2-line"></i>
        </span>

        <span onClick={() => handleSidebar()} className="flex justify-center items-center h-[36px] w-[36px] rounded-full bg-[#00000080]">
            <i class="text-white text-lg ri-menu-line"></i>
        </span>
    </div>
  );
}

export default ExtrasOnMobile;
