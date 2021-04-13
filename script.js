

// All pages
// const charmander = require( 'charmader.json' );
// const charmeleon = require( 'charmelion.json' );
// const charizard = require( 'charizard.json' );

function init(obj){
    // makeHeader(obj);
    // makeContent(obj);
}

function choosePokemon(buttonPressed){
    switch(buttonPressed){
        case(`charmander`):{
            init(charmander);
        }
        case(`charmeleon`):{
            init(charmeleon);
        }
        case(`charizard`):{
            init(charizard);
        }
    }
}

