import React from "react";
import "./Featureinfo.css";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

export default function Featureinfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle"> Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2000</span>
          <span className="featuredMoneyRate">
            -11.4 <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle"> Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2000</span>
          <span className="featuredMoneyRate">
            -45.4 <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle"> Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$45</span>
          <span className="featuredMoneyRate">
            +11.4 <ArrowUpwardIcon className="featuredIcon " />
          </span>
        </div>
        <span className="featuredSub">Compared to Last Month</span>
      </div>
    </div>
  );
}
