import * as genderService from "./genderService";

const baseUrl = 'https://localhost:8080/api/Categories';

let adultMenId;

genderService.getAdultMenId()
    .then((res) => { adultMenId = res });

export async function getMenCategories() {

    const response = await fetch(baseUrl);
    let result = await response.json();

    let menCategories = result.filter(x => x.genderId === adultMenId);

    return menCategories;
}