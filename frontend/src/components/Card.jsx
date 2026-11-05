
import { Link } from "react-router-dom";

export default function Card({ item }) {

  return (
    <div className="item-card">

      <Link
        to={`/item/${item.id}`}
        className="item-image"
      >

        {item.image ? (
          <img src={item.image} alt={item.title} />
        ) : (
          <div className="image-placeholder">
            <span>✦</span>
            <small>{item.category}</small>
          </div>
        )}

        <span
          className={`status-pill ${item.type.toLowerCase()}`}
        >
          {item.type}
        </span>

      </Link>

      <div className="item-card-body">

        <div className="item-category">
          {item.category}
        </div>

        <h3>{item.title}</h3>

        <p className="item-location">
          <span>⌖</span> {item.location}
        </p>

        <p className="item-description">
          {item.description}
        </p>

        <div className="item-card-footer">

          <span>
            {item.date}
          </span>

          <Link to={`/item/${item.id}`}>
            View details ↗
          </Link>

        </div>

      </div>

    </div>
  );
}
