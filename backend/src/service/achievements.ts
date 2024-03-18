import { GoldMedalInCity, GoldMedalInYear } from "../helpers/possibleAchievements"
import Achievement from "../core/achievement";
import level from "../core/levelOfDifficulty";

const getRandomBoolean = (): boolean => {
    const randomNumber = Math.floor(Math.random() * 100)
    return randomNumber % 2 === 0 ? true : false
}

const getRandomItemFromArray = (array: String[]): String => {
    const randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

const getRandomEvent = (level: level): Achievement => {
    if (getRandomBoolean() === true) return GoldMedalInCity(getRandomItemFromArray(level.cities))
    else return GoldMedalInYear(getRandomItemFromArray(level.years))
}

export const randomAchievement = (level: level): Achievement => {
    return getRandomEvent(level)
}