import axios from "axios";
import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { useEffect } from "react";
import { useState } from "react";
import "./listItem.scss";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      await axios
        .get("movies/" + item, {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGE5ZTRkYzQzYzc4MmUzZDk3N2VjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTczNTQ4MSwiZXhwIjoxNjQxODIxODgxfQ.JdwEMgPMA-qcQFS1ZYWP1EFwn0tfnbdBKYULbYHXH4E",
          },
        })
        .then((res) => {
          const data = res.data;
          setMovie(data);
        });
    };

    getMovies();
  }, [item]);
  return (
    <Link to={{ pathname: "/watch" }} state={{ movie: movie }}>
      <div
        className="listItem"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      >
        <img src={movie.img} alt="" />

        {isHovered && (
          <>
            <video src={movie.trailer} autoPlay={true} loop />
            <div className="itemInfo">
              <div className="icons">
                <PlayArrow className="icon" />
                <Add className="icon" />
                <ThumbUpAltOutlined className="icon" />
                <ThumbDownAltOutlined className="icon" />
              </div>

              <div className="itemInfoTop">
                <span>1 hour 14 mins</span>
                <span className="limit">+{movie.limit}</span>
                <span>{movie.year}</span>
              </div>

              <div className="desc">{movie.desc}</div>

              <div className="genere">{movie.genre}</div>
            </div>
          </>
        )}
      </div>
    </Link>
  );
};

export default ListItem;
