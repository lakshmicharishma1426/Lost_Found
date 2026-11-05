import React, { useState } from "react";

function Admin({ items = [], onUpdateItem, onLogout }) {
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const count = (condition) => items.filter(condition).length;

  const lostCount = count(item => item.type === "Lost");
  const foundCount = count(item => item.type === "Found");
  const pendingCount = count(item => item.status === "Pending");
  const resolvedCount = count(item => item.status === "Resolved");

  const filteredItems = items.filter(item => {
    const term = search.toLowerCase();

    const matchesSearch =
      item.title?.toLowerCase().includes(term) ||
      item.location?.toLowerCase().includes(term) ||
      item.reporter?.toLowerCase().includes(term) ||
      item.contactEmail?.toLowerCase().includes(term);

    const matchesType =
      typeFilter === "All" || item.type === typeFilter;

    const matchesStatus =
      statusFilter === "All" || item.status === statusFilter;

    return matchesSearch && matchesType && matchesStatus;
  });

  return (
    <div className="admin-page">
      <aside className="admin-sidebar">
        <h2>Find<span>It.</span></h2>
        <p className="sidebar-label">ADMINISTRATION</p>

        <a href="#dashboard">📊 Dashboard</a>
        <a href="#reports">📋 All Reports</a>
        <a href="#reports">🔍 Manage Items</a>

        <button className="sidebar-logout" onClick={onLogout}>
          ↪ Logout
        </button>
      </aside>

      <main className="admin-main" id="dashboard">
        <header className="admin-header">
          <div>
            <span className="admin-welcome">ADMIN CONTROL PANEL</span>
            <h1>Dashboard Overview</h1>
            <p>Monitor and manage campus lost and found reports.</p>
          </div>
          <div className="admin-profile">🛡️ Administrator</div>
        </header>

        <section className="admin-stats">
          <div className="admin-stat purple-admin">
            <span>📋</span>
            <p>Total Reports</p>
            <h2>{items.length}</h2>
          </div>

          <div className="admin-stat coral-admin">
            <span>🔍</span>
            <p>Lost Items</p>
            <h2>{lostCount}</h2>
          </div>

          <div className="admin-stat blue-admin">
            <span>🎁</span>
            <p>Found Items</p>
            <h2>{foundCount}</h2>
          </div>

          <div className="admin-stat pink-admin">
            <span>⏳</span>
            <p>Pending Approval</p>
            <h2>{pendingCount}</h2>
          </div>
        </section>

        <section className="admin-summary">
          <div>
            <strong>{resolvedCount}</strong>
            <span>Successfully Resolved</span>
          </div>
          <div>
            <strong>{count(item => item.status === "Approved")}</strong>
            <span>Approved Reports</span>
          </div>
          <div>
            <strong>{count(item => item.status === "Rejected")}</strong>
            <span>Rejected Reports</span>
          </div>
        </section>

        <section className="admin-reports" id="reports">
          <div className="reports-heading">
            <div>
              <h2>Manage Reports</h2>
              <p>Review student submissions and update their status.</p>
            </div>
            <span className="report-total">{filteredItems.length} reports</span>
          </div>

          <div className="admin-controls">
            <input
              type="text"
              placeholder="Search item, location or reporter..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            <select value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
              <option value="All">All Types</option>
              <option value="Lost">Lost</option>
              <option value="Found">Found</option>
            </select>

            <select value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
              <option value="All">All Statuses</option>
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Resolved">Resolved</option>
            </select>
          </div>

          <div className="admin-report-list">
            {filteredItems.length === 0 ? (
              <div className="no-admin-reports">
                <span>📭</span>
                <h3>No reports available</h3>
                <p>New student submissions will appear here.</p>
              </div>
            ) : (
              filteredItems.map(item => (
                <article className="admin-report-card" key={item.id}>
                  <div className="report-info">
                    <span className={`report-type ${item.type === "Lost" ? "lost-type" : "found-type"}`}>
                      {item.type}
                    </span>

                    <h3>{item.title}</h3>

                    <p>📂 Category: {item.category}</p>
                    <p>📍 Location: {item.location}</p>
                    <p>📅 Date: {item.date}</p>
                    <p>👤 Reporter: {item.reporter}</p>
                    <p>✉️ Contact: {item.contactEmail}</p>

                    <p className="admin-description">
                      {item.description}
                    </p>

                    <span className={`status-badge ${item.status?.toLowerCase()}`}>
                      {item.status}
                    </span>
                  </div>

                  <div className="report-actions">
                    {item.status === "Pending" && (
                      <>
                        <button
                          className="approve-btn"
                          onClick={() => onUpdateItem(item.id, { status: "Approved" })}
                        >
                          ✓ Approve
                        </button>
                        <button
                          className="reject-btn"
                          onClick={() => onUpdateItem(item.id, { status: "Rejected" })}
                        >
                          ✕ Reject
                        </button>
                      </>
                    )}

                    {item.status === "Approved" && (
                      <button
                        className="resolve-btn"
                        onClick={() => onUpdateItem(item.id, { status: "Resolved" })}
                      >
                        ✓ Mark Resolved
                      </button>
                    )}

                    {item.status === "Resolved" && (
                      <button
                        className="reopen-btn"
                        onClick={() => onUpdateItem(item.id, { status: "Approved" })}
                      >
                        Reopen
                      </button>
                    )}

                    {item.status === "Rejected" && (
                      <button
                        className="reopen-btn"
                        onClick={() => onUpdateItem(item.id, { status: "Pending" })}
                      >
                        Review Again
                      </button>
                    )}
                  </div>
                </article>
              ))
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Admin;