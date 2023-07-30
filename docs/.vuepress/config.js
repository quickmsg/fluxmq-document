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
                    ['/views/function/ps', '发布订阅'],
                    ['/views/function/share', '共享订阅'],
                    ['/views/function/session', '会话消息'],
                    ['/views/function/delay', '延迟消息'],
                    ['/views/function/auth', '认证鉴权'],
                    ['/views/function/control', '访问控制'],
                    ['/views/function/link', '连接管理'],
                    ['/views/function/topic', '主题管理'],
                    ['/views/function/monitor', '运维监控'],
                    ['/views/function/script', '脚本引擎'],
                    ['/views/function/device', '设备模拟'],
                    ['/views/function/protocol', '多协议']

                ]
            },
            {
                title: "规则引擎",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    {
                        title: "规则配置",
                        collapsable: true,
                        sidebarDepth: 2,
                        children: [
                            ['/views/gzyq/rule/INTRODUCE', '介绍'],
                            ['/views/gzyq/rule/GRAMMAR', '语法'],
                            ['/views/gzyq/rule/FUNCTION', '函数'],
                            ['/views/gzyq/rule/EVENTTOPIC', '事件主题'],
                            ['/views/gzyq/rule/EVENTDATA', '事件数据'],
                            {
                                title: "创建规则",
                                collapsable: true,
                                sidebarDepth: 3,
                                children: [
                                    ['/views/gzyq/rule/DATABASE', '数据库'],
                                    ['/views/gzyq/rule/WEBHOOK', 'WEBHOOK'],
                                    ['/views/gzyq/rule/KAFKA', 'KAFKA'],
                                    ['/views/gzyq/rule/LOG', '日志文件'],
                                    ['/views/gzyq/rule/MQTT', 'MQTT'],
                                    ['/views/gzyq/rule/RABBITMQ', 'RABBITMQ'],
                                    ['/views/gzyq/rule/REDIS', 'REDIS'],
                                    ['/views/gzyq/rule/ROCKETMQ', 'ROCKETMQ']
                                ]
                            }
                        ]
                    },
                    {
                        title: "数据源配置",
                        collapsable: true,
                        sidebarDepth: 2,
                        children: [
                            ['/views/gzyq/source/DATABASE', '数据库'],
                            ['/views/gzyq/source/WEBHOOK', 'WEBHOOK'],
                            ['/views/gzyq/source/KAFKA', 'KAFKA'],
                            ['/views/gzyq/source/LOG', '日志文件'],
                            ['/views/gzyq/source/MQTT', 'MQTT'],
                            ['/views/gzyq/source/RABBITMQ', 'RABBITMQ'],
                            ['/views/gzyq/source/REDIS', 'REDIS'],
                            ['/views/gzyq/source/ROCKETMQ', 'ROCKETMQ']
                        ]
                    }
                ]
            },
            ['/views/monitor.md', '监控部署'],
            ['/views/admin.md', '管理页面部署'],
            ['/views/log.md', '日志系统部署'],
            ['/views/test.md', '性能压测'],
            ['/views/vs.md', 'VS EMQX'],
            ['/views/mqtt', 'MQTT协议介绍'],
            ['/views/FAQ', 'FAQ']
        ]
    }
}