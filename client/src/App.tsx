import Posts from "./components/Posts"
import CreatePost from "./components/createPost"


function App() {


  return (
    <div className="flex flex-col p-10">
<h1 className="font-bold text-slate-600 mt-5 text-3xl">My Blog</h1>
<div className="flex flex-col mt-10">
<h1>Make a  Post</h1>
      <CreatePost />
      <hr className="text-slate-800 mt-10" />
      <h1 className="text-2xl py-4">Posts</h1>
      <Posts />
</div>
    </div>
  )
}

export default App
