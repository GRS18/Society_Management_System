import React from 'react';

export default function AboutUs() {
  return (
   <>
    <section className="about-header">
        <div className="container">
            <h1>About Us</h1>
            <p>Learn more about our society and how we strive to create a better living experience for all residents.</p>
        </div>
    </section>

    <section className="about py-5">
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <h2>Who We Are</h2>
                    <p>Our society management system is designed to provide residents with a seamless living experience. From managing maintenance payments to organizing community events, we aim to bring transparency, efficiency, and convenience to society operations.</p>
                </div>
                <div className="col-md-6">
                    <img src="society.jpg" alt="About Society" className="img-fluid rounded"/>
                </div>
            </div>
        </div>
    </section>

    <section className="mission-vision bg-light py-5">
        <div className="container">
            <div className="row text-center">
                <div className="col-md-6">
                    <h3>Our Mission</h3>
                    <p>To create a harmonious and well-managed community for all residents by leveraging the power of technology.</p>
                </div>
                <div className="col-md-6">
                    <h3>Our Vision</h3>
                    <p>To be a leading society management solution that transforms the way communities function and grow together.</p>
                </div>
            </div>
        </div>
    </section>

    <section className="team py-5">
        <div className="container">
            <h2 className="text-center">Meet Our Team</h2>
            <div className="row text-center mt-4">
                <div className="col-md-4 team-member">
                    <img src="member1.jpg" alt="Team Member" className="img-fluid mb-3"/>
                    <h5>John Doe</h5>
                    <p>Society President</p>
                </div>
                <div className="col-md-4 team-member">
                    <img src="member2.jpg" alt="Team Member" className="img-fluid mb-3" />
                    <h5>Jane Smith</h5>
                    <p>Secretary</p>
                </div>
                <div className="col-md-4 team-member">
                    <img src="member3.jpg" alt="Team Member" className="img-fluid mb-3"/>
                    <h5>Michael Brown</h5>
                    <p>Treasurer</p>
                </div>
            </div>
        </div>
    </section>
   </>
  );
}
