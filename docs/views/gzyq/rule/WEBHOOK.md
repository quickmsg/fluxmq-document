# 消息转发至HTTP服务

## 场景说明
支持通过 HTTP 服务的方式将消息和客户端事件发送到外部 HTTP 服务。

我们将通过示例来展示如何使用 Dashboard 创建一个简单的 HTTP 服务，并桥接到一个 HTTP 服务器。

## 前提条件
- 搭建一个简单的 HTTP 服务，用来接收 POST/ 请求

## 配置转发规则
1. 选择左侧导航栏的“规则引擎>规则管理”，单击左上角的“+”来新建规则。
   ![webhook_rule_1.png](../../../assets/images/gzyq/rule/webhook_rule_1.png)

2. 配置界面参考下表参数说明，填写规则内容。以下参数取值仅为示例，填写完成后单击“保存”。

| **参数名** | **参数说明**                |
|---------|-------------------------|
| 规则名称    | 自定义，如mqtt-data-webhook。 |
| 规则数据类型  | 下拉框选择事件类型               |
| 规则模板    | 编写数据转发SQL脚本             |
| 数据源     | 从已创建的数据源里选择MySQL实例      |
| 请求模板    | 消息推送规定样例、可选             |
| 是否异步    | 指定异步存储开关                |
![webhook_rule_2.png](../../../assets/images/gzyq/rule/webhook_rule_2.png)

3. 管理规则实例，可以通过看板界面继续编辑、启停用、删除操作
![webhook_rule_3.png](../../../assets/images/gzyq/rule/webhook_rule_3.png)