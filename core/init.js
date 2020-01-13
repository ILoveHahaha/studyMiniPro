const requireDirectory = require('require-directory');
const Router = require('koa-router');
class InitManager {
    static initCore(app) {
        InitManager.initLoadRouters(app);
        // 把异常处理函数放到global对象上，可用可不用
        InitManager.loadHttpException()
    }
    static initLoadRouters(app) {
        const apiDirectory = `${process.cwd()}/app/api`;
        requireDirectory(module, apiDirectory, {visit: whenLoadModule});
        function whenLoadModule(obj) {
            if (obj instanceof Router) {
                app.use(obj.routes())
            }
            else {
                for (let index in obj) {
                    if (obj[index] instanceof Router) {
                        app.use(obj[index].routes())
                    }
                }
            }
        }
    }
    static loadHttpException() {
        global.errs = require('./http-exception');
    }
}

module.exports = InitManager;