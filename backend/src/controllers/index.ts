import { randomAchievement } from "../service/achievements"
import { easy } from "../helpers/listOfLevels"
import Achievement from "../core/achievement"

export const sortedAchievements = (): Achievement[] => {
    let responseArray: Achievement[] = []

    while (responseArray.length < 50) {
        responseArray.push(randomAchievement(easy))
    }
    // sortear um ano ou cidade
    // Consferir se ano ou cidade eh existente
    // Adicionar o "achievemetne" no array resposta
    // tratar o path de imagem do array responsta
    return responseArray
}