$(document).ready(function() {
 $('#rowMenu').append("<div id='enlaces1' class='col-lg-2 col-md-2 hidden-xs'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces caja1 text-center'>\
                                     <div class='row'>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Atletico de madrid</a></div>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Barcelona</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces text-center' >\
                                     <div class='row'>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Atletico de madrid</a></div>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Barcelona</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 hidden-xs'></div>\
                                 ");
    //PRIMER ENLACE
    $('#uno').click(function() {
        

        if (!$('#menu').is(":visible")) {
            $('#rowMenu').empty();
            $('#menu').slideToggle();
             
            $('#rowMenu').append("<div id='enlaces1' class='col-lg-2 col-md-2 hidden-xs'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces caja1 text-center'>\
                                     <div class='row'>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Atletico de madrid</a></div>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Barcelona</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces text-center' >\
                                     <div class='row'>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Atletico de madrid</a></div>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Barcelona</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 hidden-xs'></div>\
                                 ");

        } else if($( "#rowMenu" ).children().attr('id')=='enlaces1'){
            $('#menu').slideUp();
        }else{
            $('#rowMenu').empty();
            $('#rowMenu').append("<div id='enlaces1' class='col-lg-2 col-md-2 hidden-xs'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces caja1 text-center'>\
                                     <div class='row'>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Atletico de madrid</a></div>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Barcelona</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces text-center' >\
                                     <div class='row'>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Atletico de madrid</a></div>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Barcelona</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 hidden-xs'></div>\
                                 ");
        }
    });


    //SEGUNDO ENLACE
    $('#dos').click(function() { 

        if (!$('#menu').is(":visible")) {
            $('#rowMenu').empty();
            $('#menu').slideToggle();
            $('#rowMenu').append("<div id='enlaces2' class='col-lg-2 col-md-2 hidden-xs'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces caja1 text-center'>\
                                     <div class='row'>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 2.1</a></div>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 2.2</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces text-center' >\
                                     <div class='row'>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 2.3</a></div>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 2.3</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 hidden-xs'></div>\
                                 ");

        } else if($( "#rowMenu" ).children().attr('id')=='enlaces2'){
            $('#menu').slideUp();
        }else{
            $('#rowMenu').empty();
            $('#rowMenu').append("<div id='enlaces2' class='col-lg-2 col-md-2 hidden-xs'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces caja1 text-center'>\
                                     <div class='row'>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 2.1</a></div>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 2.2</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces text-center' >\
                                     <div class='row'>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 2.3</a></div>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 2.3</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 hidden-xs'></div>\
                                 ");
        }
        

    });
    //TERCER ENLACE
    
    $('#tres').click(function() {
        
        if (!$('#menu').is(":visible")) {
             $('#rowMenu').empty();
            $('#menu').slideToggle();
            $('#rowMenu').append( "<div id='enlaces3' class='col-lg-2 col-md-2 hidden-xs'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces caja1 text-center'>\
                                     <div class='row'>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 3.1</a></div>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 3.2</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces text-center' >\
                                     <div class='row'>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 3.3</a></div>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 3.3</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 hidden-xs'></div>\
                                 ");

        } else if($( "#rowMenu" ).children().attr('id')=='enlaces3'){
            $('#menu').slideUp();
        }else{
            $('#rowMenu').empty();
            $('#rowMenu').append( "<div id='enlaces3' class='col-lg-2 col-md-2 hidden-xs'></div>\
                                <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces caja1 text-center'>\
                                     <div class='row'>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 3.1</a></div>\
                                         <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 3.2</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-4 col-md-4 col-xs-6 cajaEnlaces text-center' >\
                                     <div class='row'>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 3.3</a></div>\
                                            <div class='enlaces col-lg-12 col-md-12 col-xs-12 center-block'><a href='#'>Enlace 3.3</a></div>\
                                     </div>\
                                 </div>\
                                 <div class='col-lg-2 col-md-2 hidden-xs'></div>\
                                 ");
        }
      
});
});
