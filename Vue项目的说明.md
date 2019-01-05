# Vue项目说明

- [element-ui 文档](http://element-cn.eleme.io/#/zh-CN/component/installation)
- [Vue项目接口文档地址](https://shop-api.circle.ink/)
- [博客 session 和 cookie等](https://github.com/zqran/blog)

## 学什么？

- 1 如何使用 Vue 开发一个项目
- 2 ElementUI 组件库的使用
- 3 业务逻辑（登录、权限、商品）

## 创建项目

- 通过 vue-cli 脚手架工具直接生成一个项目
- 1 创建：`vue init webpack shop-admin`
- 2 配置（根据脚手架的引导来选择配置项）
- 3 `cd shop-admin`
- 4 启动项目：`npm run dev` 或 `npm start`

## 手动配置路由

- 1 安装：`npm i vue-router`
- 2 在 `src` 目录中，新建 `router` 文件夹，在文件中新建 `index.js` 路由的配置文件
- 3 在 `index.js` 中，配置路由，并导出路由实例
- 4 在 `main.js` 中导入 路由配置，并且与 Vue实例 关联到一起
- 5 在 `App.vue` 中，添加路由出口

## element-ui 组件库的使用

- 1 安装：`npm i element-ui`
- 2 在 main.js 中，导入 element-ui、样式，并安装插件
- 3 直接在文档中找到对应的组件使用即可

## 项目接口本地搭建

- 0 解压 `shop-api.zip` 文件
- 1 打开 phpStudy 启动 MySql 服务
- 2 打开 `navicat for mysql` 工具，连接数据库
- 3 在链接上，点右键新建数据库，数据库名称为：`shop_admin`
- 4 双击启用数据库，再右键 `运行SQL文件`，选中 shop_admin.sql，并导入
- 5 打开 `shop-api` 目录，修改 `config/default.json` 中的数据库用户名和密码（如果需要）
- 6 在 `shop-api` 目录中，打开终端，输入：`npm start` 启动接口服务

### 以后每天写项目之前要做的事情

- 1 开启 phpStudy 中的 MySql 服务
- 2 在 `shop-api` 目录中，执行 `npm start` 启动接口服务

## 使用 git 管理项目

- [仓库地址](https://gitee.com/zqran/shop_admin_31)

```bash
# 原始提交到远程仓库的命令
git push https://gitee.com/zqran/shop_admin_31.git master
# 有了 remote 后：
git push shop master
# 使用 -u 命令后：
git push shop

# 将 仓库地址 与 shop 这个名称关联到一起
git remote add shop https://gitee.com/zqran/shop_admin_31.git

# -u 就是将 master 设置为默认，提交的时候，就不需要每次都指定 master 分支了
# -u 命令只需要执行一次即可
git push -u shop master
```

## 登录功能

### 搭建登录表单结构

- 1 到 element-ui 文档中找到 表单组件
- 2 找到合适的组件，点击显示代码，将 文档中提供的 示例代码拷贝到我们自己的 Login.vue 组件中
  - 目的：为了让这个组件能够在项目中先正常运行起来
- 3 分析 组件结构
  - 先从整体分析这个结构
- 4 修改这个结构，让其变为适合我们功能的结构

### 登录逻辑

### 调整登录组件的样式

## ref

- 作用：添加给 DOM元素或组件，将来可以通过 `this.$refs.ref的值` 来获取到这个DOM对象或组件。然后，就可以进行DOM操作或获取组件数据、调用组件方法了

## 编程式导航 - JS代码实现路由跳转功能

- `this.$router.push('/home')`
  - 参数 /home：表示要跳转到的路由地址
- `this.$router.push({ name: 'home' })`
  - 通过 name 属性来实现路由跳转

## element-ui 消息提示组件

```js
// 这是 element-ui 中提供的一个方法，用来做消息提示：

this.$message({
  // 提示信息
  message: res.data.meta.msg,
  // 消息提示的类型
  type: 'error',
  // 表示消息显示时长
  duration: 1000
})
```

## 登录访问控制

- 1 如果没有登录，只能访问登录页面，而不能访问其他
- 2 如果没有登录，访问其他页面，应该跳回到登录页面
- 3 如果登录了，就可以访问其他页面了

### 如何知道有没有登录

- 1 Vue项目使用 `token` 来作为登录成功的标识
  - 只要有 token 就说明已经登录了
  - 如果没有 token 就说明还没有登录
- 2 原来，通过 sessionid + cookie 机制，来实现登录状态保持
  - 将 sessionid 存储到 cookie 中，这样，登录状态标识（sessionid），就会随着每一次请求都发送给服务器，服务器从 cookie 中获取到sessionid，就知道是否登录过了

- 这两种不同机制都是为了解决同一个问题： `登录状态保持`
  - 为什么需要状态保持？ 因为 HTTP 协议是无状态的
- 现在，登录成功后，需要将 token 保存起来，存储到 localStorage 中，其他地方用到了，就直接从 localStorage 中取出来使用就可以了

## 样式调整

- 哪个组件的结构，就把样式放在哪个组件的 style 标签中

## 菜单组件结构分析

```html
<!--
  el-menu 菜单组件
    default-active="2" 设置默认菜单高亮，值是el-menu-item的index值
    @open="handleOpen"    菜单展开事件
    @close="handleClose"  菜单收起事件
    background-color="#545c64" 菜单背景色
    text-color="#fff" 菜单文字颜色
    active-text-color="#ffd04b" 菜单高亮文字颜色
  el-submenu 二级菜单，也就是一个可以展开收起的组件。
    这个组件可以嵌套，形成多级菜单
    index="1" 唯一标志，可以用来设置菜单高亮
  el-menu-item 可点击的菜单项组件
    disabled 表示禁用这个菜单
-->
<el-menu
  default-active="4"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#ffd04b"
>
  <el-submenu index="1">
    <template slot="title">
      <!-- 指定了菜单的图标 -->
      <i class="el-icon-location"></i>
      <!-- 指定了菜单名称 -->
      <span>导航一</span>
    </template>
    <!-- 分组菜单： -->
    <el-menu-item-group>
      <template slot="title">分组一</template>
      <el-menu-item index="1-1">选项1</el-menu-item>
      <el-menu-item index="1-2">选项2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group title="分组2">
      <el-menu-item index="1-3">选项3</el-menu-item>
    </el-menu-item-group>
    <el-submenu index="1-4">
      <template slot="title">选项4</template>
      <el-menu-item index="1-4-1">选项1</el-menu-item>
    </el-submenu>
  </el-submenu>
  <el-menu-item index="2">
    <i class="el-icon-menu"></i>
    <span slot="title">导航二</span>
  </el-menu-item>
  <el-menu-item index="3" disabled>
    <i class="el-icon-document"></i>
    <span slot="title">导航三</span>
  </el-menu-item>
  <el-menu-item index="4">
    <i class="el-icon-setting"></i>
    <span slot="title">导航四</span>
  </el-menu-item>
</el-menu>
```

## props类型的说明

- `:router="true"` 此时，router 的值是 布尔值 类型的
  - 设置为字符串类型：`:router=" 'true' "`
  - 设置为数值类型：`:router="123"`
- `router="true"` 此时，router的值是 字符串 类型的

## 嵌套路由使用步骤

- 1 在创建路由规则的时候，要配置子路由规则，而不是普通的路由
  - 子路由是通过路由中的 children 属性来配置的
- 2 在需要切换内容的组件中，添加一个子路由的出口
  - `<router-view />`

## 接口使用说明

- 注意：除了登录接口意外，其他所有的接口都需要将 token 传递给服务器，这样，服务器才知道用户有没有登录
- 如何传递 token ？
  - 在 header 中添加 Authorization 请求头

## 用户列表功能

### 获取用户列表数据

- 1 在 `data` 配置中，添加数据 `userList: []`
- 2 在 `created` 钩子函数中，发送请求，获取用户列表数据
  - 根据接口文档，找到接口和需要的参数
- 3 将接口返回的数据交给 `userList`
- 4 修改 `el-table` 表格组件中的 prop 属性，使其与接口返回的数据匹配

### 分页获取数据

- 0 封装 分页获取数据 方法
- 1 给组件绑定 `@current-change` 事件
- 2 通过事件参数获取到当前页码
- 3 在事件中，调用封装好的方法，获取当前页数据
