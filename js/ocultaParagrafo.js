// Esconde/Mostra o conteúdo dos paragrafos de todo o body
$(document).ready(function() {
    $('#btn-eye-off-black').css('display', 'none'); // Esconde o icone 'eye-off-black'
    $('#btn-eye-off-white').css('display', 'none'); // Esconde o icone 'eye-off-white'
   
    // Mostra o conteúdo dos paragrafos
    $('#btn-eye-on-black').on('click', function(){
        $('.product-value-and-description-container').fadeIn(500).css('display', 'block')
        $('#btn-eye-on-black').css('display', 'none'); // Esconde o icone 'eye-on-black'
        $('#btn-eye-off-black').css('display', 'block'); // Mostra o icone 'eye-off-black'
        $('#btn-eye-on-white').css('display', 'none'); // Esconde o icone 'eye-on-white'
    }) 
    $('#btn-eye-on-white').on('click', function(){
        $('.product-value-and-description-container').fadeIn(500).css('display', 'block')
        $('#btn-eye-on-white').css('display', 'none'); // Esconde o icone 'eye-on-white'
        $('#btn-eye-off-white').css('display', 'block'); // Mostra o icone 'eye-off-white'
        $('#btn-eye-off-black').css('display', 'none'); // Esconde o icone 'eye-off-black'
        $('#btn-eye-on-black').css('display', 'none'); // Esconde o icone 'eye-on-black'
    }) 
    // Esconde o conteúdo dos paragrafos
    $('#btn-eye-off-black').on('click', function(){
        $('.product-value-and-description-container').fadeOut(100).css('display', 'none')
        $('#btn-eye-off-black').css('display', 'none'); // Esconde o icone 'eye-off-black'
        $('#btn-eye-on-black').css('display', 'block'); // Mostra o icone 'eye-on-black'
        $('#btn-eye-off-white').css('display', 'none'); // Esconde o icone 'eye-off-white'
        $('#btn-eye-on-white').css('display', 'none'); // Esconde o icone 'eye-on-white'
    })
    $('#btn-eye-off-white').on('click', function(){
        $('.product-value-and-description-container').fadeIn(500).css('display', 'none')
        $('#btn-eye-on-white').css('display', 'block'); // Mostra o icone 'eye-on-white'
        $('#btn-eye-off-white').css('display', 'none'); // Esconde o icone 'eye-off-white'
        $('#btn-eye-off-black').css('display', 'none'); // Esconde o icone 'eye-off-black'
        $('#btn-eye-on-black').css('display', 'none'); // Esconde o icone 'eye-on-black'
    }) 
});
