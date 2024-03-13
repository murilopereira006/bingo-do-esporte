import { Elysia } from "elysia";
import { PrismaClient } from '@prisma/client';
import { swagger } from '@elysiajs/swagger' 

const port: number | any = process.env.PORT;
const app = new Elysia();
const db = new PrismaClient();

app.use(swagger())

app.get("/", async () => {
  const athets = await db.dataset_olympics.findMany({
    where: {
      NOC: 'BRA',
      AND: {
        Medal: "Gold"
      }
    }
  })
  console.log(athets)
});
app.get("/teste", () => "Tchau Elysia");
app.listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
