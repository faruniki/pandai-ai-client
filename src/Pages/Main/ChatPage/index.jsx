import React, { useState, useEffect } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import NavbarChat from "../../../Components/Navbar/NavbarChat";
import "./style.css";
import PandaiSquare from "../../../Components/PandaiSquare.png"


function ChatPage() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: "question",
      author: "Anda",
      time: "17:08 WIB",
      text: "Disurat manakah ada undangan rapat mengenai pemaparan hasil akhir indeks tdn"
    },
    {
      id: 2,
      type: "answer",
      author: "Pandai AI",
      time: "17:08 WIB",
      text: "Undangan rapat mengenai pemaparan hasil akhir indeks tdn terdapat di “B-3138 Surat Undangan Rapat Hasil Akhir Indeks TDN_19 Desember 2023.pdf”"
    }
  ]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    document.body.style.backgroundColor = "#161227";

    return () => {
      document.body.style.backgroundColor = "#161227";
    };
  }, []);

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        type: "question",
        author: "Anda",
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " WIB",
        text: inputValue
      };

      setMessages([...messages, newMessage]);
      setInputValue("");

      setTimeout(() => {
        setMessages(prevMessages => [
          ...prevMessages,
          {
            id: prevMessages.length + 1,
            type: "answer",
            author: "Pandai AI",
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + " WIB",
            text: "Ini adalah contoh jawaban otomatis untuk pertanyaan Anda."
          }
        ]);
      }, 1000); 
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault(); 
      handleSendMessage();
    }
  };

  return (
    <div className="container">
      <div className="chat-window">
        <NavbarChat />
        <div className="chat-content">
          {messages.map(message => (
            <div key={message.id} className={message.type}>
              {message.type === "answer" && (
                <div className={`${message.type}-icon`}>
                  <img src={PandaiSquare} alt="Pandai Square" className="logo-image" />
                </div>
              )}
              <div className={`${message.type}-text`}>
                <div className={`${message.type}-header`}>
                  <p className={`${message.type}-author`}>{message.author}</p>
                  <p className={`${message.type}-time`}>{message.time}</p>
                </div>
                <div className={`${message.type}-body`}>
                  <p className={`${message.type}-message`}>
                    {message.text}
                  </p>
                </div>
              </div>
              {message.type === "question" && (
                <div className={`${message.type}-icon`}>
                  <AccountCircleIcon sx={{ fontSize: "40px", margin: 0, color: "#fff" }} />
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="chat-footer">
          <div className="input-container">
            <input
            type="text"
              className="chat-input"
              placeholder="Tulis pesan, pertanyaan, atau topik..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="send-button" onClick={handleSendMessage}>
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
