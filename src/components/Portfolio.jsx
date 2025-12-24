import React, { useState } from 'react'
import { Container, Modal, ModalBody } from 'react-bootstrap'
import { portfolioItems } from '../assets/assets'

const filters = [
  { label: 'All Works', value: 'all' },
  { label: 'Wedding', value: 'wedding' },
  { label: 'Portrait', value: 'portrait' },
  { label: 'Commercial', value: 'commercial' },
  { label: 'Editorial', value: 'editorial' },
];

const Portfolio = () => {

  const [activeFilter, setActiveFilter] = useState('all')
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeFilter === 'all'
  ? portfolioItems 
  : portfolioItems.filter(item=>item.category === activeFilter);

  const handleImageClick = (item) => {
    setSelectedImage(item);
    setShowModal(true);
  };
  
  return (
    <div id='portfolio' className='portfolio-section'>
      <Container>
        <div className='section-header' data-aos="fade-up">
          <h2 className='section-title'>
            Featured
            <span className='text-gradient'>Work</span>
          </h2>
          <p className='section-subtitle'>A curated collection of our finest work across different genres and styles</p>
        </div>

        {/* Filter */}
        <div className='portfolio-filter' data-aos="fade-up" data-aos-delay="100">
          {filters.map((filter)=>(
            <button key={filter.value}
            className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* portfolio grid */}
        <div className='portfolio-grid row g-5'>
          {filteredItems.map((item, index)=>(
            <div
            key={item.id}
            className='portfolio-item col-12 col-sm-6 col-md-4'
            data-aos="fade-up"
            data-aos-delay={`${(index % 6) * 100}`}
            onClick={() => handleImageClick(item)}
            >
              <img src={item.image} alt={item.title} className='portfolio-img rounded-4' />
              <div className='portfolio-overlay'>
                <h4 className='mb-2'>{item.title}</h4>
                <span className='badge bg-gradient'>
                  {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
      <Modal 
        show={showModal} 
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <ModalBody className="p-0 bg-dark border-0  modal-image-wrapper">
          <button 
            className="custom-close-btn btn-close btn-close-white position-absolute top-0 end-0 m-3 z-3"
            onClick={() => setShowModal(false)}
          ></button>
          {selectedImage && (
            <img 
              src={selectedImage.image} 
              alt={selectedImage.title} 
              className=" w-100 h-100 rounded"
            />
          )}
        </ModalBody>
      </Modal>

      </Container>
    </div>
  )
}

export default Portfolio