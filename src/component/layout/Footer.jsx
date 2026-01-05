import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram
} from "react-icons/fa";

import LogoUPPI from "../../assets/icn-images/Logo-uppi.png";
import "./style/footer.css";

function Footer() {
  return (
 <footer className="footer-wrapper">
  <div className="footer-container">
    <Container>
      <Row>
        {/* LOGO */}
        <Col md={4} className="footer-logo">
          <img src={LogoUPPI} alt="Logo" />
          <p>
            Inspektorat Provinsi Jawa Tengah berkomitmen
            mewujudkan tata kelola pemerintahan yang bersih.
          </p>
        </Col>

        {/* KONTEN KANAN */}
        <Col md={8}>
          <Row>
            <Col md={6} className="footer-section">
              <h6>Lokasi</h6>
              <p>Jl. Pahlawan No.9<br />Semarang</p>
            </Col>

            <Col md={6} className="footer-section">
              <h6>Kontak</h6>
              <p>Email: inspektorat@jatengprov.go.id</p>
              <p>Telp: (024) 8312222</p>
            </Col>
          </Row>

          <Row className="mt-3">
                  <Col md={6} className="footer-section">
            <h6>Tautan Cepat</h6>
            <ul className="footer-links">
              <li>
                <a
                  href="https://inspektorat.jatengprov.go.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  - Inspektorat Provinsi Jawa Tengah
                </a>
              </li>
            </ul>
          </Col>

            <Col md={6} className="footer-section">
              <h6>Media Sosial</h6>
              <div className="footer-social">
                <a href="#"><FaFacebook /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </div>

  {/* BOTTOM BAR */}
  <div className="footer-bottom">
    © 2025 Inspektorat Provinsi Jawa Tengah
  </div>
</footer>

  );
}
export default Footer;
