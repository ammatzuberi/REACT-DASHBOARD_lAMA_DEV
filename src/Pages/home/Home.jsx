import React from "react";
import "./home.css";
import Featureinfo from "./../../Components/featureinfo/Featureinfo";
import Charts from "../../Components/Chart/Charts";
import { UserData } from "../../dummyData";
import WidgetSm from "../../Components/widgetSm/WidgetSm";
import WidgetLg from "../../Components/widgetLg/WidgetLg";
export default function Home() {
  return (
    <div className="home">
      <Featureinfo />
      <Charts
        data={UserData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
