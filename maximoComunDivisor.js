
function euclides( n1, n2 ){
    let residuo = n1 % n2;

    if( residuo == 0 ){
        return n2;
    }
    else{
        n1 = n2;
        n2 = residuo;
        return euclides( n1, n2 );
    }
}

console.log( euclides( 17, 3 ) );