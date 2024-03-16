
import React, { useEffect } from "react";
import GLightbox from "glightbox";

const Gallery = () => {
  useEffect(() => {
    const lightbox = GLightbox({
      selector: ".glightbox",
    });

    const handleOutsideClick = (event) => {

      if (!event.target.closest(".glightbox")) {
        lightbox.close();
      }
    };


    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <>

      <div>

        <div>
          <div className="page-header d-flex align-items-center">
            <div className="container position-relative">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-6 text-center">
                  <h2 style={{ fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', color: 'white' }}>Gallery</h2>
                  <p className="bigmain"> Some of the best pictures taken by me and my Sony alpha 6000.</p>
                </div>
              </div>
            </div>
          </div>{/* End Page Header */}

          <main id="main" data-aos="fade" data-aos-delay={900}>
            <div className="gallery-item h-100">

            </div>
            {/* ======= Gallery Section ======= */}
            <section id="gallery" className="gallery" data-aos="fade" data-aos-delay={1000}>
              <div className="container-fluid">
                <div className="row gy-4 justify-content-center">
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-1.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-1.jpg" title="Gallery 1" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-10.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-10.jpg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-15.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-15.jpg" title="Gallery 3" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-2.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-2.jpeg" title="Gallery 2" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-5.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-5.jpeg" title="Gallery 8" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-7.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-7.jpeg" title="Gallery 9" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-2.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-2.jpg" title="Gallery 10" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-11.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-11.jpg" title="Gallery 11" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-3.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-3.jpeg" title="Gallery 5" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-6.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-6.jpg" title="Gallery 7" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-8.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-8.jpeg" title="Gallery 9" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-14.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-14.jpg" title="Gallery 14" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-12.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-12.jpg" title="Gallery 12" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-13.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-13.jpg" title="Gallery 13" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-15.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-15.jpg" title="Gallery 15" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-6.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-6.jpeg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery.png" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery.png" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-16.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-16.jpg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-10.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-10.jpeg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-4.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-4.jpeg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-14.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-14.jpeg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-21.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-21.jpg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-9.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-9.jpeg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}

                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-23.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-23.jpg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-13.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-13.jpeg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-25.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-25.jpg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-17.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-17.jpg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/main4.webp" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/main4.webp" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}



                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-19.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-19.jpg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-13.jpg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-13.jpg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-11.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-11.jpeg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}
                  <div className="col-xl-3 col-lg-4 col-md-6">
                    <div className="gallery-item h-100">
                      <img src="assets/img/gallery/gallery-12.jpeg" className="img-fluid" alt='' />
                      <div className="gallery-links d-flex align-items-center justify-content-center">
                        <a href="assets/img/gallery/gallery-12.jpeg" title="Gallery 16" className="glightbox preview-link"><i className="bi bi-arrows-angle-expand" /></a>

                      </div>
                    </div>
                  </div>{/* End Gallery Item */}



                </div>
              </div>
            </section>{/* End Gallery Section */}
          </main>{/* End #main */}
        </div>

      </div>
    </>
  );
};

export default Gallery;