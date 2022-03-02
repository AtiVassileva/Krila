import * as ageGroupService from "./ageGroupService";

const baseUrl = 'https://localhost:8080/api/Genders';

let adultsAgeGroupId;
let kidsAgeGroupId;
let babiesAgeGroup;

ageGroupService.getAdultsId()
    .then((res) => { adultsAgeGroupId = res });

ageGroupService.getKidsId()
    .then((res) => { kidsAgeGroupId = res });

ageGroupService.getBabiesId()
    .then((res) => babiesAgeGroup = res);

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

export async function getAdultWomenId() {
    const response = await fetch(baseUrl);
    let result = await response.json();

    let adultWomenId =
        result
            .find(x => x.name === "Жена" &&
                x.ageGroupId === adultsAgeGroupId)
            .id;

    return adultWomenId;
}

export async function getKidsMenId() {
    const response = await fetch(baseUrl);
    let result = await response.json();

    let kidsMenId =
        result
            .find(x => x.name === "Мъж" &&
                x.ageGroupId === kidsAgeGroupId)
            .id;

    return kidsMenId;
}

export async function getKidsWomenId() {
    const response = await fetch(baseUrl);
    let result = await response.json();

    let kidsWomenId =
        result
            .find(x => x.name === "Жена" &&
                x.ageGroupId === kidsAgeGroupId)
            .id;

    return kidsWomenId;
}

export async function getBabiesMenId() {
    const response = await fetch(baseUrl);
    let result = await response.json();

    let babiesMenId =
        result
            .find(x => x.name === "Мъж" &&
                x.ageGroupId === babiesAgeGroup)
            .id;

    return babiesMenId;
}

export async function getBabiesWomenId () {
    const response = await fetch(baseUrl);
    let result = await response.json();

    let babiesWomenId =
        result
            .find(x => x.name === "Жена" &&
                x.ageGroupId === babiesAgeGroup)
            .id;

    return babiesWomenId;
}