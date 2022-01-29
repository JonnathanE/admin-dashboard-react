import React from 'react';
import Chart from '../../components/Chart/Chart';
import FeaturedInfo from '../../components/FeatureInfo/FeaturedInfo';
import './home.css';

import { userData } from '../../data';
import WidgetSm from '../../components/WidgetSm/WidgetSm';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
;


const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart title='User Analytics' data={userData} dataKey='Active User' grid />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    );
};

export default Home;
