-- 创建数据库
CREATE DATABASE IF NOT EXISTS erp_db;
USE erp_db;

-- 创建用户表
CREATE TABLE IF NOT EXISTS 用户 (
    编号 BIGINT AUTO_INCREMENT PRIMARY KEY,
    用户名 VARCHAR(50) NOT NULL UNIQUE,
    密码 VARCHAR(100) NOT NULL,
    角色 VARCHAR(20) NOT NULL
);

-- 插入初始数据
INSERT INTO 用户 (用户名, 密码, 角色) VALUES 
('管理员', 'admin123', '管理员'),
('普通用户', 'user123', '用户');
