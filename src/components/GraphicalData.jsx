import ApexCharts from "apexcharts";

function GraphicalData({className}){
    return(
        <div className={`${className} px-4 py-8 w-[280px] lg:w-[620px] font-gilmer`}>
            <div className="pb-4 flex justify-between items-center border-b border-dashed border-neutral-400">
                <span className="text-sm">Election / 2015 General Election</span>

                <div className="flex justify-between items-center w-[150px] md:w-[205px] ">
                    <span className="group cursor-pointer flex justify-between items-center rounded-md py-2 px-4 bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white"><i className="ri-share-fill md:mr-2"></i><p className="hidden lg:block font-medium">Share</p></span>
                    <span className="group cursor-pointer flex justify-between items-center rounded-md py-2 px-4 bg-neutral-100 text-primary-600 hover:bg-primary-600 hover:text-white"><i className="ri-download-fill md:mr-2"></i><p className="hidden lg:block font-medium">Print</p></span>
                </div>
            </div>

            <div className="pt-4 overflow-x-hidden">
                <div className="hidden lg:flex justify-between items-center w-[85%]">
                    <div className="bg-primary-100 text-primary-900 p-4 rounded-md">
                        <p className="text-2xl font-bold">192,190</p>
                        <small className="text-xs font-medium">Number of Registered Voters</small>    
                    </div>

                    <div className="bg-primary-100 text-primary-900 p-4 rounded-md">
                        <p className="text-2xl font-bold">69.7%</p>
                        <small className="text-xs font-medium">% of Registered Voters who cast their vote</small>
                    </div>
                </div>

                <div className="pt-4 flex justify-between items-center">
                    <p className="text-md font-bold">Voters by Party</p>
                    <i className="text-2xl ri-arrow-down-s-fill"></i>
                </div>
            </div>

        </div>
    );
}

export default GraphicalData;

