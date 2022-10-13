import React, { Fragment } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Label,
} from "recharts";
import "./BarChartComponent.scss";
import PropTypes from "prop-types";

const BarChartComponent = ({
  data,
  xDataKey,
  yDataKey,
  yLabel,
  xLabel,
  chartHeader,
}) => {
  return (
    <Fragment>
      <h2>{chartHeader}</h2>
      <div className="BarChartContainer">
        <BarChart width={1000} height={400} data={data}>
          <CartesianGrid />
          <Legend />
          <Bar dataKey={yDataKey} fill="#8884d8" />
          <XAxis height={40} dataKey={xDataKey}>
            <Label value={xLabel} offset={0} position="insideBottom" />
          </XAxis>
          <YAxis width={90}>
            <Label value={yLabel} offset={0} position="insideLeft" />
          </YAxis>
        </BarChart>
      </div>
    </Fragment>
  );
};

BarChartComponent.propTypes = {
    data:PropTypes.array.isRequired,
    xDataKey:PropTypes.string.isRequired,
    yDataKey:PropTypes.string.isRequired,
    xLabel: PropTypes.string,
    yLabel:PropTypes.string,
    chartHeader:PropTypes.string,
};

export default BarChartComponent;
