(window.webpackJsonp=window.webpackJsonp||[]).push([[448],{775:function(t,s,a){"use strict";a.r(s);var n=a(25),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"内置-sql-函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#内置-sql-函数"}},[t._v("#")]),t._v(" 内置 SQL 函数")]),t._v(" "),s("p",[t._v("FluxMQ为了增强功能，提供了函数功能，可以通过函数来实现一些字符串处理,可以通过函数来转换想要的数据格式，注意基本类型转换，传入的字符串参数必须合法，并且在范围内")]),t._v(" "),s("h2",{attrs:{id:"函数列表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数列表"}},[t._v("#")]),t._v(" 函数列表")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("strong",[t._v("函数名")])]),t._v(" "),s("th",[s("strong",[t._v("说明")])])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("str(src)")]),t._v(" "),s("td",[t._v("- 使用在SQL语句中，可以将字节构转换成字符串"),s("br"),t._v("- 使用在支持模板替换的想象中，比如数据库保存的SQL，KAFKA的TOPIC等地方")])]),t._v(" "),s("tr",[s("td",[t._v("json(src)")]),t._v(" "),s("td",[t._v("- 使用在SQL语句中，可以将嵌套的Json结构转换成字符串"),s("br"),t._v("- 使用在支持模板替换的想象中，比如数据库保存的SQL，KAFKA的TOPIC等地方")])]),t._v(" "),s("tr",[s("td",[t._v("bytes(src)")]),t._v(" "),s("td",[t._v("将对象转成字节数组，会先将对象JSON化，再转成UTF8格式的字节数组")])]),t._v(" "),s("tr",[s("td",[t._v("int8(src)")]),t._v(" "),s("td",[t._v("将对象转为Int8类型，相当于byte")])]),t._v(" "),s("tr",[s("td",[t._v("int16(src)")]),t._v(" "),s("td",[t._v("将对象转为Int16类型，相当于short")])]),t._v(" "),s("tr",[s("td",[t._v("int32(src)")]),t._v(" "),s("td",[t._v("将对象转为Int32类型，相当于int")])]),t._v(" "),s("tr",[s("td",[t._v("int64(src)")]),t._v(" "),s("td",[t._v("将对象转为Int64类型，相当于long")])]),t._v(" "),s("tr",[s("td",[t._v("toDouble(src)")]),t._v(" "),s("td",[t._v("将对象转为double类型")])]),t._v(" "),s("tr",[s("td",[t._v("hexStr(src)")]),t._v(" "),s("td",[t._v("将对象转成HEX字符串， 会先将对象JSON化，再转成对象的16进制字符串")])]),t._v(" "),s("tr",[s("td",[t._v("date(src)")]),t._v(" "),s("td",[t._v("格式化时间字符串：yyyy-MM-dd")])]),t._v(" "),s("tr",[s("td",[t._v("datetime(src)")]),t._v(" "),s("td",[t._v("格式化时间字符串：yyyy-MM-dd HH:mm:ss")])]),t._v(" "),s("tr",[s("td",[t._v("dateToTimestamp(src)")]),t._v(" "),s("td",[t._v("yyyy-MM-dd 时间字符串转成时间戳")])]),t._v(" "),s("tr",[s("td",[t._v("datetimeToTimestamp(src)")]),t._v(" "),s("td",[t._v("yyyy-MM-dd HH:mm:ss 时间字符串转成时间戳")])]),t._v(" "),s("tr",[s("td",[t._v("uuid()")]),t._v(" "),s("td",[t._v("生成32位随机小写字符串")])]),t._v(" "),s("tr",[s("td",[t._v("uuidUpper()")]),t._v(" "),s("td",[t._v("生成32位随机大写字符串")])]),t._v(" "),s("tr",[s("td",[t._v("isBytes(src)")]),t._v(" "),s("td",[t._v("判断是否是字节数组")])]),t._v(" "),s("tr",[s("td",[t._v("isJson(src)")]),t._v(" "),s("td",[t._v("判断是否是json")])]),t._v(" "),s("tr",[s("td",[t._v('find(src,"字符串")')]),t._v(" "),s("td",[t._v("从头查找第一个包含子串的")])]),t._v(" "),s("tr",[s("td",[t._v('find(src,"字符串","leading")')]),t._v(" "),s("td",[t._v("从头查找第一个包含子串的")])]),t._v(" "),s("tr",[s("td",[t._v('find(src,"字符串","trailing")')]),t._v(" "),s("td",[t._v("从尾查找第一个包含子串的")])]),t._v(" "),s("tr",[s("td",[t._v('split(src,"字符串")')]),t._v(" "),s("td",[t._v("根据字符串切割原字符串")])]),t._v(" "),s("tr",[s("td",[t._v('split(src,"字符串","leading")')]),t._v(" "),s("td",[t._v("从头切割只切割第一个字符")])]),t._v(" "),s("tr",[s("td",[t._v('split(src,"字符串","trailing")')]),t._v(" "),s("td",[t._v("从尾切割只切割第一个字符")])]),t._v(" "),s("tr",[s("td",[t._v("last(src)")]),t._v(" "),s("td",[t._v("获取最后一个数组元素")])]),t._v(" "),s("tr",[s("td",[t._v("base64_encode(src)")]),t._v(" "),s("td",[t._v("获取base64加密字符串")])]),t._v(" "),s("tr",[s("td",[t._v("md5(src)")]),t._v(" "),s("td",[t._v("获取md5加密字符串")])]),t._v(" "),s("tr",[s("td",[t._v("sha1(src)")]),t._v(" "),s("td",[t._v("获取sha1加密字符串")])]),t._v(" "),s("tr",[s("td",[t._v("sha256(src)")]),t._v(" "),s("td",[t._v("获取sha256加密字符串")])]),t._v(" "),s("tr",[s("td",[t._v("sha512(src)")]),t._v(" "),s("td",[t._v("获取sha512加密字符串")])])])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"x"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\\"x\\":\\"1\\"}"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bytes")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abcd"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("97")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("98")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int8")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int16")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int32")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("int64")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toDouble")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"123"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("123.0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("hexStr")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("74657374")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("date")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1690599987495"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-07-29"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("datetime")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1690599987495"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-07-29 11:06:27"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("dateToTimestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-07-29"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1690599987495"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("datetimeToTimestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2023-07-29 11:06:27"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1690599987495"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uuid")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"56ea0797a6ed4d309bf71e0dd6ecd73c"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uuidUpper")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"09D27DE32DBF4AA19FD46339A31E184B"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a/b/ c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'b'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("' c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a/b/ c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'leading"),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("') = ['")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("', '")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" c'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'a/b/ c'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 'trailing"),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("') = ['")]),t._v("a"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("b"),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("', '")]),t._v(" c'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'eeabcabcee"),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("', '")]),t._v("abc"),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("') = '")]),t._v("abcabcee'\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'eeabcabcee"),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("', '")]),t._v("abc"),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("', '")]),t._v("leading"),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("') = '")]),t._v("abcabcee'\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("find")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'eeabcabcee"),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("', '")]),t._v("abc"),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("', '")]),t._v("trailing"),s("span",{pre:!0,attrs:{class:"token char"}},[t._v("') = '")]),t._v("abcee' \n")])])]),s("p",[s("a",{attrs:{name:"OGC3L"}})]),t._v(" "),s("h2",{attrs:{id:"函数使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数使用"}},[t._v("#")]),t._v(" 函数使用")]),t._v(" "),s("p",[t._v("以发布消息为例，将消息保存到数据库中，发布的数据格式如下：")]),t._v(" "),s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(' "'),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"temperature"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v("，\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"humidity"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("24")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"qos"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"topic"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test/fluxmq"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"clientId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A1212313"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v('"timestamp"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1632931200000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("SQL语句如下：")]),t._v(" "),s("div",{staticClass:"language-plsql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plsql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"$EVENT.PUBLISH"')]),t._v("\n")])])]),s("p",[t._v("保存到数据库中的SQL语句如下:")]),t._v(" "),s("div",{staticClass:"language-plsql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-plsql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("insert")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("into")]),t._v(" \n\ttest"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("topic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("qos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("msg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("clientId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("values")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${test}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("${qos}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${json(msg)}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'${clientId}'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("${"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v("}"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("最终给 'msg' 字段处理成json字符串")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('"{\\"temperature\\": 40,\\"humidity\\": 24}"\n')])])])])}),[],!1,null,null,null);s.default=r.exports}}]);