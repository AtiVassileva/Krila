import * as ageGroupService from "./ageGroupService";

const baseUrl = 'https://localhost:8080/api/Genders';

let adultsAgeGroupId;

ageGroupService.getAdultsId()
    .then((res) => { adultsAgeGroupId = res });

export async function getAdultMenId() {
    const response = await fetch(baseUrl);
    let result = await response.json();

    let adultMenId =
        result
            .find(x => x.name === "Мъж" &&
                x.ageGroupId === adultsAgeGroupId)
            .id;

    return adultMenId;
}