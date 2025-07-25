import React from 'react';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} cres. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 