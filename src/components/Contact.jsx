import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Contact = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    subject:'',
    message: ''
  });


  const handleChange = (e) =>{
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]:value
    }));
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    alert("Thank you for your message ! we will get back to you within 24 hours.")
    setFormData({
      name:'',
      email:'',
      subject:'',
      message:''
    });
  }
  return (
    <div id='contact' className='contact-section'>
      <Container>

        <div className='section-header' data-aos='fade-up'>
          <h2 className='section-title'>
            let's Create 
            <span className='text-gradient'>Together</span>
          </h2>
          <p className='section-subtitle'>Ready to capture your story? Get in touch with us today</p>
        </div>

        <div className='contact-form' data-aos='fade-up' data-aos-delay='100'>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col md={6} className='mb-4'>
                <input type="text" 
                className='custom-form-control'
                placeholder='Your name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                />
              </Col>

              <Col md={6} className="mb-4">
                <input type="email" 
                className='custom-form-control'
                placeholder='Your email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                />
              </Col>
            </Row>

            <Row>
              <Col xs={12} className='mb-4'>
                <input type="text" 
                className='custom-form-control'
                placeholder='Subject'
                name='subject'
                value={formData.subject}
                onChange={handleChange}
                required
                />
              </Col>
            </Row>

            <Row>
              <Col>
                <textarea 
                className='custom-form-control'
                rows={6}
                placeholder='Your Message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                />
              </Col>
            </Row>

            <Row>
              <Col className='text-center'>
                <button type='submit' className='btn-primary btn-lg'>
                  Send Message
                </button>
              </Col>
            </Row>
          </form>
        </div>

        <Row className='mt-5 text-center'>
          <Col md={4} className='mb-4' data-aos='fade-up' data-aos-delay='100'>
            <div className='p-4 bg-dark rounded-3'>
              <i className='bi bi-geo-alt fs-1 text-gradient mb-3'></i>
              <h5>Studio Location</h5>
              <p className='text-white-50 mb-0'>
                New delhi, Ashok Nagar <br />
                Near Ashok Nagar metro station
              </p>
            </div>
          </Col>

          <Col md={4} className='mb-4' data-aos='fade-up' data-aos-delay='200'>
            <div className='p-4 bg-dark rounded-3'>
              <i className='bi bi-telephone fs-1 text-gradient mb-3'></i>
              <h5>Call Us</h5>
              <p className='text-white-50 mb-0'>
               +91 123456789 <br />
                Mon-Fri : 9Am to 6Pm EST
              </p>
            </div>
          </Col>

          <Col md={4} className='mb-4' data-aos='fade-up' data-aos-delay='300'>
            <div className='p-4 bg-dark rounded-3'>
              <i className='bi bi-envelope fs-1 text-gradient mb-3'></i>
              <h5>Email Us</h5>
              <p className='text-white-50 mb-0'>
                contact@click.com <br />
                Response within 24 hours
              </p>
            </div>
          </Col>

          
        </Row>
      </Container>
    </div>
  )
}

export default Contact