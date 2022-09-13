import * as dotenv from 'dotenv'
import Koa from "koa"
import {authenticationRouter} from "@routes";

dotenv.config()

const app = new Koa()

app.use(authenticationRouter.routes())

app.listen(5050, () => console.log("listening"))

