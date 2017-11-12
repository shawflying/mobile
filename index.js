var mobileUtil = {};
var operatorData = require("./operatorData.js")

//校验是否是手机设备
mobileUtil.isMobile = function(mobile) {
    var myreg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
    return myreg.test(mobile);
}

/**
 * 判断手机号码运营商
 */
mobileUtil.operator = function(mobile) {
    //校验是否手机号码
    if (mobileUtil.isMobile(mobile)) {

    }
    //截取获取前3位
    var m3 = mobile.substring(0, 3);
    var m4 = mobile.substring(0, 4)
    console.log(m3);
    var data = operatorData.operator;
    console.log(JSON.stringify(data[m3]));

    if (data[m3]) {
        return data[m3]
    } else if (data[m4]) {
        return data[m4]
    }
    return "您当前的号码不在范围内"
}

//查询归属地
mobileUtil.attribution = function(mobile) {

}

module.exports = mobileUtil;