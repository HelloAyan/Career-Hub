import React, { PureComponent } from 'react';
import Styles from './Statistics.module.css';
import Menu from '../Menu/Menu';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


const data = [
    {
        name: 'Assignment 1',
        Marks: 60,

    },
    {
        name: 'Assignment 2',
        Marks: 60,

    },
    {
        name: 'Assignment 3',
        Marks: 58,

    },
    {
        name: 'Assignment 4',
        Marks: 50,

    },
    {
        name: 'Assignment 5',
        Marks: 48,

    },
    {
        name: 'Assignment 6',
        Marks: 50,

    },
    {
        name: 'Assignment 7',
        Marks: 55,

    },
];

const Statistics = () => {

    return (
        <div>
            <Menu />
            <div className={Styles.mainContainer}>
                <div className={Styles.title}>Statistics</div>

                <div className={Styles.chartSection}>
                    <AreaChart
                        width={1100}
                        height={400}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="Marks" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </div>
            </div>
        </div>
    )
}

export default Statistics;