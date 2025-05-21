import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'; // Email sending service
import { FaGithub, FaLinkedin, FaXing } from 'react-icons/fa'; // Social icons
import '../components/css/ContactSection.css'; // Custom styles

/**
 * ContactSection Component
 * Displays a contact form and social media links.
 * Sends email via EmailJS on form submission.
 */
const ContactSection = () => {
  const form = useRef(); // useRef to reference the form DOM element

  // Handle form submission
  const sendEmail = async (e) => {
    e.preventDefault(); // Prevent page reload

    try {
      // Send form data using EmailJS service
      await emailjs.sendForm(
        'service_233jh5t',     // Service ID
        'template_svi7nqa',    // Template ID
        form.current,          // Form reference
        'ojE6t1YZcJZpyEcqa'     // Public API key
      );

      alert('Message sent successfully!');
      form.current.reset(); // Reset form after sending
    } catch (error) {
      alert('Failed to send the message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="contact-title">Contact Me</h2>

        {/* === Contact Form === */}
        <form ref={form} onSubmit={sendEmail} className="row g-4 text-light">
          
          {/* Name Field */}
          <div className="col-md-6">
            <input
              type="text"
              name="user_name"
              className="form-control"
              placeholder="Your Name"
              required
            />
          </div>

          {/* Phone Number Field */}
          <div className="col-md-6">
            <input
              type="tel"
              name="user_phone"
              className="form-control"
              placeholder="Phone Number"
              required
            />
          </div>

          {/* Email Field */}
          <div className="col-md-12">
            <input
              type="email"
              name="user_email"
              className="form-control"
              placeholder="Email Address"
              required
            />
          </div>

          {/* Message Field */}
          <div className="col-md-12">
            <textarea
              name="message"
              className="form-control"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="col-md-12 text-end">
            <button type="submit" className="btn btn-primary px-5">
              Send Message
            </button>
          </div>
        </form>

        {/* === Social Media Links === */}
        <div className="text-center mt-5">
          <div className="d-flex justify-content-center gap-4 mb-3">
            <a
              href="https://github.com/Meycemabd"
              target="_blank"
              rel="noreferrer"
              className="text-light fs-4"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/meycemelabed/"
              target="_blank"
              rel="noreferrer"
              className="text-light fs-4"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.xing.com/profile/Meycem_ElAbed/web_profiles"
              target="_blank"
              rel="noreferrer"
              className="text-light fs-4"
            >
              <FaXing />
            </a>
          </div>

          {/* Footer Text */}
          <p className="text-secondary">© Meycem El Abed 2025</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
