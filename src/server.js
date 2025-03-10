import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import nftRoutes from './api/nftRoutes.js';

// 加载环境变量
dotenv.config();

// 创建Express应用
const app = express();

// 基本中间件
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

// 速率限制
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15分钟
  max: 100 // 限制每个IP 15分钟内最多100个请求
});
app.use('/api', limiter);

// API路由
app.use('/api', nftRoutes);

// 错误处理中间件
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Internal Server Error',
    error: err.message
  });
});

// 404处理
app.use((req, res) => {
  res.status(404).json({ message: 'Not Found' });
});

// 启动服务器
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
