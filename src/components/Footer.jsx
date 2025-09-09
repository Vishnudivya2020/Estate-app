import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container-fluid text-center">
        <h5 className="fw-bold">Estate App</h5>
        <p className="mb-2">Buy, Sell or Rent properties with ease.</p>

        {/* Quick Links */}
        <div className="mb-3">
          <Link to="/" className="text-light me-3 text-decoration-none">Home</Link>
          <Link to="/listings" className="text-light me-3 text-decoration-none">Listings</Link>
          <Link to="/contact" className="text-light text-decoration-none">Contact</Link>
        </div>

        {/* Social Media Icons */}
        <div className="mb-3">
          <a href="#" className="text-light me-3"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-light me-3"><i className="bi bi-twitter"></i></a>
          <a href="#" className="text-light"><i className="bi bi-instagram"></i></a>
        </div>

        <small>© {new Date().getFullYear()} Estate App. All rights reserved.</small>
      </div>
    </footer>
  );
}
