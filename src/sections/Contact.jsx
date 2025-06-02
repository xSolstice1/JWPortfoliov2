import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const MessageHandler = (e) => {
    setFormData({...formData,[e.target.name]: e.target.value})
  }
  return (
    <section className="relative flex items-center c-space section-spacing">
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Contact Me</h2>
          <p className="font-normal text-neutral-400">
            I'm currently looking for new opportunities in the Software
            Engineering field, looking to collaborate? Contact me using the form
            below!
          </p>
        </div>
        <form className="w-full">
          <div className="mb-5">
            <label htmlFor="name" className="field-label"></label>
            <input
              id="name"
              name="name"
              type="text"
              className="field-input field-input-focus"
              placeholder="Enter your name"
              autoComplete="name"
              value={formData.name}
              onChange={MessageHandler}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="email" className="field-label"></label>
            <input
              id="email"
              name="email"
              type="text"
              className="field-input field-input-focus"
              placeholder="Enter your email"
              autoComplete="email"
              value={formData.email}
              onChange={MessageHandler}
              required
            />
          </div>
          <div className="mb-5">
            <label htmlFor="message" className="field-label"></label>
            <textarea
              id="message"
              name="message"
              type="text"
              className="field-input field-input-focus"
              placeholder="Your message here"
              autoComplete="message"
              value={formData.message}
              onChange={MessageHandler}
              required
            />
          </div>
          <button className="w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
