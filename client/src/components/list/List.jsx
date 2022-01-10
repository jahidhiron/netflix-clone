import "./list.scss";
import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons";
import ListItem from "../listItem/ListItem";
import { useRef, useState } from "react";

const List = ({ list }) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isMoved, setIsMoved] = useState(false);
  const listRef = useRef();

  // list && list.content.map((item) => console.log(item));

  const handleArrowClick = (direction) => {
    setIsMoved(true);
    // further implement
    let distance = listRef.current.getBoundingClientRect().x - 50;
    if (direction === "left" && slideNumber > 0) {
      setSlideNumber((prevSlideNumber) => prevSlideNumber - 1);
      listRef.current.style.transform = `translate(${230 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 5) {
      setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);
      listRef.current.style.transform = `translate(${-230 + distance}px)`;
    }
  };

  return (
    <div className="list">
      <span className="listTitle">Continue to watch</span>
      <div className="wrapper">
        <ArrowBackIosOutlined
          className="sliderArrow left"
          onClick={() => handleArrowClick("left")}
          style={{ display: !isMoved && "none" }}
        />
        <div className="container" ref={listRef}>
          {list &&
            list.content.map((item, index) => (
              <ListItem key={index} index={index} item={item} />
            ))}
        </div>
        <ArrowForwardIosOutlined
          className="sliderArrow right"
          onClick={() => handleArrowClick("right")}
        />
      </div>
    </div>
  );
};

export default List;
