$(document).ready(function() {
    //PRIMER ENLACE
    $('#uno').click(function() {
        $('#menu').append("<div class='container'>\
                                <div class='col-lg-6 col-md-6 col-xs-6 hola text-center'>\
                                     <ul>\
                                         <li><a href='#'>Atletico de madrid</a></li>\
                                         <li><a href='#'>Barcelona</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-6 col-md-6 col-xs-6 hola text-center'>\
                                     <ul>\
                                            <li><a href='#'>Atletico de madrid</a></li>\
                                            <li><a href='#'>Barcelona</a></li>\
                                     </ul>\
                                 </div>\
                            </div> ");
        $('#menu').slideToggle();
    });
    $("#uno a").click(function(event) {
        event.preventDefault();
        $('#menu').slideUp();
    });
    //SEGUNDO ENLACE
     $('#dos').click(function() {
        
        $('#menu').slideToggle();
    });
    $("#dos a").click(function(event) {
        event.preventDefault();
        $('#menu').slideUp();
    });
    
})


"<div class='container'>"        
            "<div class='col-lg-6 col-md-6 col-xs-6 text-right'>"
                "<a href='#'>Atletico de madrid</a>"
                "<a href='#'>Barcelona</a>"
            "</div>"
            "<div class='col-lg-6 col-md-6 col-xs-6 text-right'>"
                "<a href='#'>Atletico de madrid</a>"
                "<a href='#'>Barcelona</a>"
            "</div>"
        "</div>"