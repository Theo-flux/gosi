import { useState } from "react";
import { contactUsApi } from "../../api/userApi";
import train from "../../images/about/train.png";
import { Section, Div } from "../../shared";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = await contactUsApi({
      Name: name,
      EmailAddress: email,
      Message: message,
    });
    if (msg === "successful") {
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => setSuccess(false), 3000);
    }
  };

  return (
    <Section className="">
      <Div>
        <div className="md:flex justify-between gap-x-8 items-start">
          <div
            className="flex flex-col w-full md:max-w-[400px] lg:max-w-[500px]"
            name="simple-contact-form"
          >
            <fieldset className="flex flex-col font-gilmer">
              <label
                htmlFor="name"
                className="mb-2 text-xs text-black font-bold"
              >
                Name
              </label>
              <input
                className="mb-8 bg-neutral-50 p-4 rounded focus:outline-2 outline-neutral-400"
                id="name"
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
                placeholder="name"
              />

              <label
                htmlFor="email"
                className="mb-2 text-xs text-black font-bold"
              >
                Email
              </label>
              <input
                className="mb-8 bg-neutral-50 p-4 rounded focus:outline-2 outline-neutral-400"
                id="email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                placeholder="Email address"
              />

              <label
                htmlFor="message"
                className="mb-2 text-xs text-black font-bold"
              >
                Message
              </label>
              <textarea
                rows="5"
                className="mb-8 bg-neutral-50 p-4 rounded focus:outline-2 outline-neutral-400"
                id="message"
                type="text"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                placeholder="message"
              />
            </fieldset>
            <input
              className="cursor-pointer bg-primary-600 text-white font-gilmer p-4 rounded transition-all duration-300 hover:bg-white hover:text-primary-600 hover:ring-2 hover:ring-primary-600 focus:outline-2 outline-primary-400 "
              type="submit"
              value="Contact us"
              onClick={handleSubmit}
            />
            <p
              className={
                success ? "mt-2 text-center text-success-500" : "hidden"
              }
            >
              Your message was delivered
            </p>
          </div>

          <figure className="hidden md:block">
            <img
              src={train}
              className="w-[100%] md:w-[658px] object-fit"
              alt="contact-image"
            />
          </figure>
        </div>
      </Div>
    </Section>
  );
}

export default Contact;
