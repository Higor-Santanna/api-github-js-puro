import { getUser } from "/src/scripts/services/user.js"
import { getRepositories } from "/src/scripts/services/repositories.js"

import { user } from "/src/scripts/objects/user.js"
import { screen } from "/src/scripts/objects/screen.js"

document.getElementById('btn-search').addEventListener('click', () => {
    let userName = document.getElementById('input-search').value.trim()

    if(validateInput(userName)) return
    getUserData(userName)
})

function validateInput(userName){
    if(userName.length === 0){
        alert("O campo está vazio, preencha o campo com o nome do usuário")
        return true
    }
}

/* EVENTO QUE FAZ O BOTÃO ENTER FUNCIONAR */   
document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value.trim()
    const key = e.which || e.keyCode
    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        if(validateInput(userName)) return
        getUserData(userName)
    }
})

/* BUSCA INFORMAÇÕES DO USÁRIO COMO NOME, BIO e FOTO. */
async function getUserData(userName){

    const userResponse = await getUser(userName)//puxo os dados da API

    if(userResponse.message === "Not Found"){
        screen.renderNotFound()
        return
    }

    const repositoriesResponse = await getRepositories(userName)
    user.setInfo(userResponse) // Setando as informações do usuário.
    
    user.setRepositories(repositoriesResponse)
    screen.renderUser(user)
}


