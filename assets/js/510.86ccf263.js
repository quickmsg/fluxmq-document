(window.webpackJsonp=window.webpackJsonp||[]).push([[510],{929:function(e,s,t){"use strict";t.r(s);var a=t(25),l=Object(a.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"openssl证书生成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#openssl证书生成"}},[e._v("#")]),e._v(" OpenSSL证书生成")]),e._v(" "),s("blockquote",[s("p",[e._v("使用OpenSSL创建生成CA证书、服务器、客户端证书及密钥")])]),e._v(" "),s("ol",[s("li",[e._v("生成CA证书")]),e._v(" "),s("li",[e._v("生成服务器证书")]),e._v(" "),s("li",[e._v("生成客户端证书\n说明：")])]),e._v(" "),s("ul",[s("li",[e._v("对于SSL单向认证：服务器需要CA证书、server证书、server私钥，客户端需要CA证。")]),e._v(" "),s("li",[e._v("对于SSL双向认证：服务器需要CA证书、server证书、server私钥，客户端需要CA证书，client证书、client私钥。")])]),e._v(" "),s("h2",{attrs:{id:"生成ca证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成ca证书"}},[e._v("#")]),e._v(" 生成CA证书")]),e._v(" "),s("ol",[s("li",[e._v("创建CA证书私钥\n"),s("blockquote",[s("p",[e._v("openssl genrsa -out ca.key 2048")])])]),e._v(" "),s("li",[e._v("请求证书\n证数各参数含义如下：\n"),s("ul",[s("li",[e._v("C-----国家（Country Name）")]),e._v(" "),s("li",[e._v("ST----省份（State or Province Name）")]),e._v(" "),s("li",[e._v("L----城市（Locality Name）")]),e._v(" "),s("li",[e._v("O----公司（Organization Name）")]),e._v(" "),s("li",[e._v("OU----部门（Organizational Unit Name）")]),e._v(" "),s("li",[e._v("CN----产品名（Common Name）")]),e._v(" "),s("li",[e._v("emailAddress----邮箱（Email Address）")])]),e._v(" "),s("blockquote",[s("p",[e._v("openssl req -new -sha256 -key ca.key -out ca.csr -subj “/C=CN/ST=SD/L=JN/O=QDZY/OU=www.test.com/CN=CA/emailAddress=admin@test.com”")])])]),e._v(" "),s("li",[e._v("自签署证书\n"),s("blockquote",[s("p",[e._v("openssl x509 -req -days 36500 -sha256 -extensions v3_ca -signkey ca.key -in ca.csr -out ca.cer")])])])]),e._v(" "),s("h2",{attrs:{id:"二-生成服务器证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二-生成服务器证书"}},[e._v("#")]),e._v(" （二）生成服务器证书")]),e._v(" "),s("ol",[s("li",[e._v("创建服务器私钥\n"),s("blockquote",[s("p",[e._v("openssl genrsa  -out server.key 2048")])])]),e._v(" "),s("li",[e._v("请求证书\n"),s("blockquote",[s("p",[e._v('openssl req -new -sha256 -key server.key -out server.csr -subj "/C=CN/ST=SD/L=JN/O=QDZY/OU=www.test.com/CN=SERVER/emailAddress=admin@test.com"')])])]),e._v(" "),s("li",[e._v("使用CA证书签署服务器证书\n"),s("blockquote",[s("p",[e._v("openssl x509 -req -days 36500 -sha256 -extensions v3_req  -CA  ca.cer -CAkey ca.key  -CAserial ca.srl  -CAcreateserial -in server.csr -out server.cer")])])])]),e._v(" "),s("h2",{attrs:{id:"三-生成客户端证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#三-生成客户端证书"}},[e._v("#")]),e._v(" （三）生成客户端证书")]),e._v(" "),s("ol",[s("li",[e._v("生成客户端私钥\n"),s("blockquote",[s("p",[e._v("openssl genrsa  -out client.key 2048")])])]),e._v(" "),s("li",[e._v("申请证书\n"),s("blockquote",[s("p",[e._v('openssl req -new -sha256 -key client.key  -out client.csr -subj "/C=CN/ST=SD/L=JN/O=QDZY/OU=www.test.com/CN=CLIENT/emailAddress=admin@test.com"')])])]),e._v(" "),s("li",[e._v("使用CA证书签署客户端证书\n"),s("blockquote",[s("p",[e._v("openssl x509 -req -days 36500 -sha256 -extensions v3_req  -CA  ca.cer -CAkey ca.key  -CAserial ca.srl  -CAcreateserial -in client.csr -out client.cer")])])])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("Netty需要支持PKCS8格式读取私钥")]),e._v(" "),s("blockquote",[s("p",[e._v("openssl pkcs8 -topk8 -nocrypt -in pkcs1_key_file -out pkcs8_key.pem")])])])])}),[],!1,null,null,null);s.default=l.exports}}]);