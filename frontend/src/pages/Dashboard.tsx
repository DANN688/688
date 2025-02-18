import React, { useEffect, useState } from "react";
import { Card, Row, Col } from "antd";
import ReactECharts from "echarts-for-react";
import axios from "../api/axiosInstance";

const Dashboard: React.FC = () => {
  const [data, setData] = useState({ 订单: 0, 库存: 0, 销售: 0 });

  useEffect(() => {
    // 假设后端有 /api/数据分析 接口返回 { 订单, 库存, 销售 }
    axios.get("/api/数据分析").then((res) => {
      setData(res.data);
    }).catch(() => {
      // 模拟数据
      setData({ 订单: 100, 库存: 50, 销售: 20000 });
    });
  }, []);

  const salesChart = {
    title: { text: "销售趋势" },
    xAxis: { type: "category", data: ["1月", "2月", "3月", "4月"] },
    yAxis: { type: "value" },
    series: [{ data: [120, 200, 150, 80], type: "line" }],
  };

  return (
    <div>
      <Row gutter={16}>
        <Col span={8}><Card title="订单总数">{data.订单}</Card></Col>
        <Col span={8}><Card title="库存总量">{data.库存}</Card></Col>
        <Col span={8}><Card title="销售总额">¥{data.销售}</Card></Col>
      </Row>
      <Card title="销售趋势">
        <ReactECharts option={salesChart} />
      </Card>
    </div>
  );
};

export default Dashboard;
