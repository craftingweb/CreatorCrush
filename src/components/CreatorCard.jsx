import { Link } from "react-router-dom";

const CreatorCard = ({ creator }) => {
  return (
    <article className="creator-card">
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
