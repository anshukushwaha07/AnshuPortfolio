import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactModal = ({ isOpen, onClose }) => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  if (!isOpen) return null;

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Get the current time in India Standard Time (IST)
    const currentTime = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
    });
    form.current.time.value = currentTime;

    // Replace with your EmailJS credentials

    const templateID = import.meta.env.VITE_TEMPLATE_ID;
    const serviceID = import.meta.env.VITE_SERVICE_ID;
    const publicKey = import.meta.env.VITE_PUBLIC_KEY;

    console.log("templateID:", templateID);
    console.log("serviceID:", serviceID);
    console.log("publicKey:", publicKey);

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      (result) => {
        console.log(result.text);
        setIsSent(true);
        setIsSubmitting(false);
        setTimeout(() => {
          onClose();
          setIsSent(false);
        }, 3000);
      },
      (error) => {
        console.log(error.text);
        alert("Failed to send message. Please try again.");
        setIsSubmitting(false);
      }
    );
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl p-8 w-full max-w-lg relative z-50"
        onClick={(e) => e.stopPropagation()}
      >
        {isSent ? (
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p>
              Your message has been sent successfully. I'll get back to you
              soon.
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center">
              Connect with me
            </h2>
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-md"
              />
              <input
                type="text"
                name="topic"
                placeholder="Topic / Subject"
                required
                className="w-full p-3 border rounded-md"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full p-3 border rounded-md"
              ></textarea>
              <input type="hidden" name="time" />
              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-[182px] h-[40px] bg-[#0F0E0E] rounded-[30px] text-white font-normal flex items-center justify-center disabled:bg-gray-400"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </>
        )}

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-light text-gray-500"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default ContactModal;
