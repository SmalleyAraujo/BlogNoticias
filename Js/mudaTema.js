const mudaTema = $("#mudaTema")
const pagina = $("#pagina")
const bemVindo = $("#bemVindo")
const main = $("#main")
const categoria = $("#categoria")





mudaTema.on("click", function(){
      
    if(mudaTema.hasClass("temaLight")){
            // window.alert("Oi");
            mudaTema.removeClass("temaLight");
            mudaTema.addClass("temaDark");
            pagina.removeClass("temaLight")
            pagina.addClass("temaDark")
            bemVindo.removeClass("temaLight")
            bemVindo.addClass("temaDark")
            main.removeClass("temaLight")
            main.addClass("temaDark")
            categoria.removeClass("temaLight")
            categoria.addClass("temaDark")                         
        
    }else{
        mudaTema.removeClass("temaDark");
        mudaTema.addClass("temaLight");
        pagina.removeClass("temaDark")
        pagina.addClass("temaLight")
        bemVindo.removeClass("temaDark")
        bemVindo.addClass("temaLight")
        main.removeClass("temaDark")
        main.addClass("temaLight")
        categoria.removeClass("temaDark")
        categoria.addClass("temaLight")        
    }
})

