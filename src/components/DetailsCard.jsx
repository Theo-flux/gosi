
function DetailsCard({className, current}) {
    // const current = {
    //     location: "",
    //     population: graphData.data?.[0].total_population.toLocaleString(),
    //     language: graphData.data?.[0].most_spoken_language
    // }
    
    // if(locationLevel.name === "country"){
    //     current.location = "Nigeria";
    // }else if(locationLevel.name === "state"){
    //     current.location = graphData.originalArgs?.state
    // }else{
    //     current.location = `${graphData.originalArgs?.state}, ${graphData.originalArgs?.lga}` 
    // }

    return (
        <section className={`${className} rounded-lg overflow-hidden bg-white md:bg-neutral-100`} style={{boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)"}}>

            <div className="hidden md:flex justify-center items-center bg-white py-2 px-4">
                {/* <div></div> */}
                <p className="text-primary-600 font-bold">Details</p>
                {/* <i className="ri-close-line"></i> */}
            </div>

            <div className="font-gilmer p-2 md:p-4">
                <div className="mb-2 md:mb-4">
                    <small className="text-xs text-neutral-500 md:font-medium md:hidden">Location</small>
                    <p className="text-sm md:text-lg font-bold">{current.location}</p>
                </div>

                <div className="flex font-gilmer justify-between items-center">
                    <span className="">
                        <small className="text-xs text-neutral-500 md:font-medium md:text-xs">Population</small>
                        <p className="text-sm md:text-md font-bold">{current.population || `0`}</p>
                    </span>

                    <span className="">
                        <small className="text-xs text-neutral-500 md:font-medium md:text-xs">Languge</small>
                        <p className="text-sm md:text-md font-bold">{current.language || `language`}</p>
                    </span>
                </div>
            </div>

            {/* <div className="hidden md:flex justify-between items-center bg-white py-2 px-4  ">
                <i className="text-neutral-500 ri-drag-move-2-line"></i>
            </div> */}

        </section>
    );
}


export default  DetailsCard;
