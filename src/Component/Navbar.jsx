import { Link } from "react-router-dom";
import "./Nav.css";
import { useState } from "react";

export default function Navbar({ setSearch }) {
  let [Topic, setTopic] = useState("");
  return (
    <>
      <div className="Navbar">
        <h1>New.io</h1>

        <div className="Searchbar">
          <input
            onChange={(e) => setTopic(e.target.value)}
            type="text"
            placeholder="Search here..."
          />
          <button
            onClick={() => {
              setSearch(Topic);
            }}
          >
            Search
          </button>
        </div>

        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/News">News</Link>
          </li>
          <li>
            <Link to="/Login">Login</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
