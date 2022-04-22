import { useState } from "react";
import { subscribeApi } from "../api/userApi";

const Field = ({ className }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleClick = async () => {
    const msg = await subscribeApi(email);
    if (msg === "successful") {
      setSuccess(true);
      setEmail("");
      setTimeout(() => setSuccess(false), 5000);
    }
    if (msg) {
      setError(msg);
      setTimeout(() => setError(null), 5000);
    }
  };

  return (
    <>
      <p
        className={
          success
            ? "mb-1 text-left text-sm text-success-800"
            : error
            ? "mb-1 text-left text-sm text-danger-800"
            : "hidden"
        }
      >
        {error || "Subscription Sucessful!"}
      </p>
      <div
        className={`bg-white overflow-hidden rounded-lg w-full flex justify-between items-center ${className}`}
      >
        <input
          className="outline-0 p-4 h-full font-gilmer"
          placeholder="Email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button
          className="bg-primary-600 p-4 overflow-hidden justify-self-end"
          onClick={handleClick}
        >
          <i className="text-white ri-arrow-right-line font-bold text-xl"></i>
        </button>
      </div>
    </>
  );
};

function Subscribe({ className }) {
  return (
    <div
      className={`bg-primary-100 ${className} rounded-md w-[100%] md:w-[360px]`}
    >
      <div className="font-gilmer mx-auto p-8 lg:p-12">
        <p className="text-lg text-primary-900 font-gilmer font-semibold mb-8">
          Subscribe
        </p>
        <Field className="mb-8" />
        <p className="text-xs font-semibold text-neutral-700 leading-loose">
          Hello, we are Zobomap. Our goal is to translate the positive effects
          from revolutionizing how companies engage with their clients & their
          team.
        </p>
      </div>
    </div>
  );
}

export default Subscribe;
