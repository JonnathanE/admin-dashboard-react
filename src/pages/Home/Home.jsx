import React from 'react';
import Chart from '../../components/Chart/Chart';
import FeaturedInfo from '../../components/FeatureInfo/FeaturedInfo';
import './home.css';

import { userData } from '../../data';
;


const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart title='User Analytics' data={userData} dataKey='Active User' grid />
        </div>
    );
};

export default Home;
