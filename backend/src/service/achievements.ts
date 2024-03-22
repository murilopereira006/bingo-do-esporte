import { PrismaClient, dataset_olympics } from '@prisma/client';
import { GoldMedalInCity, GoldMedalInYear, SilverMedalInCity, SilverMedalInYear, CupperMedalInCity, CupperMedalInYear, HasAnyMedalInCity, HasAnyMedalInYear, WasInCity } from "../helpers/possibleAchievements"
import Achievement from "../core/achievement";
import level from "../core/levelOfDifficulty";
import AthleteData from "../core/athleteData";

const db = new PrismaClient();

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

const getAthlete = async (spot: Achievement): Promise<AthleteData[] | Error> => {
    try {
      let temp: AthleteData[] = [];
      const athlets = await db.dataset_olympics.findMany({
        where: {
          NOC: "BRA", 
          Medal: "Gold"
        }
      });
  
      return athlets;
    } catch (error) {
      console.error(error);
      throw new Error("Falha na chamada do banco de dado em getAthlete em /service");
    }
};
  

export const randomAchievement = (level: level): Achievement => {
    return getRandomEvent(level)
}

export const get50Achievements = (level: level): Achievement[] => {
    let responseArray: Achievement[] = []
    while (responseArray.length < 50) {
        responseArray.push(randomAchievement(level))
    }

    return responseArray
}

export const get3AthleteForEachAchievement = (arrayOfAchievements: Achievement[]): AthleteData[] => {
    let arrayOfAthleteData: AthleteData[] = []

    arrayOfAchievements.map(async (spot: Achievement) => {
        let temp: AthleteData | Error = await getAthlete(spot)
        arrayOfAthleteData.push(temp)
    });
    
    return arrayOfAthleteData
}

// export const get3AthleteForEachAchievement = async (
//     arrayOfAchievements: Achievement[]
//   ): Promise<AthleteData[]> => {
  
//     const promises = arrayOfAchievements.map(async spot => {
//       return await getAthlete(spot)
//     });
  
//     let athleteData: AthleteData[] = [];
  
//     try {
//       const results = await Promise.all(promises);
//       results.forEach(result => {
//         if(!(result instanceof Error)) {
//           athleteData.push(result)
//         }
//       })
//     } catch (error) {
//       console.error("Error resolving promises:", error)
//       throw new Error("Failed to get athlete data for each achievement.")
//     }
  
//     return athleteData
// }
