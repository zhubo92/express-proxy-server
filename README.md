# express 代理服务器

问题：前端服务器和后端服务器不在同一域名下，前端访问后端接口跨域，业务需求不允许后端开启允许跨域访问
解决方案：在前端服务器上起一个代理服务器，利用代理服务器转发请求到目标服务器。前端访问代理服务器接口，完美解决跨域。

此方法与 Nginx 反向代理同理。

```shell
  nvm use $(Get-Content .nvmrc)
```

```shell
  npm install
```

```shell
  npm run start
```

