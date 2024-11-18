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
    sidebar: 'auto',
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
                    {text: '2.0.18', link: '/2_0_18/views/product/introduction'},
                    {text: '2.0.17', link: '/2_0_17/views/product/introduction'},
                    {text: '2.0.16', link: '/2_0_16/views/product/introduction'},
                    {text: '2.0.15', link: '/2_0_15/views/product/introduction'},
                    {text: '2.0.13', link: '/2_0_13/views/product/introduction'},
                    {text: '2.0.12', link: '/2_0_12/views/product/introduction'}
                ]
            }
        ],
        sidebar: {
            "/2_0_18/": [
                {
                    title: "前言",
                    collapsable: true,
                    children: [
                        ['views/product/introduction', '产品介绍'],
                        ['views/product/core', '功能概览']
                    ]
                },
                {
                    title: "安装部署",
                    collapsable: true,
                    children: [
                        ['views/install/optimize', '系统优化'],
                        ['views/install/Linux', "linux安装"],
                        ['views/install/Windows', "windows安装"],
                        ['views/install/MacOS', "macos安装"],
                        ['views/install/Linux-aarch64', "linux-aarch64安装"],
                        ['views/install/MacOS-aarch64', "macos-aarch64安装"],
                        ['views/install/docker', 'docker'],
                        ['views/install/docker-compose', 'docker-compose'],
                        ['views/install/kubernetes', 'kubernetes']
                    ]
                },
                {
                    title: "配置指南",
                    collapsable: true,
                    children: [
                        ['views/config/read', '前言'],
                        ['views/config/mqtt', 'MQTT配置'],
                        ['views/config/pool', '连接池配置'],
                        ['views/config/cluster', '集群配置'],
                        ['views/config/http', 'HTTP配置'],
                        ['views/config/eventbus', 'EVENTBUS配置'],
                        ['views/config/store', '配置持久化'],
                        ['views/config/shareSubscribe', '共享订阅配置'],
                        ['views/config/retry', '重试配置'],
                        ['views/config/application', '应用配置'],
                        ['views/config/license', '配置license']
                    ]
                },
                {
                    title: "功能",
                    collapsable: true,
                    children: [
                        ['views/function/dashboard', 'Dashboard'],
                        ['views/function/ps', '发布订阅'],
                        ['views/function/share', '共享订阅'],
                        ['views/function/session', '会话消息'],
                        ['views/function/delay', '延迟消息'],
                        {
                            title: "认证鉴权",
                            collapsable: true,
                            children: [
                                ['views/auth/before', '介绍'],
                                ['views/auth/db', '数据库认证'],
                                ['views/auth/redis', 'redis认证'],
                                ['views/auth/rest', 'http认证'],
                                ['views/auth/fixed', '密码认证']
                            ]
                        },
                        {
                            title: "ACL功能",
                            collapsable: true,
                            children: [
                                ['views/acl/before', '介绍'],
                                ['views/acl/sql', 'sql配置'],
                                ['views/acl/config', '文件配置'],
                                ['views/acl/http', 'http配置']
                            ]
                        },
                        ['views/function/link', '连接管理'],
                        ['views/function/topic', '主题管理'],
                        {
                            title: "指令消费",
                            collapsable: true,
                            children: [
                                ['views/command/KAFKA', 'KAFKA'],
                                ['views/command/ROCKETMQ', 'ROCKETMQ'],
                                ['views/command/RABBITMQ', 'RABBITMQ'],
                                ['views/command/PULSAR', 'PULSAR'],
                                ['views/command/NACOS', 'NACOS']
                            ]
                        },
                        ['views/function/proxysub', '代理订阅'],
                        ['views/function/script', '脚本引擎']
                    ]
                },
                {
                    title: "规则引擎",
                    collapsable: true,
                    children: [
                        {
                            title: "事件类型",
                            collapsable: true,
                            children: [
                                ['views/gzyq/event/read', '介绍'],
                                ['views/gzyq/event/connect', '连接事件'],
                                ['views/gzyq/event/close', '连接断开事件'],
                                ['views/gzyq/event/sub', '订阅事件'],
                                ['views/gzyq/event/unsub', '取消订阅事件'],
                                ['views/gzyq/event/publish', '消息发布事件'],
                                ['views/gzyq/event/ack', '消息确认事件'],
                                ['views/gzyq/event/ping', '心跳事件'],
                                ['views/gzyq/event/offline', '离线消息事件'],
                                ['views/gzyq/event/drop', '丢弃消息事件'],
                                ['views/gzyq/event/delivered', '投递消息事件']
                            ]
                        },
                        {
                            title: "规则配置",
                            collapsable: true,
                            children: [
                                ['views/gzyq/rule/INTRODUCE', '介绍'],
                                ['views/gzyq/rule/STARTED', '创建规则'],
                                ['views/gzyq/rule/GRAMMAR', 'SQL 语法与示例'],
                                ['views/gzyq/rule/FUNCTION', '内置 SQL 函数']
                            ]
                        },
                        {
                            title: "动作类型",
                            collapsable: true,
                            children: [
                                ['views/gzyq/action/SAVE_KAFKA', '保存到Kafka'],
                                ['views/gzyq/action/SAVE_MYSQL', '保存到Mysql'],
                                ['views/gzyq/action/SAVE_REDIS', '保存到Redis'],
                                {
                                    title: "离线消息存储",
                                    collapsable: true,
                                    children: [
                                        ['views/gzyq/action/OFFLINE', '前言'],
                                        ['views/gzyq/action/OFFLINE_REDIS', '离线消息保存到Redis'],
                                        ['views/gzyq/action/OFFLINE_MYSQL', '离线消息保存到MYSQL'],
                                    ]
                                },
                            ]
                        },
                        {
                            title: "数据源配置",
                            collapsable: true,
                            children: [
                                ['views/gzyq/source/BEFORE', '前言'],
                                ['views/gzyq/source/MYSQL', 'Mysql'],
                                ['views/gzyq/source/ORACLE', 'Oracle'],
                                ['views/gzyq/source/POSTGRESQL', 'Postgresql'],
                                ['views/gzyq/source/SQLSERVER', 'Sqlserver'],
                                ['views/gzyq/source/TDENGINE', 'Tdengine'],
                                ['views/gzyq/source/CLICKHOUSE', 'Clickhouse'],
                                ['views/gzyq/source/WEBHOOK', 'Webhook'],
                                ['views/gzyq/source/KAFKA', 'Kafka'],
                                ['views/gzyq/source/LOG', '日志文件'],
                                ['views/gzyq/source/MQTT', 'MQTT'],
                                ['views/gzyq/source/RABBITMQ', 'Rabbitmq'],
                                ['views/gzyq/source/REDIS', 'Redis'],
                                ['views/gzyq/source/ROCKETMQ', 'Rocketmq'],
                            ]
                        }
                    ]
                },
                {
                    title: "多协议",
                    collapsable: true,
                    children: [
                        ['views/protocol/coap', 'COAP'],
                        ['views/protocol/32960', 'GBT32960'],
                        ['views/protocol/v2c', 'V2C'],
                        ['views/protocol/ocpp', 'OCPP'],
                        ['views/protocol/websocket', 'WEBSOCKET'],
                        ['views/protocol/i1', 'i1']
                    ]
                },

                {
                    title: "工具",
                    collapsable: true,
                    children: [
                        ['views/tools/ssl', '证书生成'],
                        ['views/tools/haproxy', 'HaProxy配置']
                    ]
                },
                {
                    title: "API",
                    collapsable: true,
                    children: [
                        ['views/api/Publish', '消息推送'],
                        ['views/api/Check', '客户端查询'],
                        ['views/api/kick', '客户端关闭']

                    ]
                },
                {
                    title: "性能压测",
                    collapsable: true,
                    children: [
                        ['views/test/Conn', '连接数压测'],
                        ['views/test/Broad', '广播压测'],
                        ['views/test/Bridge', '桥接压测（kafka）'],
                        ['views/test/ConnConcurrent', '连接&并发测试'],
                        ['views/test/MoreTopic', '多topic压测对比'],
                        ['views/test/SingleTopic', '单topic压测对比'],
                        ['views/test/ShareTopic', '共享订阅压测对比'],
                        ['views/test/Wildcard', '通配符压测对比'],
                    ]
                },
                {
                    title: "可观测",
                    collapsable: true,
                    children: [
                        ['views/view/api', '监控安装'],
                        ['views/view/metrics', 'Metrics'],
                    ]
                },
                ['views/vs.md', 'VS EMQX'],
                ['views/mqtt', 'MQTT协议介绍'],
                ['views/FAQ', 'FAQ'],
                ['views/License', 'LICENSE']
            ],
            "/2_0_17/": [
                {
                    title: "前言",
                    collapsable: true,
                    children: [
                        ['views/product/introduction', '产品介绍'],
                        ['views/product/core', '功能概览']
                    ]
                },
                {
                    title: "安装部署",
                    collapsable: true,
                    children: [
                        ['views/install/optimize', '系统优化'],
                        ['views/install/Linux', "Linux安装"],
                        ['views/install/Windows', "Windows安装"],
                        ['views/install/MacOS', "MacOS安装"],
                        ['views/install/docker', 'Docker'],
                        ['views/install/docker-compose', 'Docker-Compose'],
                        ['views/install/kubernetes', 'Kubernetes']
                    ]
                },
                {
                    title: "配置指南",
                    collapsable: true,
                    children: [
                        ['views/config/read', '前言'],
                        ['views/config/mqtt', 'MQTT配置'],
                        ['views/config/pool', '连接池配置'],
                        ['views/config/cluster', '集群配置'],
                        ['views/config/http', 'HTTP配置'],
                        ['views/config/eventbus', 'EVENTBUS配置'],
                        ['views/config/store', '配置持久化'],
                        ['views/config/shareSubscribe', '共享订阅配置'],
                        ['views/config/retry', '重试配置'],
                        ['views/config/application', '应用配置'],
                        ['views/config/license', '配置license']
                    ]
                },
                {
                    title: "功能",
                    collapsable: true,
                    children: [
                        ['views/function/dashboard', 'Dashboard'],
                        ['views/function/ps', '发布订阅'],
                        ['views/function/share', '共享订阅'],
                        ['views/function/session', '会话消息'],
                        ['views/function/delay', '延迟消息'],
                        {
                            title: "认证鉴权",
                            collapsable: true,
                            children: [
                                ['views/auth/before', '介绍'],
                                ['views/auth/db', '数据库认证'],
                                ['views/auth/redis', 'redis认证'],
                                ['views/auth/rest', 'http认证'],
                                ['views/auth/fixed', '密码认证']
                            ]
                        },
                        {
                            title: "ACL功能",
                            collapsable: true,
                            children: [
                                ['views/acl/before', '介绍'],
                                ['views/acl/sql', 'SQL配置'],
                                ['views/acl/config', '文件配置']
                            ]
                        },
                        ['views/function/link', '连接管理'],
                        ['views/function/topic', '主题管理'],
                        {
                            title: "指令消费",
                            collapsable: true,
                            children: [
                                ['views/command/KAFKA', 'KAFKA'],
                                ['views/command/ROCKETMQ', 'ROCKETMQ'],
                                ['views/command/RABBITMQ', 'RABBITMQ'],
                                ['views/command/PULSAR', 'PULSAR'],
                                ['views/command/NACOS', 'NACOS']
                            ]
                        },
                        ['views/function/proxysub', '代理订阅'],
                        ['views/function/script', '脚本引擎']
                    ]
                },
                {
                    title: "规则引擎",
                    collapsable: true,
                    children: [
                        {
                            title: "事件类型",
                            collapsable: true,
                            children: [
                                ['views/gzyq/event/read', '介绍'],
                                ['views/gzyq/event/connect', '连接事件'],
                                ['views/gzyq/event/close', '连接断开事件'],
                                ['views/gzyq/event/sub', '订阅事件'],
                                ['views/gzyq/event/unsub', '取消订阅事件'],
                                ['views/gzyq/event/publish', '消息发布事件'],
                                ['views/gzyq/event/ack', '消息确认事件'],
                                ['views/gzyq/event/ping', '心跳事件'],
                                ['views/gzyq/event/offline', '离线消息事件']
                            ]
                        },
                        {
                            title: "规则配置",
                            collapsable: true,
                            children: [
                                ['views/gzyq/rule/INTRODUCE', '介绍'],
                                ['views/gzyq/rule/STARTED', '创建规则'],
                                ['views/gzyq/rule/GRAMMAR', 'SQL 语法与示例'],
                                ['views/gzyq/rule/FUNCTION', '内置 SQL 函数']
                            ]
                        },
                        {
                            title: "动作类型",
                            collapsable: true,
                            children: [
                                ['views/gzyq/action/SAVE_KAFKA', '保存到Kafka'],
                                ['views/gzyq/action/SAVE_MYSQL', '保存到Mysql'],
                                ['views/gzyq/action/SAVE_REDIS', '保存到Redis'],
                                {
                                    title: "离线消息存储",
                                    collapsable: true,
                                    children: [
                                        ['views/gzyq/action/OFFLINE', '前言'],
                                        ['views/gzyq/action/OFFLINE_REDIS', '离线消息保存到Redis'],
                                        ['views/gzyq/action/OFFLINE_MYSQL', '离线消息保存到MYSQL'],
                                    ]
                                },
                            ]
                        },
                        {
                            title: "数据源配置",
                            collapsable: true,
                            children: [
                                ['views/gzyq/source/BEFORE', '前言'],
                                ['views/gzyq/source/MYSQL', 'Mysql'],
                                ['views/gzyq/source/ORACLE', 'Oracle'],
                                ['views/gzyq/source/POSTGRESQL', 'Postgresql'],
                                ['views/gzyq/source/SQLSERVER', 'Sqlserver'],
                                ['views/gzyq/source/TDENGINE', 'Tdengine'],
                                ['views/gzyq/source/CLICKHOUSE', 'Clickhouse'],
                                ['views/gzyq/source/WEBHOOK', 'Webhook'],
                                ['views/gzyq/source/KAFKA', 'Kafka'],
                                ['views/gzyq/source/LOG', '日志文件'],
                                ['views/gzyq/source/MQTT', 'MQTT'],
                                ['views/gzyq/source/RABBITMQ', 'Rabbitmq'],
                                ['views/gzyq/source/REDIS', 'Redis'],
                                ['views/gzyq/source/ROCKETMQ', 'Rocketmq'],
                            ]
                        }
                    ]
                },
                {
                    title: "多协议",
                    collapsable: true,
                    children: [
                        ['views/protocol/coap', 'COAP'],
                        ['views/protocol/32960', 'GBT32960'],
                        ['views/protocol/v2c', 'V2C'],
                        ['views/protocol/ocpp', 'OCPP'],
                        ['views/protocol/websocket', 'WEBSOCKET'],
                        ['views/protocol/i1', 'i1']
                    ]
                },

                {
                    title: "工具",
                    collapsable: true,
                    children: [
                        ['views/tools/ssl', '证书生成'],
                        ['views/tools/haproxy', 'HaProxy配置']
                    ]
                },
                {
                    title: "API",
                    collapsable: true,
                    children: [
                        ['views/api/Publish', '消息推送'],
                        ['views/api/Check', '客户端查询'],
                        ['views/api/kick', '客户端关闭']

                    ]
                },
                {
                    title: "性能压测",
                    collapsable: true,
                    children: [
                        ['views/test/Conn', '连接数压测'],
                        ['views/test/Broad', '广播压测'],
                        ['views/test/Bridge', '桥接压测（kafka）'],
                        ['views/test/ConnConcurrent', '连接&并发测试'],
                        ['views/test/MoreTopic', '多topic压测对比'],
                        ['views/test/SingleTopic', '单topic压测对比'],
                        ['views/test/ShareTopic', '共享订阅压测对比'],
                        ['views/test/Wildcard', '通配符压测对比'],
                    ]
                },
                {
                    title: "可观测",
                    collapsable: true,
                    children: [
                        ['views/view/api', '监控安装'],
                        ['views/view/metrics', 'Metrics'],
                    ]
                },
                ['views/vs.md', 'VS EMQX'],
                ['views/mqtt', 'MQTT协议介绍'],
                ['views/FAQ', 'FAQ'],
                ['views/License', 'LICENSE']
            ],
            "/2_0_16/": [
                {
                    title: "前言",
                    collapsable: true,
                    children: [
                        ['views/product/introduction', '产品介绍'],
                        ['views/product/core', '功能概览']
                    ]
                },
                {
                    title: "安装部署",
                    collapsable: true,
                    children: [
                        ['views/install/optimize', '系统优化'],
                        ['views/install/Linux', "Linux安装"],
                        ['views/install/Windows', "Windows安装"],
                        ['views/install/MacOS', "MacOS安装"],
                        ['views/install/docker', 'Docker'],
                        ['views/install/docker-compose', 'Docker-Compose'],
                        ['views/install/kubernetes', 'Kubernetes']
                    ]
                },
                {
                    title: "配置指南",
                    collapsable: true,
                    children: [
                        ['views/config/read', '前言'],
                        ['views/config/mqtt', 'MQTT配置'],
                        ['views/config/pool', '连接池配置'],
                        ['views/config/cluster', '集群配置'],
                        ['views/config/http', 'HTTP配置'],
                        ['views/config/eventbus', 'EVENTBUS配置'],
                        ['views/config/store', '配置持久化'],
                        ['views/config/shareSubscribe', '共享订阅配置'],
                        ['views/config/retry', '重试配置'],
                        ['views/config/application', '应用配置'],
                        ['views/config/license', '配置license']
                    ]
                },
                {
                    title: "功能",
                    collapsable: true,
                    children: [
                        ['views/function/dashboard', 'Dashboard'],
                        ['views/function/ps', '发布订阅'],
                        ['views/function/share', '共享订阅'],
                        ['views/function/session', '会话消息'],
                        ['views/function/delay', '延迟消息'],
                        {
                            title: "认证鉴权",
                            collapsable: true,
                            children: [
                                ['views/auth/before', '介绍'],
                                ['views/auth/db', '数据库认证'],
                                ['views/auth/redis', 'redis认证'],
                                ['views/auth/rest', 'http认证'],
                                ['views/auth/fixed', '密码认证']
                            ]
                        },
                        {
                            title: "ACL功能",
                            collapsable: true,
                            children: [
                                ['views/acl/before', '介绍'],
                                ['views/acl/sql', 'SQL配置'],
                                ['views/acl/config', '文件配置']
                            ]
                        },
                        ['views/function/link', '连接管理'],
                        ['views/function/topic', '主题管理'],
                        {
                            title: "指令消费",
                            collapsable: true,
                            children: [
                                ['views/command/KAFKA', 'KAFKA'],
                                ['views/command/ROCKETMQ', 'ROCKETMQ'],
                                ['views/command/RABBITMQ', 'RABBITMQ'],
                                ['views/command/PULSAR', 'PULSAR'],
                                ['views/command/NACOS', 'NACOS']
                            ]
                        },
                        ['views/function/proxysub', '代理订阅'],
                        ['views/function/script', '脚本引擎']
                    ]
                },
                {
                    title: "规则引擎",
                    collapsable: true,
                    children: [
                        {
                            title: "事件类型",
                            collapsable: true,
                            children: [
                                ['views/gzyq/event/read', '介绍'],
                                ['views/gzyq/event/connect', '连接事件'],
                                ['views/gzyq/event/close', '连接断开事件'],
                                ['views/gzyq/event/sub', '订阅事件'],
                                ['views/gzyq/event/unsub', '取消订阅事件'],
                                ['views/gzyq/event/publish', '消息发布事件'],
                                ['views/gzyq/event/ack', '消息确认事件'],
                                ['views/gzyq/event/ping', '心跳事件'],
                                ['views/gzyq/event/offline', '离线消息事件']
                            ]
                        },
                        {
                            title: "规则配置",
                            collapsable: true,
                            children: [
                                ['views/gzyq/rule/INTRODUCE', '介绍'],
                                ['views/gzyq/rule/STARTED', '创建规则'],
                                ['views/gzyq/rule/GRAMMAR', 'SQL 语法与示例'],
                                ['views/gzyq/rule/FUNCTION', '内置 SQL 函数']
                            ]
                        },
                        {
                            title: "动作类型",
                            collapsable: true,
                            children: [
                                ['views/gzyq/action/SAVE_KAFKA', '保存到Kafka'],
                                ['views/gzyq/action/SAVE_MYSQL', '保存到Mysql'],
                                ['views/gzyq/action/SAVE_REDIS', '保存到Redis'],
                                {
                                    title: "离线消息存储",
                                    collapsable: true,
                                    children: [
                                        ['views/gzyq/action/OFFLINE', '前言'],
                                        ['views/gzyq/action/OFFLINE_REDIS', '离线消息保存到Redis'],
                                        ['views/gzyq/action/OFFLINE_MYSQL', '离线消息保存到MYSQL'],
                                    ]
                                },
                            ]
                        },
                        {
                            title: "数据源配置",
                            collapsable: true,
                            children: [
                                ['views/gzyq/source/BEFORE', '前言'],
                                ['views/gzyq/source/MYSQL', 'Mysql'],
                                ['views/gzyq/source/ORACLE', 'Oracle'],
                                ['views/gzyq/source/POSTGRESQL', 'Postgresql'],
                                ['views/gzyq/source/SQLSERVER', 'Sqlserver'],
                                ['views/gzyq/source/TDENGINE', 'Tdengine'],
                                ['views/gzyq/source/CLICKHOUSE', 'Clickhouse'],
                                ['views/gzyq/source/WEBHOOK', 'Webhook'],
                                ['views/gzyq/source/KAFKA', 'Kafka'],
                                ['views/gzyq/source/LOG', '日志文件'],
                                ['views/gzyq/source/MQTT', 'MQTT'],
                                ['views/gzyq/source/RABBITMQ', 'Rabbitmq'],
                                ['views/gzyq/source/REDIS', 'Redis'],
                                ['views/gzyq/source/ROCKETMQ', 'Rocketmq'],
                            ]
                        }
                    ]
                },
                {
                    title: "多协议",
                    collapsable: true,
                    children: [
                        ['views/protocol/coap', 'COAP'],
                        ['views/protocol/32960', 'GBT32960'],
                        ['views/protocol/v2c', 'V2C'],
                        ['views/protocol/ocpp', 'OCPP'],
                        ['views/protocol/websocket', 'WEBSOCKET'],
                        ['views/protocol/i1', 'i1']
                    ]
                },

                {
                    title: "工具",
                    collapsable: true,
                    children: [
                        ['views/tools/ssl', '证书生成'],
                        ['views/tools/haproxy', 'HaProxy配置']
                    ]
                },
                {
                    title: "API",
                    collapsable: true,
                    children: [
                        ['views/api/Publish', '消息推送'],
                        ['views/api/Check', '客户端查询'],
                        ['views/api/kick', '客户端关闭']

                    ]
                },
                {
                    title: "性能压测",
                    collapsable: true,
                    children: [
                        ['views/test/Conn', '连接数压测'],
                        ['views/test/Broad', '广播压测'],
                        ['views/test/Bridge', '桥接压测（kafka）'],
                        ['views/test/ConnConcurrent', '连接&并发测试'],
                        ['views/test/MoreTopic', '多topic压测对比'],
                        ['views/test/SingleTopic', '单topic压测对比'],
                        ['views/test/ShareTopic', '共享订阅压测对比'],
                        ['views/test/Wildcard', '通配符压测对比'],
                    ]
                },
                {
                    title: "可观测",
                    collapsable: true,
                    children: [
                        ['views/view/api', '监控安装'],
                        ['views/view/metrics', 'Metrics'],
                    ]
                },
                ['views/vs.md', 'VS EMQX'],
                ['views/mqtt', 'MQTT协议介绍'],
                ['views/FAQ', 'FAQ'],
                ['views/License', 'LICENSE']
            ],
            "/2_0_15/": [
                {
                    title: "前言",
                    collapsable: true,
                    children: [
                        ['views/product/introduction', '产品介绍'],
                        ['views/product/core', '功能概览']
                    ]
                },
                {
                    title: "安装部署",
                    collapsable: true,
                    children: [
                        ['views/install/optimize', '系统优化'],
                        ['views/install/docker', 'Docker'],
                        ['views/install/docker-compose', 'Docker-Compose'],
                        ['views/install/Linux', "Linux安装"],
                        ['views/install/Windows', "Windows安装"],
                        ['views/install/MacOS', "MacOS安装"]
                    ]
                },
                {
                    title: "配置指南",
                    collapsable: true,
                    children: [
                        ['views/config/read', '前言'],
                        ['views/config/mqtt', 'MQTT配置'],
                        ['views/config/pool', '连接池配置'],
                        ['views/config/cluster', '集群配置'],
                        ['views/config/http', 'HTTP配置'],
                        ['views/config/eventbus', 'EVENTBUS配置'],
                        ['views/config/store', '配置持久化'],
                        ['views/config/shareSubscribe', '共享订阅配置'],
                        ['views/config/retry', '重试配置'],
                        ['views/config/application', '应用配置']
                    ]
                },
                {
                    title: "功能",
                    collapsable: true,
                    children: [
                        ['views/function/dashboard', 'Dashboard'],
                        ['views/function/ps', '发布订阅'],
                        ['views/function/share', '共享订阅'],
                        ['views/function/session', '会话消息'],
                        ['views/function/delay', '延迟消息'],
                        {
                            title: "认证鉴权",
                            collapsable: true,
                            children: [
                                ['views/auth/before', '介绍'],
                                ['views/auth/db', '数据库认证'],
                                ['views/auth/redis', 'redis认证'],
                                ['views/auth/rest', 'http认证'],
                                ['views/auth/fixed', '密码认证']
                            ]
                        },
                        ['views/function/control', '访问控制'],
                        ['views/function/link', '连接管理'],
                        ['views/function/topic', '主题管理'],
                        ['views/function/monitor', '运维监控'],
                        ['views/function/proxysub', '代理订阅'],
                        ['views/function/script', '脚本引擎'],
                        ['views/function/device', '设备模拟'],
                        ['views/function/cluster', '配置集群'],
                        ['views/function/store', '配置持久化'],
                        ['views/function/license', '配置license']
                    ]
                },
                {
                    title: "规则引擎",
                    collapsable: true,
                    children: [
                        {
                            title: "事件类型",
                            collapsable: true,
                            children: [
                                ['views/gzyq/event/read', '介绍'],
                                ['views/gzyq/event/connect', '连接事件'],
                                ['views/gzyq/event/close', '连接断开事件'],
                                ['views/gzyq/event/sub', '订阅事件'],
                                ['views/gzyq/event/unsub', '取消订阅事件'],
                                ['views/gzyq/event/publish', '消息发布事件'],
                                ['views/gzyq/event/ack', '消息确认事件'],
                                ['views/gzyq/event/ping', '心跳事件'],
                                ['views/gzyq/event/offline', '离线消息事件']
                            ]
                        },
                        {
                            title: "规则配置",
                            collapsable: true,
                            children: [
                                ['views/gzyq/rule/INTRODUCE', '介绍'],
                                ['views/gzyq/rule/STARTED', '创建规则'],
                                ['views/gzyq/rule/GRAMMAR', 'SQL 语法与示例'],
                                ['views/gzyq/rule/FUNCTION', '内置 SQL 函数']
                            ]
                        },
                        {
                            title: "动作类型",
                            collapsable: true,
                            children: [
                                ['views/gzyq/action/SAVE_KAFKA', '保存到Kafka'],
                                ['views/gzyq/action/SAVE_MYSQL', '保存到Mysql'],
                                ['views/gzyq/action/SAVE_REDIS', '保存到Redis'],
                                {
                                    title: "离线消息存储",
                                    collapsable: true,
                                    children: [
                                        ['views/gzyq/action/OFFLINE', '前言'],
                                        ['views/gzyq/action/OFFLINE_REDIS', '离线消息保存到Redis'],
                                        ['views/gzyq/action/OFFLINE_MYSQL', '离线消息保存到MYSQL'],
                                    ]
                                },
                            ]
                        },
                        {
                            title: "数据源配置",
                            collapsable: true,
                            children: [
                                ['views/gzyq/source/BEFORE', '前言'],
                                ['views/gzyq/source/MYSQL', 'Mysql'],
                                ['views/gzyq/source/ORACLE', 'Oracle'],
                                ['views/gzyq/source/POSTGRESQL', 'Postgresql'],
                                ['views/gzyq/source/SQLSERVER', 'Sqlserver'],
                                ['views/gzyq/source/TDENGINE', 'Tdengine'],
                                ['views/gzyq/source/CLICKHOUSE', 'Clickhouse'],
                                ['views/gzyq/source/WEBHOOK', 'Webhook'],
                                ['views/gzyq/source/KAFKA', 'Kafka'],
                                ['views/gzyq/source/LOG', '日志文件'],
                                ['views/gzyq/source/MQTT', 'MQTT'],
                                ['views/gzyq/source/RABBITMQ', 'Rabbitmq'],
                                ['views/gzyq/source/REDIS', 'Redis'],
                                ['views/gzyq/source/ROCKETMQ', 'Rocketmq'],
                            ]
                        }
                    ]
                },
                {
                    title: "指令消费",
                    collapsable: true,
                    children: [
                        ['views/command/KAFKA', 'KAFKA'],
                        ['views/command/ROCKETMQ', 'ROCKETMQ'],
                        ['views/command/RABBITMQ', 'RABBITMQ'],
                        ['views/command/PULSAR', 'PULSAR'],
                        ['views/command/NACOS', 'NACOS']
                    ]
                },
                {
                    title: "多协议",
                    collapsable: true,
                    children: [
                        ['views/protocol/coap', 'COAP'],
                        ['views/protocol/32960', 'GBT32960'],
                        ['views/protocol/v2c', 'V2C'],
                        ['views/protocol/ocpp', 'OCPP'],
                        ['views/protocol/websocket', 'WEBSOCKET'],
                        ['views/protocol/i1', 'i1']
                    ]
                },

                {
                    title: "工具",
                    collapsable: true,
                    children: [
                        ['views/tools/ssl', '证书生成'],
                        ['views/tools/haproxy', 'HaProxy配置']
                    ]
                },
                {
                    title: "API",
                    collapsable: true,
                    children: [
                        ['views/api/Publish', '消息推送'],
                        ['views/api/Check', '客户端查询'],
                        ['views/api/kick', '客户端关闭']

                    ]
                },
                {
                    title: "性能压测",
                    collapsable: true,
                    children: [
                        ['views/test/Conn', '连接数压测'],
                        ['views/test/Broad', '广播压测'],
                        ['views/test/Bridge', '桥接压测（kafka）'],
                        ['views/test/ConnConcurrent', '连接&并发测试'],
                        ['views/test/MoreTopic', '多topic压测对比'],
                        ['views/test/SingleTopic', '单topic压测对比'],
                        ['views/test/ShareTopic', '共享订阅压测对比'],
                        ['views/test/Wildcard', '通配符压测对比'],
                    ]
                },
                {
                    title: "可观测",
                    collapsable: true,
                    children: [
                        ['views/view/api', '监控安装'],
                        ['views/view/metrics', 'Metrics'],
                    ]
                },
                ['views/vs.md', 'VS EMQX'],
                ['views/mqtt', 'MQTT协议介绍'],
                ['views/FAQ', 'FAQ'],
                ['views/License', 'LICENSE']
            ],
            "/2_0_13/": [
                {
                    title: "前言",
                    collapsable: true,
                    children: [
                        ['views/product/introduction', '产品介绍'],
                        ['views/product/core', '功能概览']
                    ]
                },
                {
                    title: "安装部署",
                    collapsable: true,
                    children: [
                        ['views/install/optimize', '系统优化'],
                        ['views/install/docker', 'Docker'],
                        ['views/install/docker-compose', 'Docker-Compose'],
                        ['views/install/Linux', "Linux安装"],
                        ['views/install/Windows', "Windows安装"],
                        ['views/install/MacOS', "MacOS安装"]
                    ]
                },
                {
                    title: "配置指南",
                    collapsable: true,
                    children: [
                        ['views/config/read', '前言'],
                        ['views/config/mqtt', 'MQTT配置'],
                        ['views/config/pool', '连接池配置'],
                        ['views/config/cluster', '集群配置'],
                        ['views/config/http', 'HTTP配置'],
                        ['views/config/eventbus', 'EVENTBUS配置'],
                        ['views/config/store', '配置持久化'],
                        ['views/config/shareSubscribe', '共享订阅配置'],
                        ['views/config/retry', '重试配置'],
                        ['views/config/application', '应用配置']
                    ]
                },
                {
                    title: "功能",
                    collapsable: true,
                    children: [
                        ['views/function/dashboard', 'Dashboard'],
                        ['views/function/ps', '发布订阅'],
                        ['views/function/share', '共享订阅'],
                        ['views/function/session', '会话消息'],
                        ['views/function/delay', '延迟消息'],
                        {
                            title: "认证鉴权",
                            collapsable: true,
                            children: [
                                ['views/auth/before', '介绍'],
                                ['views/auth/db', '数据库认证'],
                                ['views/auth/redis', 'redis认证'],
                                ['views/auth/rest', 'http认证'],
                                ['views/auth/fixed', '密码认证']
                            ]
                        },
                        ['views/function/control', '访问控制'],
                        ['views/function/link', '连接管理'],
                        ['views/function/topic', '主题管理'],
                        ['views/function/monitor', '运维监控'],
                        ['views/function/proxysub', '代理订阅'],
                        ['views/function/script', '脚本引擎'],
                        ['views/function/device', '设备模拟'],
                        ['views/function/cluster', '配置集群'],
                        ['views/function/store', '配置持久化'],
                        ['views/function/license', '配置license']
                    ]
                },
                {
                    title: "规则引擎",
                    collapsable: true,
                    children: [
                        {
                            title: "事件类型",
                            collapsable: true,
                            children: [
                                ['views/gzyq/event/read', '介绍'],
                                ['views/gzyq/event/connect', '连接事件'],
                                ['views/gzyq/event/close', '连接断开事件'],
                                ['views/gzyq/event/sub', '订阅事件'],
                                ['views/gzyq/event/unsub', '取消订阅事件'],
                                ['views/gzyq/event/publish', '消息发布事件'],
                                ['views/gzyq/event/ack', '消息确认事件'],
                                ['views/gzyq/event/ping', '心跳事件'],
                                ['views/gzyq/event/offline', '离线消息事件']
                            ]
                        },
                        {
                            title: "规则配置",
                            collapsable: true,
                            children: [
                                ['views/gzyq/rule/INTRODUCE', '介绍'],
                                ['views/gzyq/rule/STARTED', '创建规则'],
                                ['views/gzyq/rule/GRAMMAR', 'SQL 语法与示例'],
                                ['views/gzyq/rule/FUNCTION', '内置 SQL 函数']
                            ]
                        },
                        {
                            title: "动作类型",
                            collapsable: true,
                            children: [
                                ['views/gzyq/action/SAVE_KAFKA', '保存到Kafka'],
                                ['views/gzyq/action/SAVE_MYSQL', '保存到Mysql'],
                                ['views/gzyq/action/SAVE_REDIS', '保存到Redis'],
                                {
                                    title: "离线消息存储",
                                    collapsable: true,
                                    children: [
                                        ['views/gzyq/action/OFFLINE', '前言'],
                                        ['views/gzyq/action/OFFLINE_REDIS', '离线消息保存到Redis'],
                                        ['views/gzyq/action/OFFLINE_MYSQL', '离线消息保存到MYSQL'],
                                    ]
                                },
                            ]
                        },
                        {
                            title: "数据源配置",
                            collapsable: true,
                            children: [
                                ['views/gzyq/source/BEFORE', '前言'],
                                ['views/gzyq/source/MYSQL', 'Mysql'],
                                ['views/gzyq/source/ORACLE', 'Oracle'],
                                ['views/gzyq/source/POSTGRESQL', 'Postgresql'],
                                ['views/gzyq/source/SQLSERVER', 'Sqlserver'],
                                ['views/gzyq/source/TDENGINE', 'Tdengine'],
                                ['views/gzyq/source/CLICKHOUSE', 'Clickhouse'],
                                ['views/gzyq/source/WEBHOOK', 'Webhook'],
                                ['views/gzyq/source/KAFKA', 'Kafka'],
                                ['views/gzyq/source/LOG', '日志文件'],
                                ['views/gzyq/source/MQTT', 'MQTT'],
                                ['views/gzyq/source/RABBITMQ', 'Rabbitmq'],
                                ['views/gzyq/source/REDIS', 'Redis'],
                                ['views/gzyq/source/ROCKETMQ', 'Rocketmq'],
                            ]
                        }
                    ]
                },
                {
                    title: "指令消费",
                    collapsable: true,
                    children: [
                        ['views/command/KAFKA', 'KAFKA'],
                        ['views/command/ROCKETMQ', 'ROCKETMQ'],
                        ['views/command/RABBITMQ', 'RABBITMQ'],
                        ['views/command/PULSAR', 'PULSAR'],
                        ['views/command/NACOS', 'NACOS']
                    ]
                },
                {
                    title: "多协议",
                    collapsable: true,
                    children: [
                        ['views/protocol/coap', 'COAP'],
                        ['views/protocol/32960', 'GBT32960'],
                        ['views/protocol/v2c', 'V2C'],
                        ['views/protocol/ocpp', 'OCPP'],
                        ['views/protocol/websocket', 'WEBSOCKET'],
                        ['views/protocol/i1', 'i1']
                    ]
                },

                {
                    title: "工具",
                    collapsable: true,
                    children: [
                        ['views/tools/ssl', '证书生成'],
                        ['views/tools/haproxy', 'HaProxy配置']
                    ]
                },
                {
                    title: "API",
                    collapsable: true,
                    children: [
                        ['views/api/Publish', '消息推送'],
                        ['views/api/Check', '客户端查询'],
                        ['views/api/kick', '客户端关闭']

                    ]
                },
                {
                    title: "性能压测",
                    collapsable: true,
                    children: [
                        ['views/test/Conn', '连接数压测'],
                        ['views/test/Broad', '广播压测'],
                        ['views/test/Bridge', '桥接压测（kafka）'],
                        ['views/test/ConnConcurrent', '连接&并发测试'],
                        ['views/test/MoreTopic', '多topic压测对比'],
                        ['views/test/SingleTopic', '单topic压测对比'],
                        ['views/test/ShareTopic', '共享订阅压测对比'],
                        ['views/test/Wildcard', '通配符压测对比'],
                    ]
                },
                {
                    title: "可观测",
                    collapsable: true,
                    children: [
                        ['views/view/api', '监控安装'],
                        ['views/view/metrics', 'Metrics'],
                    ]
                },
                ['views/vs.md', 'VS EMQX'],
                ['views/mqtt', 'MQTT协议介绍'],
                ['views/FAQ', 'FAQ'],
                ['views/License', 'LICENSE']
            ],
            "/2_0_12/": [
                {
                    title: "前言",
                    collapsable: true,
                    children: [
                        ['views/product/introduction', '产品介绍'],
                        ['views/product/core', '功能概览']
                    ]
                },
                {
                    title: "安装部署",
                    collapsable: true,
                    children: [
                        ['views/install/optimize', '系统优化'],
                        ['views/install/docker', 'Docker'],
                        ['views/install/docker-compose', 'Docker-Compose'],
                        ['views/install/Linux', "Linux安装"],
                        ['views/install/Windows', "Windows安装"],
                        ['views/install/MacOS', "MacOS安装"]
                    ]
                },
                {
                    title: "配置指南",
                    collapsable: true,
                    children: [
                        ['views/config/read', '前言'],
                        ['views/config/mqtt', 'MQTT配置'],
                        ['views/config/pool', '连接池配置'],
                        ['views/config/cluster', '集群配置'],
                        ['views/config/http', 'HTTP配置'],
                        ['views/config/eventbus', 'EVENTBUS配置'],
                        ['views/config/store', '配置持久化'],
                        ['views/config/shareSubscribe', '共享订阅配置'],
                        ['views/config/retry', '重试配置'],
                        ['views/config/application', '应用配置']
                    ]
                },
                {
                    title: "功能",
                    collapsable: true,
                    children: [
                        ['views/function/admin', '管理页面'],
                        ['views/function/dashboard', 'Dashboard'],
                        ['views/function/ps', '发布订阅'],
                        ['views/function/share', '共享订阅'],
                        ['views/function/session', '会话消息'],
                        ['views/function/delay', '延迟消息'],
                        ['views/function/auth', '认证鉴权'],
                        ['views/function/control', '访问控制'],
                        ['views/function/link', '连接管理'],
                        ['views/function/topic', '主题管理'],
                        ['views/function/monitor', '运维监控'],
                        ['views/function/proxysub', '代理订阅'],
                        ['views/function/script', '脚本引擎'],
                        ['views/function/device', '设备模拟'],
                        ['views/function/cluster', '配置集群'],
                        ['views/function/store', '配置持久化'],
                        ['views/function/license', '配置license']
                    ]
                },
                {
                    title: "规则引擎",
                    collapsable: true,
                    children: [
                        {
                            title: "规则配置",
                            collapsable: true,
                            children: [
                                ['views/gzyq/rule/INTRODUCE', '介绍'],
                                ['views/gzyq/rule/STARTED', '创建规则'],
                                ['views/gzyq/rule/GRAMMAR', 'SQL 语法与示例'],
                                ['views/gzyq/rule/EVENT', 'SQL 事件类型与字段'],
                                ['views/gzyq/rule/FUNCTION', '内置 SQL 函数']
                            ]
                        },
                        {
                            title: "动作类型",
                            collapsable: true,
                            children: [
                                ['views/gzyq/action/SAVE_KAFKA', '保存到Kafka'],
                                ['views/gzyq/action/SAVE_MYSQL', '保存到Mysql'],
                                ['views/gzyq/action/SAVE_REDIS', '保存到Redis'],
                            ]
                        },
                        {
                            title: "数据源配置",
                            collapsable: true,
                            children: [
                                ['views/gzyq/source/BEFORE', '前言'],
                                ['views/gzyq/source/MYSQL', 'Mysql'],
                                ['views/gzyq/source/ORACLE', 'Oracle'],
                                ['views/gzyq/source/POSTGRESQL', 'Postgresql'],
                                ['views/gzyq/source/SQLSERVER', 'Sqlserver'],
                                ['views/gzyq/source/TDENGINE', 'Tdengine'],
                                ['views/gzyq/source/CLICKHOUSE', 'Clickhouse'],
                                ['views/gzyq/source/WEBHOOK', 'Webhook'],
                                ['views/gzyq/source/KAFKA', 'Kafka'],
                                ['views/gzyq/source/LOG', '日志文件'],
                                ['views/gzyq/source/MQTT', 'MQTT'],
                                ['views/gzyq/source/RABBITMQ', 'Rabbitmq'],
                                ['views/gzyq/source/REDIS', 'Redis'],
                                ['views/gzyq/source/ROCKETMQ', 'Rocketmq'],
                            ]
                        }
                    ]
                },
                {
                    title: "指令消费",
                    collapsable: true,
                    children: [
                        ['views/command/KAFKA', 'KAFKA'],
                        ['views/command/ROCKETMQ', 'ROCKETMQ'],
                        ['views/command/RABBITMQ', 'RABBITMQ'],
                        ['views/command/PULSAR', 'PULSAR'],
                        ['views/command/NACOS', 'NACOS']
                    ]
                },
                {
                    title: "多协议",
                    collapsable: true,
                    children: [
                        ['views/protocol/coap', 'COAP'],
                        ['views/protocol/32960', 'GBT32960'],
                        ['views/protocol/v2c', 'V2C'],
                        ['views/protocol/ocpp', 'OCPP'],
                        ['views/protocol/websocket', 'WEBSOCKET'],
                        ['views/protocol/i1', 'i1']
                    ]
                },

                {
                    title: "工具",
                    collapsable: true,
                    children: [
                        ['views/tools/log', '日志监控'],
                        ['views/tools/ssl', '证书生成']
                    ]
                },
                {
                    title: "API",
                    collapsable: true,
                    children: [
                        ['views/api/Publish', '消息推送'],
                        ['views/api/Check', '客户端查询']

                    ]
                },
                {
                    title: "性能压测",
                    collapsable: true,
                    children: [
                        ['views/test/Conn', '连接数压测'],
                        ['views/test/Broad', '广播压测'],
                        ['views/test/Bridge', '桥接压测（kafka）'],
                        ['views/test/ConnConcurrent', '连接&并发测试'],
                        ['views/test/MoreTopic', '多topic压测对比'],
                        ['views/test/SingleTopic', '单topic压测对比'],
                        ['views/test/ShareTopic', '共享订阅压测对比'],
                        ['views/test/Wildcard', '通配符压测对比'],
                    ]
                },
                {
                    title: "可观测",
                    collapsable: true,
                    children: [
                        ['views/view/api', '监控安装'],
                        ['views/view/metrics', 'Metrics'],
                    ]
                },
                ['views/vs.md', 'VS EMQX'],
                ['views/mqtt', 'MQTT协议介绍'],
                ['views/FAQ', 'FAQ'],
                ['views/License', 'LICENSE']
            ]
        }

    }
}