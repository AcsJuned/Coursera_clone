import React from 'react';
import './HeroSubSection.css';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeroSubSection = (props) => {
  const { heading, images } = props.data.heroSubSection; 

  return (
    <Container className="hero-subsection">
      <h2 className='text' style={{ color: '#1f1f1f' }}>
        {heading}
      </h2>
      <Row>
        <Col className="d-flex flex-row align-items-center">
          {images.map((image, index) => (
            <span key={index} className="image-span">
              <img
                src={image.src}
                alt={image.alt}
                className="img-fluid"
              />
            </span>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default HeroSubSection;
