import { supabase } from "../client";
import { useEffect, useState } from "react";
import CreatorCard from "../components/CreatorCard";
import { Link } from "react-router-dom";

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
      <div className="title-container">
        <h1>CreatorCrush</h1>
      </div>
      {creators.length === 0 ? (
        <p></p>
      ) : (
        <section className="grid">
          {creators.map((creator) => (
            <CreatorCard key={creator.id} creator={creator} />
          ))}
        </section>
      )}
      <div
        className="add-button-container"
        style={{ marginTop: creators.length === 0 ? "14rem" : "2rem" }}
      >
        <Link to="/new" className="add-button" title="Add a Creator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path d="M10 15.5l6-3.5-6-3.5v7z" />
            <path
              d="M21.8 8s-.2-1.4-.8-2c-.7-.8-1.4-.8-1.8-.9C16.4 5 12 5 12 5s-4.4 0-7.2.1c-.4 0-1.1 0-1.8.9-.6.6-.8 2-.8 2S2 9.6 2 11.2v1.6c0 1.6.2 3.2.2 3.2s.2 1.4.8 2c.7.8 1.6.8 2 .9C7.6 19 12 19 12 19s4.4 0 7.2-.1c.4 0 1.1 0 1.8-.9.6-.6.8-2 .8-2s.2-1.6.2-3.2v-1.6c0-1.6-.2-3.2-.2-3.2z"
              fill="#FF0000"
            />
          </svg>
        </Link>
      </div>
    </main>
  );
};

export default ShowCreators;
