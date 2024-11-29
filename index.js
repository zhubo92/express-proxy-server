const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// 后端服务器地址
const backendServer = 'https://maitao.shop/api';

// 将代理服务器请求转发到目标服务器
// http://localhost:3000/api/type => https://maitao.shop/api/type

// 设置代理规则
app.use(
    '/api',
    createProxyMiddleware({
        target: backendServer,
        secure: false, // 忽略 SSL 证书验证
        on: {
            proxyReq: (proxyReq, req, res) => {
                console.log(`[Proxy Request] ${req.method} ${req.originalUrl}`);
            },
            proxyRes: (proxyRes, req, res) => {
                console.log(`[Proxy Response] Status: ${proxyRes.statusCode}`);
            },
            error: (err, req, res) => {
                console.error('[Proxy Error]', err);
                res.status(500).send('Proxy error occurred!');
            }
        }
    })
);

// 启动服务器
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Proxy server running on http://localhost:${PORT}`);
});
