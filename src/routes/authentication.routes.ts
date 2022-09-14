import Router from "@koa/router"

export const authenticationRouter = new Router({prefix: "/api/auth"})

authenticationRouter.get("/key", ctx => {
    ctx.body = process.env.LAST_FM_API_KEY
})

authenticationRouter.get("/", (ctx) => {
    ctx.body = "WHADAYA WANT"
})