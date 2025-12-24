import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div id='about' className='about-section'>
      <Container>
        <Row className='align-items-center'>
          <Col lg={6}>
            <div className='about-content' data-aos='fade-right'>
              <h2 className='section-title mb-4'>
                The Vision
                <span className='text-gradient'>Behind</span>
                Click
              </h2>
              <p className='text-white-50 mb-4'>Founded by visionary photographer Alexander Sterling, Aura represents the pinnacle of photographic artistry. With over 12 years of international experience, we've mastered the art of capturing moments that transcend time.</p>

              <p className='text-white-50 mb-4'>Our philosophy is rooted in the belief that photography is more than just capturing images—it's about telling stories, evoking emotions, and creating art that stands the test of time.</p>

              <Row className='mt-5'>
                <Col className='mb-4' md={6}>
                  <div className='d-flex align-items-start'>
                    <div className='me-3'>
                      <div className='p-3 rounded-1' style={{background:'var(--gradient)'}}>
                        <i className='bi bi-award text-white'></i>
                      </div>
                    </div>
                    <div>
                      <h5>Award Winning</h5>
                      <p className='text-white-50 mb-0'>48 International Awards</p>
                    </div>
                  </div>
                </Col>

                <div>
                  <h5>Global Experiences</h5>
                  <p className='text-white-50 mb-0'>Worked in 20+ countries</p>
                </div>
              </Row>
            </div>
            <a href="#contact" className='btn btn-primary mt-3'>Work With Us</a>
          </Col>

          {/* Right section image */}
          <Col lg={6}>
            <div className='about-image float-animation' data-aos='fade-left'>
              <img src={assets.aboutImg} alt="Phototgrapher" className='about-img' />

              <div className='about-badge'>
                <i className='bi bi-camera-fill me-2'></i>
                <span>12+ years of experiences</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About