import React from "react";
import "./WidgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };

  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="WidgetLgTh">Customer</th>
          <th className="WidgetLgTh">Date</th>
          <th className="WidgetLgTh">Amount</th>
          <th className="WidgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTR">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ammat </span>
          </td>
          <td className="widgetLgDate">31 Jan 2023 </td>
          <td className="widgetLgAmount">$125.00 </td>
          <td className="widgetLgStatus ">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTR">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ammat </span>
          </td>
          <td className="widgetLgDate">31 Jan 2023 </td>
          <td className="widgetLgAmount">$125.00 </td>
          <td className="widgetLgStatus ">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTR">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ammat </span>
          </td>
          <td className="widgetLgDate">31 Jan 2023 </td>
          <td className="widgetLgAmount">$125.00 </td>
          <td className="widgetLgStatus ">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTR">
          <td className="widgetLgUser">
            <img
              src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Ammat </span>
          </td>
          <td className="widgetLgDate">31 Jan 2023 </td>
          <td className="widgetLgAmount">$125.00 </td>
          <td className="widgetLgStatus ">
            <Button type="Declined" />
          </td>
        </tr>

      </table>
    </div>
  );
}
