
function CountryContainer({className, countryData}) {
    const {total_population, size} = countryData;

    return (
        <section className={`${className} rounded-lg overflow-hidden bg-white md:bg-neutral-100`} style={{boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)"}}>

            <div className="hidden md:flex justify-between items-center bg-white py-2 px-4">
                <div></div>
                <p className="text-primary-600 font-bold">Details</p>
                <i className="ri-close-line"></i>
            </div>

            <div className="font-gilmer p-2 md:p-4">
                <div className="mb-2 md:mb-4">
                    <small className="text-xs text-neutral-500 md:font-bold md:hidden">Location</small>
                    <p className=" md:text-xl font-bold">Nigeria</p>
                </div>

                <div className="flex font-gilmer justify-between items-center">
                    <span className="">
                        <small className="text-xs text-neutral-500 md:font-bold md:text-sm">Population</small>
                        <p className="text-md font-bold">{total_population.toLocaleString()}</p>
                    </span>

                    <span className="">
                        <small className="text-xs text-neutral-500 md:font-bold md:text-sm">Size</small>
                        <p className="text-md font-bold">{size}</p>
                    </span>
                </div>
            </div>

            <div className="hidden md:flex justify-between items-center bg-white py-2 px-4  ">
                <i className="text-neutral-500 ri-drag-move-2-line"></i>
            </div>

        </section>
    );
}


export default  CountryContainer;
