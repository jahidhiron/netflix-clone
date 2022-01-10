import axios from "axios";
import "./featured.scss";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";
import { useState } from "react";
import { useEffect } from "react";

const Featured = ({ type }) => {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getRandomContent = async () => {
      try {
        await axios(`movies/random?type=${type}`, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGE5ZTRkYzQzYzc4MmUzZDk3N2VjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTczNTQ4MSwiZXhwIjoxNjQxODIxODgxfQ.JdwEMgPMA-qcQFS1ZYWP1EFwn0tfnbdBKYULbYHXH4E",
          },
        }).then((res) => {
          const randomData = res.data[0];
          setContent(randomData);
        });
      } catch (err) {
        console.log(err);
      }
    };
    getRandomContent();
  }, []);
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select name="genere" id="genere">
            <option>Genere</option>
            <option value="adventure">Adventure</option>
            <option value="adventure">Adventure</option>
            <option value="comedy">Comedy</option>
            <option value="crime">Crime</option>
            <option value="fantasy">Fantasy</option>
            <option value="historical">Historical</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="sci-fi">Sci-Fi</option>
            <option value="thriller">Thriller</option>
            <option value="western">Western</option>
            <option value="animation">Animation</option>
            <option value="drama">Drama</option>
            <option value="documentary">Documentary</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />

      <div className="info">
        <img width="100%" src={content.imgSm} alt="featured" />
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
