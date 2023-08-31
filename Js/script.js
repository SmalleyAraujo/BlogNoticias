//Inicio button menu
const btnButtonMenu = $("#btnButtonMenu")

const linkNav = $("#linkNav")  

btnButtonMenu.on('click' , function(){
    linkNav.slideToggle(2000)
})

// Fim button menu 
// Inicio Noticias
const noticias1 = $("#noticias")
const linkNoticias = $("#linkNoticias")
const iconExp = $("#iconExp")
const sumir =$("#sumir")

noticias1.on("click", function(){    
    // $("#caixa").fadeToggle(500)
     linkNoticias.slideDown(500)     
        
     iconExp.animate({rotate: "-180deg"}, {duration:500})  
})

sumir.on("click", function(){
    
    linkNoticias.slideUp(500)
    iconExp.animate({rotate: "-360deg"}, {duration:500}) 
})

// Fim Noticias
// Inicio Esportes
const esportes = $("#esportes")
const linkEsportes = $("#linkEsportes")
const iconExp2 = $("#iconExp2")
const sumir2 =$("#sumir2")


esportes.on("click", function(){    
    // $("#caixa").fadeToggle(500)
     linkEsportes.slideDown(500)     
        
     iconExp2.animate({rotate: "-180deg"}, {duration:500})  
})

sumir2.on("click", function(){
    
    linkEsportes.slideUp(500)
    iconExp2.animate({rotate: "-360deg"}, {duration:500}) 
})

// Fim Esportes

// Inicio Economia
const economia = $("#economia")
const linkEconomia = $("#linkEconomia") 
const iconExp3 = $("#iconExp3")
const sumir3 = $("#sumir3")

economia.on("click", function(){    
    // $("#caixa").fadeToggle(500)
     linkEconomia.slideDown(500)     
        
     iconExp3.animate({rotate: "-180deg"}, {duration:500})  
})

sumir3.on("click", function(){
    
    linkEconomia.slideUp(500)
    iconExp3.animate({rotate: "-360deg"}, {duration:500}) 
})

// Fim Economia

// Inicio Clima
const clima = $("#clima")
const linkClima = $("#linkClima")
const iconExp4 = $("#iconExp4")
const sumir4 = $("#sumir4")


clima.on("click", function(){    
    // $("#caixa").fadeToggle(500)
     linkClima.slideDown(500)     
        
     iconExp4.animate({rotate: "-180deg"}, {duration:500})  
})

sumir4.on("click", function(){
    
    linkClima.slideUp(500)
    iconExp4.animate({rotate: "-360deg"}, {duration:500}) 
})

// Fim Clima

// Inicio Saude
const saude = $("#saude")  
const linkSaude = $("#linkSaude") 
const iconExp5 = $("#iconExp5")
const sumir5 = $("#sumir5")

saude.on("click", function(){    
    // $("#caixa").fadeToggle(500)
     linkSaude.slideDown(500)     
        
     iconExp5.animate({rotate: "-180deg"}, {duration:500})  
})

sumir5.on("click", function(){
    
    linkSaude.slideUp(500)
    iconExp5.animate({rotate: "-360deg"}, {duration:500}) 
})

// Fim Saude

// Inicio Viagens
const viagens = $("#viagens")
const linkViagens = $("#linkViagens")
const iconExp6 = $("#iconExp6")
const sumir6 = $("#sumir6")

viagens.on("click", function(){    
    // $("#caixa").fadeToggle(500)
     linkViagens.slideDown(500)     
        
     iconExp6.animate({rotate: "-180deg"}, {duration:500})  
})

sumir6.on("click", function(){
    
    linkViagens.slideUp(500)
    iconExp6.animate({rotate: "-360deg"}, {duration:500}) 
})

// Fim Viagens

// Inicio Inovação
const inovacao = $("#inovacao")
const linkInovacao = $("#linkInovacao")
const iconExp7 = $("#iconExp7")
const sumir7 = $("#sumir7")


inovacao.on("click", function(){    
    // $("#caixa").fadeToggle(500)
     linkInovacao.slideDown(500)     
        
     iconExp7.animate({rotate: "-180deg"}, {duration:500})  
})

sumir7.on("click", function(){
    
    linkInovacao.slideUp(500)
    iconExp7.animate({rotate: "-360deg"}, {duration:500}) 
})

// Fim Inovação

// Inicio
const diversao = $("#diversao")
const linkDiversao = $("#linkDiversao")
const iconExp8 = $("#iconExp8")
const sumir8 = $("#sumir8")


diversao.on("click", function(){    
    // $("#caixa").fadeToggle(500)
    linkDiversao.slideDown(500)     
        
     iconExp8.animate({rotate: "-180deg"}, {duration:500})  
})

sumir8.on("click", function(){
    
    linkDiversao.slideUp(500)
    iconExp8.animate({rotate: "-360deg"}, {duration:500}) 
})
// Fim


// const mobile =document.getElementById("mobile")
// const mobile =document.querySelector("#mobile")
 const amazon = $("#amazon")
 const desktop = $("#desktop")
 const flowwork = $("#flowwork")

 const descricaoAmazon = $("#descricaoAmazon")
 const descricaoDescktop = $("#descricaoDescktop")
 const descricaoFlowwork = $("#descricaoFlowwork")

//  mobile.addEventlistener('click', mostrarDescMobile)

//  function mostrarDescMobile(){

//  }
// function anonima
amazon.on('click' , function(){
    descricaoAmazon.slideToggle(500)
    descricaoDescktop.slideUp(100)
    descricaoFlowwork.slideUp(100)
})
desktop.on('click' , function(){
    descricaoDescktop.slideToggle(500)
    descricaoFlowwork.slideUp(100)
    descricaoAmazon.slideUp(100)
})
flowwork.on('click' , function(){
    descricaoFlowwork.slideToggle(500)
    descricaoDescktop.slideUp(100)
    descricaoAmazon.slideUp(100)
})

