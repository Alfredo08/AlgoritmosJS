
function merge( arrIzq, arrDer ){
    let arregloOrdenado = [];

    while( arrIzq.length && arrDer.length ){
        if( arrIzq[0] < arrDer[0] ){
            arregloOrdenado.push( arrIzq.shift() );
        }
        else{
            arregloOrdenado.push( arrDer.shift() );
        }
    }
    return [ ...arregloOrdenado, ...arrIzq, ...arrDer ];
}

function mergeSort( numeros ){
    if( numeros.length <= 1 ){
        return numeros;
    }
    else{
        let mitad = parseInt(numeros.length / 2);
        let numerosIzquierda = numeros.splice( 0, mitad );
        let numerosDerecha = numeros;

        let numsOrdenadosIzquierda = mergeSort( numerosIzquierda );
        let numsOrdenadosDerecha = mergeSort( numerosDerecha );
        return merge( numsOrdenadosIzquierda, numsOrdenadosDerecha );
    }
}

let numeros = [10, 5, 8, 1, 4, 2, 9, 3, 6, 7]

console.log( mergeSort(numeros) );

