// Daremos interacción a la página Web

const showNav = (idHamburguer, idContainer) => {
    const hamburguer = document.getElementById(idHamburguer),
        container = document.getElementById(idContainer)
    
    if (idHamburguer, idContainer) {
        hamburguer.addEventListener('click', () => {
            hamburguer.classList.toggle('container-main-hamburguer--new')
            container.classList.toggle('main-header__content--new')
        })
    }
}

showNav('main-hamburguer', 'main-header__content');