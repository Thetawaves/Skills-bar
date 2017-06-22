$(document).ready(function () {
   /* $("a.scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    }); */
    
    var i;
    var barsNr = $('#skills-container #bars .skill-bar').length;
    
    for (i = 0; i < barsNr; i++) {
        var barHeight = $('#skills-container #bars .skill-bar#bar' + i).attr('bar-height');
        $('#skills-container #bars .skill-bar#bar' + i)
            .delay(i * 250)
            .animate({height: barHeight}, 1000, 'swing');
    }
});