import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import Login from "./Pages/Login.jsx";
import { useState, lazy, Suspense } from "react";

const NewsWrapper = (props) => {
  const News = lazy(() => import("./Pages/News"));
  return (
    <Suspense fallback={<div>Loading News...</div>}>
      <News {...props} />
    </Suspense>
  );
};

export default function App() {
  let [Search, setSearch] = useState("India");

  return (
    <BrowserRouter>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/News" element={<NewsWrapper Search={Search} />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
