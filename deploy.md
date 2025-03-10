# 阿里云Ubuntu服务器部署指南

## 1. 本地准备

首先在本地构建项目：
```bash
# 安装依赖
npm install

# 构建生产版本
npm run build
```

构建完成后，dist目录中包含了要部署的文件。

## 2. 服务器环境准备

SSH连接到服务器后，执行以下命令：

```bash
# 更新包列表
sudo apt update
sudo apt upgrade -y

# 安装Node.js和npm
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# 安装Nginx
sudo apt install nginx -y

# 启动Nginx并设置开机自启
sudo systemctl start nginx
sudo systemctl enable nginx
```

## 3. Nginx配置

创建Nginx配置文件：
```bash
sudo nano /etc/nginx/sites-available/worldads
```

添加以下配置：
```nginx
server {
    listen 80;
    server_name your_domain_or_ip;  # 替换为你的域名或IP

    root /var/www/worldads/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 启用gzip压缩
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
}
```

创建符号链接并测试配置：
```bash
sudo ln -s /etc/nginx/sites-available/worldads /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 4. 部署项目

在服务器上创建部署目录：
```bash
sudo mkdir -p /var/www/worldads
sudo chown -R $USER:$USER /var/www/worldads
```

## 5. 上传文件

在本地执行（替换为你的服务器IP）：
```bash
scp -r dist/* username@your_server_ip:/var/www/worldads/dist/
```

## 6. 安全设置

配置防火墙：
```bash
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 22/tcp
sudo ufw enable
```

## 7. SSL配置（可选）

如果需要HTTPS：
```bash
# 安装Certbot
sudo apt install certbot python3-certbot-nginx -y

# 获取SSL证书
sudo certbot --nginx -d your_domain.com
```

## 8. 维护命令

一些常用的维护命令：
```bash
# 查看Nginx状态
sudo systemctl status nginx

# 重启Nginx
sudo systemctl restart nginx

# 查看错误日志
sudo tail -f /var/log/nginx/error.log

# 查看访问日志
sudo tail -f /var/log/nginx/access.log
```

## 注意事项

1. 确保服务器安全组/防火墙开放了80（HTTP）和443（HTTPS）端口
2. 定期备份网站数据
3. 定期更新系统和依赖包
4. 监控服务器资源使用情况
5. 配置日志轮转以防止日志文件过大
