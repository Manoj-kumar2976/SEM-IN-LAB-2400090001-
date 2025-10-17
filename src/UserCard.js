import React from "react";

const UserCard = ({ name, age, bio }) => {
  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "12px",
    padding: "16px",
    width: "260px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
    margin: "20px auto",
    fontFamily: "Arial, sans-serif",
  };

  const nameStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#333",
  };

  const ageStyle = {
    color: "#666",
    margin: "8px 0",
  };

  const bioStyle = {
    fontStyle: "italic",
    color: "#555",
  };

  return (
    <div style={cardStyle}>
      <div style={nameStyle}>{name}</div>
      <div style={ageStyle}>Age: {age}</div>
      <div style={bioStyle}>{bio}</div>
    </div>
  );
};

export default UserCard;
