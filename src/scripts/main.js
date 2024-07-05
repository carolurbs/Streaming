document.addEventListener('DOMContentLoaded', function(){
    const heroSection= document.querySelector('.hero');
    const alturaHero= heroSection.clientHeight;
    const scrollContainer = document.querySelector('.sugestions__scroll');
    scrollContainer.addEventListener("scroll", checkScrollPosition);
    window.addEventListener('scroll',function(){
    const posicaoAtual= this.window.scrollY;
    if(posicaoAtual<alturaHero)
    {
        ocultaElementosHeader();
    }
    else{
        exibeElementosHeader();
    }
});

})
document.getElementById("scrollLeftBtn").addEventListener("click", function() {
    document.querySelector(".sugestions__scroll").scrollBy({ left: -1200, behavior: 'smooth' });
    checkScrollPosition();
});


document.getElementById("scrollRightBtn").addEventListener("click", function() {
    document.querySelector(".sugestions__scroll").scrollBy({ left: 1200, behavior: 'smooth' });
    checkScrollPosition();
});

function checkScrollPosition() {
    const scrollContainer = document.querySelector('.sugestions__scroll');
    if (scrollContainer.scrollLeft === 0) {
        ocultaBotaoEsquerdo();
        exibeBotaoDireito();
    }
    else{
        ocultaBotaoDireito();
        exibeBotaoEsquerdo();
    }

    
}

function ocultaElementosHeader(){
    const header=document.querySelector('header')
    header.classList.add('header--is-hidden');
}

function exibeElementosHeader(){
    const header=document.querySelector('header')
    header.classList.remove('header--is-hidden');
}
function ocultaBotaoDireito(){
    const rightBtnScroll= document.querySelector('.forward__button');
    rightBtnScroll.classList.add('forward__button--hidden');

}
function exibeBotaoDireito(){
    const rightBtnScroll= document.querySelector('.forward__button');
    rightBtnScroll.classList.remove('forward__button--hidden');



}
function ocultaBotaoEsquerdo(){
    const leftBtnScroll= document.querySelector('.backward__button');
    leftBtnScroll.classList.add('backward__button--hidden');

}
function exibeBotaoEsquerdo(){
    const leftBtnScroll= document.querySelector('.backward__button');
    leftBtnScroll.classList.remove('backward__button--hidden');



}