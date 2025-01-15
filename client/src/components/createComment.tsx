import React, { useState } from "react";
import axios from "axios";

const CreateComment = ({ postId }:{postId:string}) => {
  const [content, setContent] = useState("");

  const onSubmit = async (event:React.FormEvent<HTMLFormElement>):Promise<void> => {
    event.preventDefault();

    await axios.post(`http://posts.com/posts/${postId}/comments`, {
      content,
    });
    setContent("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="mt-5 flex gap-3">
          
          <input
            value={content}
            placeholder="Comment"
            onChange={(e) => setContent(e.target.value)}
            className="border  rounded-2xl p-4 outline-none bg-slate-100"
          />
        </div>
        <button className="border bg-orange-300 px-2 py-1 mt-3 rounded-md">Submit</button>
      </form>
    </div>
  );
};

export default CreateComment;
