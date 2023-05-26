import React from "react";
import "./DashboardItem.css";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

const DashboardItem = ({
  image,
  title,
  uniquePlays,
  totalPlays,
  completionRate,
  clickRate,
  downloadRate,
}) => {
  const lineChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Unique Plays (K)",
        data: uniquePlays,
        backgroundColor: "#fc9614",
        borderColor: "black",
        borderWidth: 1,
        fill: true,
      },
      {
        label: "Total Plays (M)",
        data: totalPlays,
        backgroundColor: "#EEEEEE",
        borderColor: "black",
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  const barChartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Click Rate ",
        data: clickRate,
        backgroundColor: "#17d4c8",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "Download Rate ",
        data: downloadRate,
        backgroundColor: "#eeeeee",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        type: "linear",
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="body">
      <h2>{title}</h2>
      <div className="table-container">
        <img className="image" src={image} alt={title} />
        <table>
          <tbody>
            <tr>
              <th>Month</th>
              <th>Jan</th>
              <th>Feb</th>
              <th>March</th>
              <th>April</th>
              <th>May</th>
              <th>June</th>
              <th>July</th>
              <th>Aug</th>
              <th>Sept</th>
              <th>Oct</th>
              <th>Nov</th>
              <th>Dec</th>
            </tr>
            <tr>
              <th>Unique Plays (K)</th>
              {uniquePlays.map((data, index) => (
                <td key={index}>{data}</td>
              ))}
            </tr>
            <tr>
              <th>Total Plays (M)</th>
              {totalPlays.map((data, index) => (
                <td key={index}>{data}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <b>
          Completion Rate:{" "}
          {completionRate &&
            Array.from(String(completionRate)).map((data, index) => (
              <span key={index}>{data}</span>
            ))}
          %
        </b>
        <div className="progress-bar">
        <div className="progress" style={{ width: `${completionRate}%` }} />
      </div>
      </p>


      <div className="charts">
      <div className="line-chart">
        <Line data={lineChartData} options={chartOptions} />
      </div>
      <div className="Bar-chart">
        <Bar data={barChartData} options={chartOptions} />
      </div>

      </div>
    </div>
  );
};

export default DashboardItem;
