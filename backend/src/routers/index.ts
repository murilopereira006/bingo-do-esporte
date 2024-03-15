import Router from 'elysia';
import { PrismaClient } from '@prisma/client';

const router = new Router();
const db = new PrismaClient();

router.get("/", async () => {
    const athets = await db.dataset_olympics.findMany({
      where: {
        NOC: 'BRA',
        AND: {
          Medal: "Gold"
        }
      }
    })
    return athets
  });
router.get("/teste", () => "Tchau Elysia");

export default router;
