import { useState, useEffect } from "react";
import axios from "axios";
import Comments from "./Comments";
import CreateComment from "./createComment";

interface Post {
    id: string;
    title: string;
    comments: Comment[];
   }
   
   interface Comment {
    id: string;
    status:string;
    content: string;
   }
   
   interface PostsData {
    [key: string]: Post;
   }


const Posts = () => {
  const [posts, setPosts] = useState<PostsData>({
  });

  const fetchPosts = async () : Promise<void> => {
    const res = await axios.get("http://posts.com/posts");

    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="flex rounded-md border-2 shadow-md"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="p-4">
          <h3 className="text-xl">{post.title}</h3>
          <div className=" mt-5 text-slate-700">
          <Comments comments={post.comments} />
          </div>
          <CreateComment postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="flex sm:flex-row  flex-wrap gap-5">
      {renderedPosts}
    </div>
  );
};

export default Posts;
