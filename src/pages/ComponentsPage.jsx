import React from "react";

export default function ComponentsPage() {
  return (
    <div style={{ padding: "24px", backgroundColor: "#fff0f3", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      
      {/* Tambahan Style untuk Animasi Berputar Kontinu (Loading/Live) & Efek Stacked Tumpukan */}
      <style>{`
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .spinning-icon {
          animation: spinSlow 8s linear infinite;
        }
        .stacked-card {
          position: relative;
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #fbcfe8;
          padding: 24px;
          box-shadow: 0 4px 6px rgba(157,23,77,0.05);
        }
        /* Efek bayangan tumpukan kertas miring di belakang seperti di gambar */
        .stacked-card::before {
          content: "";
          position: absolute;
          z-index: -1;
          top: 4px;
          left: -3px;
          width: 100%;
          height: 100%;
          background: #ffffff;
          border: 1px solid #fbcfe8;
          border-radius: 12px;
          transform: rotate(-1.5deg);
          box-shadow: 0 2px 4px rgba(0,0,0,0.02);
        }
        .stacked-card::after {
          content: "";
          position: absolute;
          z-index: -2;
          top: -3px;
          left: 5px;
          width: 100%;
          height: 100%;
          background: #fff5f7;
          border: 1px solid #fbcfe8;
          border-radius: 12px;
          transform: rotate(2deg);
        }
      `}</style>

      {/* 1. DASHBOARD HEADER */}
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ fontSize: "28px", fontWeight: "800", color: "#9d174d", margin: "0" }}>
          Components
        </h1>
        <p style={{ fontSize: "14px", color: "#bc6c25", margin: "4px 0 0 0", fontWeight: "600" }}>
          Components Luxx Furniture
        </p>
      </div>

      {/* 2. BASIC COMPONENTS */}
      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#9d174d", marginBottom: "16px" }}>
          Basic Components
        </h3>
        <div className="stacked-card">
          <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", gap: "48px" }}>
            {/* Sub-Section Button */}
            <div>
              <div style={{ fontSize: "12px", color: "#db2777", fontWeight: "700", marginBottom: "12px" }}>(a) Buttons</div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button style={{ backgroundColor: "#ec4899", color: "#ffffff", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", cursor: "pointer", boxShadow: "0 2px 4px rgba(236,72,153,0.3)" }}>Primary</button>
                <button style={{ backgroundColor: "#fae8ff", color: "#86198f", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>Secondary</button>
                <button style={{ backgroundColor: "#f43f5e", color: "#ffffff", border: "none", padding: "10px 20px", borderRadius: "8px", fontWeight: "600", fontSize: "14px", cursor: "pointer" }}>Danger</button>
              </div>
            </div>
            
            {/* Sub-Section Badge */}
            <div>
              <div style={{ fontSize: "12px", color: "#db2777", fontWeight: "700", marginBottom: "12px" }}>(b) Badges</div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", height: "42px" }}>
                <span style={{ backgroundColor: "#ffe4e6", color: "#9f1239", padding: "6px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600" }}>Menunggu</span>
                <span style={{ backgroundColor: "#ffedd5", color: "#9a3412", padding: "6px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600" }}>Diproses</span>
                <span style={{ backgroundColor: "#dcfce7", color: "#166534", padding: "6px 12px", borderRadius: "6px", fontSize: "13px", fontWeight: "600" }}>Selesai</span>
              </div>
            </div>

            {/* Sub-Section Avatar */}
            <div>
              <div style={{ fontSize: "12px", color: "#db2777", fontWeight: "700", marginBottom: "12px" }}>(c) Avatars</div>
              <div style={{ display: "flex", gap: "12px", alignItems: "center", height: "42px" }}>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#fdf2f8", color: "#db2777", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", border: "1px solid #fbcfe8" }}>L</div>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#fdf2f8", color: "#db2777", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", border: "1px solid #fbcfe8" }}>U</div>
                <div style={{ width: "36px", height: "36px", borderRadius: "50%", backgroundColor: "#fdf2f8", color: "#db2777", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: "700", fontSize: "14px", border: "1px solid #fbcfe8" }}>X</div>
                <span style={{ fontWeight: "800", color: "#9d174d", fontSize: "16px", marginLeft: "4px" }}>Luxx Furniture.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. LAYOUT COMPONENTS */}
      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#9d174d", marginBottom: "16px" }}>
          Layout Components
        </h3>
        <div className="stacked-card" style={{ border: "2px solid #f472b6" }}>
          <p style={{ color: "#9d174d", fontSize: "14px", margin: "0", fontWeight: "600", textAlign: "center" }}>
            Layout Components
          </p>
        </div>
      </div>

      {/* 4. DATA DISPLAY COMPONENTS */}
      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#9d174d", marginBottom: "16px" }}>
          Data Display Components
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
          
          {/* Card Total Pendapatan Mebel */}
          <div className="stacked-card" style={{ flex: "1 1 400px", display: "flex", alignItems: "center", gap: "16px" }}>
            <div className="spinning-icon" style={{ width: "48px", height: "48px", borderRadius: "8px", backgroundColor: "#ffe4e6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "20px" }}>
              🪑
            </div>
            <div>
              <div style={{ fontSize: "12px", color: "#db2777", fontWeight: "700" }}>Total Pendapatan Mebel</div>
              <div style={{ fontSize: "24px", fontWeight: "800", color: "#9d174d", marginTop: "4px" }}>Rp 2.500.000</div>
            </div>
          </div>

          {/* Card Indikator Material */}
          <div className="stacked-card" style={{ flex: "1 1 400px", display: "flex", flexDirection: "column", justifyContent: "center", gap: "16px" }}>
            <div style={{ fontSize: "12px", color: "#db2777", fontWeight: "700" }}>(b) Material Indicator Card</div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                <span style={{ color: "#4d041e" }}>Kayu Jati Solid</span>
                <span style={{ color: "#db2777" }}>Sisa 5 Log</span>
              </div>
              <div style={{ width: "100%", height: "8px", backgroundColor: "#fce7f3", borderRadius: "999px", overflow: "hidden" }}>
                <div style={{ width: "75%", height: "100%", backgroundColor: "#f43f5e", borderRadius: "999px" }}></div>
              </div>
            </div>
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", fontWeight: "600", marginBottom: "6px" }}>
                <span style={{ color: "#4d041e" }}>Kain Pelapis Velvet</span>
                <span style={{ color: "#db2777" }}>Sisa 1 Roll</span>
              </div>
              <div style={{ width: "100%", height: "8px", backgroundColor: "#fce7f3", borderRadius: "999px", overflow: "hidden" }}>
                <div style={{ width: "15%", height: "100%", backgroundColor: "#f43f5e", borderRadius: "999px" }}></div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 5. FORM COMPONENTS */}
      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#9d174d", marginBottom: "16px" }}>
          Form Components
        </h3>
        <div className="stacked-card" style={{ padding: "32px" }}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#9d174d", marginBottom: "8px" }}>Email Address</label>
            <input type="email" placeholder="Masukkan email..." style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid #fbcfe8", backgroundColor: "#fff5f7", fontSize: "14px", color: "#9d174d", outline: "none" }} />
          </div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#9d174d", marginBottom: "8px" }}>Password</label>
            <div style={{ position: "relative" }}>
               <input type="password" placeholder="Masukkan sandi rahasia..." style={{ width: "100%", padding: "12px 16px", borderRadius: "12px", border: "1px solid #fbcfe8", backgroundColor: "#fff5f7", fontSize: "14px", color: "#9d174d", outline: "none" }} />
               <span style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", cursor: "pointer", color: "#db2777" }}>👁️</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <input type="checkbox" id="agree" style={{ width: "18px", height: "18px", cursor: "pointer", accentColor: "#ec4899" }} />
            <label htmlFor="agree" style={{ fontSize: "14px", color: "#db2777", fontWeight: "500", cursor: "pointer" }}>Check oute view</label>
          </div>
        </div>
      </div>

      {/* 6. FEEDBACK COMPONENTS */}
      <div style={{ marginBottom: "40px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#9d174d", marginBottom: "16px" }}>
          Feedback Components
        </h3>
        
        {/* WhatsApp Gateway - Stacked */}
        <div className="stacked-card" style={{ padding: "16px 24px", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "24px" }}>
          <div>
            <div style={{ fontSize: "12px", fontWeight: "800", color: "#9d174d", letterSpacing: "1px" }}>WHATSAPP GATEWAY</div>
          </div>
          <div style={{ backgroundColor: "#f43f5e", color: "#ffffff", padding: "4px 12px", borderRadius: "6px", fontSize: "12px", fontWeight: "700", display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ display: "inline-block", width: "6px", height: "6px", backgroundColor: "white", borderRadius: "50%" }}></span> LIVE
          </div>
        </div>

        {/* Membership Alert - Soft Purple/Pink Stacked */}
        <div className="stacked-card" style={{ backgroundColor: "#f3e8ff", border: "1px solid #e9d5ff", marginBottom: "32px" }}>
           <div style={{ fontSize: "12px", color: "#6b21a8", fontWeight: "700", marginBottom: "8px" }}>(b) Membership Alert</div>
           <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
             <span className="spinning-icon" style={{ fontSize: "24px" }}>🎁</span>
             <div>
               <p style={{ margin: 0, fontSize: "14px", color: "#6b21a8", fontWeight: "600" }}>
                 Membership Alert Luxx Furniture...
               </p>
               <span style={{ fontSize: "12px", color: "#701a75" }}>Desember 2026</span>
             </div>
           </div>
           <div style={{ width: "100%", height: "6px", backgroundColor: "#e9d5ff", borderRadius: "999px", marginTop: "12px", overflow: "hidden" }}>
              <div style={{ width: "85%", height: "100%", backgroundColor: "#c084fc" }}></div>
           </div>
        </div>

        {/* Processing Status - Stacked */}
        <div className="stacked-card">
           <div style={{ fontSize: "12px", color: "#db2777", fontWeight: "700", marginBottom: "16px" }}>(c) Processing Status</div>
           <div style={{ display: "flex", alignItems: "center", gap: "16px", border: "1px solid #fbcfe8", padding: "16px", borderRadius: "12px", backgroundColor: "#fff5f7" }}>
              <div className="spinning-icon" style={{ width: "40px", height: "40px", backgroundColor: "#ffe4e6", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px" }}>📋</div>
              <div>
                <h4 style={{ fontSize: "15px", fontWeight: "700", color: "#9d174d", margin: 0 }}>Luxx Furniture</h4>
                <p style={{ margin: "2px 0 0 0", fontSize: "13px", color: "#db2777" }}>Processing Status</p>
              </div>
           </div>
        </div>
      </div>

      {/* 7. SECTION COMPONENTS */}
      <div style={{ marginBottom: "32px" }}>
        <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#9d174d", marginBottom: "16px" }}>
          Section Components
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "32px" }}>
          
          {/* Voucher Card */}
          <div className="stacked-card" style={{ flex: "1 1 400px", background: "linear-gradient(135deg, #ec4899, #9d174d)", border: "none", color: "#ffffff", padding: "24px", display: "flex", flexDirection: "column", justifyContent: "space-between", minHeight: "200px" }}>
            <div style={{ fontSize: "12px", color: "#fdf2f8", fontWeight: "700" }}>(a) Voucher Card</div>
            <div style={{ textAlign: "center", margin: "16px 0" }}>
              <div className="spinning-icon" style={{ fontSize: "32px", marginBottom: "4px", display: "inline-block" }}>🎁</div>
              <br/>
              <span style={{ backgroundColor: "rgba(255,255,255,0.2)", padding: "4px 12px", borderRadius: "4px", fontSize: "11px", fontWeight: "700", letterSpacing: "1px" }}>VOUCHER</span>
              <h2 style={{ fontSize: "22px", fontWeight: "800", margin: "8px 0 0 0" }}>Diskon Kilat Rp 500K</h2>
            </div>
            <div style={{ backgroundColor: "rgba(0,0,0,0.2)", padding: "10px", borderRadius: "8px", textAlign: "center", fontFamily: "monospace", fontSize: "15px", fontWeight: "700", letterSpacing: "2px" }}>
              LUXXPROMO500
            </div>
          </div>

          {/* Opsi Jasa Layanan Tambahan */}
          <div className="stacked-card" style={{ flex: "1 1 400px" }}>
            <h4 style={{ fontSize: "14px", color: "#9d174d", fontWeight: "800", margin: "0 0 16px 0" }}>Opsi Jasa Layanan Tambahan</h4>
            
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "13px", color: "#4d041e", fontWeight: "600", marginBottom: "16px" }}>
              <div><span style={{ color: "#f43f5e" }}>✔</span> Menunggu</div>
              <div><span style={{ color: "#f43f5e" }}>✔</span> Closer</div>
              <div><span style={{ color: "#f43f5e" }}>✔</span> East Service</div>
              <div><span style={{ color: "#f43f5e" }}>✔</span> Pones</div>
              <div><span style={{ color: "#f43f5e" }}>✔</span> Kayu Jati</div>
              <div><span style={{ color: "#f43f5e" }}>✔</span> Velvet</div>
            </div>

            <h4 style={{ fontSize: "14px", color: "#9d174d", fontWeight: "800", margin: "16px 0 12px 0" }}>Opsi Layanan Tambahan</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", fontSize: "13px", color: "#4d041e", fontWeight: "600" }}>
              <div><span style={{ color: "#f43f5e" }}>✔</span> Kayu Jati</div>
              <div><span style={{ color: "#f43f5e" }}>✔</span> Velvet</div>
              <div><span style={{ color: "#f43f5e" }}>✔</span> Mem Service</div>
              <div></div>
              <div><span style={{ color: "#f43f5e" }}>✔</span> Extra smasal</div>
              <div></div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}