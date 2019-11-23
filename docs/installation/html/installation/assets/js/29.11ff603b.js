(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{187:function(t,r,e){"use strict";e.r(r);var s=e(0),o=Object(s.a)({},function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"espocrm"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#espocrm","aria-hidden":"true"}},[t._v("#")]),t._v(" EspoCRM")]),t._v(" "),e("p",[t._v("本文档可供使用了 "),e("strong",[t._v("EspoCRM 镜像")]),t._v(" 用户参考，也可以供准备在 "),e("strong",[t._v("LAMP 镜像")]),t._v(" 上自行部署 EspoCRM 参考。")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://espocrm.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("EspoCRM"),e("OutboundLink")],1),t._v("是一个开源免费的轻量级CRM系统，采用响应式设计，界面非常美观大方，能够自动适应PC、平板和手机访问。功能非常全面，包括销售自动化、市场、销售过程、文档、产品、合同、知识库和工作流等功能。采用PHP+MySQL开发，支持字段和表单布局客制化。"),e("a",{attrs:{href:"http://www.espocrm.com/demo/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方演示"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/en/espocrm/espocrm-gui-websoft9.jpg",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"准备"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#准备","aria-hidden":"true"}},[t._v("#")]),t._v(" 准备")]),t._v(" "),e("p",[t._v("在开始 EspoCRM 的安装部署之前，建议完成如下事情：")]),t._v(" "),e("ul",[e("li",[t._v("浏览器访问："),e("em",[t._v("http://公网ip/9panel")]),t._v(" ，快速了解镜像的使用")]),t._v(" "),e("li",[t._v("查看镜像环境参数，包括："),e("strong",[t._v("目录路径、版本、数据库、虚拟主机配置文件等")]),t._v(" （"),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-components.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("马上查看"),e("OutboundLink")],1),t._v("）")])]),t._v(" "),e("h2",{attrs:{id:"espocrm-安装到服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#espocrm-安装到服务器","aria-hidden":"true"}},[t._v("#")]),t._v(" EspoCRM 安装到服务器")]),t._v(" "),e("p",[e("strong",[t._v("如果你使用的是 "),e("em",[t._v("EspoCRM 镜像")]),t._v("，本节请忽略，直接阅读下一节 【EspoCRM 初始化安装向导】")])]),t._v(" "),e("p",[t._v("如果你使用的是 LAMP 镜像，请先将 EspoCRM 安装到服务器，操作步骤如下：")]),t._v(" "),e("ol",[e("li",[t._v("通过域名控制台完成解析域名（增加一个A记录指向服务器IP），并测试是否成功")]),t._v(" "),e("li",[t._v("通过 "),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/admin-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("phpMyAdmin 登录 MySQL"),e("OutboundLink")],1),t._v("，为 EspoCRM 系统增加一个数据库，假如名称为："),e("code",[t._v("espocrm")])]),t._v(" "),e("li",[t._v("到 EspoCRM 官方"),e("a",{attrs:{href:"https://www.espocrm.com/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载源码"),e("OutboundLink")],1)]),t._v(" "),e("li",[t._v("参考"),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/solution-deployment.html#%E5%AE%89%E8%A3%85%E7%AC%AC%E4%BA%8C%E4%B8%AA%E7%BD%91%E7%AB%99",target:"_blank",rel:"noopener noreferrer"}},[t._v("《如何在 LAMP 上增加网站》"),e("OutboundLink")],1),t._v(" ，将 EspoCRM 安装到服务器的 "),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/",target:"_blank",rel:"noopener noreferrer"}},[t._v("LAMP"),e("OutboundLink")],1),t._v(" 环境中")])]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"espocrm-初始化安装向导"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#espocrm-初始化安装向导","aria-hidden":"true"}},[t._v("#")]),t._v(" EspoCRM 初始化安装向导")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("本地浏览器访问："),e("em",[t._v("http://域名")]),t._v(" 或 "),e("em",[t._v("http://公网IP")]),t._v(" 进入安装向导（首选域名访问方式）\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/espocrm/espocrm-lan-websoft9.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("选择语言之后（中国支持非常好），系统进入环境检测步骤\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/espocrm/espocrm-check-websoft9.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("然后点击“Install”，进入数据库参数设置界面（"),e("a",{attrs:{href:"https://support.websoft9.com/docs/lamp/zh/stack-accounts.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("查看数据库账号密码"),e("OutboundLink")],1),t._v("）\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/espocrm/espocrm-dbconf-websoft9.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("数据库连接正确，点击“Next”进入管理员账号设置界面，填写管理员信息，牢记之，并进入下一步\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/espocrm/espocrm-adminconf-websoft9.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("配置时区\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/espocrm/espocrm-timeconf-websoft9.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("系统提示安装成功\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/espocrm/espocrm-login-websoft9.png",alt:""}})])]),t._v(" "),e("li",[e("p",[t._v("进入后台，体验系统的完整功能")])])]),t._v(" "),e("blockquote",[e("p",[t._v("需要了解更多 EspoCRM 的使用，请参考官方文档："),e("a",{attrs:{href:"https://www.espocrm.com/documentation/",target:"_blank",rel:"noopener noreferrer"}},[t._v("EspoCRM Documentation"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"常见问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#常见问题","aria-hidden":"true"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),e("h4",{attrs:{id:"浏览器打开ip地址，无法访问-espocrm（白屏没有结果）？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器打开ip地址，无法访问-espocrm（白屏没有结果）？","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器打开IP地址，无法访问 EspoCRM（白屏没有结果）？")]),t._v(" "),e("p",[t._v("您的服务器对应的安全组80端口没有开启（入规则），导致浏览器无法访问到服务器的任何内容")]),t._v(" "),e("h4",{attrs:{id:"本部署包采用的哪个数据库来存储-espocrm-数据？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#本部署包采用的哪个数据库来存储-espocrm-数据？","aria-hidden":"true"}},[t._v("#")]),t._v(" 本部署包采用的哪个数据库来存储 EspoCRM 数据？")]),t._v(" "),e("p",[t._v("部署包内置 MySQL")]),t._v(" "),e("h4",{attrs:{id:"是否可以采用云厂商提供的-rds-来存储-espocrm-数据？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#是否可以采用云厂商提供的-rds-来存储-espocrm-数据？","aria-hidden":"true"}},[t._v("#")]),t._v(" 是否可以采用云厂商提供的 RDS 来存储 EspoCRM 数据？")]),t._v(" "),e("p",[t._v("可以")]),t._v(" "),e("h4",{attrs:{id:"espocrm-如何发送邮件？"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#espocrm-如何发送邮件？","aria-hidden":"true"}},[t._v("#")]),t._v(" EspoCRM 如何发送邮件？")]),t._v(" "),e("p",[t._v("EspoCRM支持第三方的SMTP发送邮件模式，具体如下：")]),t._v(" "),e("ol",[e("li",[t._v("待EspoCRM安装完成后，点击右上角菜单->admin，点击Email项\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/espocrm/espocrm-smtp-1-websoft9.png",alt:""}})]),t._v(" "),e("li",[t._v("根据下图的设置，完成SMTP参数的设置\n"),e("img",{attrs:{src:"http://libs.websoft9.com/Websoft9/DocsPicture/zh/espocrm/espocrm-smtp-2-websoft9.png",alt:""}}),t._v(" "),e("ul",[e("li",[t._v("Server 处请填写 smtp 服务器的地址 ；")]),t._v(" "),e("li",[t._v("Port 处请填写正确的端口号；")]),t._v(" "),e("li",[t._v("Auth 处勾选表示发邮件需要验证账号")]),t._v(" "),e("li",[t._v("Security 处请邮件服务器支持的连接协议；")]),t._v(" "),e("li",[t._v("UseName 处请输入自己的邮箱地址 ；")]),t._v(" "),e("li",[t._v("Password 处请输入SMTP密码或授权码（不同于邮箱密码）")])])]),t._v(" "),e("li",[t._v("设置完成后，请点击“Send Test Email”测试设置是否成功")])]),t._v(" "),e("blockquote",[e("p",[t._v("以上参数设置以163为例，不同SMTP提供商的设置略有差异，请务必明确您所使用的SMTP所要求的设置方式。")])])])},[],!1,null,null,null);r.default=o.exports}}]);