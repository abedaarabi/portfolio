import { useState, useRef } from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
export default function Contact() {
  const formRef = useRef();
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
  

    emailjs
      .sendForm(
        "service_499hs4t",
        "template_yuz9dah",
        formRef.current,
        "user_K4yiizlZZ0KEaTxpCK9et"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/contact-me.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea rows="5" placeholder="Message" name="message" />
          <button>Submit</button>
          {message && "Thank you..."}
        </form>
      </div>
    </div>
  );
}
