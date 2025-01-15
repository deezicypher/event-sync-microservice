import React, { useState } from "react";
import axios from "axios";

const CreatePost = () => {
  const [title, setTitle] = useState("");

  const onSubmit = async (event:React.FormEvent<HTMLFormElement>):Promise<void> => {
    event.preventDefault();

    await axios.post("http://posts.com/posts/create", {
      title,
    });

    setTitle("");
  };

  return (
    <div >
      <form onSubmit={onSubmit} className="flex flex-col  p-4 ">
        <div className="mt-5 flex gap-3 ">
          
          <input
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            className="border  rounded-2xl p-4 outline-none bg-slate-100 sm:w-[600px] w-screen h-[80px]"
          />
        </div>
        <button className="border bg-green-400  py-1 px-4 mt-3 rounded-xl">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
