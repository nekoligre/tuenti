$(document).ready(function() {
 $('#rowMenu').append("<div id='enlaces1' class='col-lg-2 col-md-2 col-xs-2'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces caja1 text-center'>\
                                     <ul>\
                                         <li class='enlaces'><a href='#'>Atletico de madrid</a></li>\
                                         <li class='enlaces'><a href='#'>Barcelona</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces text-center' >\
                                     <ul>\
                                            <li class='enlaces'><a href='#'>Atletico de madrid</a></li>\
                                            <li class='enlaces'><a href='#'>Barcelona</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 col-xs-2'></div>\
                                 ");
    //PRIMER ENLACE
    $('#uno').click(function() {
        

        if (!$('#menu').is(":visible")) {
            $('#rowMenu').empty();
            $('#menu').slideToggle();
             
            $('#rowMenu').append("<div id='enlaces1' class='col-lg-2 col-md-2 col-xs-2'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces caja1 text-center'>\
                                     <ul>\
                                         <li class='enlaces'><a href='#'>Atletico de madrid</a></li>\
                                         <li class='enlaces'><a href='#'>Barcelona</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces text-center' >\
                                     <ul>\
                                            <li class='enlaces'><a href='#'>Atletico de madrid</a></li>\
                                            <li class='enlaces'><a href='#'>Barcelona</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 col-xs-2'></div>\
                                 ");

        } else if($( "#rowMenu" ).children().attr('id')=='enlaces1'){
            $('#menu').slideUp();
        }else{
            $('#rowMenu').empty();
            $('#rowMenu').append("<div id='enlaces1' class='col-lg-2 col-md-2 col-xs-2'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces caja1 text-center'>\
                                     <ul>\
                                         <li class='enlaces'><a href='#'>Atletico de madrid</a></li>\
                                         <li class='enlaces'><a href='#'>Barcelona</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces text-center' >\
                                     <ul>\
                                            <li class='enlaces'><a href='#'>Atletico de madrid</a></li>\
                                            <li class='enlaces'><a href='#'>Barcelona</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 col-xs-2'></div>\
                                 ");
        }
    });


    //SEGUNDO ENLACE
    $('#dos').click(function() { 

        if (!$('#menu').is(":visible")) {
            $('#rowMenu').empty();
            $('#menu').slideToggle();
            $('#rowMenu').append("<div id='enlaces2' class='col-lg-2 col-md-2 col-xs-2'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces caja1 text-center'>\
                                     <ul>\
                                         <li class='enlaces'><a href='#'>Enlace 2.1</a></li>\
                                         <li class='enlaces'><a href='#'>Enlace 2.2</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces text-center' >\
                                     <ul>\
                                            <li class='enlaces'><a href='#'>Enlace 2.3</a></li>\
                                            <li class='enlaces'><a href='#'>Enlace 2.4</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 col-xs-2'></div>\
                                 ");

        } else if($( "#rowMenu" ).children().attr('id')=='enlaces2'){
            $('#menu').slideUp();
        }else{
            $('#rowMenu').empty();
            $('#rowMenu').append("<div id='enlaces2' class='col-lg-2 col-md-2 col-xs-2'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces caja1 text-center'>\
                                     <ul>\
                                         <li class='enlaces'><a href='#'>Enlace 2.1</a></li>\
                                         <li class='enlaces'><a href='#'>Enlace 2.2</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces text-center' >\
                                     <ul>\
                                            <li class='enlaces'><a href='#'>Enlace 2.3</a></li>\
                                            <li class='enlaces'><a href='#'>Enlace 2.4</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 col-xs-2'></div>\
                                 ");
        }
        

    });
    //TERCER ENLACE
    
    $('#tres').click(function() {
        
        if (!$('#menu').is(":visible")) {
             $('#rowMenu').empty();
            $('#menu').slideToggle();
            $('#rowMenu').append( "<div id='enlaces3' class='col-lg-2 col-md-2 col-xs-2'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces caja1 text-center'>\
                                     <ul>\
                                         <li class='enlaces'><a href='#'>Enlace 3.1</a></li>\
                                         <li class='enlaces'><a href='#'>Enlace 3.2</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces text-center' >\
                                     <ul>\
                                            <li class='enlaces'><a href='#'>Enlace 3.3</a></li>\
                                            <li class='enlaces'><a href='#'>Enlace 3.4</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 col-xs-2'></div>\
                                 ");

        } else if($( "#rowMenu" ).children().attr('id')=='enlaces3'){
            $('#menu').slideUp();
        }else{
            $('#rowMenu').empty();
            $('#rowMenu').append( "<div id='enlaces3' class='col-lg-2 col-md-2 col-xs-2'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces caja1 text-center'>\
                                     <ul>\
                                         <li class='enlaces'><a href='#'>Enlace 3.1</a></li>\
                                         <li class='enlaces'><a href='#'>Enlace 3.2</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-4 cajaEnlaces text-center' >\
                                     <ul>\
                                            <li class='enlaces'><a href='#'>Enlace 3.3</a></li>\
                                            <li class='enlaces'><a href='#'>Enlace 3.4</a></li>\
                                     </ul>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 col-xs-2'></div>\
                                 ");
        }
      
});
});
