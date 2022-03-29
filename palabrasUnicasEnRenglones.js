
function palabrasUnicasEnRenglones( parrafo ){
    parrafo = parrafo.toLowerCase();
    const renglones = parrafo.split( '\n' );
    const diccionario = {};

    for( let i = 0; i < renglones.length; i ++ ){
        const palabras = renglones[i].split( /[.,?¿¡ !;:]+/ );
        for( let j = 0; j < palabras.length; j ++ ){
            if( ! diccionario[palabras[j]] ){
                diccionario[ palabras[j] ] = {
                    palabra : palabras[j],
                    renglon : ( i + 1 ),
                    numeroPalabra : ( j + 1 ), 
                    contador : 1
                }
            }
            else{
                diccionario[ palabras[j] ].contador ++;
            }
        }
    }
    const resultado = [];

    for( let key in diccionario ){
        if( diccionario[key].contador === 1 ){
            resultado.push( diccionario[key] )
        }
    }

    return resultado;
}

const parrafo = "En muchas partes del cuerpo como son las manos, las orejas o los pies, están representados todos los órganos y partes del cuerpo.\n" +
                "Incidiendo sobre estas zonas se pueden crear arcos reflejos que actúen directamente sobre cualquier órgano del cuerpo y que solucionen cualgquier anomalía que exista.\n" +
                "En las manos, las orejas o los pies, se representan todos los órganos del cuerpo.\n" + 
                "Incidiendo sobre estas zonas se pueden crear arcos reflejos que actúen directamente sobre cualquier punto del organismo y que solucionan cualquier punto del organismo y que solucionen la anomalía que exista.";

console.log( palabrasUnicasEnRenglones( parrafo ) );
