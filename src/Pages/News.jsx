import { useState, useEffect } from "react";
import axios from "axios";
import "./About.css";

export default function News({ Search }) {
  let [Newsdata, setNewsdata] = useState([]);
  let [VisibleNew, setVisibleNew] = useState(45);

  useEffect(() => {
    async function getdata() {
      let Res = await axios.get(
        `https://newsapi.org/v2/everything?q=${Search}&sortBy=publishedAt&apiKey=37a818d9413e4929a20330c4dcf01b4d`
      );
      console.log(Res.data.articles);
      setNewsdata(Res.data.articles);
    }

    getdata();
  }, [Search]);

  return (
    <div>
      <center>
        <h1>Here are today's latest news.</h1>
        <section>
          {Newsdata.slice(0, VisibleNew).map((e) => (
            <div key={e.url} className="news-item">
              <img src={e.urlToImage} alt={e.title} />
              <h2>{e.author}</h2>
              <h1>{e.title}</h1>
              <p>{e.description}</p>
              {/* See More button now opens the article */}
              <a href={e.url} target="_blank" rel="noopener noreferrer">
                <button className="btn">Read More</button>
              </a>
            </div>
          ))}
        </section>
        <button
          className="Loadbtn"
          onClick={() => setVisibleNew((count) => count + 12)}
        >
          Load More
        </button>
      </center>
    </div>
  );
}
