import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { packages } from '../assets/assets'

const Pricing = () => {
  return (
    <div id='pricing' className='pricing-section'>
        <Container>
            <div className='section-header' data-aos='fade-up'>
                <h2 className='section-title'>
                    Premium
                    <span className='text-gradient'>Packages</span>
                </h2>
                <p className='section-subtitile'>Choose the perfect package for your photography needs</p>
            </div>

            <Row className='justify-content-center'>
                {packages.map((pkg, idx)=>(
                    <Col key={idx} lg={4} md={6} className='mb-4' data-aos='fade-up' data-aos-delay={`${(idx + 1)* 100}`}>
                        <div className={`pricing-card ${pkg.featured ? 
                            'featured' : ''
                        }`}>
                            {pkg.featured && <div className='popular-badge'>POPULAR </div>}
                            <h4 className='mb-4'>{pkg.name}</h4>
                            <div className='pricing-price'>{pkg.price}</div>
                            <p className='text-white-50 mb-4'>{pkg.description}</p>

                            <ul className='list-unstyled mb-4'>
                                {pkg.features.map((feature, idx)=>(
                                    <li key={idx} className='mb-3'>
                                        {feature.included ? (
                                            <i className='bi bi-check-circle-fill text-gradient me-2'></i>
                                        ) : (
                                            <i className='bi bi-x-circle me-2 text-white-50'></i>
                                        )}
                                        <span className={feature.included ? '': 'text-white-50'}>{feature.text}</span>
                                    </li>
                                ))}
                            </ul>

                            <a href="#contact" className={`btn ${pkg.featured ? 'btn-primary' : 'btn-outline'} w-100`}>
                                Select Package
                            </a>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    </div>
  )
}

export default Pricing