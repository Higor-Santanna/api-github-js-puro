import { baseUrl } from "../variables.js"

/* BUSCA DADOS DO USUÁRIO */
async function getUser(userName){
    const response = await fetch(`${baseUrl}/${userName}`)
    return await response.json()
}

export { getUser }