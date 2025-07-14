import React from 'react';
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="social-icons mb-3">
          <a href="https://www.facebook.com/share/16jzUAsQhq/?mibextid=wwXIfr" target="_blank" rel="noreferrer">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="https://www.instagram.com/palapasbeachresortlb?igsh=ZWdyeGl1eTY2aWNt" target="_blank" rel="noreferrer">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="tel:+96170688200">
            <i className="bi bi-telephone"></i>
          </a>
        </div>
        <p>&copy; 2025 Palapace. All rights reserved.</p>
      </div>
    </footer>
  );
}
