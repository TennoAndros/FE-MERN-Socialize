import React from "react";
import "./TrendCard.css";
import { TrendData } from "../../data/TrendData";

const TrendCard = () => {
  return (
    <div className="TrendCard">
      <h3>Trending Now</h3>
      {TrendData.map((trend) => {
        return (
          <div className="Trend" key={trend.name}>
            <span>#{trend.name}</span>
            <span>{trend.shares}k shares</span>
          </div>
        );
      })}
    </div>
  );
};

export default TrendCard;
