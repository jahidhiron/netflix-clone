import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2456</span>
          <span className="featuredMoneyRate">
            -11.4
            <ArrowDownward className="featuredIcon negetive" />
          </span>
        </div>

        <div className="featuredSub">Compared to last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1915</span>
          <span className="featuredMoneyRate">
            -5.9
            <ArrowDownward className="featuredIcon negetive" />
          </span>
        </div>

        <div className="featuredSub">Compared to last month</div>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2213</span>
          <span className="featuredMoneyRate">
            13.15
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>

        <div className="featuredSub">Compared to last month</div>
      </div>
    </div>
  );
};

export default FeaturedInfo;
