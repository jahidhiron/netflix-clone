import "./home.css";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Agu",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const Home = () => {
  const memoMonth = useMemo(() => MONTHS, []);
  const [userStat, setUserState] = useState([]);

  useEffect(() => {
    let statList = null;
    (async function () {
      try {
        await axios
          .get("users/stats", {
            headers: {
              token:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZGE5ZTRkYzQzYzc4MmUzZDk3N2VjYyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MTk5MzE0MCwiZXhwIjoxNjQyMDc5NTQwfQ.GS8iyQs-Mwcv9EIZp55JyOCorJu3diup8dPEJhIDFgE",
            },
          })
          .then((res) => {
            statList = res.data.sort((a, b) => a._id - b._id);
          });

        statList.map((list) =>
          setUserState((prevState) => [
            ...prevState,
            { name: memoMonth[list._id - 1], "New User": list.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    })();
  }, [memoMonth]);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStat} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
