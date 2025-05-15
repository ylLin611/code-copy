# github.io 流水线发布
## Github创建项目

- Github 创建一个空项目
- 本地要发布的项目执行如下
```
git init
git remote add origin https://github.com/xxxx
git branch -M main
git add .
git commit -m 'build: astro init'
git push -u origin main
```

## Github 配置

- 点击 `Setting` - `Pages` - `Source` - `Github Actions` - `Static HTML`
  ![Github 配置](/tools/github/github-setting-pages.png)

- 这时候会直接生成一个工作流文件，先不用管 直接 commit change
  ![Github 配置](/tools/github/github-workflow.png)

## 本地修改

- 回到本地项目中，执行`git pull`
- 修改`/.github/workflows/static.yml`
  - 由于推到 `static html` 方式推到`github.io`默认访问的是项目下的`index.html`文件，所以需要修改下`base path`
    ![yml 文件修改](/tools/github/yml.png)
- 修改 gitignore 文件，把`/dist`目录添加进去
- 执行 `pnpm build`
- 推代码

## 测试结果
- 在 `Github` 项目中点击 `Actions` 会看到工作流执行过程，点击最新工作流
![撒花](/tools/github/ending.png)
- 点击这个链接，撒花！ 恭喜你！ 成功部署到了 `github.io`