// Aumentar/Diminuir o tamanho da fonte de todo o body
$(document).ready(function() {
    // Aumentar o tamanho
    $('#btn-font-up-black').on('click', function(){
        $('body').animate({
            'fontSize' : '+=5'
        })
    }) 
    $('#btn-font-up-white').on('click', function(){
        $('body').animate({
            'fontSize' : '+=5'
        })
    }) 
    // Diminuir o tamanho
    $('#btn-font-down-black').on('click', function(){
        $('body').animate({
            'fontSize' : '-=5'
        })
    })
    $('#btn-font-down-white').on('click', function(){
        $('body').animate({
            'fontSize' : '-=5'
        })
    }) 
});