

function convertir( numero, tipoConversion, base ){
    if( tipoConversion ){
        numero = Number( numero );
        let resultado = "";

        while( numero != 0 ){
            let residuo = numero % base;
            resultado = residuo + resultado;
            numero = parseInt( numero / base );
        }
        return Number( resultado );
    }
    else{
        let resultado = 0;
        let j = 0;
        for( let i = numero.length - 1; i >= 0; i -- ){
            resultado += Number( numero[i] ) * Math.pow( base, j );
            j ++;
        }
        return resultado;
    }
}

console.log( convertir( "223", false, 4 ) );