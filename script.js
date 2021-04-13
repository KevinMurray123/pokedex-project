

// All pages
const charmander = require( 'charmader.json' );
const charmeleon = require( 'charmelion.json' );
const charizard = require( 'charizard.json' );

function init(obj){
    makeHeader(obj);
    makeContent(obj);
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

function makeHeader(){
}