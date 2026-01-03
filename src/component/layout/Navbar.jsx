import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import LogoInstansi from '../../assets/icn-images/Logo-instansi.png';
import LogoInspektorat from '../../assets/icn-images/LogoInspektorat.png';
import LogoUPPI from '../../assets/icn-images/Logo-uppi.png';

import './style/Navbar.css';

function NavbarAdumas() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      sticky="top"
      className={`navbar-sticky ${scrolled ? 'scrolled' : ''}`}
    >
      <Container fluid className="d-flex align-items-center">

        {/* KIRI */}
        <Navbar.Brand href="#">
          <img
            src={LogoInstansi}
            alt="Logo Instansi"
            className={`logo-instansi ${scrolled ? 'shrink' : ''}`}
          />
        </Navbar.Brand>

        {/* KANAN */}
        <Nav className="ms-auto d-none d-md-flex align-items-center gap-3">
          <img src={LogoInspektorat} alt="Logo Inspektorat" className="logo-group" />
          <img src={LogoUPPI} alt="Logo UPPI" className="logo-group" />
        </Nav>

      </Container>
    </Navbar>
  );
}

export default NavbarAdumas;
