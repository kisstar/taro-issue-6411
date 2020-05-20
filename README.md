# taro-issue-6411

使用 `lerna + yarn workspace` 编译 `taro-ui` 组件的结果中 `.wxml` 文件输出路径异常。

针对 [issue-6411][issues] 提供此最小复现案例。

[issues]: https://github.com/NervJS/taro/issues/6411

## 如何复现

```bash
yarn global add @tarojs/cli@2.2.3
yarn install
yarn build
```
