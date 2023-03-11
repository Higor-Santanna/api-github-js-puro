const screen = {
    userInfo: document.querySelector(".profile-data"),
    renderUser(user){
        this.userInfo.innerHTML = `<div class="info">
                             <img src="${user.avatarUrl} " alt="Foto od perfil do usuário" />
                             <div class="data">
                                 <h1>${user.name ?? "Não possui nome 🙄😐"}</h1>
                                 <p>${user.bio ?? "Não possui bio cadastrada 🙄😐"}</p>
                             </div>
                         </div>
                         <div class="followers-and-following">
                            <div class="followers ">
                                <h3>Seguidores:</h3>
                                <p>${user.followers}</p>
                            </div>
                            <div class="following">
                                <h3>Seguindo:</h3>
                                <p>${user.following}</p>
                            </div>
                        </div>`
        
        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);

        if(user.repositories.length > 0){
            this.userInfo.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }
    },
    renderNotFound(){
        this.userInfo.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }

/* A função desse objeto é mostrar o elemento na tela */