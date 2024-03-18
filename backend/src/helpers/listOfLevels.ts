import level from "../core/levelOfDifficulty"

export const easy: level = {
    level: "easy",
    cities: ["Sydney", "Athina", "Beijing", "London", "Rio", "Japan", "France"],
    years: ["2000", "2004", "2008", "2012", "2016", "2020", "2024"],
    medals: ["Gold"],
}

export const medium: level = {
    level: "easy",
    cities: ["Sydney", "Athina", "Beijing", "London", "Rio", "Japan", "France"],
    years: ["2000", "2004", "2008", "2012", "2016", "2020", "2024"],
    medals: ["Gold", "Silver", "Cupper"],
}

export const hard: level = {
    level: "easy",
    cities: ["*"],
    years: ["*"],
    medals: ["Gold", "Silver", "Cupper", ""],
}
