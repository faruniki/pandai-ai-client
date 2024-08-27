import React from "react";

const Pagination = () => {
  const paginationStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px 0",
    marginTop: "400px",
  };

  const pageStyle = {
    backgroundColor: "#443c66",
    color: "#fff",
    borderRadius: "4px",
    margin: "0 4px",
    width: "32px",
    height: "32px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  };

  const activePageStyle = {
    ...pageStyle,
    backgroundColor: "#443c66",
    color: "#EFEFEF",
  };

  return (
    <div style={paginationStyle}>
      <div style={pageStyle}>&lt;</div>
      <div style={activePageStyle}>1</div>
      <div style={pageStyle}>2</div>
      <div style={pageStyle}>...</div>
      <div style={pageStyle}>9</div>
      <div style={pageStyle}>10</div>
      <div style={pageStyle}>&gt;</div>
    </div>
  );
};

export default Pagination;
