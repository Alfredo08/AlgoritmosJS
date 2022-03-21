
function imprimeEnEspiral( arreglo ){
    let indiceInicialRenglon = 0;
    let indiceFinalRenglon = arreglo.length;
    let indiceInicialColumna = 0;
    let indiceFinalColumna = arreglo[0].length;
    let resultado = "";

    while ( indiceInicialRenglon < indiceFinalRenglon && indiceInicialColumna < indiceFinalColumna ){
        // Imprimir el primer renglon de los renglones pendientes por imprimir
        for( let i = 0; i < indiceFinalColumna; i ++ ){
            resultado += arreglo[indiceInicialRenglon][i] + " ";
        }
        indiceInicialRenglon ++;

        // Imprimir la ultima columna de las columnas pendientes
        for( let i = indiceInicialRenglon; i < indiceFinalRenglon; i ++ ){
            resultado += arreglo[i][indiceFinalColumna - 1] + " ";
        }
        indiceFinalColumna --;

        // Imprimir el ultimo renglon de los renglones pendientes
        if( indiceInicialRenglon < indiceFinalRenglon ){
           for( let i = indiceFinalColumna - 1; i >= indiceInicialColumna; i -- ){
               resultado += arreglo[indiceFinalRenglon - 1][i] + " ";
           } 
           indiceFinalRenglon --;
        }
        
        // Imprimir la primera columna de las columnas pendientes
        if( indiceInicialColumna < indiceFinalColumna ){
            for( let i = indiceFinalRenglon - 1; i >= indiceInicialRenglon; i -- ){
                resultado += arreglo[i][indiceInicialColumna] + " ";
            }
            indiceInicialColumna ++;
        }
    }
    return resultado;
}

let numeros = [[ 1,  2,  3, 4],
               [12, 13, 14, 5],
               [11, 16, 15, 6],
               [10,  9,  8, 7]];

console.log( imprimeEnEspiral( numeros ) );