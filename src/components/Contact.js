import React from "react";

const Contact = () => {
  return (
    <>
      <section className="showcase">
        <div className="overlay flex flex-col items-center justify-center">
          <div className="bg-green-800 p-10 rounded-2xl">
            <h2 className="text-white font-semibold mb-5 text-center text-xl">
              Contact Phil?!
            </h2>
            <p className="text-white font-semibold mb-5 text-center text-l">
              {" "}
              Reach out at any time ! I'd love to get in touch!
            </p>
            <form name="contact-form" className="flex flex-col w-300">
              <input
                type="input"
                name="contact-name"
                id="contact-name"
                placeholder="Please enter your name."
                required
                className="py-2 px-4 mb-5 rounded border-solid border-green-600 text-green-500 placeholder-green-400 font-semibold"
              ></input>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Please enter your email."
                required
                className="py-2 px-4 mb-5 rounded border-solid border-green-600 text-green-500 placeholder-green-400 font-semibold"
              ></input>
              <textarea
                type="textarea"
                name="textarea"
                id="textarea"
                placeholder="Send me a message!"
                required
                className="py-2 px-4 mb-5 rounded border-solid border-green-600 text-green-500 placeholder-green-400 font-semibold"
              ></textarea>
              <input
                type="submit"
                value="Submit"
                className="bg-green-700 text-white font-bold tracking-wider py-2 rounded cursor-pointer transition-all hover:bg-green-400"
              />
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
