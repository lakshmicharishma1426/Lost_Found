
import React, { useState } from "react";

function Report({ user, onAddItem }) {
  const [form, setForm] = useState({
    title: "",
    type: "Lost",
    category: "",
    location: "",
    date: "",
    description: "",
    contactEmail: user?.email || ""
  });

  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    setForm(previous => ({
      ...previous,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitting) return;

    setSubmitting(true);

    onAddItem({
      ...form,
      reporter: user?.name || "Student",
      reporterEmail: user?.email || ""
    });
  };

  return (
    <div className="form-page">
      <div className="form-card report-form-card">
        <span className="auth-label">CAMPUS LOST & FOUND</span>

        <h1>Report an Item</h1>

        <p>
          Give the details below to help reconnect belongings with their owners.
        </p>

        <form onSubmit={handleSubmit}>
          <label>Item Name</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Example: Black Wallet"
            required
          />

          <label>Report Type</label>
          <select
            name="type"
            value={form.type}
            onChange={handleChange}
          >
            <option value="Lost">I Lost an Item</option>
            <option value="Found">I Found an Item</option>
          </select>

          <label>Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            <option value="Electronics">Electronics</option>
            <option value="Bags">Bags</option>
            <option value="Documents">Documents</option>
            <option value="Accessories">Accessories</option>
            <option value="Books">Books</option>
            <option value="Keys">Keys</option>
            <option value="Other">Other</option>
          </select>

          <label>Location</label>
          <input
            name="location"
            value={form.location}
            onChange={handleChange}
            placeholder="Where was it lost or found?"
            required
          />

          <label>Date</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <label>Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Describe the item, colour, brand and identifying details..."
            rows="4"
            required
          />

          <label>Contact Email</label>
          <input
            type="email"
            name="contactEmail"
            value={form.contactEmail}
            onChange={handleChange}
            required
          />

          <button
            type="submit"
            className="auth-submit"
            disabled={submitting}
          >
            {submitting ? "Submitting..." : "Submit Report →"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Report;
