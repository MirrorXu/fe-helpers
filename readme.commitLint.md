# 前端提交信息规范与校验配置
## 一、 概要
- 目的：提高前端项目代码的可维护性和团队协作效率，提交历史易于理解和追踪。
- 校验工具配置
## 二、工具介绍
- husky： Husky 是一个 Git 钩子工具，它可以在 Git 操作的特定阶段（如 commit、push 等）执行自定义脚本。
  通过 husky，我们可以在提交代码之前自动运行一些检查和验证，确保提交的质量。
- commitlint： commitlint 用于检查提交信息的格式是否符合规范。 它可以根据预定义的规则来验证提交信息，确保提交信息清晰、准确地描述了提交的内容。
- @commitlint/config-conventional： 这是一个 commitlint 的配置文件，遵循了常规的提交规范格式，继承了Angular的提交规范。
  它定义了不同类型的提交（如 feat、fix、docs 等）以及对应的提交信息格式要求。
- 参考：
    - [husky](https://github.com/typicode/husky#readme) : enhances your commits and more woof!
    - [commitlint](https://github.com/conventional-changelog/commitlint#readme): Lint commit messages
    - [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional):  Lint your conventional commits
## 三、安装与配置
#### 1.准备工作
- 确保项目中已经进行了npm和git的初始化。
- `pwd` 查看当前路径，确保在项目根目录下
#### 2.工具安装
```bash
# 安装开发依赖
npm install -D husky @commitlint/{cli,config-conventional}
```
#### 3.husky初始化
```bash
npx husky init  
```
此时项目中会自动添加`npm script` 和 `.husky`文件夹。
#### 4.配置husky钩子
在 `.husky`文件夹下添加`commit-msg`文件，文件内容如下：
```bash
echo "checking commit"
npx --no -- commitlint --edit $1
echo "success commit"
```
> 注意：如果`.husky`文件夹下存在`pre-commit`文件，需要将该文件内容清空或者将文件删除。因为在执行`husky init` 时，会自动添加`npm test`命令到`.husky/pre-commit`脚本中，可以根据项目需要进行取舍。
#### 5.配置规则
在项目根目录下创建`commitlint.config.js`文件，内容如下：
```js
module.exports = {
    extends: ['@commitlint/config-conventional']
};
```
#### 6.测试有效性
```bash
git commit -m 'you commit message'
```

## 四、代码规范：
在项目中使用 [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional)，该配置继承了著名开源项目`Angular`的规范，是目前比较主流的规范。

#### 提交信息结构
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
#### type 可选值（小写）、含义
1. **build**
   与构建相关的提交，可能包括构建系统的配置更改、构建流程的优化等。例如：`build: 调整构建脚本以支持新的环境变量`。

2. **chore**
   其他杂项任务，通常是一些不直接影响功能、文档、测试等方面的小改动，如更新依赖、调整配置文件等。例如：`chore: 更新项目依赖包`。

3. **ci**
   与持续集成（Continuous Integration）相关的提交，比如配置 CI/CD 流水线、修复 CI 中的错误等。例如：`ci: 修复持续集成脚本中的路径错误`。

4. **docs**
   文档更新，包括项目文档、API 文档、用户手册等的修改和完善。例如：`docs: 更新项目 README 文件`。

5. **feat**
   新功能的添加。例如：`feat: 实现用户个性化推荐功能`。

6. **fix**
   修复 bug，解决代码中的错误。例如：`fix: 修复页面加载失败的问题`。

7. **perf**
   性能优化相关的提交，旨在提高代码的执行效率、减少资源占用等。例如：`perf: 优化加载速度`。

8. **refactor**
   代码重构，对现有代码进行结构调整以提高可读性、可维护性或性能，但不改变其外部行为。例如：`refactor: 提取重复代码为公共函数`。

9. **revert**
   回滚提交，用于撤销之前的某个提交。例如：`revert: 回滚上一个有问题的提交`。

10. **style**
    代码格式方面的更改，如调整缩进、添加空格、统一代码风格等，不影响功能。例如：`style: 统一代码缩进风格`。

11. **test**
    与测试相关的提交，包括添加测试用例、修复测试中的错误等。例如：`test: 增加单元测试覆盖度`。



