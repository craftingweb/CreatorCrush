import { Link } from "react-router-dom";
import { Pencil } from "lucide-react";

const CreatorCard = ({ creator }) => {
  return (
    <article className="creator-card">
      <div className="card-header">
        <Link to={`/edit/${creator.id}`} className="edit-icon" title="Edit">
          <Pencil size={20} />
        </Link>
      </div>
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          style={{ maxWidth: "100%", borderRadius: "var(--radius)" }}
        />
      )}
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <div className="button-group">
        <a
          href={creator.url}
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          className="themed-button"
        >
          Visit Channel
        </a>
        <Link
          to={`/creator/${creator.id}`}
          role="button"
          className="themed-button"
        >
          View Details
        </Link>
      </div>
    </article>
  );
};

export default CreatorCard;
