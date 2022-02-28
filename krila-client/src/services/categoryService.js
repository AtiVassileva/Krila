import * as genderService from "./genderService";

const baseUrl = 'https://localhost:8080/api/Categories';

let adultWomenId;

genderService.getAdultWomenId()
    .then((res) => { adultWomenId = res });

let adultMenId;

genderService.getAdultMenId()
    .then((res) => { adultMenId = res });

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