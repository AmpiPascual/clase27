// todo: hacer el front de la calculadora
const process = require('process');
const {argv} = process
const restar = require('./restar')

function calculadora(comando, a, b){
    switch (comando) {
        case "sumar":
          
            break;
            case "restar":
            return restar(a, b)
            
            break;
            case "multiplicar":
            
            break;
            case "dividir":
            
            break;
    
        default:
            return "comando no valido"
            
    }
    
}
console.log(calculadora(argv[2]),(+argv[3]),(+argv[4]));
