// All pages
const charmander = require( 'charmader.json' );
const charmeleon = require( 'charmeleon.json' );
const charizard = require( 'charizrd.json' );

let superObj = JSON.parse(charizard);

console.log(superObj)

// Charmander

// All pages
let charizard = `{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 240,
    "height": 17,
    "id": 6,
    "is_default": true,
    "name": "charizard",
    "order": 7,

    "stats": [
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 84,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 109,
        "effort": 3,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 85,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 100,
        "effort": 0,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "flying"
        }
      }
    ],
    "weight": 905
}
`


// Initialization Stuff

let header = document.getElementById("header");
let section = document.getElementById("section");

function init(charizard) {
    let superObj = JSON.parse(charizard);
    createHeader(superObj);
    Abilities(superObj);
}

init(charizard);


// Creates header (name)

function createHeader(obj) {
    const H1 = document.createElement("h1")
    H1.textContent = obj.name
    header.appendChild(H1)

    const BASEEXP = document.createElement("h4")
    BASEEXP.textContent = `Base Expereince: ${obj.base_experience}`
    header.appendChild(BASEEXP)

    const HEIGHT = document.createElement("h4")
    HEIGHT.textContent = `Height: ${obj.height} in.`
    header.appendChild(HEIGHT)

    const ID = document.createElement("h4")
    ID.textContent = `Id: #00${obj.id}`
    header.appendChild(ID)
}



function Abilities(obj){
    const ABILITIES = obj["abilities"]
    for(ability in ABILITIES){
        const P1 = document.createElement("p")
        const P2 = document.createElement("p")

        P1.textContent = ABILITIES[ability]["name"]

        section.appendChild(P1)
        section.appendChild(P2)
    }
}

function Stats(obj){
  const STATS = obj["stats"]
  for(stat in STATS){
      const P1 = document.createElement("p")
      const P2 = document.createElement("p")

      P1.textContent = STATS[stat]["name"]

      section.appendChild(P1)
      section.appendChild(P2)
  }
}







// Charmeleon





// Charizard
