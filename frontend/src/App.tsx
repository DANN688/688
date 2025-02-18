import React from "react";
import { Layout, Menu } from "antd";
import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Orders from "./pages/Orders";
import Suppliers from "./pages/Suppliers";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider collapsible>
        <Menu theme="dark" mode="inline">
          <Menu.Item key="1"><Link to="/">📊 仪表盘</Link></Menu.Item>
          <Menu.Item key="2"><Link to="/inventory">📦 库存管理</Link></Menu.Item>
          <Menu.Item key="3"><Link to="/orders">📜 订单管理</Link></Menu.Item>
          <Menu.Item key="4"><Link to="/suppliers">🏭 供应商管理</Link></Menu.Item>
          <Menu.Item key="5"><Link to="/sales">💰 销售管理</Link></Menu.Item>
          <Menu.Item key="6"><Link to="/reports">📈 数据分析</Link></Menu.Item>
          <Menu.Item key="7"><Link to="/settings">⚙️ 系统设置</Link></Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: "#fff", padding: 0 }}>ERP 管理系统</Header>
        <Content style={{ margin: "16px" }}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/reports" element={<Reports />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
