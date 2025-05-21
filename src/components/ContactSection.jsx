import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope, FaXing, FaMicrophone } from 'react-icons/fa';

const ContactSection = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        'service_233jh5t',
        'template_svi7nqa',
        form.current,
        'ojE6t1YZcJZpyEcqa'
      );
      alert('Message sent successfully!');
      form.current.reset();
    } catch (error) {
      alert('Failed to send the message. Please try again.');
    }
  };

  return (
    <section style={{ backgroundColor: '#0a0f2c', padding: '80px 0' }}>
      <div className="container">
        <h2
          className="fw-bold mb-5"
          style={{
            fontSize: '2.5rem',
            color: '#00FF7F',
            position: 'relative',
            animation: 'slideRight 3s ease-in-out infinite alternate',
          }}
        >
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="row g-4 text-light">
          <div className="col-md-6">
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="col-md-6">
            <input
              type="tel"
              name="user_phone"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </div>

          <div className="col-md-12">
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>

          <div className="col-md-12">
            <textarea
              name="message"
              className="form-control"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <div className="col-md-12 text-end">
            <button type="submit" className="btn btn-success px-5">
              Send Message
            </button>
          </div>
        </form>

        {/* Social Icons + Footer */}
        <div className="text-center mt-5">
          <div className="d-flex justify-content-center gap-4 mb-3">
            <a href="https://github.com/Meycemabd" target="_blank" rel="noreferrer" className="text-light fs-4">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/meycemelabed/" target="_blank" rel="noreferrer" className="text-light fs-4">
              <FaLinkedin />
            </a>
            <a href="https://www.xing.com/profile/Meycem_ElAbed/web_profiles" target="_blank" rel="noreferrer" className="text-light fs-4">
              <FaXing />
            </a>
          </div>
          <p className="text-secondary">© Meycem El Abed 2025</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideRight {
          0% {
            left: 0;
          }
          100% {
            left: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
