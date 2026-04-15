# WOWTI

一个模仿 SBTI 风格的无厘头人格测试页面：
- 10 道题
- 每题 4 个选项
- 结果输出为《魔兽世界》职业/专精推荐

## 本地预览

```bash
cd test
python3 -m http.server 4173
```

然后访问：`http://localhost:4173`

## GitHub Pages 部署建议

1. 将仓库推送到 GitHub。
2. 在仓库 `Settings -> Pages` 里，选择 `Deploy from a branch`。
3. 分支选择 `main`（或你的默认分支），目录选择 `/root`。
4. 若你有自定义域名 `wowti.dev`：
   - 将 DNS 指向 GitHub Pages。
   - 新建 `CNAME` 文件内容为 `wowti.dev`。
5. 页面路径可使用 `https://wowti.dev/test/`。

