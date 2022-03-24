const mergeSort = require( './mergeSort' );

function zigZagFashion( nums ){
    let arregloOrdenado = mergeSort( nums );

    for( let i = 1; i < arregloOrdenado.length - 1; i += 2 ){
        let aux = arregloOrdenado[i];
        arregloOrdenado[i] = arregloOrdenado[i + 1];
        arregloOrdenado[i + 1] = aux;
    }

    return arregloOrdenado;
}

let nums = [1, 4, 2, 6, 5];
console.log( zigZagFashion( nums ) );