import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import LogoUPPI from "../../assets/icn-images/Logo-uppi.png";
import "./style/footer.css";

function Footer() {
  return (
    <footer className="footer-wrapper">
      <Container>
        <div className="footer-card">
          <Row className="align-items-center g-4">
            <Col md={4}>
              <img src={LogoUPPI} alt="Logo UPPI" style={{width:'290px', height:'auto', gap:'12px'}} />
            </Col>

            <Col md={4}>
              <div className="footer-info">
                <FaMapMarkerAlt className="footer-icon" />
                <div>
                  <strong>Lokasi</strong>
                  <p>
                    Jl. Pahlawan No.9  
                    <br />
                    Semarang, Jawa Tengah
                  </p>
                </div>
              </div>
            </Col>

            <Col md={4}>
              <div className="footer-info">
                <FaEnvelope className="footer-icon" />
                <div>
                  <strong>Kontak</strong>
                  <p>
                    Alamat Email: inspektorat@jatengprov.go.id
                  </p>
                  <p>
                    No.Telpon: (024) 8312222
                  </p>
                </div>
              </div>
            </Col>
                     <Col md={4}>
              <div className="footer-info">
                <FaEnvelope className="footer-icon" />
                <div>
                  <strong>Tautan Cepat</strong>
                  <p>
                    <a href="https://inspektorat.jatengprov.go.id" target="_blank" rel="noopener noreferrer">
                      inspektorat Provinsi Jawa Tengah
                    </a>
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <hr />

          <div className="footer-bottom">
            © {new Date().getFullYear()} Inspektorat Provinsi Jawa Tengah.  
            <span> All Rights Reserved</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
export default Footer;