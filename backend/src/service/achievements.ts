import { GoldMedalInCity, GoldMedalInYear, SilverMedalInCity, SilverMedalInYear, CupperMedalInCity, CupperMedalInYear, HasAnyMedalInCity, HasAnyMedalInYear, WasInCity } from "../helpers/possibleAchievements"
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
    switch (getRandomItemFromArray(level.medals)) {
        case "Gold":
            if (getRandomBoolean() === true) {
                return GoldMedalInCity(getRandomItemFromArray(level.cities))
            } else {
                return GoldMedalInYear(getRandomItemFromArray(level.years))
            }

        case "Silver":
            if (getRandomBoolean() === true) {
                return SilverMedalInCity(getRandomItemFromArray(level.cities))
            } else {
                return SilverMedalInYear(getRandomItemFromArray(level.years))
            }
        case "Cupper":
            if (getRandomBoolean() === true) {
                return CupperMedalInCity(getRandomItemFromArray(level.cities))
            } else {
                return CupperMedalInYear(getRandomItemFromArray(level.years))
            }
        case "*":
            if (getRandomBoolean() === true) {
                return HasAnyMedalInCity(getRandomItemFromArray(level.cities))
            } else {
                return HasAnyMedalInYear(getRandomItemFromArray(level.years))
            }

        case "":
            return WasInCity(getRandomItemFromArray(level.cities))
    
        default:
            if (getRandomBoolean() === true) {
                return GoldMedalInCity(getRandomItemFromArray(level.cities))
            } else {
                return GoldMedalInYear(getRandomItemFromArray(level.years))
            }
    }
}

export const randomAchievement = (level: level): Achievement => {
    return getRandomEvent(level)
}