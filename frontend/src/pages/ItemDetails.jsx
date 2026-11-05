
import { Link, useParams } from "react-router-dom";

export default function ItemDetails({
  items,
  user,
  onUpdate
}) {
  const { id } = useParams();

  const item = items.find(
    entry => entry.id === id
  );

  if (!item) {
    return (
      <div className="empty-state">
        <h2>Item not found</h2>
        <Link to="/browse" className="text-link">
          Back to items
        </Link>
      </div>
    );
  }

  const canClaim =
    user &&
    user.role === "student" &&
    item.type === "Found" &&
    item.status === "Approved";

  return (
    <section className="content-page detail-page">

      <Link to="/browse" className="back-link">
        ← Back to browse
      </Link>

      <div className="detail-layout">

        <div className="detail-image">
          {item.image ? (
            <img src={item.image} alt={item.title} />
          ) : (
            <div className="image-placeholder detail-placeholder">
              <span>✦</span>
              <small>{item.category}</small>
            </div>
          )}
        </div>

        <div className="detail-info">

          <span className={`status-pill ${item.type.toLowerCase()}`}>
            {item.type} item
          </span>

          <span className="approval">
            {item.status}
          </span>

          <h1>{item.title}</h1>

          <p className="detail-description">
            {item.description}
          </p>

          <div className="detail-facts">

            <div>
              <small>CATEGORY</small>
              <b>{item.category}</b>
            </div>

            <div>
              <small>DATE</small>
              <b>{item.date}</b>
            </div>

            <div>
              <small>LOCATION</small>
              <b>{item.location}</b>
            </div>

          </div>

          {item.status === "Approved" && (
            <div className="contact-panel">
              <h3>
                {item.type === "Found"
                  ? "Is this your item?"
                  : "Have you seen this item?"}
              </h3>

              <p>
                Contact the person who submitted
                this report.
              </p>

              <a
                className="btn btn-primary"
                href={`mailto:${item.contact}?subject=${encodeURIComponent(
                  "FindIt: " + item.title
                )}`}
              >
                Contact reporter ↗
              </a>
            </div>
          )}

          {canClaim && (
            <button
              className="btn btn-outline claim-btn"
              onClick={() =>
                onUpdate(item.id, {
                  status: "Claim requested"
                })
              }
            >
              Request to claim item
            </button>
          )}

          {item.status === "Claim requested" && (
            <p className="review-note">
              A claim request has been submitted
              for admin review.
            </p>
          )}

        </div>
      </div>
    </section>
  );
}
