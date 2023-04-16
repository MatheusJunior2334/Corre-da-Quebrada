//Início do Click Scroll Lento

let $root = $('html, body');
$('a[href^="#"]').click(function() {
    let href = $.attr(this, 'href');
    $root.animate({
        scrollTop: $(href).offset().top
    }, 500, function() {
        window.location.hash = href;
    }); return false;
});

//Fim do Click Scroll Lento


//Início do Tema Escuro

let scroll = document.documentElement //Analisa o HTML e analisa todos os elementos dele e os salva na variável (scroll, nesse caso)
let lastTheme = "dark";
let i = 0;

function mudarTema(){
    switch(lastTheme){
        case "dark":
            scroll.style.setProperty("--scroll_color", "#eee0e0a2");
            scroll.style.setProperty("--scroll_bg", "#353333")
            document.getElementById("menu").style.backgroundColor="#494646";
            document.querySelector("#menu img").style.cssText="filter: invert(1)";
            document.querySelector("body").style.cssText="color: #fff";
            document.querySelector("main").style.backgroundColor="#302D2D";

            //Header
            document.querySelector("header").style.backgroundColor="#494646";
            document.querySelector("header img").style.cssText="filter: invert(1)";
            document.querySelector("#header_inicial div").style.cssText="background-color: #302d2d";

            //Dark Mode
            document.getElementById("theme").style.backgroundImage="url('Assets/IMAGES/Moon_img.png')";

            //Section1
            document.getElementById("section1").style.backgroundColor="#302D2D";
            document.getElementById("big_img").style.border="2px solid #025930";

            //Section2
            document.getElementById("section2").style.backgroundImage="url('/Assets/IMAGES/bigbus_dark.png')";
            document.getElementById("section2_part1").style.backgroundColor="rgba(4, 131, 71, 0.25)";
            document.getElementById("section2_part2").style.backgroundColor="rgba(4, 131, 71, 0.25)";

            //Section3
            document.getElementById("section3").style.backgroundColor="#048347";

            //Section4
            document.getElementById("section4").style.backgroundColor="#048347";

            //Footer
            document.querySelector("footer").style.backgroundColor="#494646";
            document.getElementById("footer_superior").style.cssText="border-bottom: 1px solid #fff";
            document.querySelector("footer img").style.cssText="filter: invert(1)";
            
            for (i=0; i<=1; i++) {
                document.getElementsByClassName("text_color")[i].style.cssText="color: #0ED145";
               // document.getElementById(`investimento${i+1}`).style.backgroundColor="#262626"; O $ serve para colocar uma variável dentro da string, e é necessário que a variável esteja entre uma chave e a variávl dentro dos parênteses deve estar dentro de uma crase
            }

            for (i=0; i<=7; i++) {
                document.getElementsByClassName("header_options")[i].style.color="#fff";
                document.getElementsByClassName("footer_options")[i].style.color="#fff";
            }

            lastTheme = "light";
            break
        
        case "light":
            scroll.style.setProperty("--scroll_color", "#353333");
            scroll.style.setProperty("--scroll_bg", "#eee0e0a2");
            document.querySelector("#menu img").style.cssText="filter: invert(0)";
            document.getElementById("menu").style.backgroundColor="#0ED145";
            document.querySelector("body").style.cssText="color: #000";
            document.querySelector("main").style.backgroundColor="#FFF";

            //Header
            document.querySelector("header").style.backgroundColor="#0ED145";
            document.querySelector("header img").style.cssText="filter: invert(0)";
            document.querySelector("#header_inicial div").style.cssText="background-color: #fff";

            //Dark Mode Icon
            document.getElementById("theme").style.backgroundImage="url('Assets/IMAGES/Sun_img.png')";

            //Section1
            document.getElementById("section1").style.backgroundColor="#fff";
            document.getElementById("big_img").style.border="2px solid #025930";

            //Section2
            document.getElementById("section2").style.backgroundImage="url('Assets/IMAGES/bigbus_light.png')";
            document.getElementById("section2_part1").style.backgroundColor="rgba(69, 255, 122, 0.4)";
            document.getElementById("section2_part2").style.backgroundColor="rgba(69, 255, 122, 0.4)";

            //Section3
            document.getElementById("section3").style.backgroundColor="rgba(69, 255, 122, 0.5)";

            //Section4
            document.getElementById("section4").style.backgroundColor="rgba(69, 255, 122, 0.5)";

            //Footer
            document.querySelector("footer").style.backgroundColor="#0ED145";
            document.getElementById("footer_superior").style.cssText="border-bottom: 1px solid #000";
            document.querySelector("footer img").style.cssText="filter: invert(0)";
            

            for (i=0; i<=1; i++) {
                document.getElementsByClassName("text_color")[i].style.cssText="color: #025930";
            }

            for (i=0; i<=7; i++) {
                document.getElementsByClassName("header_options")[i].style.color="#000";
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

//Fim do mapa Interativo


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
    delay: 350
})

sr.reveal("#section2", {
    origin: "center",
    distance: "0px",
    duration: 1000,
    delay: 600
})

sr.reveal("#section3 h1", {
    origin: "top",
    distance: "15px",
    duration: 1000,
    delay: 600
})

sr.reveal("#section3 p", {
    origin: "top",
    distance: "15px",
    duration: 1000,
    delay: 600
})

sr.reveal("#section3 .content", {
    origin: "center",
    distance: "0px",
    duration: 750,
    delay: 250
})

sr.reveal("#section4 h1", {
    origin: "top",
    distance: "10px",
    duration: 1000,
    delay: 500
})

sr.reveal("#section4_part2", {
    origin: "center",
    distance: "0px",
    duration: 750,
    delay: 300
})