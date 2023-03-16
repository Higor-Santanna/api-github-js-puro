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
        user.repositories.forEach(repo => {
            repositoriesItens += `<li><a href="${repo.html_url}" target="_blank">
                <p>${repo.name}</p>
                <ul class="icon-list">
                    <li><i class="fa-sharp fa-solid fa-code-fork"> ${repo.forks} </i></li>
                    <li>|</li>
                    <li><i class="fa-solid fa-star"> ${repo.stargazers_count
                    } </i></li>
                    <li>|</li>
                    <li><i class="fa-solid fa-eye"> ${repo.watchers} </i></li>
                    <li>|</li>
                    <li><i class="fa-solid fa-laptop-code"></i><p>${repo.language
                    }</p></li>
                </ul>
            </a>`
        });

        if(user.repositories.length > 0){
            this.userInfo.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        }

        let eventItens = ""
        user.events.forEach(event => {
            if(event.type === "PushEvent"){
                eventItens += `<li>
                                    <p>${event.repo.name} - </p>
                                    ${event.payload.commits[0].message}
                                </li>`
                                
            } else {
                eventItens += `<li>
                                    <p>${event.repo.name} - </p>
                                    ${event.payload.description}
                                </li>`
            }
        });

        if(user.events.length > 0){
            this.userInfo.innerHTML += `<div class="events">
                                            <h2>Eventos</h2>
                                            <ul class="events-list">${eventItens}</ul>
                                        </div>`
        }
    },
    renderNotFound(){
        this.userInfo.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }

/* A função desse objeto é mostrar o elemento na tela */