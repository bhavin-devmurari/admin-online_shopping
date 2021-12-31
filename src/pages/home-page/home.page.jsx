import React from 'react';
import FeaturedInfo from '../../components/home-components/featured-info/featured-info.component';
import NewUserList from '../../components/home-components/new-user-list/new-user-list.component';
import WidgetLg from '../../components/home-components/widget-lg/widget-lg.component';
import Chart from '../../components/line-chart/line-chart.component';
import { userData } from '../../dummyData';

import './home.styles.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="home-widgets">
        <NewUserList />
        <WidgetLg />
      </div>
    </div>
  );
};
export default HomePage;
