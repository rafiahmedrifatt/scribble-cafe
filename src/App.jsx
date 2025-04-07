import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [Bookmarked, setBookmarked] = useState([]);
  const handleBookmark = (blog) => {
    const newBookmark = [...Bookmarked, blog];
    setBookmarked(newBookmark);
  };
  return (
    <>
      <Navbar />
      <div className="flex">
        <div className="left-side-div w-[70%] text-center">
          <Blogs handleBookmark={handleBookmark} />
        </div>
        <div className="right-side-div w-[30%]">
          {Bookmarked.map((marked) => (
            <li>{marked.title}</li>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
