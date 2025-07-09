import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client";

const AddCreator = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { error } = await supabase.from("creators").insert([data]);

    if (error) {
      console.error("Error:", error);
    } else {
      reset();
      navigate("/");
    }
  };

  return (
    <main className="container">
      <h1>Add a New Creator</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Name:
          <input {...register("name", { required: true })} />
        </label>

        <label>
          URL:
          <input type="url" {...register("url", { required: true })} />
        </label>

        <label>
          Description:
          <textarea {...register("description", { required: true })} />
        </label>

        <label>
          Image URL:
          <input type="url" {...register("imageURL")} />
        </label>

        <button type="submit">Add Creator</button>
      </form>
    </main>
  );
};

export default AddCreator;
