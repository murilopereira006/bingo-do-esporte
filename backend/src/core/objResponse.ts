
import Achievement from "../core/achievement"
import AthleteData from "../core/athleteData"

export default interface ObjResponse {
    achievements: Achievement[],
    athletes: AthleteData[]
}
