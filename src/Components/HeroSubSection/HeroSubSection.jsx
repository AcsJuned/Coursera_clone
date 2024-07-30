import React from 'react';
import './HeroSubSection.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import image1 from '../../Asset/images/img1.png'
import image2 from '../../Asset/images/img2.png';
import image3 from '../../Asset/images/img3.png';
import image4 from '../../Asset/images/img4.png';
import image5 from '../../Asset/images/img5.png';
import image6 from '../../Asset/images/img6.jpeg';
import image7 from '../../Asset/images/img7.jpeg';


const HeroSubSection = () => {
  return (
    <Container className="hero-subsection  ">
      <h2 className='text' style={{ color: '#1f1f1f', }}>
        Learn from <span style={{ fontWeight: 'bold' }}>325+</span> leading universities and companies with Coursera Plus
      </h2>
      <Row>
        <Col className="d-flex flex-row align-items-center">
          <span className="image-span">
            <img src={image1} alt="University of Illinois at Urbana-Champaign" className="img-fluid" />
          </span>
          <span className="image-span">
            <img src={image2} alt="Duke University" className="img-fluid" />
          </span>
          <span className="image-span">
            <img src={image3} alt="Google" className="img-fluid" />
          </span>
          <span className="image-span">
            <img src={image4} alt="University of Michigan" className="img-fluid" />
          </span>
          <span className="image-span">
            <img src={image5} alt="IBM" className="img-fluid" />
          </span>
          <span className="image-span">
            <img src={image6} alt="Vanderbilt" className="img-fluid" />
          </span>
          <span className="image-span">
            <img src={image7} alt="Johns Hopkins University" className="img-fluid" />
          </span>
        
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSubSection;
