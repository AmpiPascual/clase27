// todo: hacer el front de la calculadora
const process = require('process');
const {argv} = process
const sumar = require('./sumar')

function calculadora(comando){
    switch (argv[2]) {
        case "sumar":
          return  sumar(a, b)
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
console.log(calculadora(argv[2]),(+argv[3]),(+argv[4]));
