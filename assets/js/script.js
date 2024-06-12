$(document).ready(function(){
    let cuerpo = $('.pikachu_cuerpo');
    let ojo1 = $('.pikachu_ojo1');
    let ojo2 = $('.pikachu_ojo2');
    let boca = $('.boca_pikachu');
    let cola = $('.pikachu_cola');
    let brazo1 = $('.pikachu_brazo1');
    let brazo2 = $('.pikachu_brazo2');
    let boton = $('#click');

    boton.click(function(){
        brazo1.css({
            'transition': 'transform 1s',
            'transform': 'rotate(180deg)'
        });

        brazo2.css({
            'transition': 'transform 1s',
            'transform': 'rotate(180deg)'
        });
    });
});



