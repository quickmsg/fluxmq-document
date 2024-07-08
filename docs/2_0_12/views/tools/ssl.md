# OpenSSL证书生成
> 使用OpenSSL创建生成CA证书、服务器、客户端证书及密钥

1. 生成CA证书
2. 生成服务器证书
3. 生成客户端证书
说明：
-  对于SSL单向认证：服务器需要CA证书、server证书、server私钥，客户端需要CA证。
-  对于SSL双向认证：服务器需要CA证书、server证书、server私钥，客户端需要CA证书，client证书、client私钥。
## 生成CA证书
1. 创建CA证书私钥
   > openssl genrsa -out ca.key 2048
2. 请求证书
   证数各参数含义如下：
   -  C-----国家（Country Name）
   -  ST----省份（State or Province Name）
   -  L----城市（Locality Name）
   -  O----公司（Organization Name）
   -  OU----部门（Organizational Unit Name）
   -  CN----产品名（Common Name）
   -  emailAddress----邮箱（Email Address）
   > openssl req -new -sha256 -key ca.key -out ca.csr -subj “/C=CN/ST=SD/L=JN/O=QDZY/OU=www.test.com/CN=CA/emailAddress=admin@test.com”
3. 自签署证书
   > openssl x509 -req -days 36500 -sha256 -extensions v3_ca -signkey ca.key -in ca.csr -out ca.cer
## （二）生成服务器证书
1. 创建服务器私钥
   > openssl genrsa  -out server.key 2048
2. 请求证书
   > openssl req -new -sha256 -key server.key -out server.csr -subj "/C=CN/ST=SD/L=JN/O=QDZY/OU=www.test.com/CN=SERVER/emailAddress=admin@test.com"
3. 使用CA证书签署服务器证书
   > openssl x509 -req -days 36500 -sha256 -extensions v3_req  -CA  ca.cer -CAkey ca.key  -CAserial ca.srl  -CAcreateserial -in server.csr -out server.cer
## （三）生成客户端证书
1. 生成客户端私钥
   > openssl genrsa  -out client.key 2048
2. 申请证书
   > openssl req -new -sha256 -key client.key  -out client.csr -subj "/C=CN/ST=SD/L=JN/O=QDZY/OU=www.test.com/CN=CLIENT/emailAddress=admin@test.com"
3. 使用CA证书签署客户端证书
   > openssl x509 -req -days 36500 -sha256 -extensions v3_req  -CA  ca.cer -CAkey ca.key  -CAserial ca.srl  -CAcreateserial -in client.csr -out client.cer

::: tip
Netty需要支持PKCS8格式读取私钥
> openssl pkcs8 -topk8 -nocrypt -in pkcs1_key_file -out pkcs8_key.pem
:::