import Router from 'elysia';
import { sortedAchievements, athleteToAnsewrs } from "../controllers"

const router = new Router();

router.get("/", () => {
    return `🏅 Bingo do Esporte is running`
});

router.get("/achievements", () => {
    return sortedAchievements
});

router.get("/athlets", () => {
    return athleteToAnsewrs
});

export default router;
