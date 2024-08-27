import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>404</h1>
      <p style={styles.message}>Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" style={styles.homeLink}>
        Go Back Home
      </Link>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    textAlign: 'center',
    padding: '50px',
    backgroundColor: '#fff',
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: '6rem',
    margin: '0',
    fontWeight: '600',
    color: '#343a40',
  },
  message: {
    fontSize: '1.5rem',
    margin: '20px 0',
    color: '#6c757d',
  },
  homeLink: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    textDecoration: 'none',
    borderRadius: '5px',
    marginTop: '20px',
    transition: 'background-color 0.3s ease',
  },
};

styles.homeLink[':hover'] = {
  backgroundColor: '#0056b3',
};

export default NotFound;
