# 文件同步工具

这个工具用于同步指定的文件。

## 用法

1. 克隆项目到本地。
3. 运行同步命令：`node sync.js`。

## 同步文件列表

以下是要同步的文件列表：

| 源文件                                            | 目标文件                                                     |
| ------------------------------------------------- | ------------------------------------------------------------ |
| ./src/components/MagentoRoute/magentoRoute.gql.js | ./node_modules/@magento/peregrine/lib/talons/MagentoRoute/magentoRoute.gql.js |
| ./src/components/MagentoRoute/useMagentoRoute.js  | ./node_modules/@magento/peregrine/lib/talons/MagentoRoute/useMagentoRoute.js |
| ./src/components/MagentoRoute/magentoRoute.js     | ./node_modules/@magento/venia-ui/lib/components/MagentoRoute/magentoRoute.js |
| ./src/components/LoadingIndicator/indicator.js    | ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.js |
| ./src/components/LoadingIndicator/static.js       | ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/static.js |
| ./needReplace/indicator.module.css                | ./node_modules/@magento/venia-ui/lib/components/LoadingIndicator/indicator.module.css |
| ./needReplace/Parser.js                           | ./node_modules/@magento/directive-parser/src/Parser.js       |

## 注意事项

- 运行该工具将会覆盖目标文件，请确保在执行之前备份目标文件。
- 确保源文件存在并且具有读取权限。
- 确保目标文件所在的目录存在并且具有写入权限。

## 贡献

如果你发现了问题或者有任何建议，欢迎提出 issue 或者提交 pull request。

## 许可证

[MIT](LICENSE)