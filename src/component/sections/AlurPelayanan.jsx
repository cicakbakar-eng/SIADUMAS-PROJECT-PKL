import Container from 'react-bootstrap/Container';
import './style/AlurPelayanan.css';

function SectionAlurPelayanan() {
  const steps = [
    {
      number: 1,
      title: 'PILIH LAYANAN',
      desc: 'Pilih jenis layanan: UPG, PPID, atau ADUMAS.'
    },
    {
      number: 2,
      title: 'ISI FORMULIR',
      desc: 'Lengkapi data dan uraian laporan dengan jelas.'
    },
    {
      number: 3,
      title: 'VERIFIKASI',
      desc: 'Laporan diverifikasi oleh petugas Inspektorat.'
    },
    {
      number: 4,
      title: 'TINDAK LANJUT',
      desc: 'Laporan ditindaklanjuti sesuai ketentuan yang berlaku.'
    }
  ];

  return (
    <section className="alur-section">
      <Container>
        <h2 className="alur-title">ALUR PELAYANAN PUBLIK</h2>

        <div className="alur-grid">
          {steps.map((step) => (
            <div className="alur-card" key={step.number}>
              <div className="alur-number">{step.number}</div>
              <h6>{step.title}</h6>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default SectionAlurPelayanan;
