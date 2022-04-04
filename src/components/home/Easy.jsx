import topic from "../../images/home/topic.png";
import data from "../../images/home/data.png";
import places from "../../images/home/places.png";
import { Div, Section, SubTitle, SmallText, Title } from "../../shared";

const easeOfUse = [
    {
        id: "1",
        image: places,
        alt: "places",
        Title: "Finding Places",
        data: `Type in the name or address of a place. 
        Then select the location you are interested in from the dropdown. 
        Alternatively, click on the map area you want to go to. The + and - buttons zoom in an out.`
    },

    {
        id: "2",
        image: topic,
        alt: "topic",
        Title: "Select Topic",
        data: `Type in the name or address of a place. 
        Then select the location you are interested in from the dropdown. 
        Alternatively, click on the map area you want to go to. The + and - buttons zoom in an out.`
    },

    {
        id: "3",
        image: data,
        alt: "data",
        Title: "Exploring Data",
        data: `Type in the name or address of a place. 
        Then select the location you are interested in from the dropdown. 
        Alternatively, click on the map area you want to go to. The + and - buttons zoom in an out.`
    }
];


const EaseOfUseCard = ({easyData}) => {
    const {id, image, alt, Title, data} = easyData
    return(
        <div className="bg-white overflow-hidden rounded-md">
            <figure className="mb-8">
                <img className="w-[100%] rounded-md" src={image} alt={alt} />
            </figure>

            <div className="font-gilmer">
                <div className="mb-4 text-black text-lg font-bold lg:text-xl">
                    <p className="">{Title}</p>
                </div>

                <p className="text-neutral-700 text-sm lg:text-base">{data}</p>
            </div>
        </div>
    );
}


function Easy(){
    return(
        <Section>
            <Div>
                <div>
                    <div className="font-gilmer flex flex-col justify-center items-center mb-16">
                        <SmallText className="">GETTING STARTED</SmallText>
                        <Title className="text-center my-8 w-full md:max-w-[650px]">Using Zobomap is easy</Title>
                        <SubTitle className="text-center md:max-w-[613px]">What looked like a small patch of purple grass, above five feet square, was moving across the sand</SubTitle>
                    </div>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
                        {
                            easeOfUse.map((ease) => {
                                return(
                                    <EaseOfUseCard key={ease.id} easyData={ease} />
                                );
                            })
                        }
                    </div>
                </div>
            </Div>
        </Section>
    );
}

export default Easy;