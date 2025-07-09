const CreatorCard = ({ creator }) => {
  return (
    <article className="card">
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          style={{ maxWidth: "100%", borderRadius: "var(--radius)" }}
        />
      )}
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <a
        href={creator.url}
        target="_blank"
        rel="noopener noreferrer"
        role="button"
      >
        Visit Channel
      </a>
    </article>
  );
};

export default CreatorCard;
