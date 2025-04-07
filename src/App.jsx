import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="left-side-div w-[70%] text-center">
          <Blogs />
        </div>
        <div className="right-side-div w-[30%]">
          <h1>reading time: 0</h1>
          <h1>Bookmark count: 0</h1>
        </div>
      </div>
    </>
  );
}

export default App;
