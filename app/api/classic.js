const kouRouter = require('koa-router');
const router = new kouRouter();

router.get('/classic/latest', async (ctx, next) => {
    ctx.body = 'classic';
    await next()
});

module.exports = router;