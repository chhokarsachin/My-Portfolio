import React from 'react';

function Home() {
  return (
    <div>
      {/* Portfolio Details Section */}
      <section className="text-center py-1">
        <h1 className="display-3 fw-bold">Welcome to My Home</h1>
        <p className="fs-4">I'm a passionate Front-End Developer with expertise in React, JavaScript, and Bootstrap. I create beautiful, responsive web applications. Explore my projects and feel free to get in touch!</p>
      </section>

      {/* Slideshow Section (Carousel) */}
      <div id="carouselExample" className="carousel slide mt-3" data-bs-ride="carousel">
        <div className="carousel-inner">
          {/* Carousel Item 1 (First Image you provided) */}
          <div className="carousel-item active">
            <img 
              src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220423232113/Top-10-Angular-Libraries-For-Web-Developers.jpg" // Image 1
              className="d-block w-100" 
              alt="Angular Libraries"
              style={{ height: '500px', objectFit: 'cover' }}  // Fix slide size
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fs-2">Top Angular Libraries</h5>
              <p>Explore the best libraries for Angular development.</p>
            </div>
          </div>

          {/* Carousel Item 2 (Second Image you provided) */}
          <div className="carousel-item">
            <img 
              src="https://miro.medium.com/v2/resize:fit:1152/1*Gb-Bg7Vk7qCisgOMMZnO8g.png" // Image 2
              className="d-block w-100" 
              alt="React Libraries"
              style={{ height: '500px', objectFit: 'cover' }}  // Fix slide size
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fs-2">React Development</h5>
              <p>Building scalable applications with React libraries.</p>
            </div>
          </div>

          {/* Carousel Item 3 (Third Image you provided) */}
          <div className="carousel-item">
            <img 
              src="https://img.freepik.com/premium-photo/javascript-programming-code-abstract-technology-background_272306-155.jpg" // Image 3
              className="d-block w-100" 
              alt="JavaScript Programming"
              style={{ height: '500px', objectFit: 'cover' }}  // Fix slide size
            />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="fs-2">JavaScript Programming</h5>
              <p>Mastering JavaScript for modern web development.</p>
            </div>
          </div>
        </div>

        {/* Carousel Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
    </div>
  );
}

export default Home;
