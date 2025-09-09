

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Listings() {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setLoading(false);
      });
  }, []);


  const filteredProperties = properties
    .filter((property) => {
      const query = search.toLowerCase();
      return (
        property.name.toLowerCase().includes(query) ||
        property.city.toLowerCase().includes(query) ||
        property.country.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => {
      if (sort === "low-to-high") return a.price - b.price;
      if (sort === "high-to-low") return b.price - a.price;
      return 0;
    });

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        {/* Search box */}
        <input
          type="text"
          className="form-control w-50"
          placeholder="Search by city, country or name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {/* Sort dropdown */}
        <select
          className="form-select w-25"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Sort by Price</option>
          <option value="low-to-high">Low to High</option>
          <option value="high-to-low">High to Low</option>
        </select>
      </div>

      <h2 className="text-center mb-4"> All Property Listings </h2>
      {loading ? (
        <p className="text-center">Loading properties...</p>
      ) : (
        <div className="row g-4 justify-content-center w-20">
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <div key={property.id} className={
                `${filteredProperties.length === 1
                  ? "col-md-10"   
                  : filteredProperties.length === 2
                    ? "col-md-8"   
                    : "col-md-4"   
                }`
              }>
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
                    <p className="card-text text-truncate">
                      {property.city}, {property.country}
                    </p>
                    <p className="text-muted">Owner: {property.ownerName}</p>
                    <Link
                      to={`/listings/${property.id}`}
                      className="btn btn-primary"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center">No properties found.</p>
          )}
        </div>
      )}
    </div>
  );
}
