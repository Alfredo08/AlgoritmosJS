
function quickSort( numeros ){
    if( numeros.length <= 1 ){
        return numeros;
    }
    else{
        let pivote = numeros[0];
        let numerosIzquierda = [];
        let numerosDerecha = [];

        for( let i = 1; i < numeros.length; i ++ ){
            ( numeros[i] <= pivote ) ? numerosIzquierda.push( numeros[i] ) : numerosDerecha.push( numeros[i] );
        }
        return [ ...quickSort( numerosIzquierda ), pivote, ...quickSort( numerosDerecha ) ];
        // return quickSort( numerosIzquierda ).concat( pivote, quickSort( numerosDerecha ) );
    }
}

let numeros = [10, 5, 8, 1, 4, 2, 9, 3, 6, 7];

console.log( quickSort( numeros ) );


/*
if( numeros[i] <= pivote ){
    numerosIzquierda.push( numeros[i] );
}
else{
    numerosDerecha.push( numeros[i] );
} */