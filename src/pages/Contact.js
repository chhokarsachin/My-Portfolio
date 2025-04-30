

import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, email, message })
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: '', email: '', message: '' });  
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <div>
      <section className="text-center py-5 bg-light">
        <h1 className="display-4 fw-bold">Contact Me</h1>
        <p className="fs-5">I'd love to hear from you! Whether it's a project, collaboration, or just a question, feel free to reach out.</p>
      </section>

      <section className="container py-5">
        <h2 className="text-center mb-4">Send me a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6 mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="5"
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-lg">Send Message</button>
        </form>
      </section>

      <section className="bg-light py-5">
        <div className="container text-center">
          <h2>My Email Address</h2>
          <p>If you prefer, you can also email me directly:</p>
          <a href="mailto:sachin931920@gmail.com" className="btn btn-outline-primary btn-lg">
            Send Email
          </a>
        </div>
      </section>

      <section className="bg-primary text-white text-center py-5 bg-clor">
        <h2>Follow Me</h2>
        <p>Stay connected with me on social media!</p>
        <div>
          <a href="https://www.linkedin.com/in/sachin-chhokar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="btn btn-outline-light mx-2">LinkedIn</a>
          <a href="https://github.com/chhokarsachin" className="btn btn-outline-light mx-2">GitHub</a>
          <a href="" className="btn btn-outline-light mx-2">Twitter</a>
          <a href="https://www.instagram.com/ch_sachin_chhokar1510?igsh=azV4bTA0MHV5YXVk" className="btn btn-outline-light mx-2">Instagram</a>
          <a href="https://www.facebook.com/profile.php?id=100028785699696" className="btn btn-outline-light mx-2">Facebook</a>
        </div>
      </section>

      <section className="py-5">
        <h2 className="text-center mb-4">Find Me Here</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=your-google-maps-embed-url"
                allowFullScreen=""
                loading="lazy"
                style={{ width: '100%', height: '500px', border: '0' }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
