$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors:["1page","2page","3page","4page","5page","6page","7page","8page"],
        menu: '#menu',
        css3: true,
        scrollingSpeed: 1000
    });

    $('#showExamples').click(function(e){
        e.stopPropagation();
        e.preventDefault();
        $('#examplesList').toggle();
    });

    $('html').click(function(){
        $('#examplesList').hide();
    });
});


