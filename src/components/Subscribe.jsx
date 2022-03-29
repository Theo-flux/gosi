const Field = ({className}) => {
    return(
        <div className={`bg-white overflow-hidden rounded-lg max-w-[287px] flex justify-between items-center ${className}`}>
            <input
                className="outline-0 p-4 h-full font-gilmer" 
                placeholder="Email address"
            />
            <button className="bg-primary-600 p-4 overflow-hidden justify-self-end">
                <i className="text-white ri-arrow-right-line font-bold text-xl"></i>
            </button>
        </div>
    );
}

function Subscribe(){
    return(
        <div className="bg-primary-100 rounded-xl p-8 max-w-[382px]">
            <div className="font-gilmer">
                <p className="text-lg text-primary-900 font-gilmer font-bold mb-4">Subscribe</p>
                <Field className="mb-4"/>
                <p className="text-xs font-bold text-neutral-700 max-w-[287px] leading-loose">
                    Hello, we are Zobomap. Our goal is to translate the positive effects from 
                    revolutionizing how companies engage with their clients & their team.
                </p>
            </div>
        </div>
    );
}

export default Subscribe;
