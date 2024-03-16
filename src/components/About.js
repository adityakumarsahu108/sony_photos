import React, { } from "react";




function About() {
  return (
    <>

      <div>

        <div>
          <main id="main" data-aos="fade" data-aos-delay={900}>
            
            {/* ======= End Page Header ======= */}
            <div className="page-header d-flex align-items-center">
              <div className="container position-relative">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-6 text-center">
                    <h2 style={{ fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', color: 'white' }}>About</h2>
                    <p className="bigmain">Greetings! I am Aditya kumar sahu, Currently navigating my third year at Dayananda Sagar College of Engineering, I'm not just an engineering enthusiast but also a fervent amateur photographer. Serving as the Photography Team Head and Lead for the Genesis student forum within our department, I bring a blend of technical acumen and artistic flair to every project.</p>
                  </div>
                </div>
              </div>
            </div>{/* End Page Header */}
            {/* ======= About Section ======= */}
            <section id="about" className="about">
              <div className="container">
                <div className="row gy-4 justify-content-center">
                  <div className="col-lg-4">
                    <img src="assets/img/profile-img.jpg" className="img-fluid" alt='' />
                  </div>
                  <div className="col-lg-5 content">
                    <h2>Amateur Photographer from Bengaluru</h2>
                    <p className=" py-3">

                      With my trusty Sony Alpha 6000, I capture the world in stunning detail, merging technological finesse with my creative vision.
                    </p>
                    <div className="row">
                      <div className="col-lg-6">
                        <ul>
                          <li><i className="bi bi-chevron-right" /> <strong>Birthday:</strong> <span>08 June 2003</span></li>

                          <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+91 6364271158</span></li>
                          <li><i className="bi bi-chevron-right" /> <strong>City:</strong> <span>Bengaluru, Karnataka</span></li>
                        </ul>
                      </div>
                      <div className="col-lg-6">
                        <ul>


                          <li><i className="bi bi-chevron-right" /> <strong>Email:</strong> <span>adityakumarsahu@gmail.com</span></li>
                          <li><i className="bi bi-chevron-right" /> <strong>Freelance:</strong> <span>Available</span></li>
                        </ul>
                      </div>
                    </div>
                    <p className="py-3">
                      My journey extends beyond textbooks as I dive into the world of visual storytelling. With a rich tapestry of practical experience in photography, I've developed a meticulous eye for detail, capturing moments that seamlessly marry the precision demanded by engineering studies with the creative nuances inherent in each frame.
                    </p>
                    <p className="m-0">
                      Balancing equations and compositions, I invite you to join me on a unique exploration where the intricate world of engineering converges with the expressive realm of photography. In every snapshot, I aim to encapsulate not just the visual aesthetics but the essence of the stories unfolding within. Welcome to a space where curiosity meets creativity, and every image tells a narrative that transcends the confines of both the classroom and the viewfinder.
                    </p>
                  </div>
                </div>
              </div>
            </section>{/* End About Section */}
          </main>{/* End #main */}

        </div>



      </div></>
  );
}
export default About;