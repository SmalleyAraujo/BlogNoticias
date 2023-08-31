//Inicio button menu
const btnButtonMenu = $("#btnButtonMenu")

const linkNav = $("#linkNav")  

btnButtonMenu.on('click' , function(){
    linkNav.slideToggle(2000)
})

// Fim button menu
const noticias1 = $("#noticias")
const linkNoticias = $("#linkNoticias")
const iconExp = $("#iconExp")

noticias1.on("click", function(){    
    // $("#caixa").fadeToggle(500)
     linkNoticias.slideDown(500)     
        
     iconExp.animate({rotate: "-180deg"}, {duration:500})            
        
    
    if(linkNoticias.style.display === "none"){
        iconExp.animate({rotate: "180deg"}, {duration:500})
    }  
     
   
})



// $("#direita").on("click", function(){
//     $("#caixa").animate({marginLeft: "500px", rotate: "360deg"},{duration:2000,complete : ()=>{alert("Me contrata :)")}})
// })

// $("#esquerda").on("click", function(){
//     $("#caixa").animate({marginLeft: "0px", rotate: "-360deg", marginTop: "500px"},{duration:2000})
// })







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

