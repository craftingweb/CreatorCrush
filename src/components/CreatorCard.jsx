import { Link } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import { useState } from "react";

const CreatorCard = ({ creator }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <article className="creator-card">
        <div className="card-header">
          <Link to={`/edit/${creator.id}`} className="icon-button" title="Edit">
            <Pencil size={20} />
          </Link>
          <button
            onClick={() => setShowConfirm(true)}
            className="icon-button"
            title="Delete"
          >
            <Trash2 size={20} />
          </button>
        </div>

        {creator.imageURL && (
          <img
            src={creator.imageURL}
            alt={creator.name}
            style={{
              width: "100%",
              borderRadius: "1rem",
              marginBottom: "1rem",
            }}
          />
        )}
        <div className="info-wrapper">
          <h2>{creator.name}</h2>
          <p>{creator.description}</p>
          <a
            href={creator.url}
            target="_blank"
            rel="noopener noreferrer"
            role="button"
            className="themed-button"
          >
            Visit Channel
          </a>
        </div>
      </article>

      {showConfirm && (
        <div className="modal-overlay" onClick={() => setShowConfirm(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p>
              Are you sure you want to delete <strong>{creator.name}</strong>?
            </p>
            <div className="modal-buttons">
              <button
                className="themed-button danger"
                onClick={async () => {
                  const { error } = await supabase
                    .from("creators")
                    .delete()
                    .eq("id", creator.id);
                  if (error) console.error(error);
                  else navigate(0);
                }}
              >
                Yes, Delete
              </button>
              <button
                className="themed-button"
                onClick={() => setShowConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreatorCard;
