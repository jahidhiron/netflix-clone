import "./featured.scss";
import { PlayArrow, InfoOutlined } from "@material-ui/icons";

const Featured = ({ type }) => {
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
      <img
        src="https://i.pinimg.com/originals/10/41/5d/10415d2d0accbbd6ae2ce6018fea86b9.jpg"
        alt=""
      />

      <div className="info">
        <img
          width="100%"
          src="https://images.thedirect.com/media/article_full/shang-chi-songs.jpg"
          alt="featured"
        />
        <span className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid error
          tenetur non, culpa magni sed vitae quam ratione veritatis natus sint
          minus doloribus id illo suscipit exercitationem omnis officia.
          Officia.
        </span>
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
