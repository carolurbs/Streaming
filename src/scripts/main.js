document.addEventListener('DOMContentLoaded', function(){
    const heroSection= document.querySelector('.hero');
   const alturaHero= heroSection.clientHeight;
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



function ocultaElementosHeader(){
    const header=document.querySelector('header')
    header.classList.add('header--is-hidden');
}

function exibeElementosHeader(){
    const header=document.querySelector('header')
    header.classList.remove('header--is-hidden');
}