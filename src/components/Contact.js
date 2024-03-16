import React from "react";
import VantaComponent from './Vanta';
import '../Contact.css'; // Import your CSS file for styling

function Contact() {
  return (
    <div className="contact-container" data-aos-delay={1600}>
      {/* Render the VantaComponent */}
      <VantaComponent className="vanta-bg" />

      {/* Your card components */}
      <div className="card-container ">
        {/* College Information Card */}
        <div className="card">
          <div className="card2">
            <h2 className="label-area" style={{ fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', color: 'grey' }}>Contact Information</h2>

            <a className="content-media" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox" target="_blank" rel="noreferrer">Email: adityakumarsahu108@gmail.com</a>
            <a className="content-media" href="https://github.com/adityakumarsahu108?tab=repositories" target="_blank" rel="noreferrer">Github: adityakumarsahu108</a>
            <a className="content-media" href="https://www.instagram.com/adityakumarsahu6?igsh=MW13cGI2bnBsZGt2bw==" target="_blank" rel="noreferrer">Instagram: adityakumarsahu06</a>
          </div>
        </div>

        {/* Camera Specifications Card */}
        <div className="card">
          <div className="card2">
            <h2 className="label-area" style={{ fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', color: 'grey' }}>Camera Specifications</h2>
            <p className="content-media">Model: Sony alpha 6000</p>
            <p className="content-media">Lens Type: Telephoto 55-210mm, wide-angle 18-50mm, prime lens 50mm,85mm</p>
            <p className="content-media">Adapters: Nikon to e-mount</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
