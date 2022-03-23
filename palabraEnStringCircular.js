function palabraEnStringCircula( oracion, palabra ){

    oracion += oracion;
    oracion = oracion.toUpperCase();
    let arregloPalabras = oracion.split( /[.,?¿¡ !;:]+/ );
    
    oracion = arregloPalabras.join("");
    console.log( oracion );
    palabra = palabra.toUpperCase();
    
    for( let i = 0; i < oracion.length; i ++ ){
        if( oracion[i] === palabra[0] ){
            let indiceOracion = i;
            let j;
            for( j = 0; j < palabra.length; j ++ ){
                console.log( palabra[j], oracion[indiceOracion] );
                if( palabra[j] !== oracion[indiceOracion]){
                    break;
                }
                indiceOracion ++;
            }
            if( j === palabra.length ){
                return true;
            }
        }
    }
    return false;
    //return ( oracion.indexOf( palabra ) >= 0 ) ? true : false;

}

console.log( palabraEnStringCircula( "¡Me gusta programar!", "armes" ) );