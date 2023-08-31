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





// const mobile =document.getElementById("mobile")
// const mobile =document.querySelector("#mobile")
 const mobile = $("#mobile")
 const desktop = $("#desktop")
 const flowwork = $("#flowwork")

 const descricaoMObile = $("#descricaoMObile")
 const descricaoDescktop = $("#descricaoDescktop")
 const descricaoFlowwork = $("#descricaoFlowwork")

//  mobile.addEventlistener('click', mostrarDescMobile)

//  function mostrarDescMobile(){

//  }
// function anonima
mobile.on('click' , function(){
    descricaoMObile.slideToggle(500)
    descricaoDescktop.slideUp(100)
    descricaoFlowwork.slideUp(100)
})
desktop.on('click' , function(){
    descricaoDescktop.slideToggle(500)
    descricaoFlowwork.slideUp(100)
    descricaoMObile.slideUp(100)
})
flowwork.on('click' , function(){
    descricaoFlowwork.slideToggle(500)
    descricaoDescktop.slideUp(100)
    descricaoMObile.slideUp(100)
})

