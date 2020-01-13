// 异常处理，通过封装error类，形成一个新的HttpException类为基类，围绕这个类写子类个性化其他错误提示
/**
 * @param {String} msg 错误文本
 * @param {Number} errorCode 错误状态码
 * @param {Number} status 状态码
 * @description 封装Error函数
 * **/
class HttpException extends Error{
   constructor(msg = '服务器异常', errorCode = 10001, status = 400) {
       super();
       this.errorCode = errorCode;
       this.status = status;
       this.msg = msg
   }
}

/**
 * @param {String} msg 错误文本
 * @param {Number} errorCode 错误状态码
 * @description 参数错误函数
 * **/
class ParameterException extends HttpException{
    constructor(msg = '参数错误', errorCode = 10000) {
        super();
        this.errorCode = errorCode;
        this.status = 400;
        this.msg = msg
    }
}

module.exports = {
    HttpException,
    ParameterException
};