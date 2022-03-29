import React from "react";

function Search(){
    return(
        <div className="bg-white overflow-hidden rounded-lg py-2 px-2 max-w-[656px] mx-auto flex justify-between items-center" style={{boxShadow: '0px 2px 19px rgba(139, 153, 148, 0.1)'}}>
            <div className="w-[80%] py-4 px-2 bg-inherit flex items-center">
                <i className="text-xl font-medium mr-2 text-neutral-400 ri-search-2-line"></i>
                <input
                    className="outline-0 bg-inherit w-full"
                    placeholder="Search for a location e.g lagos"
                />
            </div>
            <button className="bg-primary-600 text-white rounded-md py-4 px-8">
                Search
            </button>
        </div>
    );
}

export default Search;