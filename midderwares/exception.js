const {HttpException} = require('../core/http-exception');
// 全局捕获异常
const catchError = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        if (error instanceof HttpException) {
            ctx.body = {
                msg: error.msg,
                errorCode: error.errorCode,
                request: `${ctx.method} ${ctx.path}`
            };
            ctx.status = error.status
        }
    }
};

module.exports = catchError;