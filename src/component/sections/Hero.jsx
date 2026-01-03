import heroImg from "../../assets/rsc-images/inspektoratimg.png";
import "./style/HeroStyle.css";

function Hero() {
  return (
    <section
      className="hero"
style={{
  backgroundImage: `
    linear-gradient(rgba(0,0,0,.45), rgba(0,0,0,.45)),
    url(${heroImg})
  `,
  backgroundSize: "cover",
  backgroundPosition: "center top",
  backgroundRepeat: "no-repeat",
  height: "50vh",
  minHeight: "320px",
}}
    >
      <div className="hero-content">
        <h1>SUGENG RAWUH</h1>
        <span className="hero-subtitle">SELAMAT DATANG</span>
        <p>DI INSPEKTORAT PROVINSI JAWA TENGAH</p>
      </div>
    </section>
    
  );
}

export default Hero;
