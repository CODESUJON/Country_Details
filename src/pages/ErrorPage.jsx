import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#202020",
      color: "#fff",
      textAlign: "center",
      fontFamily: "Arial, sans-serif",
      padding: "20px",
    },
    heading: {
      fontSize: "6rem",
      fontWeight: "bold",
      margin: "0",
    },
    subheading: {
      fontSize: "1.8rem",
      marginTop: "10px",
    },
    button: {
      marginTop: "20px",
      padding: "10px 20px",
      fontSize: "1.2rem",
      color: "#fff",
      backgroundColor: "#3a86ff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#ff006e",
    },
    image: {
      width: "80%",
      maxWidth: "400px",
      marginTop: "20px",
    },
    "@media (max-width: 600px)": {
      heading: {
        fontSize: "4rem",
      },
      subheading: {
        fontSize: "1.4rem",
      },
      button: {
        fontSize: "1rem",
        padding: "8px 16px",
      },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.subheading}>Oops! The page you're looking for doesn't exist.</p>
      <img
        style={styles.image}
        src="https://i.imgur.com/qIufhof.png"
        alt="Error Illustration"
      />
      <button
        style={styles.button}
        onMouseOver={(e) => (e.target.style.background = styles.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.background = styles.button.backgroundColor)}
        onClick={() => navigate("/")}
      >
        Go Home
      </button>
    </div>
  );
};

export default ErrorPage;
