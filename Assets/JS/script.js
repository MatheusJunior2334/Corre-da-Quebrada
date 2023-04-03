//Início do Mapa Interativo

//Parte 1 - Título do Mapa

document.querySelectorAll('path')
.forEach(elemento => {
    elemento.addEventListener('mouseover', () => {
        elemento.setAttribute('class', 'hover')
    })

    elemento.addEventListener('mouseout', () => {
        elemento.setAttribute('class', 'fill str0')
    })

    elemento.addEventListener('click', () => {
        document.querySelector('#regiao_nome').textContent = elemento.attributes.id.nodeValue
    })
})

//Parte 2 - Texto da Região

function regiao_leste() {
    document.getElementById("regiao_leste").style.display="block";
    document.getElementById("regiao_norte").style.display="none";
    document.getElementById("regiao_oeste").style.display="none";
    document.getElementById("regiao_sudeste").style.display="none";
    document.getElementById("regiao_sudoeste").style.display="none";
    document.getElementById("regiao_central").style.display="none";
}

function regiao_norte() {
    document.getElementById("regiao_leste").style.display="none";
    document.getElementById("regiao_norte").style.display="block";
    document.getElementById("regiao_oeste").style.display="none";
    document.getElementById("regiao_sudeste").style.display="none";
    document.getElementById("regiao_sudoeste").style.display="none";
    document.getElementById("regiao_central").style.display="none";
}

function regiao_oeste () {
    document.getElementById("regiao_leste").style.display="none";
    document.getElementById("regiao_norte").style.display="none";
    document.getElementById("regiao_oeste").style.display="block";
    document.getElementById("regiao_sudeste").style.display="none";
    document.getElementById("regiao_sudoeste").style.display="none";
    document.getElementById("regiao_central").style.display="none";
}

function regiao_sudeste () {
    document.getElementById("regiao_leste").style.display="none";
    document.getElementById("regiao_norte").style.display="none";
    document.getElementById("regiao_oeste").style.display="none";
    document.getElementById("regiao_sudeste").style.display="block";
    document.getElementById("regiao_sudoeste").style.display="none";
    document.getElementById("regiao_central").style.display="none";
}

function regiao_sudoeste () {
    document.getElementById("regiao_leste").style.display="none";
    document.getElementById("regiao_norte").style.display="none";
    document.getElementById("regiao_oeste").style.display="none";
    document.getElementById("regiao_sudeste").style.display="none";
    document.getElementById("regiao_sudoeste").style.display="block";
    document.getElementById("regiao_central").style.display="none";
}

function regiao_central () {
    document.getElementById("regiao_leste").style.display="none";
    document.getElementById("regiao_norte").style.display="none";
    document.getElementById("regiao_oeste").style.display="none";
    document.getElementById("regiao_sudeste").style.display="none";
    document.getElementById("regiao_sudoeste").style.display="none";
    document.getElementById("regiao_central").style.display="block";
}