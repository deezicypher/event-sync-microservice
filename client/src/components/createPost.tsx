import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event:React.FormEvent<HTMLFormElement>):Promise<void> => {
    event.preventDefault();

    await axios.post("http://posts.com/posts", {
      title,
    });

    setTitle("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mt-5 flex gap-3">
          <label className="text-base">Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-black rounded-md "
          />
        </div>
        <button className="border bg-green-300 px-2 py-1 mt-3 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
