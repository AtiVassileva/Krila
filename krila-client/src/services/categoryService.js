import * as genderService from "./genderService";

const baseUrl = 'https://localhost:8080/api/Categories';

let adultWomenId;
genderService.getAdultWomenId()
    .then((res) => { adultWomenId = res });

let adultMenId;
genderService.getAdultMenId()
    .then((res) => { adultMenId = res });

let kidsMenId;
genderService.getKidsMenId()
    .then((res) => { kidsMenId = res });

let kidsWomenId;
genderService.getKidsWomenId()
    .then((res) => { kidsWomenId = res });

let babiesMenId;
genderService.getBabiesMenId()
.then((res) => babiesMenId = res);

let babiesWomenId;
genderService.getBabiesWomenId()
.then((res) => babiesWomenId = res);

export async function getMenCategories() {
    const response = await fetch(baseUrl);
    let result = await response.json();

    let menCategories = result.filter(x => x.genderId === adultMenId);

    return menCategories;
}

export async function getWomenCategories() {
    const response = await fetch(baseUrl);
    let result = await response.json();

    let womenCategories = result.filter(x => x.genderId === adultWomenId);

    return womenCategories;
}

export async function getBoysCategories() {
    const response = await fetch(baseUrl);
    let result = await response.json();

    let menCategories = result.filter(x => x.genderId === kidsMenId);

    return menCategories;
}

export async function getGirlsCategories() {
    const response = await fetch(baseUrl);
    let result = await response.json();

    let womenCategories = result.filter(x => x.genderId === kidsWomenId);

    return womenCategories;
}

export async function getBabyBoysCategories () {
    const response = await fetch(baseUrl);
    let result = await response.json();

    let babyBoyCategories = result.filter(x => x.genderId === babiesMenId);

    return babyBoyCategories;
}

export async function getBabyGirlCategories () {
    const response = await fetch(baseUrl);
    let result = await response.json();

    let babyGirlCategories = result.filter(x => x.genderId === babiesWomenId);

    return babyGirlCategories;
}