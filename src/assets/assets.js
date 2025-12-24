import aboutImg from '../assets/about.avif';
import bgImg from '../assets/bgImg.avif';
import portfolioImg1 from '../assets/portfolio1.avif';
import portfolioImg2 from '../assets/portfolio2.avif';
import portfolioImg3 from '../assets/portfolio3.avif';
import portfolioImg4 from '../assets/portfolio4.avif';
import portfolioImg5 from '../assets/portfolio5.avif';
import portfolioImg6 from '../assets/portfolio6.avif';



export const assets = {
  aboutImg,
  bgImg,
  portfolioImg1,
  portfolioImg2,
  portfolioImg3,
  portfolioImg4,
  portfolioImg5,
  portfolioImg6,
}

export const stats = [
    { number: 12, label: 'Years Experience' },
    { number: 850, label: 'Projects Completed' },
    { number: 48, label: 'Awards Won' },
    { number: 99, label: 'Client Satisfaction' }
];

export const portfolioItems = [
    {
      id: 1,
      image: portfolioImg1,
      title: "Ethereal Wedding",
      category: "wedding"
    },
    {
      id: 2,
      image: portfolioImg2,
      title: "Portrait Elegance",
      category: "portrait"
    },
    {
      id: 3,
      image: portfolioImg3,
      title: "Product Showcase",
      category: "commercial"
    },
    {
      id: 4,
      image: portfolioImg4,
      title: "Mountain Majesty",
      category: "editorial"
    },
    {
      id: 5,
      image: portfolioImg5,
      title: "Fashion Editorial",
      category: "editorial"
    },
    {
      id: 6,
      image: portfolioImg6,
      title: "Wildlife Wonders",
      category: "editorial"
    }
  ];

export const services = [
    {
      icon: 'bi-heart-fill',
      title: 'Wedding Photography',
      description: 'Capture every precious moment of your special day with our comprehensive wedding packages.',
      features: ['Pre-wedding shoots', 'Full day coverage', 'Premium album design']
    },
    {
      icon: 'bi-person-square',
      title: 'Portrait & Lifestyle',
      description: 'Beautiful portraits that capture personality and emotion in studio or natural settings.',
      features: ['Individual & family portraits', 'Corporate headshots', 'Lifestyle photography']
    },
    {
      icon: 'bi-building',
      title: 'Commercial & Brand',
      description: 'Elevate your brand with professional commercial photography for marketing and branding.',
      features: ['Product photography', 'Architectural photography', 'Corporate events']
    }
  ];

export const packages = [
    {
      name: 'Essential',
      price: '₹799',
      description: 'Perfect for small events and basic portrait sessions',
      features: [
        { included: true, text: '4 Hour Session' },
        { included: true, text: '100 Edited Photos' },
        { included: true, text: 'Online Gallery' },
        { included: false, text: 'No Prints' },
        { included: false, text: 'Basic Album' }
      ],
      featured: false
    },
    {
      name: 'Professional',
      price: '₹1,499',
      description: 'Our most popular package for weddings and events',
      features: [
        { included: true, text: '8 Hour Coverage' },
        { included: true, text: '250 Edited Photos' },
        { included: true, text: 'Premium Gallery' },
        { included: true, text: '20 Premium Prints' },
        { included: true, text: 'Deluxe Album' }
      ],
      featured: true
    },
    {
      name: 'Ultimate',
      price: '₹2,199',
      description: 'Complete solution for large events and commercial work',
      features: [
        { included: true, text: 'Full Day Coverage' },
        { included: true, text: '500+ Edited Photos' },
        { included: true, text: 'Premium Gallery' },
        { included: true, text: '40 Premium Prints' },
        { included: true, text: 'Premium Album' }
      ],
      featured: false
    }
  ];


  export  const socialLinks = [
    { icon: 'bi bi-instagram', href: '#' },
    { icon: 'bi bi-facebook', href: '#' },
    { icon: 'bi bi-twitter', href: '#' },
    { icon: 'bi bi-pinterest', href: '#' },
    { icon: 'bi bi-youtube', href: '#' }
  ];

  export const quickLinks = [
    { name: 'Home', section: 'home' },
    { name: 'Portfolio', section: 'portfolio' },
    { name: 'Services', section: 'services' },
    { name: 'About', section: 'about' },
    { name: 'Contact', section: 'contact' }
  ];

  export const serviceLinks = [
    { name: 'Wedding Photography', section: 'services' },
    { name: 'Portrait Photography', section: 'services' },
    { name: 'Commercial Photography', section: 'services' },
    { name: 'Event Coverage', section: 'services' },
    { name: 'Photo Editing', section: 'services' }
  ];