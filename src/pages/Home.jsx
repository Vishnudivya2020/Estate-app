
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center"
        style={{
          height: "70vh",
          backgroundImage: "url('https://picsum.photos/1200/600?random=1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div style={{ backgroundColor: "rgba(0,0,0,0.5)", padding: "20px", borderRadius: "10px" }}>
          <h1 className="display-3 fw-bold text-white">Find your Dream Property</h1>
          <p className="lead text-light">Buy, Sell or Rent properties with ease</p>
          <Link to="/listings" className="btn btn-light btn-lg">
            Explore Listings
          </Link>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="container py-5">
        <h2 className="text-center mb-4">What We Do</h2>
        <div className="row g-4">
          <div className="col-md-3">
            <div className="card p-3 shadow-sm text-center h-100">
              <h5>Buy Property</h5>
              <p>We help you find the best properties to buy.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow-sm text-center h-100">
              <h5>Sell Property</h5>
              <p>List your property and reach buyers easily.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow-sm text-center h-100">
              <h5>Rent Property</h5>
              <p>Find rental homes and apartments hassle-free.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 shadow-sm text-center h-100">
              <h5>Property Management</h5>
              <p>We take care of your property and tenants smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="container py-5">
        <h2 className="text-center mb-4">Featured Properties</h2>
        <div className="row g-4">
          {properties.slice(0, 4).map((property) => (
            <div key={property.id} className="col-md-3">
              <div className="card shadow-sm h-100">
                <img
                  src={property.image}
                  alt={property.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://picsum.photos/400/200?grayscale";
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">{property.name}</h5>
                  <p className="card-text">{property.city}, {property.country}</p>
                  <p className="text-muted">Owner: {property.ownerName}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

