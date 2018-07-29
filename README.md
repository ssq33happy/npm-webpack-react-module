# npm-webpack-react-module
###react组件npm打包发布
- 根目录src为需打包的react组件
- 自定义package.json
```json
{
  "name": "npm-webpack-react-module", // npm打包发布的名称
  "version": "1.0.2", // 版本号
  "description": "",
  "main": "dist/index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "webpack-dev-server --mode development",
    "transpile": "babel src -d dist --copy-files",
    "prepublishOnly": "npm run transpile"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/ssq33happy/npm-webpack-react-module.git"
  },
  "author": "sunshiqiang", // 作者
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/ssq33happy/npm-webpack-react-module/issues"
  },
  "homepage": "https://github.com/ssq33happy/npm-webpack-react-module#readme",
  "peerDependencies": {
    "react": "^16.4.0",
    "react-dom": "^16.4.0"
  },
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3",
    "babel-loader": "^7.1.5",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "css-loader": "^1.0.0",
    "html-webpack-plugin": "^3.2.0",
    "react": "^16.4.1",
    "react-dom": "^16.4.1",
    "style-loader": "^0.21.0",
    "webpack": "^4.16.3",
    "webpack-cli": "^3.1.0",
    "webpack-dev-server": "^3.1.5"
  }
}

```
```javascript
npm adduser // 第一次发布执行（需有先注册npm账号并且邮箱验证之后执行）
npm publish // 发布npm包 （更新npm包同样的命令需改变版本号按版本规则更改）
```