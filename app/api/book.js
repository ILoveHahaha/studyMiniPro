const kouRouter = require('koa-router');
const router = new kouRouter();
const {HttpException, ParameterException} = require('../../core/http-exception');

// router.get('/book/latest', async (ctx, next) => {
//     ctx.body = 'book';
//     await next()
// });
router.post('/book/:id', async (ctx, next) => {
    // console.log(ctx);
    const error = ParameterException('error');
    throw error;
    // await next()
})

module.exports = router;