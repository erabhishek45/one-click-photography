import React from 'react'
import { Container } from 'react-bootstrap'
import { services } from '../assets/assets'

const Services = () => {
  return (
    <div id='services' className='service-section'>
      <Container >
        <div className='section-header' data-aos='fade-up'>
          <h2 className='section-title'>
            Our
            <span className='text-gradient'>Service</span>
          </h2>
          <p className='section-subtitle'>Comprehensive photography solutions tailored to your unique vision</p>
        </div>

        {/* Card */}
        <div className='row g-4'>
          {services.map((service, index)=>(
            <div
            key={index}
            data-aos='fade-up'
            data-aos-delay={`${(index + 1) * 100}`}
            className='col-lg-4 col-md-6'
            >
              <div className='service-card'>
                <div className="service-icon">
                  <i className={`bi ${service.icon}`}></i>
                </div>
                <h4>{service.title}</h4>
                <p className='text-white-50 mb-4'>{service.description}</p>
                <ul className='list-unstyled'>
                  {service.features.map((feature, idx)=>(
                    <li key={idx} className='mb-2'>
                      <i className='bi bi-check-circle-fill text-gradient me-2'></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

export default Services