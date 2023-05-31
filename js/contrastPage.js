// Muda o backgroud-color (cor de fundo da página) e o color (cor das letras)
$(document).ready(function() {
    // Página no modo escuro
    $('#btn-contrast-moon').on('click', function(){
        $('body').css('background-color', 'rgb(38, 65, 65)').css('color', 'white');
        $('.card-container').css('background-color', 'rgb(84, 102, 102)').css('box-shadow', '1px 1px 10px white');
        $('.menu-item').css('color', 'white');

        $('#btn-font-up-white').css('display', 'block'); // Mostra o icone 'eye-white'
        $('#btn-font-down-white').css('display', 'block'); // Mostra o icone 'eye-white'
        $('#btn-font-up-black').css('display', 'none'); // Esconde o icone 'eye-black'
        $('#btn-font-down-black').css('display', 'none'); // Esconde o icone 'eye-black'

        $('#btn-eye-on-white').css('display', 'block'); // Mostra o icone 'eye-white'
        $('#btn-eye-on-black').css('display', 'none'); // Esconde o icone 'eye-black'
        $('#btn-eye-off-white').css('display', 'none'); // Esconde o icone 'eye-white'
        $('#btn-eye-off-black').css('display', 'none'); // Esconde o icone 'eye-black'

        $('.product-value-and-description-container').css('display', 'none'); // Esconde o conteúdo do card 

        $('#btn-contrast-moon').css('display', 'none'); // Esconde o icone da lua
        $('#btn-contrast-sun').css('display', 'block'); // Mostra o icone do sol
    }) 
    // Página no modo claro
    $('#btn-contrast-sun').on('click', function(){
        $('body').css('background-color', 'rgb(78, 133, 133)').css('color', 'black');
        $('.card-container').css('background-color', 'rgb(114, 161, 161)').css('box-shadow', '2px 2px 10px black');
        $('.menu-item').css('color', 'black');

        $('#btn-font-up-white').css('display', 'none'); // Esconde o icone 'eye-white'
        $('#btn-font-down-white').css('display', 'none'); // Esconde o icone 'eye-white'
        $('#btn-font-up-black').css('display', 'block'); // Mostra o icone 'eye-black'
        $('#btn-font-down-black').css('display', 'block'); // Mostra o icone 'eye-black'

        $('#btn-eye-on-white').css('display', 'none'); // Esconde o icone 'eye-white'
        $('#btn-eye-on-black').css('display', 'block'); // Mostra o icone 'eye-black'
        $('#btn-eye-off-white').css('display', 'none'); // Esconde o icone 'eye-white'
        $('#btn-eye-off-black').css('display', 'none'); // Esconde o icone 'eye-black'

        $('.product-value-and-description-container').css('display', 'none'); // Esconde o conteúdo dos cards

        $('#btn-contrast-sun').css('display', 'none'); // Esconde o icone do sol
        $('#btn-contrast-moon').css('display', 'block'); // Mostra o icone da lua
    })
});