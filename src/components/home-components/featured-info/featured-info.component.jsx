import React from 'react';
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import './featured-info.styles.css';

const FeaturedInfo = () => {
  return (
    <div className="featured-container">
      <div className="featured-item">
        <span className="featured-title">Revanue</span>
        <div className="featured-money-container">
          <span className="featured-money">$ 2,415</span>
          <span className="featured-money-rate">
            -11.4 <ArrowDownward className="featured-arrow-icon negative" />
          </span>
        </div>
        <span className="featured-subtitle">Compared to last month</span>
      </div>
      {/* second item */}
      <div className="featured-item">
        <span className="featured-title">Sales</span>
        <div className="featured-money-container">
          <span className="featured-money">$ 4,415</span>
          <span className="featured-money-rate">
            -1.4 <ArrowDownward className="featured-arrow-icon negative" />
          </span>
        </div>
        <span className="featured-subtitle">Compared to last month</span>
      </div>
      {/* third item */}
      <div className="featured-item">
        <span className="featured-title">Cost</span>
        <div className="featured-money-container">
          <span className="featured-money">$ 2,225</span>
          <span className="featured-money-rate">
            +2.4 <ArrowUpward className="featured-arrow-icon" />
          </span>
        </div>
        <span className="featured-subtitle">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
