import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client";

const ViewCreator = () => {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) {
        console.error("Error fetching creator:", error);
      } else {
        setCreator(data);
      }
    };

    fetchCreator();
  }, [id]);

  if (!creator)
    return (
      <main className="container">
        <p>Loading...</p>
      </main>
    );

  return (
    <main className="container">
      <h1>{creator.name}</h1>
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          style={{ maxWidth: "300px", marginBottom: "1rem" }}
        />
      )}
      <p>{creator.description}</p>
      <a
        href={creator.url}
        target="_blank"
        rel="noopener noreferrer"
        role="button"
      >
        Visit Channel
      </a>
    </main>
  );
};

export default ViewCreator;
