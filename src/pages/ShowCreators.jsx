import { supabase } from "../client";
import { useEffect, useState } from "react";
import CreatorCard from "../components/CreatorCard";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {
    const fetchCreators = async () => {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) {
        console.error(error);
      } else {
        setCreators(data);
      }
    };

    fetchCreators();
  }, []);

  return (
    <main className="container">
      <h1>CreatorCrush</h1>
      {creators.length === 0 ? (
        <p>Add your favorite creators</p>
      ) : (
        <section className="grid">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </section>
      )}
    </main>
  );
};

export default ShowCreators;
