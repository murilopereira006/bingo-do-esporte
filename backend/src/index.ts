import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger';
import cors from '@elysiajs/cors';
import router from "./routers";

const port: number | any = process.env.PORT;
const app = new Elysia();

app.use(cors())
app.use(swagger())
app.use(router)

app.listen(port);

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
