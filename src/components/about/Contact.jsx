import train from "../../images/about/train.png";
import { Section, Div } from "../../shared";

function Contact() {
  return (
    <Section className="">
      <Div>
        <div className="md:flex justify-between gap-x-8 items-start">

          <form className="flex flex-col w-full md:max-w-[400px] lg:max-w-[500px]" name="simple-contact-form" accept-charset="utf-8" method="POST">
            <fieldset className="flex flex-col font-gilmer">
              <label htmlfor="name" className="mb-2 text-xs text-black font-bold">Name</label>
           <input className="mb-8 bg-neutral-50 p-4 rounded focus:outline-2 outline-neutral-400" id="name" type="text" placeholder="name"/>

              <label htmlfor="email" className="mb-2 text-xs text-black font-bold">Email</label>
           <input className="mb-8 bg-neutral-50 p-4 rounded focus:outline-2 outline-neutral-400" id="email" type="email" placeholder="Email address"/>

              <label htmlfor="message" className="mb-2 text-xs text-black font-bold">Message</label>
              <textarea rows="5" className="mb-8 bg-neutral-50 p-4 rounded focus:outline-2 outline-neutral-400" id="message" type="text" placeholder="message"/>

            </fieldset>
            <input className="bg-primary-600 text-white font-gilmer p-4 rounded transition-all duration-300 hover:bg-white hover:text-primary-600 hover:ring-2 hover:ring-primary-600 focus:outline-2 outline-primary-400 " type="submit" value="Contact us"/>
          </form>

          <figure className="hidden md:block">
            <img src={train} className="w-[100%] md:w-[658px] object-fit" alt="contact-image"/>
          </figure>
      
        </div>
      </Div>
    </Section>
  );
}

export default Contact;
