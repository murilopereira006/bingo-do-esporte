import { Elysia } from "elysia";
import { PrismaClient } from '@prisma/client';
import { swagger } from '@elysiajs/swagger' 

const port: number | any = process.env.PORT;
const app = new Elysia();
const db = new PrismaClient();

app.use(swagger())

app.get("/", async () => {
  const users = await db.noc_region.findMany()
});
app.get("/teste", () => "Tchau Elysia");
app.listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
