import React from 'react';

function Portfolio() {
  return (
    <div>
      {/* Portfolio Header Section */}
      <section className="text-center py-5 bg-light">
        <h1 className="display-4 fw-bold">Welcome to My Portfolio</h1>
        <p className="fs-5">A collection of my work and projects showcasing my skills in React, JavaScript, and Front-End Development.</p>
      </section>

      {/* Portfolio Projects Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Featured Projects</h2>
        <div className="row">
          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg">
              <img 
                src="https://miro.medium.com/v2/resize:fit:1400/1*TRhL9bheErxI0UyXowP5ug.png" 
                alt="Project 1" 
                className="card-img-top" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">
                  A fully functional e-commerce website built with React, Redux, and Bootstrap. It includes features like product filtering, cart, and user authentication.
                </p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg">
              <img 
                src="https://c4.wallpaperflare.com/wallpaper/294/834/442/reactjs-facebook-javascript-minimalism-wallpaper-preview.jpg" 
                alt="Project 2" 
                className="card-img-top" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Project 2: Portfolio Website</h5>
                <p className="card-text">
                  A personal portfolio website that highlights my skills, experience, and projects. Built with React and Bootstrap.
                </p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4 mb-4">
            <div className="card shadow-lg">
              <img 
                src="https://wallpapers.com/images/featured/javascript-pnr9lrhwaigq76mb.jpg" 
                alt="Project 3" 
                className="card-img-top" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">Project 3: Blogging Platform</h5>
                <p className="card-text">
                  A blogging platform with user registration, post creation, and comments. Built using Node.js, Express, and MongoDB.
                </p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Skills/Technologies Section */}
      <section className="bg-light py-5">
        <h2 className="text-center mb-4">Skills & Technologies</h2>
        <div className="container">
          <div className="row text-center">
            {/* Skill 1 */}
            <div className="col-md-3 mb-4">
              <img src="https://static-00.iconduck.com/assets.00/react-icon-512x456-5xl7nmtw.png" alt="React" style={{ width: '60px', height: '60px' }} />
              <h5 className="mt-2">React</h5>
            </div>
            {/* Skill 2 */}
            <div className="col-md-3 mb-4">
              <img src="https://img.icons8.com/ios/452/javascript.png" alt="JavaScript" style={{ width: '60px', height: '60px' }} />
              <h5 className="mt-2">JavaScript</h5>
            </div>
            {/* Skill 3 */}
            <div className="col-md-3 mb-4">
              <img src="https://img.icons8.com/ios/452/bootstrap.png" alt="Bootstrap" style={{ width: '60px', height: '60px' }} />
              <h5 className="mt-2">Bootstrap</h5>
            </div>
            {/* Skill 4 */}
            <div className="col-md-3 mb-4">
              <img src="https://img.favpng.com/4/10/18/node-js-javascript-computer-icons-computer-software-png-favpng-uCuLCK47FpvtruLueHDR1NZwp.jpg" alt="Node.js" style={{ width: '60px', height: '60px' }} />
              <h5 className="mt-2">Node.js</h5>
            </div>
            {/* Skill 5*/}
            <div className="col-md-3 mb-4">
              <img src="https://img.icons8.com/ios7/600/angularjs.png" alt="angular.js" style={{ width: '60px', height: '60px' }} />
              <h5 className="mt-2">Angular</h5>
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}

export default Portfolio;
