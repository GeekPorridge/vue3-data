## 🚀 开发

```bash
# 配置
1. 一键安装 .vscode 目录中推荐的插件
2. node 版本 18.x 或 20+
3. pnpm 版本 8.x 或最新版

# 安装依赖
pnpm i

# 启动服务
pnpm dev
```

## 项目目录结构说明

```
vue3-data
├─ .editorconfig
├─ .env
├─ .env.development
├─ .env.production
├─ .env.staging
├─ .eslintignore
├─ .eslintrc.cjs
├─ .git
├─ .gitignore
├─ .husky
│  └─ _
│     ├─ .gitignore
│     ├─ applypatch-msg
│     ├─ commit-msg
│     ├─ h
│     ├─ husky.sh
│     ├─ post-applypatch
│     ├─ post-checkout
│     ├─ post-commit
│     ├─ post-merge
│     ├─ post-rewrite
│     ├─ pre-applypatch
│     ├─ pre-auto-gc
│     ├─ pre-commit
│     ├─ pre-push
│     ├─ pre-rebase
│     └─ prepare-commit-msg
├─ .npmrc
├─ .prettierignore
├─ LICENSE
├─ README.md
├─ index.html
├─ package.json
├─ pnpm-lock.yaml
├─ prettier.config.js
├─ public
│  └─ app-loading.css
├─ src
│  ├─ App.vue
│  ├─ api
│  │  ├─ hook-demo
│  │  │  ├─ use-fetch-select.ts
│  │  │  └─ use-fullscreen-loading.ts
│  │  ├─ login
│  │  │  ├─ index.ts
│  │  │  └─ types
│  │  │     └─ login.ts
│  │  └─ table
│  │     ├─ index.ts
│  │     └─ types
│  │        └─ table.ts
│  ├─ assets
│  │  ├─ docs
│  │  │  ├─ preview1.png
│  │  │  ├─ preview2.png
│  │  │  └─ preview3.png
│  │  ├─ error-page
│  │  │  ├─ 403.svg
│  │  │  └─ 404.svg
│  │  ├─ layouts
│  │  │  ├─ logo-text-1.png
│  │  │  ├─ logo-text-2.png
│  │  │  └─ logo.png
│  │  └─ login
│  │     ├─ close-eyes.png
│  │     ├─ face.png
│  │     ├─ hand-down-left.png
│  │     ├─ hand-down-right.png
│  │     ├─ hand-up-left.png
│  │     └─ hand-up-right.png
│  ├─ components
│  │  ├─ ListTable
│  │  │  └─ index.vue
│  │  ├─ Notify
│  │  │  └─ index.vue
│  │  ├─ SvgIcon
│  │  │  └─ index.vue
│  │  └─ uploadPhoto
│  │     └─ index.vue
│  ├─ config
│  │  ├─ layouts.ts
│  │  ├─ route.ts
│  │  └─ white-list.ts
│  ├─ constants
│  │  ├─ app-key.ts
│  │  └─ cache-key.ts
│  ├─ directives
│  │  ├─ index.ts
│  │  └─ permission
│  │     └─ index.ts
│  ├─ hooks
│  │  ├─ useDevice.ts
│  │  ├─ useFetchSelect.ts
│  │  ├─ useFullscreenLoading.ts
│  │  ├─ useLayoutMode.ts
│  │  ├─ usePagination.ts
│  │  ├─ useRouteListener.ts
│  │  ├─ useTheme.ts
│  │  └─ useWatermark.ts
│  ├─ icons
│  │  ├─ index.ts
│  │  └─ svg
│  │     ├─ 404.svg
│  │     ├─ bug.svg
│  │     ├─ component.svg
│  │     ├─ dashboard.svg
│  │     ├─ fullscreen-exit.svg
│  │     ├─ fullscreen.svg
│  │     ├─ keyboard-down.svg
│  │     ├─ keyboard-enter.svg
│  │     ├─ keyboard-esc.svg
│  │     ├─ keyboard-up.svg
│  │     ├─ link.svg
│  │     ├─ lock.svg
│  │     ├─ menu.svg
│  │     ├─ search.svg
│  │     └─ unocss.svg
│  ├─ lang
│  │  ├─ en.json
│  │  └─ zh.json
│  ├─ layouts
│  │  ├─ LeftMode.vue
│  │  ├─ components
│  │  │  ├─ AppMain.vue
│  │  │  ├─ Breadcrumb
│  │  │  │  └─ index.vue
│  │  │  ├─ CompConsumer
│  │  │  │  └─ index.ts
│  │  │  ├─ Hamburger
│  │  │  │  └─ index.vue
│  │  │  ├─ Language
│  │  │  │  └─ index.vue
│  │  │  ├─ Logo
│  │  │  │  └─ index.vue
│  │  │  ├─ NavigationBar
│  │  │  │  └─ index.vue
│  │  │  ├─ RightPanel
│  │  │  │  └─ index.vue
│  │  │  ├─ Settings
│  │  │  │  └─ index.vue
│  │  │  ├─ Sidebar
│  │  │  │  ├─ SidebarItem.vue
│  │  │  │  ├─ SidebarItemLink.vue
│  │  │  │  └─ index.vue
│  │  │  ├─ TagsView
│  │  │  │  ├─ ScrollPane.vue
│  │  │  │  └─ index.vue
│  │  │  └─ index.ts
│  │  ├─ hooks
│  │  │  └─ useResize.ts
│  │  └─ index.vue
│  ├─ main.ts
│  ├─ messages
│  │  └─ index.ts
│  ├─ plugins
│  │  ├─ element-plus
│  │  │  └─ index.ts
│  │  ├─ element-plus-icon
│  │  │  └─ index.ts
│  │  ├─ index.ts
│  │  └─ vxe-table
│  │     └─ index.ts
│  ├─ router
│  │  ├─ helper.ts  路由辅助函数
│  │  ├─ index.ts  路由配置
│  │  └─ permission.ts
│  ├─ store
│  │  ├─ index.ts
│  │  └─ modules
│  │     ├─ app.ts
│  │     ├─ permission.ts
│  │     ├─ settings.ts
│  │     ├─ tags-view.ts
│  │     └─ user.ts
│  ├─ styles
│  │  ├─ element-plus.css
│  │  ├─ element-plus.scss
│  │  ├─ index.scss
│  │  ├─ mixins.scss
│  │  ├─ theme
│  │  │  ├─ core
│  │  │  │  ├─ element-plus.scss
│  │  │  │  ├─ index.scss
│  │  │  │  └─ layouts.scss
│  │  │  ├─ dark
│  │  │  │  ├─ index.scss
│  │  │  │  └─ variables.scss
│  │  │  ├─ dark-blue
│  │  │  │  ├─ index.scss
│  │  │  │  └─ variables.scss
│  │  │  └─ register.scss
│  │  ├─ transition.scss
│  │  ├─ variables.css
│  │  ├─ view-transition.scss
│  │  ├─ vxe-table.css
│  │  └─ vxe-table.scss
│  ├─ utils
│  │  ├─ cache
│  │  │  ├─ local-storage.ts
│  │  │  └─ localStorage.ts
│  │  ├─ index.ts
│  │  ├─ permission.ts
│  │  ├─ service.ts
│  │  └─ validate.ts
│  ├─ views
│  │  ├─ Interface-manage   接口管理
│  │  │  ├─ components
│  │  │  │  ├─ jkKey-editModal.vue  接口Key编辑/新增弹窗
│  │  │  │  ├─ jkfl-editModal.vue  接口分类编辑弹窗
│  │  │  │  └─ jklb-editModal.vue  接口列表编辑/新增弹窗
│  │  │  ├─ jkKey.vue  接口Key
│  │  │  ├─ jkfl.vue  接口分类
│  │  │  └─ jklb.vue  接口列表
│  │  ├─ acting
│  │  │  ├─ components
│  │  │  │  ├─ bindingModal.vue
│  │  │  │  ├─ complexModal.vue
│  │  │  │  └─ editModal.vue
│  │  │  ├─ dllb.vue
│  │  │  ├─ dltj.vue
│  │  │  └─ dlyj.vue
│  │  ├─ activity
│  │  │  ├─ components
│  │  │  │  └─ generalModal.vue
│  │  │  ├─ hdfl.vue
│  │  │  ├─ hdlb.vue
│  │  │  └─ sqsh.vue
│  │  ├─ authority-manage  权限管理
│  │  │  ├─ cdgl.vue  菜单管理
│  │  │  ├─ components
│  │  │  │  ├─ glylb-editModal.vue  管理员列表编辑/新增弹窗
│  │  │  │  ├─ jsgl-editModal.vue  管理员列表编辑/新增弹窗
│  │  │  │  └─ treeTable.vue  菜单管理树形表结构组件
│  │  │  ├─ glylb.vue  管理员列表
│  │  │  └─ jsgl.vue  角色管理
│  │  ├─ content-manage  内容管理
│  │  │  ├─ banner.vue
│  │  │  ├─ components
│  │  │  │  ├─ banner-editeModel.vue
│  │  │  │  ├─ gglb-editModal.vue
│  │  │  │  └─ zzfl-editModal.vue
│  │  │  ├─ gglb.vue  公告管理
│  │  │  ├─ pmd.vue  跑马灯
│  │  │  ├─ zzfl.vue  自助分类
│  │  │  └─ zzfw.vue  自助服务
│  │  ├─ error-page  跳转错误兼容页面
│  │  │  ├─ 403.vue  403页面
│  │  │  ├─ 404.vue  404页面
│  │  │  └─ components
│  │  │     └─ ErrorPageLayout.vue  403、404页面布局组件
│  │  ├─ finance
│  │  │  ├─ components
│  │  │  │  └─ applyModal.vue
│  │  │  ├─ hyck.vue
│  │  │  ├─ hyfy.vue
│  │  │  ├─ hyqk.vue
│  │  │  ├─ hytj.vue
│  │  │  └─ hyzz.vue
│  │  ├─ home
│  │  │  └─ index.vue  首页
│  │  ├─ inside-station
│  │  │  ├─ components
│  │  │  │  ├─ editModal.vue
│  │  │  │  ├─ replyModal.vue
│  │  │  │  └─ tzlbEditModal.vue
│  │  │  ├─ fkfl.vue
│  │  │  ├─ fklb.vue
│  │  │  ├─ tzfl.vue
│  │  │  └─ tzlb.vue
│  │  ├─ journal-manage  日志管理
│  │  │  ├─ dlrz.vue  代理日志
│  │  │  ├─ htrz.vue 后台日志
│  │  │  └─ hyrz.vue  会员日志
│  │  ├─ login  登录页面
│  │  │  ├─ hooks
│  │  │  │  └─ useFocus.ts  用户输入行为校验hooks
│  │  │  └─ index.vue  登录页面
│  │  ├─ member
│  │  │  ├─ components
│  │  │  │  ├─ amountModal.vue
│  │  │  │  ├─ cardHolderModal.vue
│  │  │  │  ├─ commissionModal.vue
│  │  │  │  ├─ complexModal.vue
│  │  │  │  ├─ editModal.vue
│  │  │  │  └─ memberEditModal.vue
│  │  │  ├─ fypz.vue
│  │  │  ├─ hydj.vue
│  │  │  └─ hylb.vue
│  │  ├─ payment  支付管理
│  │  │  ├─ components
│  │  │  │  ├─ wxChart.vue  微信支付
│  │  │  │  ├─ yhlb-editModal.vue   银行列表编辑/新增弹窗
│  │  │  │  ├─ zffl-editModal.vue  支付分类编辑弹窗
│  │  │  │  └─ zztd-wx-editModal.vue  支付通道编辑/新增弹窗
│  │  │  ├─ yhlb.vue  银行列表
│  │  │  ├─ zffl.vue  支付分类
│  │  │  └─ zftd.vue  支付通道
│  │  ├─ permission
│  │  │  ├─ components
│  │  │  │  └─ SwitchRoles.vue
│  │  │  ├─ directive.vue
│  │  │  └─ page.vue
│  │  ├─ redirect
│  │  │  └─ index.vue  // 重定向
│  │  └─ system-manage  // 系统管理
│  │     ├─ components
│  │     │  ├─ currencyConfig
│  │     │  │  └─ index.vue  // 货币配置
│  │     │  ├─ domainNameConfig
│  │     │  │  ├─ components
│  │     │  │  │  └─ editeModel.vue  // 域名配置编辑弹窗
│  │     │  │  └─ index.vue  // 域名配置
│  │     │  ├─ photoConfig
│  │     │  │  ├─ components
│  │     │  │  │  └─ editeModel.vue  // 图片配置编辑弹窗
│  │     │  │  └─ index.vue // 图片配置
│  │     │  ├─ registerConfig
│  │     │  │  └─ index.vue  // 注册配置
│  │     │  ├─ siteConfig
│  │     │  │  ├─ components
│  │     │  │  │  └─ editModal.vue  // 站点配置编辑弹窗
│  │     │  │  └─ index.vue  // 站点配置
│  │     │  └─ themeColor
│  │     │     ├─ colorPickerCon.vue   // 颜色选择器组件
│  │     │     ├─ index.vue  // 主题颜色
│  │     │     └─ list.vue  // 主题颜色列表
│  │     └─ index.vue  // 系统管理主页面-tab切换
│  └─ wangeditor.d.ts
├─ tests
│  ├─ demo.test.ts
│  └─ utils
│     └─ validate.test.ts
├─ tsconfig.json
├─ types
│  ├─ api.d.ts
│  ├─ env.d.ts
│  ├─ global-components.d.ts
│  ├─ shims-vue.d.ts
│  └─ vue-router.d.ts
└─ vite.config.ts

```
