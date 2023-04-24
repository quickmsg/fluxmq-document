/*
 * @Description: 
 * @Author: lijingang
 * @Date: 2023-03-03 14:08:17
 * @LastEditTime: 2023-03-24 14:28:52
 */
module.exports = {
  title: '',
  description: '这是fluxmq的官方文档',
  dest: 'public',
  base: '/',
  head: [
    ['link', { rel: 'icon', href: '/img/logo.svg' }],
    ['script', { src: '/js/iframeSizer.contentWindow.min.js' }]
  ],
  port: 8082,
  themeConfig: {
    nav: [],
    sidebar: [
      ['/views/product', '产品介绍'],
      {
        title: "安装部署",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/views/install/optimize', '系统优化'],
          ['/views/install/deployment', '部署']
        ]
      },
      ['/views/guide', '配置指南'],
      ['/views/linkManage', '连接管理'],
      {
        title: "规则引擎",
        collapsable: true,
        sidebarDepth: 1,
        children: [
          ['/views/gzyq/introduce', '规则引擎介绍'],
          ['/views/gzyq/grammar', '规则引擎语法'],
          ['/views/gzyq/SQLfields', 'SQL中可用字段'],
          ['/views/gzyq/SQLfunction', 'SQL语句中可用函数'],
          ['/views/gzyq/shakedownTest', '创建规则及调试'],
          ['/views/gzyq/dataBridging', '数据桥接'],
          ['/views/gzyq/dataStorage', '数据存储'],
          ['/views/gzyq/codec', '编解码']
        ]
      },
      ['/views/monitor', '运维监测'],
      ['/views/test', '性能压测'],
      ['/views/test', 'VS EMQX'],
      ['/views/mqtt', 'MQTT协议介绍']
    ]
  }
}