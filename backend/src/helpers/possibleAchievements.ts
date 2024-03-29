import Achievement from "../core/achievement";
import AchievementImage from "../core/achievementImage";
import {
    AnyMedal,
    GoldMedal,
    SilverMedal,
    CupperMedal,
    Sydney,
    Athina,
    Beijing,
    London,
    Rio
} from "../assets";

const ImageSelector = (reference: String): AchievementImage => {
    switch (true) {
        case reference.includes("Sydney") || reference.includes("2000"):
            return Sydney
            
        case reference.includes("Athina") || reference.includes("2004"):
            return Athina
            
        case reference.includes("Beijing") || reference.includes("2008"):
            return Beijing
            
        case reference.includes("London") || reference.includes("2012"):
            return London
            
        case reference.includes("Rio") || reference.includes("2016"):
            return Rio
    
        default:
            return GoldMedal
    }
}

export const HasAnyMedal = (): Achievement => {
    return {
        name: `Medalist`,
        image_composition: [AnyMedal]
    };
};

export const HasAnyMedalInCity = (cityName: String): Achievement => {
    const cityImage = ImageSelector(cityName);
    return {
        name: `Medalist in ${cityName}`,
        image_composition: [AnyMedal, cityImage]
    };
};

export const HasAnyMedalInYear = (year: String): Achievement => {
    const cityImage = ImageSelector(year);
    return {
        name: `Medalist in ${year}`,
        image_composition: [AnyMedal, cityImage]
    };
};

export const GoldMedalInCity = (cityName: String): Achievement => {
    const cityImage = ImageSelector(cityName);
    return {
        name: `Gold Medal in ${cityName}`,
        image_composition: [GoldMedal, cityImage]
    };
};

export const SilverMedalInCity = (cityName: String): Achievement => {
    const cityImage = ImageSelector(cityName);
    return {
        name: `Silver Medal in ${cityName}`,
        image_composition: [SilverMedal, cityImage]
    };
};

export const CupperMedalInCity = (cityName: String): Achievement => {
    const cityImage = ImageSelector(cityName);
    return {
        name: `Cupper Medal in ${cityName}`,
        image_composition: [CupperMedal, cityImage]
    };
};

export const GoldMedalInYear = (year: String): Achievement => {
    const yearImage = ImageSelector(year);
    return {
        name: `Gold Medal in ${year}`,
        image_composition: [GoldMedal, yearImage]
    };
};

export const SilverMedalInYear = (year: String): Achievement => {
    const yearImage = ImageSelector(year);
    return {
        name: `Silver Medal in ${year}`,
        image_composition: [SilverMedal, yearImage]
    };
};

export const CupperMedalInYear = (year: String): Achievement => {
    const yearImage = ImageSelector(year);
    return {
        name: `Cupper Medal in ${year}`,
        image_composition: [CupperMedal, yearImage]
    };
};

export const WasInCity = (cityName: String): Achievement => {
    const cityImage = ImageSelector(cityName);
    return {
        name: `Competed in ${cityName}`,
        image_composition: [cityImage]
    };
};

export const WasInYear = (year: String): Achievement => {
    const yearImage = ImageSelector(year);
    return {
        name: `Competed in ${year}`,
        image_composition: [yearImage]
    };
};
