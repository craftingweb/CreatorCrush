import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../client";

const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    url: "",
    description: "",
    imageURL: "",
  });

  useEffect(() => {
    const fetchCreator = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id)
        .single();

      if (error) console.error(error);
      else setFormData(data);
    };

    fetchCreator();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("creators")
      .update(formData)
      .eq("id", id);

    if (error) console.error(error);
    else navigate("/");
  };

  return (
    <main className="container">
      <h2>Edit Creator</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Name"
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="url"
          value={formData.url}
          placeholder="Channel URL"
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          value={formData.description}
          placeholder="Description"
          onChange={handleChange}
          required
        />
        <input
          type="url"
          name="imageURL"
          value={formData.imageURL}
          placeholder="Image URL (optional)"
          onChange={handleChange}
        />
        <button className="themed-button" type="submit">
          Save
        </button>
      </form>
    </main>
  );
};

export default EditCreator;
