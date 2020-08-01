# taro-issue-6411

针对 [issue-6411][issues] 提供此最小复现案例。

使用 `lerna + yarn workspace` 编译 `taro-ui` 组件的结果中 `.wxml` 文件输出路径异常。

## 如何复现

- 使用 `taro` 初始化仓库：`typescript + wxcloud` 模版
- 添加 `lerna + yarn workspace`

```json
// lerna.json
{
  "version": "1.0.0",
  "npmClient": "yarn",
  "useWorkspaces": true
}

// package.json
{
  "private": true,
  "workspaces": [
    "client"
  ],
  "scripts": {
    "dev": "yarn workspace client dev:weapp",
    "build": "yarn workspace client build:weapp"
  }
}
```

- 添加并使用 `taro-ui`

```javascript
// client/src/pages/index/index.tsx
import { AtButton } from "taro-ui";

export default class Index extends Component {
  render() {
    return (
      <View className="index">
        <Login />
        <AtButton type="primary">按钮文案</AtButton>
      </View>
    );
  }
}
```

- 编译

```bash
yarn build
```

### 期望行为

将 `taro-ui` 组件的 `.wxml` 文件编译到对应的组件目录下。

而非 `npm/_/_/node_modules/t ...`。

### 报错信息

![image](https://user-images.githubusercontent.com/58550322/82414848-3dca3000-9aaa-11ea-9f26-44d3eac34029.png)

### 系统信息

`taro-ui: ^2.3.4`

```bash
👽 Taro v2.2.3


  Taro CLI 2.2.3 environment info:
    System:
      OS: macOS 10.15.4
      Shell: 5.7.1 - /bin/zsh
    Binaries:
      Node: 10.16.0 - ~/.nvm/versions/node/v10.16.0/bin/node
      Yarn: 1.22.4 - ~/.nvm/versions/node/v10.16.0/bin/yarn
      npm: 6.9.0 - ~/.nvm/versions/node/v10.16.0/bin/npm
    npmPackages:
      @tarojs/taro: 2.2.3 => 2.2.3
      eslint-plugin-taro: 2.2.3 => 2.2.3
```

[issues]: https://github.com/NervJS/taro/issues/6411
