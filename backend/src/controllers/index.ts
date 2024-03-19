import { randomAchievement } from "../service/achievements"
import { easy } from "../helpers/listOfLevels"
import Achievement from "../core/achievement"
import path from 'path'

export const sortedAchievements = (): Achievement[] => {
    let responseArray: Achievement[] = []

    while (responseArray.length < 50) {
        let achievement = randomAchievement(easy)
        achievement.image_composition.map(img => {
            img.image_url = `${path.join(__dirname, 'src', 'assets', 'img')}`
        })
        responseArray.push(achievement)
    }
    // sortear um ano ou cidade
    // Consferir se ano ou cidade eh existente
    // Adicionar o "achievemetne" no array resposta
    // tratar o path de imagem do array responsta
    return responseArray
}