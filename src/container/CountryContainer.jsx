
function CountryContainer({className, countryData}) {
    const {total_population, size} = countryData;

    return (
        <section className={`${className} rounded-md overflow-hidden bg-neutral-100`} style={{boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.1)"}}>

            <div className="bg-white py-2 px-4 flex justify-between items-center">
                <div></div>
                <p className="text-primary-600 font-bold">Details</p>
                <i className="ri-close-line"></i>
            </div>

            <div className="font-gilmer p-4">
                <div className="mb-8">
                    <p className="text-xl font-bold">Nigeria</p>
                </div>

                <div className="flex font-gilmer justify-between items-center">
                    <span className="">
                        <small className="font-bold text-neutral-500">Population</small>
                        <p className="text-md font-bold">{total_population.toLocaleString()}</p>
                    </span>

                    <span className="">
                        <small className="font-bold text-neutral-500">Size</small>
                        <p className="text-md font-bold">{size}</p>
                    </span>
                </div>
            </div>

            <div className="bg-white py-2 px-4  flex justify-between items-center">
                <i className="text-neutral-500 ri-drag-move-2-line"></i>
            </div>

        </section>
    );
}


export default  CountryContainer;
