import { get50Achievements, get3AthleteForEachAchievement } from "../service/achievements"
import { easy } from "../helpers/listOfLevels"
import Achievement from "../core/achievement"
import ObjResponse from "../core/objResponse"
import level from "../core/levelOfDifficulty"

export const sortedAchievements = (level: level): Achievement[] => {
    return get50Achievements(level ? level : easy)
}

export const athleteToAnsewrs = async (arrayOfAchievementslevel: Achievement[], level: level): Promise<ObjResponse> => {
    let response: ObjResponse = {
        achievements: [],
        athletes: []
    }

    if(!response.achievements || response.achievements.length < 50) {
        response.achievements = get50Achievements(level ? level : easy)
    } else {
        response.achievements = arrayOfAchievementslevel
    }

    response.athletes = await get3AthleteForEachAchievement(response.achievements)

    // recebe array de achievemets
    // busca atlhetas para cada achievement
    // adiciona no array de resposta

    return response
}
