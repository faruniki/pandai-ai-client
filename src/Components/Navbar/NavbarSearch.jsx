import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const inputContainerStyle = {
  display: "flex",
  alignItems: "center",
  border: "1px solid #e0e0e0",
  borderRadius: "30px",
  backgroundColor: "white",
  padding: "0px 5px",
  maxWidth: "100%",
  margin: "auto",
  marginLeft: "20px",
  backgroundColor: "#efefef",
};

const buttonStyle = {
  backgroundColor: "#6248ff",
  color: "white",
  border: "none",
  borderRadius: "50%",
  width: "40px",
  height: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  outline: "none",
};

function Navbar() {
  return (
    <nav
      style={{
        borderBottom: "solid 1px #5B49AE",
        padding: "15px 18px 0px 18px",
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div>
            <p
              style={{
                color: "#EFEFEF",
                margin: 0,
                padding: "5px 10px",
                fontWeight: 700,
                fontSize: "24px",
              }}
            >
              Pandai Search
            </p>
          </div>
          <div style={inputContainerStyle}>
            <input
              type="text"
              style={{
                border: "none",
                outline: "none",
                flex: 1,
                fontSize: "16px",
                padding: "10px",
                fontFamily: "Poppins, sans-serif",
                borderRadius: "50px",
                color: "#7A7A7A",
                backgroundColor: "#efefef",
                width: "700px",
              }}
              placeholder="Ketik disini untuk mencari.."
            />
            <button style={buttonStyle}>
              <SearchIcon />
            </button>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              color: "#EFEFEF",
              margin: 0,
              padding: "10px 10px",
              fontWeight: 500,
              fontSize: "16px",
            }}
          >
            Username
          </p>
          <AccountCircleIcon
            sx={{ fontSize: "50px", margin: 0, color: "#fff" }}
          />
        </div>
      </div>
      <div style={{marginLeft: "10px", marginTop: "20px"}}>
        <p
          style={{
            color: "#EFEFEF",
            margin: 0,
            padding: "10px 10px",
            fontWeight: 500,
            width: "fit-content",
            fontSize: "14px",
            borderBottom: "solid 3px #5B49AE"
          }}
        >
          All Result
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
