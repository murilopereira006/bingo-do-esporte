import Router from 'elysia';
import { PrismaClient } from '@prisma/client';
import { sortedAchievements } from "../controllers"
import path from 'path';
// import { Rio, London, Beijing, Athina, Sydney } from '../assets';

const router = new Router();
const db = new PrismaClient();

router.get("/", () => {
    return `🏅 Bingo do Esporte is running`
});

router.get("/achievements", () => {
    return sortedAchievements
});

// router.get("/", async () => {
//     const athets = await db.dataset_olympics.findMany({
//       where: {
//         NOC: 'BRA',
//         AND: {
//           Medal: "Gold"
//       }
//     }
//   })
//   return athets
// });

// router.get("/teste", () => {
//   const achievements = [Rio, London, Beijing, Athina, Sydney].map(achievement => ({
//     ...achievement,
//     image_url: `${path.join(__dirname, '../assets', achievement.image_url)}`
//   }));
//   return achievements
// });

export default router;
