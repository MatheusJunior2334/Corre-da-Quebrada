//Início do Tema Escuro
let scroll = document.documentElement //Analisa o HTML e analisa todos os elementos dele e os salva na variável (scroll, nesse caso)
let lastTheme = "dark";
let i = 0;

function mudarTema(){
    switch(lastTheme){
        case "dark":
            scroll.style.setProperty("--scroll_color", "#eee0e0a2");
            scroll.style.setProperty("--scroll_bg", "#353333")
            document.querySelector("body").style.cssText="color: #fff";
            document.querySelector("main").style.backgroundColor="#302D2D";
            //Header
            document.querySelector("header").style.backgroundColor="#494646";
            document.querySelector("header img").style.cssText="filter: invert(1)";
            document.querySelector("#header_inicial div").style.cssText="background-color: #302d2d";
            //Dark Mode
            document.getElementById("theme").style.backgroundImage="url('Assets/IMAGES/Sun_img.png')";
            //Section1
            document.getElementById("section1").style.backgroundColor="#302D2D";
            document.getElementById("big_img").style.border="1px solid #0D09B8";
            //Section2
            document.getElementById("section2").style.backgroundImage="url('/Assets/IMAGES/bigbus_dark.png')";
            document.getElementById("section2_part1").style.backgroundColor="rgba(0, 147, 232, 0.4)";
            document.getElementById("section2_part2").style.backgroundColor="rgba(0, 147, 232, 0.4)";
            //Section4
            document.getElementById("section4").style.backgroundColor="#007BC2";
            //Footer
            document.querySelector("footer").style.backgroundColor="#494646";
            document.getElementById("footer_superior").style.cssText="border-bottom: 1px solid #fff";
            document.querySelector("footer img").style.cssText="filter: invert(1)";
            
            for (i=0; i<=1; i++){
                document.getElementsByClassName("text_color")[i].style.cssText="color: #0093E8";
               // document.getElementById(`investimento${i+1}`).style.backgroundColor="#262626"; O $ serve para colocar uma variável dentro da string, e é necessário que a variável esteja entre uma chave e a variávl dentro dos parênteses deve estar dentro de uma crase
            }

            for (i=0; i<=3; i++){
                document.getElementsByClassName("footer_options")[i].style.color="#fff";
            }

            lastTheme = "light";
            break
        
        case "light":
            scroll.style.setProperty("--scroll_color", "#353333");
            scroll.style.setProperty("--scroll_bg", "#eee0e0a2")
            document.querySelector("body").style.cssText="color: #000";
            document.querySelector("main").style.backgroundColor="#FFF";
            //Header
            document.querySelector("header").style.backgroundColor="#006FB0";
            document.querySelector("header img").style.cssText="filter: invert(0)";
            document.querySelector("#header_inicial div").style.cssText="background-color: #fff";
            //Dark Mode
            document.getElementById("theme").style.backgroundImage="url('Assets/IMAGES/Moon_img.png')";
            //Section1
            document.getElementById("section1").style.backgroundColor="#fff";
            document.getElementById("big_img").style.border="1px solid #0093E8";
            //Section2
            document.getElementById("section2").style.backgroundImage="url('Assets/IMAGES/bigbus_light.png')";
            document.getElementById("section2_part1").style.backgroundColor="rgba(140, 210, 251, 0.7)";
            document.getElementById("section2_part2").style.backgroundColor="rgba(140, 210, 251, 0.7)";
            //Section4
            document.getElementById("section4").style.backgroundColor="#8CD2FB";
            //Footer
            document.querySelector("footer").style.backgroundColor="#0093E8";
            document.getElementById("footer_superior").style.cssText="border-bottom: 1px solid #000";
            document.querySelector("footer img").style.cssText="filter: invert(0)";
            

            for (i=0; i<=1; i++){
                document.getElementsByClassName("text_color")[i].style.cssText="color: #0D09B8";
                //document.getElementById(`investimento${i+1}`).style.backgroundColor="#fff";
            }

            for (i=0; i<=3; i++){
                document.getElementsByClassName("footer_options")[i].style.color="#000";
            }

            lastTheme = "dark";
            break
    }
}

//Fim do Tema Escuro


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

//Parte 2 - Texto da Região do Mapa

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

// *************************** //

//Animações

window.sr =ScrollReveal({reset: true});

sr.reveal("#section1 h1", {
    origin: "top",
    distance: "15px",
    duration: 760,
    delay: 300
})

sr.reveal("#button_adjust", {
    origin: "center",
    distance: "0px",
    duration: 750,
    delay: 250
})

sr.reveal("#section2_part1", {
    origin: "left",
    distance: "0px",
    duration: 1000,
    delay: 600
})

sr.reveal("#section2_part2", {
    origin: "right",
    distance: "0px",
    duration: 1000,
    delay: 600
})
