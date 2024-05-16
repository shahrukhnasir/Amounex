import React from 'react'
import Chart from 'react-google-charts';

const VisitorInsights = () => {



    const data = [
        ["Year", "Sales", "Expenses"],
        ["2004", 1000, 400],
        ["2005", 1170, 460],
        ["2006", 660, 1120],
        ["2007", 1030, 540],
    ];

    const options = {
        title: "Company Performance",
        curveType: "function",
        legend: { position: "bottom" },
    };
    return (
        <Chart
            chartType="LineChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
            chartWrapperProps={{ style: { borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)" } }}
        />)
}

export default VisitorInsights