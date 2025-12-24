import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { quickLinks, serviceLinks, socialLinks } from '../assets/assets'

const Footer = () => {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col md={4} className='mb-5 mb-lg-0' data-aos='fade-right'>
            <span className='text-gradient footer-logo'>
              ONE-CLICK
            </span>
            <p className='text-white-50 mb-4'> An elite photography studio specializing in creating timeless visual narratives 
              through precision, passion, and unparalleled artistry.</p>

            <div className='social-links'>
              {socialLinks.map((link, idx)=>(
                <a 
                href={link.href}
                key={idx}
                className='social-link'
                target='_blank'
                rel='noopener noreferrer'
                >
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </Col>
            
          <Col lg={2} md={4} className='mb-5 mb-md-0' data-aos='fade-up' data-aos-delay='100'>
              <h5 className='mb-4'>Quick Links</h5>
              <ul className='list-unstyled'>
                {quickLinks.map((link, idx)=>(
                  <li key={idx} className='mb-3'>
                    <button className='text-white-50 text-decoration-none border-0 bg-transparent p-0'>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
          </Col>

          <Col lg={3} md={4} className='mb-5 mb-md-0' data-aos='fade-up' data-aos-delay='200'>
            <h5 className='mb-4'>Our Services</h5>
            <ul className='list-unstyled'>
              {serviceLinks.map((link, idx)=>(
                <li key={idx} className='mb-3'>
                  <button className='text-white-50 text-decoration-none border-0 bg-transparent p-0'>
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </Col>  

          <Col lg={3} md={4} data-aos='fade-up' data-aos-delay='300'>
            <h5 className='mb-4'>Newsletter</h5>
            <p className='text-white-50 mb-4'>Subscribe for photography insights, special offers, and studio updates.</p>

            <div className='d-flex mb-3'>
              <input 
              type='email'
              className='custom-form-control me-2'
              placeholder='Your Email'
              />
              <button className='btn btn-secondary'>Subscribe</button>
            </div>
          </Col>

        </Row>

        <hr className='my-5' style={{borderColor: 'rgba(255, 255, 255, 0.05)'}} />
        <Row>
          <Col  className='text-center mb-3 mb-md-0'>
            <p className='text-white-50'>&copy; 2026 one-click Studios. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer