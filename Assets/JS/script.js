//Início do Mapa Interativo

document.querySelectorAll ('path')
.forEach (elemento => {
    elemento.addEventListener ('mouseover', () => {
        elemento.setAttribute ('class', 'hover')
    })

    elemento.addEventListener ('mouseout', () => {
        elemento.setAttribute ('class', 'fill str0')
    })

    elemento.addEventListener ('click', () => {
        document.querySelector ('#microregiao_nome').textContent = elemento.attributes.id.nodeValue
    })
})