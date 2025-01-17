import Posts from "./components/Posts"
import CreatePost from "./components/createPost"


function App() {


  return (
    <div className="flex flex-col p-4">
<h1 className="font-bold text-slate-600 mt-5 text-xl">My Blog</h1>
<div className="flex flex-col mt-20 sm:mt-60 items-center justify-center ">
<h1 className="sm:text-3xl text-slate-700 text-2xl font-normal">Write Something!</h1>
      <CreatePost />
      <hr className="text-slate-900 sm:mt-10 sm:w-60" />
      <div className="">
      <h1 className="text-2xl sm:text-3xl text-slate-700  py-4">Posts</h1>
      <Posts />
      </div>
</div>
    </div>
  )
}

export default App
