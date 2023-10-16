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
                    ['/views/install/docker', 'Docker'],
                    ['/views/install/docker-compose', 'Docker-Compose'],
                    ['/views/install/Linux', "Linux安装"],
                    ['/views/install/Linux', "Windows安装"],
                    ['/views/install/MacOS', "MacOS安装"]
                ]
            },
            {
                title: "配置指南",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/config/read', '前言'],
                    ['/views/config/mqtt', 'MQTT配置'],
                    ['/views/config/pool', '连接池配置'],
                    ['/views/config/cluster', '集群配置'],
                    ['/views/config/http', 'HTTP配置'],
                    ['/views/config/eventbus', 'EVENTBUS配置'],
                    ['/views/config/store', '配置持久化'],
                    ['/views/config/shareSubscribe', '共享订阅配置'],
                    ['/views/config/es', 'ES配置'],
                    ['/views/config/application', '应用配置']
                ]
            },
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
                    ['/views/function/cluster', '配置集群'],
                    ['/views/function/store', '配置持久化'],
                    ['/views/function/license', '配置license']
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
                                    ['/views/gzyq/rule/MYSQL', 'MYSQL'],
                                    ['/views/gzyq/rule/ORACLE', 'ORACLE'],
                                    ['/views/gzyq/rule/POSTGRESQL', 'POSTGRESQL'],
                                    ['/views/gzyq/rule/SQLSERVER', 'SQLSERVER'],
                                    ['/views/gzyq/rule/TDENGINE', 'TDENGINE'],
                                    ['/views/gzyq/rule/CLICKHOUSE', 'CLICKHOUSE'],
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
                            ['/views/gzyq/source/BEFORE', '前言'],
                            ['/views/gzyq/source/MYSQL', 'MYSQL'],
                            ['/views/gzyq/source/ORACLE', 'ORACLE'],
                            ['/views/gzyq/source/POSTGRESQL', 'POSTGRESQL'],
                            ['/views/gzyq/source/SQLSERVER', 'SQLSERVER'],
                            ['/views/gzyq/source/TDENGINE', 'TDENGINE'],
                            ['/views/gzyq/source/CLICKHOUSE', 'CLICKHOUSE'],
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
            {
                title: "多协议",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/protocol/coap', 'COAP'],
                    ['/views/protocol/32960', 'GBT32960'],
                    ['/views/protocol/ocpp', 'OCPP'],
                    ['/views/protocol/websocket', 'WEBSOCKET'],
                    ['/views/protocol/i1', 'i1']
                ]
            },

            {
                title: "管理系统",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/admin/Docker', 'Docker安装'],
                    ['/views/admin/Source', '源码安装']
                ]
            },
            {
                title: "工具",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/tools/monitor', '系统监控'],
                    ['/views/tools/log', '日志监控'],
                    ['/views/tools/ssl', '证书生成']
                ]
            },
            {
                title: "性能压测",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/test/Conn', '连接数压测'],
                    ['/views/test/Broad', '广播压测'],
                    ['/views/test/Bridge', '桥接压测（kafka）'],
                    ['/views/test/ConnConcurrent', '连接&并发测试'],
                    ['/views/test/MoreTopic', '多topic压测对比'],
                    ['/views/test/SingleTopic', '单topic压测对比'],
                    ['/views/test/ShareTopic', '共享订阅压测对比'],
                    ['/views/test/Wildcard', '通配符压测对比'],
                ]
            },
            {
                title: "可观测",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/view/metrics', 'Metrics'],
                ]
            },
            ['/views/vs.md', 'VS EMQX'],
            ['/views/mqtt', 'MQTT协议介绍'],
            ['/views/FAQ', 'FAQ'],
            ['/views/License', 'LICENSE']
        ]
    }
}