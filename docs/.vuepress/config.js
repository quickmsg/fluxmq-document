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
        ['link', {rel: 'icon', href: '/img/logo.svg'}],
        ['script', {src: '/js/iframeSizer.contentWindow.min.js'}]
    ],
    port: 8082,
    themeConfig: {
        nav: [],
        sidebar: [
            {
                title: "FluxMQ",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/product/introduction', '产品介绍'],
                    ['/views/product/core', '功能概览']
                ]
            },
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
            {
                title: "功能",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/function/dashboard', 'Dashboard'],
                    ['/views/function/ps ', '发布订阅'],
                    ['/views/function/share', '共享订阅'],
                    ['/views/function/session', '会话消息'],
                    ['/views/function/delay', '延迟消息'],
                    ['/views/function/auth', '认证鉴权'],
                    ['/views/function/control', '访问控制'],
                    ['/views/function/link', '连接管理'],
                    ['/views/function/topic', '主题管理'],
                    ['/views/function/monitor', '运维监控'],
                    ['/views/function/device', '设备模拟'],
                    ['/views/function/protocol', '多协议']

                ]
            },
            {
                title: "规则引擎",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/gzyq/introduce', '规则引擎介绍'],
                    ['/views/gzyq/eventData', '事件数据'],
                    ['/views/gzyq/eventTopic', '事件主题'],
                    ['/views/gzyq/dataBridging', '数据桥接'],
                    ['/views/gzyq/dataStorage', '数据存储'],
                    ['/views/gzyq/shakedownTest', '创建规则及调试'],
                    ['/views/gzyq/grammar', '规则引擎语法'],
                    ['/views/gzyq/codec', '编解码']
                ]
            },
            ['/views/monitor.md', '监控部署'],
            ['/views/admin.md', '管理页面部署'],
            ['/views/log.md', '日志系统部署'],
            ['/views/test.md', '性能压测'],
            ['/views/vs.md', 'VS EMQX'],
            ['/views/mqtt', 'MQTT协议介绍']
        ]
    }
}