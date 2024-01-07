import React, { useState } from "react";
import Popup from "reactjs-popup";
import "../../styles/contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [feedback, setFeedback] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add your logic to handle form submission or API call here

    // After handling the form submission, open the popup
    setPopupOpen(true);
  };

  return (
    <div className="contact">
      <form onSubmit={handleSubmit}>
        <h2>Contact Us</h2>

        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        {/* Email Input */}
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* Feedback Textarea */}
        <textarea
          placeholder="Your Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        ></textarea>

        {/* Popup Trigger Button */}
        <Popup open={popupOpen} onClose={() => setPopupOpen(false)} modal nested>
          {(close) => (
            <div className="popup-content">
              <button className="close" onClick={close}>
                &times;
              </button>
              <h2>Thank You!</h2>
              <p>for contacting us! We will get back to you shortly.</p>
            </div>
          )}
        </Popup>

        {/* Submit Button */}
        <button type="submit">Send</button>
      </form>

      {/* ... other content ... */}
    </div>
  );
};

export default Contact;
