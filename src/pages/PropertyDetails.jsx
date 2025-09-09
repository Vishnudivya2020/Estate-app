import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  useEffect(() => {
    fetch(`https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enquiry Submitted:", formData);
    alert("Your enquiry has been submitted! ");
    setFormData({ name: "", email: "", message: "" });
  };

  if (!property) return <h3 className="text-center py-5">Loading...</h3>;

  return (
    <div className="container py-5">
      <div className="card shadow p-4">
        <div className="row g-4 align-items-center">
          <div className="col-md-5">
            <img
              src={property.image}
              alt={property.name}
              className="img-fluid rounded shadow-sm"
            />
          </div>
          <div className="col-md-7">
            <h2>{property.name}</h2>
            <p><strong>Location:</strong> {property.city}, {property.country}</p>
            <p><strong>Owner:</strong> {property.ownerName}</p>
            <p><strong>Building Number:</strong> {property.buildingNumber}</p>
            <p><strong>Contact:</strong> {property.contactNumber}</p>
            <p><strong>Timezone:</strong> {property.timeZone}</p>

            <Link to="/listings" className="btn btn-secondary mt-3">← Back to Listings</Link>
          </div>
        </div>
      </div>

      {/* Enquiry Form */}
      <div className="card shadow p-4 mt-4">
        <h4>Send an Enquiry</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Your Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Your Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              className="form-control"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Submit Enquiry</button>
        </form>
      </div>
       {/* Google Map */}
      <div className="mt-5">
        <h4>Location on Map</h4>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086291357391!2d144.96315791531877!3d-37.81362797975167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ4JzQ5LjEiUyAxNDTCsDU3JzQ2LjAiRQ!5e0!3m2!1sen!2sin!4v1630925400000!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Property Location"
        ></iframe>
      </div>

    </div>
  );
}
