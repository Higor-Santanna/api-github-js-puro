import { baseUrl, repositoriesQuantity } from "/src/scripts/variables.js"

/* BUSCA OS REPOSITÓRIOS */
async function getRepositories(userName){
    const response = await fetch(`${baseUrl}/${userName}/repos?per_page=${repositoriesQuantity}`)//O page=10 serve para pegar os 10 últimos repositórios
    return await response.json()
}
export { getRepositories }