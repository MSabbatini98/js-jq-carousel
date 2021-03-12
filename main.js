// ******* Programma principale
$(function() {

    // ! uso delle arrows
    $(document).keydown(
        function(e) {    
            // right arrow
            if (e.keyCode == 39) {  
                console.log("right arrow");    
                nextImage();
                nextDot();
                
            // left arrow
            } else  if (e.keyCode == 37) {      
                console.log("left arrow");    
                prevImage();
                prevDot();
            }
        }
    )    
    
    // ! al click del mouse su prev
    $("#prev").click(
        function() {
            prevImage();
            prevDot();
        }
    )

    // ! al click del mouse su next
    $("#next").click(
        function() {
            nextImage();
            nextDot();
        }
    )

    // al click del mouse sulle icone
    // $(".nav i").click(
    //     function
    // )
});

// creo una funzione che conta le immagini e inserisce tanti punti quanti il numero di immagini, salvate in un array

// ******* Funzioni utilizzate

// ! va all'immagine precdente
function prevImage() {
    var img_active = $('.images img.active');
    
    img_active.removeClass("active");
    
    if (img_active.hasClass("first") == true) {
        $('.images img.last').addClass("active");
    } else {
        img_active.prev().addClass("active");
    }
}

// ! va all'immagine successiva
function nextImage() {
    
    var img_active = $('.images img.active');
    
    img_active.removeClass("active");
    
    if (img_active.hasClass("last") == true) {
        $('.images img.first').addClass("active");
    } else {
        img_active.next().addClass("active");
    }
}
// ! va al pallino precedente
function prevDot() {
    
    var dot_active = $('.nav > i.active');

    dot_active.removeClass("active");

    if (dot_active.hasClass("first") == true) {
        $('.nav .far.last').addClass("active");
    } else {
        dot_active.prev().addClass("active");
    }
}

// ! va al pallino successivo
function nextDot() {
    
    var dot_active = $('.nav > i.active');
    
    dot_active.removeClass("active");
    
    if (dot_active.hasClass("last") == true) {
        $('.nav .far.first').addClass("active");
    } else {
        dot_active.next().addClass("active");
    }
    console.log(dot_active);

}


/*
function firstLastColor(){
    $("this").addClass("first_last_color");
}

$(function() {
    // ! uso delle arrows
    $(document).keypress(
        function(e) {    
            // right arrow
            if (e.keyCode == 39) {      
                $(".nav > i:focus ").next().focus();
                nextClick();
                
            // left arrow
            } else  if (e.keyCode == 37) {      
                $(".nav > i:focus ").prev().focus();
                prevClick();
            }
        }
    )    
    
    
    

});


// ******* Funzioni utilizzate
// ! va all'immagine e puntino successivo
function nextClick (){
    // ! al click del mouse su next
    $("#next").click(
        function() {
            nextImage();
            nextDot();
        }
    ) 
}

// ! va all'immagine e puntino precedente
function prevClick (){
    // ! al click del mouse su prev
    $("#prev").click(
        function() {
            prevImage();
            prevDot();
        }
    );
   
}

*/