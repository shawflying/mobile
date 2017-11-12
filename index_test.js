var mobileUtil = require("./index.js")

console.log("校验设备号：" + "17721021494".substring(3, 4))
console.log("校验设备号：" + JSON.stringify(mobileUtil.operator("17721021494")))
console.log("校验设备号：" + JSON.stringify(mobileUtil.operator("17721021494")))
console.log("校验设备号：" + JSON.stringify(mobileUtil.operator("15806111231")))
console.log("校验设备号：" + mobileUtil.isMobile("15806111231"))