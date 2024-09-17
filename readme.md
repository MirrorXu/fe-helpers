## 项目介绍
- 简洁、可靠的前端常用Helpers
- 支持Typescript

## 使用
### npm
安装
```bash
npm install fe-helpers
```
使用
```js
import { isString } from 'fe-helpers'
const str = '1'
console.log(isString(str))
```
  
## git commit message
规则：`type(scope?): subject` 。

`scope`是可选项; 支持多scope，scope之间可以使用"/", "\" 和 "," 分割。

`type`支持的类型如下，代表的意义做出了解释。（ commitlint-config-conventional- 基于 Angular 约定）。

```text
“build”   :可能表示与构建相关的提交，比如构建工具的配置更改或构建流程的优化。

“chore”   :通常用于一些杂务性的任务，如清理代码、更新依赖等。

“ci”      :可能涉及持续集成相关的更改，比如配置 CI 工具或修复 CI 流程中的问题。

“docs”    :表示对文档的修改，包括添加、更新或改进文档内容。

“feat”    :代表新功能的添加。

“fix”     :用于修复代码中的错误。

“perf”    :表示性能优化相关的提交。

“refactor”:指对代码进行重构，不改变其外部行为，只是改进代码结构。

“revert”  :用于撤销之前的提交。

“style”   :通常涉及代码风格的更改，如格式化、代码规范的调整等。

“test”    :表示与测试相关的提交，如添加新的测试用例或修复测试中的问题。
```
