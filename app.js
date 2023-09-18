// todo: hacer el front de la calculadora
const process = require('process');
const {argv} = process

function calculadora(comando){
    switch (argv[2]) {
        case "sumar":
            
            break;
            case "restar":
            
            break;
            case "multiplicar":
            
            break;
            case "dividir":
            
            break;
    
        default:
            return "comando no valido"
            break;
    }
    
}
console.log(calculadora(argv[2], ));
