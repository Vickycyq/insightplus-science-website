# INSIGHTPLUS SCIENCE 首页

这是一个无需安装依赖的静态首页。用浏览器打开 `index.html` 即可预览。

## 修改页面内容

- **文字和卡片图片**：编辑 `script.js` 顶部的数据。`media` 保存图片地址；`products`、`industries`、`benefits`、`capabilities`、`certs` 和 `featured` 分别对应首页的卡片内容。
- **导航、标题、按钮和链接**：编辑 `index.html` 中对应的文本与 `href`。
- **版式和颜色**：编辑 `styles.css` 中的样式与 `:root` 颜色变量。
- **公司 Logo**：替换 `assets/company-logo.png` 即可更新全站页眉、页脚和后台中的 Logo。
- 产品、行业、能力和项目卡片都由内容数组生成，增删数组条目即可增删卡片。
- **Contacts 页面员工信息**：编辑 `contacts.js` 顶部的 `teamMembers` 列表，可修改姓名/团队、职位、头像、邮箱和 WhatsApp 号码。复制一组成员数据即可增加员工卡片。
- **公司社交媒体账号**：编辑同一文件中的 `companySocials` 列表。修改 `platform`、`label` 和 `url` 即可设置图标、显示名称和点击目标。支持 `linkedin`、`facebook`、`instagram`、`x`、`youtube`。
- **Blogs 页面**：打开 `blogs.html` 浏览 News 与 Knowledge 文章；点击右上角 **Manage Blogs** 进入可视化后台 `blogs-admin.html`，可新建、编辑、删除文章，设置分类、日期、作者、封面、摘要和正文，实时预览并保存草稿或发布。编辑器内容工具栏支持标题、粗体、斜体、列表和链接。
- **文章存储**：文章保存在当前浏览器的本地存储中，`blogs.html` 会自动读取并展示已发布文章。此静态版数据仅在当前浏览器中可用；如需多人登录管理或让所有访客读取同一内容，后续需要接入网站后台/内容服务。
- **产品目录和详情**：`products.html` 是产品列表页，左侧分类可筛选产品；点击任一产品进入 `product.html` 的对应详情。产品图片、介绍、类别和规格表统一维护在 `product-data.js` 的 `productCatalog` 列表中，首页产品分类卡片也读取这份数据。产品详情页的询价按钮会跳转到 `contacts.html`。
- **Solutions 页面**：`solutions.html` 介绍 Customized Solutions 与 OEM/ODM Services；首页及各页面导航链接均可进入该页。页脚 Solutions 栏现保留 Customized Solutions 和 OEM/ODM Services。
- **Company Profile**：公司简介位于 `contacts.html#company-profile`；各页脚的 Company Profile 链接都指向该处。主导航不再显示 About Us。
- 首页的所有 **Get a Quote** 按钮都会打开 `contacts.html`。

图片目前使用外部图片地址；上线时可将图片放入本地资源目录，再把 `script.js` 或 `contacts.js` 中的地址改为本地路径。员工和社交资料当前是演示内容，正式发布前请替换为真实信息。

## Cloudflare Pages 部署

- Build command: `sh build.sh`
- Build output directory: `dist`
- Root directory: 留空（项目根目录）

`build.sh` 会将网站页面、脚本、样式、站点地图、robots 文件和 `assets` 复制到 `dist`。不要把仓库根目录设为输出目录，以免把 Git 历史文件一并作为网站资源上传。

如果通过 Cloudflare Workers Builds 将仓库根目录直接作为静态资源目录，根目录的 `.assetsignore` 会排除 `.git` 和 `dist`，避免上传 Git 历史文件。
