import "./custom.css";

export default function Biodata() {
  return (
    <div className="card-container">
      <div className="layout">
        <div className="left">
          <Header />
          <DataPribadi />
          <GamesGacor />
          <Pendidikan />
          <Hobby />
          <MediaSosial />
          <Kontak />
          <Quotes />
        </div>

        <div className="right">
          <img src="/img/foto-eem.jpg" alt="foto" className="side-img" />
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="header-section">
      <h1>BIODATA <br /> WILHELM</h1>
      <hr />
    </div>
  );
}

function DataPribadi() {
  return (
    <div className="info-section">
      <h3>Identitas Diri</h3>
      <p>
        <strong>Nama:</strong> Wilhelm Samto Tamba
      </p>
      <p>
        <strong>Status:</strong> Mahasiswa Sistem Informasi
      </p>
    </div>
  );
}

function GamesGacor() {
  return (
    <div className="info-section">
      <h3>Game Favorit</h3>
      <div className="game-grid">
        <div className="game-card">🎮 Mobile Legends</div>
        <div className="game-card">🎮 PUBG</div>
        <div className="game-card">🎮 Valorant</div>
        <div className="game-card">🎮 GTA V</div>
      </div>
    </div>
  );
}

function Pendidikan() {
  return (
    <div className="info-section">
      <h3>Riwayat Pendidikan</h3>
      <ul style={{ color: "#ffffff" }}>
        <li>SDN 141 PEKANBARU</li>
        <li>SMPN 35 PEKANBARU</li>
        <li>SMAN 14 PEKANBARU</li>
      </ul>
    </div>
  );
}

function Hobby() {
  return (
    <div className="info-section">
      <h3>Hobby</h3>
      <div className="badge-group">
        <span className="badge">Trading</span>
        <span className="badge">Coding</span>
        <span className="badge">Gaming</span>
      </div>
    </div>
  );
}

function MediaSosial() {
  return (
    <div className="info-section">
      <h3>Media Sosial</h3>
      <p>Instagram: @wilhelmsamm12</p>
    </div>
  );
}

function Kontak() {
  return (
    <div className="footer-section">
      <small>Email: wilhelm24si@mahasiswa.pcr.ac.id</small>
    </div>
  );
}

function Quotes() {
  return (
    <div className="info-section">
      <h3>Quotes Hari Ini</h3>
      <div className="quote-box">
        <p className="quote-text">
          "Tetap konsisten, karena hasil tidak akan mengkhianati proses."
        </p>
        <small className="quote-author">- Wilhelm Samto Tamba</small>
      </div>
    </div>
  );
}