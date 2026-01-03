import Container from 'react-bootstrap/Container';
import ServiceButton from '../ui/button';
import { 
  FaShieldAlt, 
  FaInfoCircle, 
  FaBullhorn,
  FaStop,
  FaUsers
} from 'react-icons/fa';

import LogoJateng from '../../assets/icn-images/logo-jateng.png';
import './style/LayananPublikStyle.css';

function SectionLayananPublik() {
  return (
    <section className="layanan-section">
      <Container>
            <div className='layanan-left-header'>
            <small>WEBSITE PELAYANAN PUBLIK</small>
            <p>Inspektorat Provinsi Jawa Tengah - Unit Pelayanan Publik & Aduan Masyarakat</p>
            </div>
        <div className="layanan-grid">

          {/* ================= KIRI ================= */}

          <div className="layanan-left">
            <h2>Mengapa Pelayanan Publik Diperlukan?</h2>

            <p className='layanan-left'>
              Dalam rangka mendukung Digitalisasi Pemerintahan, 
              Inspektorat Provinsi Jawa Tengah menyediakan mekanisme 
              pelaporan gratifikasi yang mudah, cepat, dan aman melalui 
              Website Resmi Pelayanan Publik.
            </p>

            <p>Laporan dapat diajukan melalui tiga jalur utama layanan digital:</p>

            <ul className="layanan-list">
              <li>
                <FaStop className="icon red" />
                Unit Pengendalian Gratifikasi (UPG)
              </li>
              <li>
                <FaInfoCircle className="icon blue" />
                Pelayanan Informasi Publik (PPID)
              </li>
              <li>
                <FaUsers className="icon green" />
                Layanan ADUMAS (Aduan Masyarakat)
              </li>
            </ul>
            <p>Semua pengaduan diproses sesuai aturan dan dijaga kerahaiaannya. Untuk informasi lebih lanjut, klik tombol layanan diisebelah kanan.</p>
          </div>

          {/* ================= KANAN ================= */}
          <div className="layanan-right">
            <div className="logo-card">
              <img src={LogoJateng} alt="Logo Jateng" style={{width:'80px', height:'auto'}}/>
              <strong>
                WEBSITE PELAYANAN PUBLIK<br />
                INSPEKTORAT JAWA TENGAH
              </strong>
            </div>

            <div className="quick-service">
              <strong>Layanan Cepat</strong>

              <div className="service-item">
                <FaShieldAlt className="icon red" />
                <div>
                  <strong>Unit Pengendalian Gratifikasi</strong>
                  <p>Form pelaporan aman & rahasia</p>
                  <ServiceButton className="service-button"
                    text="Lapor Sekarang"
                    to="/HomePage"
                    variant="primary"
                    icon={<FaShieldAlt />}
                  />
                </div>
              </div>

              <div className="service-item">
                <FaInfoCircle className="icon blue" />
                <div>
                  <strong>Pelayanan Informasi Publik</strong>
                  <p>Permintaan dokumen & informasi</p>
                  <ServiceButton
                    text="Minta Informasi"
                    to="/HomePage"
                    variant="primary"
                    icon={<FaInfoCircle />}
                  />
                </div>
              </div>

              <div className="service-item">
                <FaUsers className="icon green" />
                <div>
                  <strong>Adumas (Aduan Masyarakat)</strong>
                  <p>Laporkan masalah layanan</p>
                  <ServiceButton
                    text="Buat Aduan"
                    to="/HomePage"
                    variant="primary"
                    icon={<FaUsers />}
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}

export default SectionLayananPublik;
