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
        nav: [
            {
                text: '版本',
                icon: 'reco-document',
                items: [
                    {text: '2.0.13', link: '/2.0.13/'},
                    {text: '2.0.12', link: '/2.0。12/'}
                ]
            }
        ],
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
                    ['/views/install/Windows', "Windows安装"],
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
                    ['/views/config/retry', '重试配置'],
                    ['/views/config/application', '应用配置']
                ]
            },
            {
                title: "功能",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/function/admin', '管理页面'],
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
                    ['/views/function/proxysub', '代理订阅'],
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
                            ['/views/gzyq/rule/STARTED', '创建规则'],
                            ['/views/gzyq/rule/GRAMMAR', 'SQL 语法与示例'],
                            ['/views/gzyq/rule/EVENT', 'SQL 事件类型与字段'],
                            ['/views/gzyq/rule/FUNCTION', '内置 SQL 函数']
                        ]
                    },
                    {
                        title: "动作类型",
                        collapsable: true,
                        sidebarDepth: 2,
                        children: [
                            ['/views/gzyq/action/SAVE_KAFKA', '保存到Kafka'],
                            ['/views/gzyq/action/SAVE_MYSQL', '保存到Mysql'],
                            ['/views/gzyq/action/SAVE_REDIS', '保存到Redis'],
                        ]
                    },
                    {
                        title: "数据源配置",
                        collapsable: true,
                        sidebarDepth: 2,
                        children: [
                            ['/views/gzyq/source/BEFORE', '前言'],
                            ['/views/gzyq/source/MYSQL', 'Mysql'],
                            ['/views/gzyq/source/ORACLE', 'Oracle'],
                            ['/views/gzyq/source/POSTGRESQL', 'Postgresql'],
                            ['/views/gzyq/source/SQLSERVER', 'Sqlserver'],
                            ['/views/gzyq/source/TDENGINE', 'Tdengine'],
                            ['/views/gzyq/source/CLICKHOUSE', 'Clickhouse'],
                            ['/views/gzyq/source/WEBHOOK', 'Webhook'],
                            ['/views/gzyq/source/KAFKA', 'Kafka'],
                            ['/views/gzyq/source/LOG', '日志文件'],
                            ['/views/gzyq/source/MQTT', 'MQTT'],
                            ['/views/gzyq/source/RABBITMQ', 'Rabbitmq'],
                            ['/views/gzyq/source/REDIS', 'Redis'],
                            ['/views/gzyq/source/ROCKETMQ', 'Rocketmq'],
                        ]
                    }
                ]
            },
            {
                title: "指令消费",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/command/KAFKA', 'KAFKA'],
                    ['/views/command/ROCKETMQ', 'ROCKETMQ'],
                    ['/views/command/RABBITMQ', 'RABBITMQ'],
                    ['/views/command/PULSAR', 'PULSAR'],
                    ['/views/command/NACOS', 'NACOS']
                ]
            },
            {
                title: "多协议",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/protocol/coap', 'COAP'],
                    ['/views/protocol/32960', 'GBT32960'],
                    ['/views/protocol/v2c', 'V2C'],
                    ['/views/protocol/ocpp', 'OCPP'],
                    ['/views/protocol/websocket', 'WEBSOCKET'],
                    ['/views/protocol/i1', 'i1']
                ]
            },

            {
                title: "工具",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/tools/log', '日志监控'],
                    ['/views/tools/ssl', '证书生成']
                ]
            },
            {
                title: "API",
                collapsable: true,
                sidebarDepth: 1,
                children: [
                    ['/views/api/Publish', '消息推送'],
                    ['/views/api/Check', '客户端查询']

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
                    ['/views/view/api', '监控安装'],
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