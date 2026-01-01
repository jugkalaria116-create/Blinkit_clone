import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contact-page">
      {/* Header */}
      <div className="contact-header">
        <p>Home • Contact Us</p>
        <h1>Contact Us</h1>
      </div>

      {/* Content */}
      <div className="contact-container">
        {/* Left Info */}
        <div className="contact-info">
          <h2>Get in Touch</h2>
          <p>
            Have questions or need support? We’d love to hear from you.
            Fill out the form and our team will get back to you shortly.
          </p>

          <ul>
            <li><b>📍 Address:</b> Surat, Gujarat, India</li>
            <li><b>📞 Phone:</b> +91 90000 00000</li>
            <li><b>✉ Email:</b> support@tastydaily.com</li>
          </ul>
        </div>

        {/* Right Form */}
        <div className="contact-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              placeholder="Subject"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              required
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
