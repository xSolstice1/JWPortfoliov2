import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertType, setAlertType] = useState("Success");
  const [alertMessage, setAlertMessage] = useState("");
  const MessageHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const showAlertMessage = (type, message) => {
    setAlertType(type);
    setAlertMessage(message);
    setShowAlert(true);
    setTimeout(() => {
      setShowAlert(false);
    }, 5000);
  };
  const SubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await emailjs.send(
        "service_xhzg9jo",
        "template_c6dkm2p",
        {
          from_name: formData.name,
          to_name: "Ang Jin Wei",
          from_email: formData.email,
          to_email: "xsolsticegfx@gmail.com",
          message: formData.message,
        },
        "UF6a0Yu_XshukNH86"
      );
      setIsLoading(false);
      showAlertMessage("Success", "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setIsLoading(false);
      showAlertMessage(
        "danger",
        "Ooops, something went wrong, please try again!"
      );
      console.log(error);
      alert("Failed");
    }
  };
  return (
    <section className="relative flex items-center c-space section-spacing">
      {showAlert && <Alert type={alertType} text={alertMessage} />}
      <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border-white/10 rounded-2xl bg-primary">
        <div className="flex flex-col items-start w-full gap-5 mb-10">
          <h2 className="text-heading">Contact Me</h2>
          <p className="font-normal text-neutral-400">
            I'm currently looking for new opportunities in the Software
            Engineering field, looking to collaborate? Contact me using the form
            below!
          </p>
        </div>
        <form className="w-full" onSubmit={SubmitHandler}>
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
            {!isLoading ? "Submit" : "Submitting"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
