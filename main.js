var botao = document.querySelector('.botao');
botao.addEventListener("click", apertar);

function apertar() {

    //Nomes variaveis
    var body = document.querySelector('body')

    //Nomes var titulos
    var titulo = document.querySelector('h1');
    var subtituloCreator = document.querySelector('#titulo_creator');
    var subtituloImage = document.querySelector('#titulo_image')
    var subtituloMovie = document.querySelector('#titulo_movie')

    //Nomes paragrafos
    var paragrafoPrincipal = document.querySelector('#paragrafo_principal');
    var paragrafoCreator = document.querySelector('#paragrafo_creator')
    var paragrafoCard = document.querySelector('#paragrafo-card')

    //Nomes footer
    var footer = document.querySelector('.footer')
    var facebook = document.querySelector('#link-footer-f')
    var instagram = document.querySelector('#link-footer-i')
    var twitter = document.querySelector('#link-footer-t')
    var botaoScroll = document.querySelector('.botao-scroll')
    
    body.classList.add("corpo-js")

    //Classes titulos e subtitulos
    titulo.classList.add("titulo-js")
    subtituloCreator.classList.add("subtituloCreator-js")
    subtituloImage.classList.add("subtituloImage-js")
    subtituloMovie.classList.add("tituloMovie-js")

    //Classes paragrafos
    paragrafoPrincipal.classList.add("paragrafo_principal-js")
    paragrafoCreator.classList.add("paragrafoCreator-js")
    paragrafoCard.classList.add("paragrafoCard-js")
    botao.classList.add("botao-js")

    //Classes footer
    footer.classList.add("footer-js")
    facebook.classList.add("facebook-js")
    instagram.classList.add("instagram-js")
    twitter.classList.add("twitter-js")
    botaoScroll.classList.add("botaoScroll-js")
}

const botaoScroll = document.querySelector('.botao-scroll');
botaoScroll.addEventListener("click", apertarScroll);

function apertarScroll() {
    window.scroll({
        top: 0,
        behavior: "smooth",
    })
}





