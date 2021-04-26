import React from "react";
import ReactEcharts from 'echarts-for-react';



const EchartsTest = () => {
    const option = {
      xAxis: {
        type: "category",
        data: ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [7999, 4566, 3444, 4342, 3000, 3423, 11111],
          type: "line",
        },
      ],
    };
    return (
      <ReactEcharts
        option={option}
        style={{ height: "400px", width: "100%" }}
      />
    );
}

export default EchartsTest;