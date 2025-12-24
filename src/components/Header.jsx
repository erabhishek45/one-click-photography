import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { scrollToSection } from '../utils/scrollToSection';

const Header = () => {

    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home')
    const [expanded, setExpanded] = useState(false);

   const handleNavClick = (section) => {
        setActiveSection(section);
        scrollToSection(section);
        setExpanded(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = [
                'home', 'portfolio', 'services', 'about', 'pricing', 'contact'
            ];

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll)

        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    
    return (
        <Navbar
            expand="lg"
            fixed='top'
            expanded={expanded}
            onToggle={()=>setExpanded(!expanded)}
            variant='dark'
            className={`custom-navbar ${scrolled ? 'scrolled' : ''}`}
        >
            <Container>
                <Navbar.Brand
                    href='#'
                    className='navbar-brand-custom'
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                        setExpanded(false)
                    }}
                >
                    ONE-CLICK
                </Navbar.Brand>

                {/* Toogle */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='ms-auto'>
                        <Nav.Link onClick={(e) => { e.preventDefault(); handleNavClick('home') }} className={`nav-link-custom ${activeSection === 'home' ? 'active' : ''}`}>Home</Nav.Link>
                        <Nav.Link onClick={(e) => { e.preventDefault(); handleNavClick('portfolio') }} className={`nav-link-custom ${activeSection === 'portfolio' ? 'active' : ''}`}>Portfolio</Nav.Link>
                        <Nav.Link onClick={(e) => { e.preventDefault(); handleNavClick('services') }} className={`nav-link-custom ${activeSection === 'services' ? 'active' : ''}`}>Services</Nav.Link>
                        <Nav.Link onClick={(e) => { e.preventDefault(); handleNavClick('about') }} className={`nav-link-custom ${activeSection === 'about' ? 'active' : ''}`}>About</Nav.Link>
                        <Nav.Link onClick={(e) => { e.preventDefault(); handleNavClick('pricing') }} className={`nav-link-custom ${activeSection === 'pricing' ? 'active' : ''}`}>Pricing</Nav.Link>
                        <Nav.Link onClick={(e) => { e.preventDefault(); handleNavClick('contact') }} className={`nav-link-custom ${activeSection === 'contact' ? 'active' : ''}`}>Contact</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header