import React from 'react';
import myimage from '../assets/my-image.png';
import './About.css';

function About() {
  return (
    <div>
      {/* About Header Section */}
      <section className="text-center py-5 bg-light">
        <h1 className="display-4 fw-bold">About Me</h1>
        <p className="fs-5">Hello! I’m a passionate Front-End Developer with a focus on building clean, responsive, and user-friendly web applications. I specialize in React and JavaScript, and I love crafting modern web experiences.</p>
      </section>

      {/* About Content Section */}
      <section className="container py-5">
        <div className="row align-items-center">
          {/* Image of Yourself */}
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <img 
              src={myimage} 
              alt="Your Image" 
              className="img-fluid rounded-circle shadow-lg" 
              style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
            />
          </div>
          {/* About Text */}
          <div className="col-md-8">
            <h2 className="mb-3">Hi, I'm Sachin Chhokar</h2>
            <p>
              I am a front-end developer with a passion for building high-quality, accessible websites and web applications. With expertise in **React**,**Angular** **JavaScript & Typescript**, and **CSS**, I strive to create seamless and responsive web experiences.
            </p>
            <p>
              Over the years, I have worked on a variety of projects, from personal websites to complex enterprise-level applications. I'm always eager to learn new technologies and keep up with the latest trends in web development.
            </p>
            
            <h3>Skills & Technologies:</h3>
            <ul className="list-unstyled">
              <li><i className="bi bi-check-circle-fill"></i> React</li>
              <li><i className="bi bi-check-circle-fill"></i> Angular</li>
              <li><i className="bi bi-check-circle-fill"></i> JavaScript (ES6+)</li>
              <li><i className="bi bi-check-circle-fill"></i> HTML5 & CSS3</li>
              <li><i className="bi bi-check-circle-fill"></i> Bootstrap & Tailwind CSS</li>
              <li><i className="bi bi-check-circle-fill"></i> Node.js & Express</li>
              <li><i className="bi bi-check-circle-fill"></i> Git & GitHub</li>
            </ul>

            {/* <div className="mt-4">
              <a href="/contact" className="btn btn-primary btn-lg">Get in Touch</a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-primary text-white text-center py-5 bg-clor">
        <h2>Let's Work Together</h2>
        <p>I'm always open to new opportunities and projects. Feel free to reach out if you want to collaborate!</p>
        <a href="/contact" className="btn btn-light btn-lg">Contact Me</a>
      </section>
    </div>
  );
}

export default About;
