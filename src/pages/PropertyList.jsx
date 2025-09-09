
import React from "react";
import { Link } from "react-router-dom";
import { FaMapMarkerAlt, FaDollarSign } from "react-icons/fa";

const properties = [
  { id: 1, title: "Modern Apartment", location: "New York, USA", price: 250, image: "https://via.placeholder.com/400x200?text=Property+1" },
  { id: 2, title: "Luxury Villa", location: "Los Angeles, USA", price: 800, image: "https://via.placeholder.com/400x200?text=Property+2" },
  { id: 3, title: "Cozy Cottage", location: "Chicago, USA", price: 180, image: "https://via.placeholder.com/400x200?text=Property+3" },
];

const PropertyList = () => {
  return (
    <div className="row">
      {properties.map((property) => (
        <div key={property.id} className="col-md-4 mb-4">
          <div className="card shadow-sm">
            <img src={property.image} alt={property.title} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title">{property.title}</h5>
              <p><FaMapMarkerAlt className="text-danger" /> {property.location}</p>
              <p><FaDollarSign className="text-success" /> {property.price}k</p>
              <Link to={`/properties/${property.id}`} className="btn btn-primary">View Details</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PropertyList;
