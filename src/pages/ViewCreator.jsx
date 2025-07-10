import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client.js";

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

      if (error) console.error(error);
      else setCreator(data);
    };

    fetchCreator();
  }, [id]);

  if (!creator) return <p>Loading...</p>;

  return (
    <main className="container">
      <h1>{creator.name}</h1>
      {creator.imageURL && (
        <img
          src={creator.imageURL}
          alt={creator.name}
          style={{ maxWidth: "100%", borderRadius: "16px" }}
        />
      )}
      <p>{creator.description}</p>
      <a href={creator.url} target="_blank" rel="noreferrer" role="button">
        Visit Channel
      </a>
    </main>
  );
};

export default ViewCreator;
