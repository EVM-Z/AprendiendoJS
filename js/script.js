// Switch statement

const metodoPago='efectivo';

switch(metodoPago){
    case 'efectivo':
        console.log(`Pagaste con ${metodoPago}`);
        break;
    case 'cheque':
        console.log(`Pagaste con ${metodoPago} espere un momento...`);
        break;
    default:
        console.log('Aun no has pagado o método de pago no válido');
        break;
}

function hola(){
    console.log('Hola amigos');
}