import React from "react";
import Navbar from "../../Navbar/Navbar";
import "./OrderStats.scss"
import data from "./data.json";
import SideBar from "../../Sidebar/SideBar";
const WidgetOrderStats = () => {
  return (
    <div className='hello'>
    <SideBar/>
    <div>
      <table class='table'>
        <tr class="thead">
          <th class="trhead">Rvenue</th>
          <th class="trhead">Orders</th>
          <th class="trhead">Dine In</th>
          <th class="trhead">Take Away</th>
        </tr>
        <tbody class="tbody">
          {data.map((details) => (
            <tr class="thead">
              <td class="td">{details.Revenue}</td>
              <td class="td">{details.Orders}</td>
              <td class="td">{details.DineIn}</td>
              <td class="td">{details.Takeaway}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default WidgetOrderStats;
