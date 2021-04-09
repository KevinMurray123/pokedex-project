

function init(obj){
    makeHeader(obj)
}

function choosePokemon(buttonPressed){
    switch(buttonPressed){
        case(1):{
            init(charmander);
        }
        case(2):{
            init(charmeleon);
        }
        case(3):{
            init(charizard);
        }
    }
}