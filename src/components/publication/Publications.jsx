import { Section, Div, SubTitle, SmallText } from "../../shared";

import pubImage1 from "../../images/home/publication_1.png";
import pubImage2 from "../../images/home/publication_2.png";
import pubImage3 from "../../images/home/publication_3.png";
import frame from "../../images/publication/frame.png";

const title = "Marakwet locals intercept lorry ferrying 30 donkeys as demand for meat rises.";
const data = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus eget nisl feugiat sed. Eu odio amet ut imperdiet molestie pulvinar. Egestas non tellus porta adipiscing facilisi iaculis.";
const date = "19th March 2022";

const pubs = [
  {
    id: "1",
    title: title,
    data: data,
    date: date,
    image: pubImage3
  },

  {
    id: "2",
    title: title,
    data: data,
    date: date,
    image: pubImage1
  },

  {
    id: "3",
    title: title,
    data: data,
    date: date,
    image: pubImage2
  },

  {
    id: "4",
    title: title,
    data: data,
    date: date,
    image: pubImage1
  },

  {
    id: "5",
    title: title,
    data: data,
    date: date,
    image: pubImage2
  }
];

const PubCard = ({pub}) => {
  const {title, data, date, image} = pub;

  return(
    <div className="group cursor-pointer flex flex-col-reverse md:flex-row gap-x-4 justify-between items-start mb-16 last:mb-0">

      <div className="font-gilmer mt-8 md:w-[400px] md:mt-0 lg:w-[500px]">
        <h3 className="text-primary-900 text-3xl font-medium group-hover:text-primary-600">{title}</h3>
        <p className="my-4">{data}</p>
        <p className="text-primary-900 text-xs font-bold">{date}</p>
      </div>

      <fig className="rounded-md overflow-hidden">
        <img className="w-[100%] scale-100 transition-all duration-300 group-hover:scale-125" style={{objectFit: "cover"}}  src={image} alt="pub"/>
      </fig>
      
    </div>
  );
}

function Publications() {
  return (
    <Section className="bg-white">
      <Div className="">
        <div className="w-full m-auto lg:w-[75%]">
          {
            pubs.map((pub, index) => {
              return(
                <PubCard key={index} pub={pub}/>
              )
            })
          }
        </div>
      </Div>
    </Section>
  );
}

export default Publications;

