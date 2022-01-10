import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import { useState, useEffect } from "react";
import axios from "axios";
const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    let getRandomLists = async () => {
      try {
        await axios
          .get(
            `lists${type ? "?type=" + type : ""}${
              genre ? "&genre=" + genre : ""
            }`,
            {
              headers: {
                token:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGE5ZTRkYzQzYzc4MmUzZDk3N2VjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTczNTQ4MSwiZXhwIjoxNjQxODIxODgxfQ.JdwEMgPMA-qcQFS1ZYWP1EFwn0tfnbdBKYULbYHXH4E",
              },
            }
          )
          .then((res) => {
            const listData = res.data;
            setLists(listData);
          });
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();

    return () => (getRandomLists = null);
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list, index) => (
        <List key={index} list={list} />
      ))}
      <List />
    </div>
  );
};

export default Home;
