import React, { useEffect } from "react";
import NavbarSearch from "../../../Components/Navbar/NavbarSearch";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Pagination from "../../../Components/Pagination";
import Footer from "../../../Components/Footer";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100vh",
};

function ChatPage() {
  useEffect(() => {
    document.body.style.backgroundColor = "#161227";

    return () => {
      document.body.style.backgroundColor = "#161227";
    };
  }, []);

  return (
    <div style={containerStyle}>
      <div
        style={{
          width: "80%",
          margin: "0 auto",
          marginTop: "4vh",
          height: "90vh",
          backgroundColor: "#1D1544",
          borderRadius: "6px",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <NavbarSearch />
        <div style={{ display: "flex", justifyContent: "space-between", padding: "0px 24px 20px 24px" }}>
          <div >
            <AccountCircleIcon
              sx={{ fontSize: "50px", margin: 0, color: "#fff" }}
            />
          </div>
          <div>
            <div>
              <p
                style={{
                  margin: "0px 0px 0px 20px",
                  fontSize: "16px",
                  color: "#EFEFEF",
                }}
              >
                Indeks Kepatuhan adalah berdasarkan riwayat kepatuhan (success
                rate) dari PSE Lingkup Privat UGC dalam penanganan konten pada
                tahun sebelumnya. Besaran Indeks kepatuhan Tinggi (Success Rate
                76%-100%) = 0,25, Sedang (Success Rate 51%-75%) = 0,5, Rendah
                (Success Rate 10%-50%) = 0,75, Sangat Rendah (Success Rate &lt;
                10%) = 1
              </p>
            </div>
            <div style={{marginTop: "30px"}}>
              <p style={{fontSize: "14px", fontWeight: "700", fontStyle: "italic", color: "#fefefe", textAlign: "right"}}>2024kepmen172.pdf, halaman 13</p>
            </div>
          </div>
        </div>
        <Pagination/>
        <Footer />
      </div>
    </div>
  );
}

export default ChatPage;
