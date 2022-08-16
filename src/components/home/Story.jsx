
import { Link } from "react-router-dom";
import { Section, Div, Title, SubTitle, SmallText, ButtonWithIcon } from "../../shared";

const stories = [
    {
        id: "1",
        icon: "ri-file-3-fill",
        bg: "bg-primary-50",
        title: "Explore the Data",
        data: "Visualize data about Nigeria, it's states and local goverments."
    },

    {
        id: "2",
        icon: "ri-search-fill",
        bg: "bg-neutral-50",
        title: "Interactive map search",
        data: "Find places you know about easier with our search autocomplete feature."
    },

    {
        id: "3",
        icon: "ri-bar-chart-2-fill",
        bg: "bg-neutral-50",
        title: "Advanced filter",
        data: "Gosi provides granular data for Nigeria, up to the local government level."
    },

    {
        id: "4",
        icon: "ri-pie-chart-2-fill",
        bg: "bg-primary-50",
        title: "Context",
        data: "Understand the context through our visualizations and data points."
    }
];


const StoryCard = ({storyData}) => {
    const {icon, bg, title, data} = storyData;

    return(
        <div className={`${bg} rounded-xl`}>
            <div className="p-4 font-gilmer">
                <span className="flex justify-center items-center bg-black rounded-full w-[48px] h-[48px]"><i className={`text-primary-600 text-xl ${icon}`}></i></span>
                <p className="my-4 font-bold text-black md:text-xl">{title}</p>
                <p className="text-sm text-neutral-700">{data}</p>
            </div>
        </div>
    );
}


function Story(){
    return (
      <Section>
        <Div>
          <div className="grid grid-cols-1 grid-rows-[minmax(0,200px)_minmax(0,_1fr)] gap-4 md:grid-cols-2 grid-rows-[minmax(0,200px)_minmax(0,_1fr)] md:gap-8">
            <div className="row-start-1 row-end-2 col-start-1 justify-self-start mb-16 self-center md:col-start-1 md:max-w-[489px]">
              <SmallText className="">OUR EXTENSIVE FEATURES</SmallText>
              <Title className="max-w-[462px] my-4">
                Discover the story behind the data.
              </Title>
              <SubTitle className="">
                Learn about Nigeria, it's states and local goverments through
                the eyes of the data.
              </SubTitle>
            </div>

            <div className="row-start-3 row-end-4 justify-self-start md:row-start-2 md:row-end-3 md:col-start-1 md:justify-self-start self-start">
              <Link to="/profiles/nigeria">
                <ButtonWithIcon className="">
                  Learn More
                  <i className="ml-2 text-lg ri-arrow-right-circle-line"></i>
                </ButtonWithIcon>
              </Link>
            </div>

            <div className="grid grid-cols-1 row-start-2 row-end-3 mb-4 md:grid-cols-2 gap-4 col-start-1 md:col-span-2 md:row-start-1 md:row-span-2">
              {stories.map((story, index) => {
                return <StoryCard key={index} storyData={story} />;
              })}
            </div>
          </div>
        </Div>
      </Section>
    );
}

export default Story;