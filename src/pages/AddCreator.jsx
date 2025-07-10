import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { supabase } from "../client.js";

const creatorSchema = z.object({
  name: z.string().min(1, "Name is required"),
  url: z.string().url("Must be a valid URL"),
  description: z.string().min(1, "Description is required"),
  imageURL: z.string().url("Must be a valid URL").optional().or(z.literal("")),
});

const AddCreator = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(creatorSchema),
  });

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
          <input {...register("name")} />
          {errors.name && <small>{errors.name.message}</small>}
        </label>

        <label>
          URL:
          <input type="url" {...register("url")} />
          {errors.url && <small>{errors.url.message}</small>}
        </label>

        <label>
          Description:
          <textarea {...register("description")} />
          {errors.description && <small>{errors.description.message}</small>}
        </label>

        <label>
          Image URL (optional):
          <input type="url" {...register("imageURL")} />
          {errors.imageURL && <small>{errors.imageURL.message}</small>}
        </label>

        <button type="submit">Add Creator</button>
      </form>
    </main>
  );
};

export default AddCreator;
