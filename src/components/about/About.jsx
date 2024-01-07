import React from "react";
import Popup from "reactjs-popup";
import "../../styles/contact.scss";

const Contact = () => {
  return (
    <div className="contact">
      <Popup
        trigger={<button type="button">Send</button>}
        modal
        nested
      >
        {(close) => (
          <div className="popup-content">
            <button className="close" onClick={close}>
              &times;
            </button>
            <form>
              <h2>Contact Us</h2>
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
              <textarea placeholder="Your Message"></textarea>
              <button type="button" onClick={close}>
                Send
              </button>
            </form>
            <div className="formBorder">
              {/* Optionally, you can add an image or other decorative elements */}
            </div>
          </div>
        )}
      </Popup>
    </div>
  );
};

export default Contact;
