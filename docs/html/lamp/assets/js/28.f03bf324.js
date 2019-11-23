(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{233:function(t,r,e){"use strict";e.r(r);var n=e(0),p=Object(n.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"phpwind"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#phpwind","aria-hidden":"true"}},[t._v("#")]),t._v(" phpwind")]),t._v(" "),e("p",[t._v("本文档可供使用了 "),e("strong",[t._v("phpwind 镜像")]),t._v(" 用户参考，也可以供准备在 "),e("strong",[t._v("LAMP 镜像")]),t._v(" 上自行部署 phpwind 参考。")]),t._v(" "),e("p",[t._v("phpwind（phpwind.com）是全球知名的开源PHP论坛软件之一。使用了标准的论坛结构和模式，充分根据用户的使用习惯而设计，简单易用。支持MySQL、PostgreSQL、SQLite三种数据库。经过10几年的发展，拥有完善的开发者生态，有数百万站点使用，主题、插件资源非常丰富。")]),t._v(" "),e("h2",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),e("p",[t._v("在开始 phpwind 的安装部署之前，建议完成如下事情：")]),t._v(" "),e("ul",[e("li",[t._v("浏览器访问："),e("em",[t._v("http://公网ip/9panel")]),t._v(" ，快速了解镜像的使用")]),t._v(" "),e("li",[t._v("查看镜像环境参数，包括："),e("strong",[t._v("目录路径、版本、数据库、虚拟主机配置文件等")]),t._v(" （"),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("马上查看"),e("OutboundLink")],1),t._v("）")])]),t._v(" "),e("h2",{attrs:{id:"phpwind-安装到服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#phpwind-安装到服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" phpwind 安装到服务器")]),t._v(" "),e("p",[e("strong",[t._v("如果你使用的是 "),e("em",[t._v("phpwind 镜像")]),t._v("，本节请忽略，直接阅读下一节 【phpwind 初始化安装向导】")])]),t._v(" "),e("p",[t._v("如果你使用的是 LAMP 镜像，请先将 phpwind 安装到服务器，操作步骤如下：")]),t._v(" "),e("ol",[e("li",[t._v("通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功")]),t._v(" "),e("li",[t._v("通过 "),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/admin-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpMyAdmin 登录 MySQL"),e("OutboundLink")],1),t._v("，为 phpwind 系统增加一个数据库，假如名称为："),e("code",[t._v("phpwind")])]),t._v(" "),e("li",[t._v("到 phpwind 官方"),e("a",{attrs:{href:"https://bbs.aliyun.com/read/566749.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载源码"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("参考"),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/solution-deployment.html#%E5%AE%89%E8%A3%85%E7%AC%AC%E4%BA%8C%E4%B8%AA%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("《如何在 LAMP 上增加网站》"),e("OutboundLink")],1),t._v(" ，将 phpwind 安装到服务器的 "),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LAMP"),e("OutboundLink")],1),t._v(" 环境中")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"phpwind-初始化安装向导"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#phpwind-初始化安装向导","aria-hidden":"true"}},[t._v("#")]),t._v(" phpwind 初始化安装向导")]),t._v(" "),e("ol",[e("li",[t._v("本地浏览器访问："),e("em",[t._v("http://域名")]),t._v(" 或 "),e("em",[t._v("http://公网IP")]),t._v(" 进入安装向导（首选域名访问方式）\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/phpwind/phpwind-installaccept-websoft9.png",alt:""}})]),t._v(" "),e("li",[t._v("接受协议之后系统进入环境检测步骤\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/phpwind/phpwind-installcheck-websoft9.png",alt:""}})]),t._v(" "),e("li",[t._v("进入配置数据库和设置管理员账号界面（"),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看数据库账号密码"),e("OutboundLink")],1),t._v("）\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/phpwind/phpwind-installdbadmin-websoft9.png",alt:""}})]),t._v(" "),e("li",[t._v("填写完成后，点击“创建数据”，系统进入安装中 "),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/phpwind/phpwind-installing-websoft9.png",alt:""}})]),t._v(" "),e("li",[t._v("安装完成后，根据提示进入系统后台，体验系统的完整功能")])]),t._v(" "),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("h4",{attrs:{id:"phpwind如何发送邮件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#phpwind如何发送邮件","aria-hidden":"true"}},[t._v("#")]),t._v(" PHPWind如何发送邮件\\")]),t._v(" "),e("p",[t._v("PHPWind可以通过设置SMTP来实现发送邮件的功能，具体设置步骤如下：")]),t._v(" "),e("ol",[e("li",[t._v("以管理员身份登录到网站后台，点击"),e("strong",[t._v("全局")]),t._v("，切换到"),e("strong",[t._v("电子邮件")]),t._v("页面；")]),t._v(" "),e("li",[t._v("邮件发送选择开启；")]),t._v(" "),e("li",[t._v("输入SMTP服务器的地址，注意：前面的ssl://一定不能够省略")]),t._v(" "),e("li",[t._v("输入SMTP服务器的端口号；")]),t._v(" "),e("li",[t._v("输入发件人的邮箱地址，必须和"),e("strong",[t._v("验证用户名")]),t._v("的邮箱地址保持一致；")]),t._v(" "),e("li",[t._v("SMTP用户身份验证选择开启；")]),t._v(" "),e("li",[t._v("输入提供SMTP服务的邮箱地址；")]),t._v(" "),e("li",[t._v("输入该邮箱地址的SMTP服务授权码或密码；")]),t._v(" "),e("li",[t._v("提交；\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/phpwind/phpwind-smtp-1-websoft9.png",alt:""}})]),t._v(" "),e("li",[t._v("切换到"),e("strong",[t._v("电子邮件检测")]),t._v("页面，,输入测试用的收件人邮箱地址，点击提交，若收到了测试邮件，则证明SMTP设置正确，phpWind已经发送邮件了。\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/phpwind/phpwind-smtp-2-websoft9.png",alt:""}})])])])},[],!1,null,null,null);r.default=p.exports}}]);