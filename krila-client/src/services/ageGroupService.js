const baseUrl = 'https://localhost:8080/api/AgeGroups';

export async function getAdultsId() {
    const response = await fetch(baseUrl);

    let result = await response.json();

    const adultId = result.find(x => x.name  === "Възрастен").id;

    return adultId;
}