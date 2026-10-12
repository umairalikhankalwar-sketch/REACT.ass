

import "./Contact.css";

function Contact() {
  function handleSubmit(e) {
    e.preventDefault();
    alert("Thank you for contacting Khurshiya Store!");
    e.target.reset();
  }

  return (
    <div className="contact">
      <section className="contact-header">
        <h1>Contact Us</h1>
        <p>We would love to hear from you!</p>
      </section>

      <section className="contact-container">
        <div className="contact-info">
          <h2>Get In Touch</h2>
          <p>Have any questions about our products? Contact us anytime.</p>

          <div className="contact-detail">
            <h3>📧 Email</h3>
            <p>khurshiyastore@gmail.com</p>
          </div>

          <div className="contact-detail">
            <h3>📞 Phone</h3>
            <p>+92 300 1234567</p>
          </div>

          <div className="contact-detail">
            <h3>📍 Location</h3>
            <p>Pakistan</p>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Send Us a Message</h2>

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
            required
          />

          <textarea
            placeholder="Write your message..."
            rows="5"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer className="contact-footer">
        <p>© 2026 Khurshiya Store | All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Contact;