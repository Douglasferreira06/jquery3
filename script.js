function infinito (){

    let slide = $("h1");
    slide.animate({opacity:0.5},1000).slideToggle( 4000,infinito);


   slide.on("mouseout",function(){
    slide.stop();
   })

   slide.on("mousedown",function(){
    slide.animate({opacity:0.5},1000).slideToggle( 4000,infinito);
   })
   
}
infinito ()


// setInterval(() => {
//        // $("h1").addClass("bg-blue");
//    $("h1").toggleClass("bg-blue");

// }, 1000);


// $("h1").togglClass("bg-blue")

$("body").find("h1").css("color", "red");
// $("body").find("h1").css("color", "red");

$("body").find("h1").css("backgroundColor","green")
$("body").find("h1").css("fontSize","50px");
$("body").find("h1").css("textAlign","center");



let box = $(".box")
box.outerWidth(600);    

box.append("largura:",box.width(),"<br>",
"largura " + "padding:",box.innerWidth(), "<br>",
"largura "+ "padding:","borda:",box.outerWidth( ),"<br>",
"largura "+"paddinh:","borda"+ "margem:",box.outerWidth(true))