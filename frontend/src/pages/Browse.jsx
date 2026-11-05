
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Browse({ items = [] }) {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("All");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("Newest");

  // Show ALL reported items, not only approved items
  const visibleItems = items
    .filter(item => {
      const text = search.trim().toLowerCase();

      const matchesSearch =
        !text ||
        item.title?.toLowerCase().includes(text) ||
        item.location?.toLowerCase().includes(text) ||
        item.description?.toLowerCase().includes(text) ||
        item.category?.toLowerCase().includes(text);

      const matchesType =
        type === "All" || item.type === type;

      const matchesCategory =
        category === "All" || item.category === category;

      return matchesSearch && matchesType && matchesCategory;
    })
    .sort((a, b) => {
      const dateA = new Date(a.createdAt || a.date || 0).getTime();
      const dateB = new Date(b.createdAt || b.date || 0).getTime();

      return sort === "Newest"
        ? dateB - dateA
        : dateA - dateB;
    });

  const clearFilters = () => {
    setSearch("");
    setType("All");
    setCategory("All");
    setSort("Newest");
  };

  return (
    <div className="browse-page">

      <div className="browse-heading">
        <span className="auth-label">CAMPUS COMMUNITY</span>
        <h1>Explore Lost & Found Items</h1>
        <p>Search, filter and find belongings reported on campus.</p>
      </div>

      <div className="browse-filters">

        <input
          type="text"
          placeholder="Search item, location or category..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />

        <select
          value={type}
          onChange={e => setType(e.target.value)}
        >
          <option value="All">All Types</option>
          <option value="Lost">Lost</option>
          <option value="Found">Found</option>
        </select>

        <select
          value={category}
          onChange={e => setCategory(e.target.value)}
        >
          <option value="All">All Categories</option>
          <option value="Electronics">Electronics</option>
          <option value="Bags">Bags</option>
          <option value="Documents">Documents</option>
          <option value="Accessories">Accessories</option>
          <option value="Books">Books</option>
          <option value="Keys">Keys</option>
          <option value="Other">Other</option>
        </select>

        <select
          value={sort}
          onChange={e => setSort(e.target.value)}
        >
          <option value="Newest">Newest First</option>
          <option value="Oldest">Oldest First</option>
        </select>

        <button
          type="button"
          className="clear-btn"
          onClick={clearFilters}
        >
          Clear Filters
        </button>

      </div>

      <p className="results-count">
        {visibleItems.length} reported item(s) found
      </p>

      <div className="browse-grid">

        {visibleItems.length === 0 ? (
          <div className="empty-results">
            <span>🔎</span>
            <h2>No items found</h2>
            <p>Try different search words or filters.</p>
            <Link to="/report">Report an Item</Link>
          </div>
        ) : (

          visibleItems.map(item => (

            <div className="browse-card" key={item.id}>

              <div className={`item-type ${
                item.type === "Lost" ? "lost-type" : "found-type"
              }`}>
                {item.type}
              </div>

              <h2>{item.title}</h2>

              <p>📂 {item.category}</p>
              <p>📍 {item.location}</p>
              <p>📅 {item.date}</p>

              <p className="item-description">
                {item.description}
              </p>

              <div className="item-contact">
                <strong>Contact:</strong> {item.contactEmail}
              </div>

              <p>
                <strong>Report Status:</strong>{" "}
                <span>
                  {item.status || "Pending"}
                </span>
              </p>

            </div>

          ))
        )}

      </div>
    </div>
  );
}

export default Browse;
