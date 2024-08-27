import React, { useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import NavbarChat from "../../../Components/Navbar/NavbarChat";
import "./style.css";

function ChatPage() {
  useEffect(() => {
    document.body.style.backgroundColor = "#161227";

    return () => {
      document.body.style.backgroundColor = "#161227";
    };
  }, []);

  return (
    <div className="container">
      <div className="chat-window">
        <NavbarChat />
        <div className="chat-content">
          <div className="question">
            <div className="question-text">
              <div className="question-header">
                <p className="question-author">Anda</p>
                <p className="question-time">17:08 WIB</p>
              </div>
              <div className="question-body">
                <p className="question-message">
                  Disurat manakah ada undangan rapat mengenai pemaparan hasil
                  akhir indeks tdn
                </p>
              </div>
            </div>
            <div className="question-icon">
              <AccountCircleIcon sx={{ fontSize: "40px", margin: 0, color: "#fff" }} />
            </div>
          </div>
          <div className="answer">
            <div className="answer-icon">
              <AccountCircleIcon sx={{ fontSize: "40px", margin: 0, color: "#fff" }} />
            </div>
            <div className="answer-text">
              <div className="answer-header">
                <p className="answer-author">Pandai AI</p>
                <p className="answer-time">17:08 WIB</p>
              </div>
              <div className="answer-body">
                <p className="answer-message">
                  Undangan rapat mengenai pemaparan hasil akhir indeks tdn
                  terdapat di “B-3138 Surat Undangan Rapat Hasil Akhir Indeks
                  TDN_19 Desember 2023.pdf”
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-footer">
          <div className="input-container">
            <input
              type="text"
              className="chat-input"
              placeholder="Tulis pesan, pertanyaan, atau topik..."
            />
            <button className="send-button">
              <ArrowUpwardIcon />
            </button>
          </div>
          <p className="footer-text">
            Kunjungi halaman
            <span className="italic-text">&nbsp;Syarat & Ketentuan&nbsp;</span>
            penggunaan Pandai CHAT
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
