export async function getProducts() {
    const response = await fetch('https://ranekapi.origamid.dev/json/api/produto');

    // console.log(await response.json());
    return response.json();
}
