const baseUrl = 'https://localhost:8080/api/AgeGroups';

export async function getAdultsId() {
    const response = await fetch(baseUrl);

    let result = await response.json();

    const adultId = result.find(x => x.name === "Възрастен").id;

    return adultId;
}

export async function getKidsId() {
    const response = await fetch(baseUrl);

    let result = await response.json();

    const kidId = result.find(x => x.name === "Дете").id;

    return kidId;
}

export async function getBabiesId() {
    const response = await fetch(baseUrl);

    let result = await response.json();

    const babyId = result.find(x => x.name === "Бебе").id;

    return babyId;
}