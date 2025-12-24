import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { assets, stats } from '../assets/assets'
import Counter from './Counter'
import { scrollToSection } from '../utils/scrollToSection';

const Hero = () => {
  return (
    <div id='home' className='hero-section'>
      <div className='hero-bg' style={{

        background: `linear-gradient(rgba(5,5,5,0.9), rgba(5,5,5,0.95)), url(${assets.bgImg})`,
      
      }}></div>
      <div className='hero-glow'></div>
      <Container>
        <Row>
          <Col>
            <div className='hero-content' data-aos='fade-up' dat-aos-duration="1000">
              <h1 className='hero-title display-font'>
                Where Vision <br />
                Becomes <span>Art</span>
              </h1>
              <p className='hero-subtitle'> An elite photography studio crafting timeless visual narratives. 
                We transform moments into masterpieces through precision, passion, and unparalleled artistry.</p>
                <div className='mt-5'>
                  <Button onClick={() => scrollToSection('portfolio')} className='btn-primary me-4 mb-4 mb-md-0'>View Portfolio</Button>
                  <Button onClick={() => scrollToSection('contact')} className='btn-outline' variant='none'>Book Session</Button>
                </div>
            </div>
          </Col>
        </Row>

        {/* Stats sectiion */}
        <div className='stats-section'>
          <Row className='justify-content-center'>
            {stats.map((stat, index)=>(
              <Col md={3} sm={6}>
                <div className='stat-item'>
                  <div className='stat-number'>
                    <Counter target={stat.number}/>
                  </div>
                  <div className='stat-label'>{stat.label}</div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Hero