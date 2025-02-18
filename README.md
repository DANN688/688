# ERP 管理系统

这是一个基于 Spring Boot（后端）和 React + Vite（前端）的 ERP 系统示例，支持中文界面操作。  
包括用户管理、库存管理、订单管理、数据分析等模块。

## 目录结构
- `backend/`：后端 Spring Boot 项目
- `frontend/`：前端 React 项目
- 数据库 SQL 文件在 `backend/src/main/resources/sql/erp_db.sql`

## 后端运行步骤
1. 在 MySQL 中创建数据库并导入 SQL 文件：
   ```sh
   mysql -u root -p < backend/src/main/resources/sql/erp_db.sql
