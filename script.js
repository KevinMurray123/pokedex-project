// All pages

// let superObj = JSON.parse(charizard);

// Charmander

// All pages
let charmanderObj = `{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 62,
    "height": 6,
    "id": 4,
    "is_default": true,
    "name": "charmander",
    "order": 5,
    "stats": [
      {
        "base_stat": 39,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 52,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 43,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 60,
        "effort": 0,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 50,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
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
      }
    ],
    "weight": 85
  }`

let charmeleonObj = `{
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 142,
    "height": 11,
    "id": 5,
    "is_default": true,
    "name": "charmeleon",
    "order": 6,
    "stats": [
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 64,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
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
      }
    ],
    "weight": 190
  }`

let charizardObj = `{
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

function init(charmeleonObj) {
    let superObj = JSON.parse(charmeleonObj);
    createHeader(superObj);
    Abilities(superObj);
    Stats(superObj);
    Types(superObj);
}

init(charmeleonObj);


// Creates header (name)

function createHeader(obj) {
    const H1 = document.createElement("h1")
    H1.textContent = obj.name
    header.appendChild(H1)

    const BASEEXP = document.createElement("h4")
    BASEEXP.textContent = `Base Expereince: ${obj.base_experience}`
    header.appendChild(BASEEXP)

    const HEIGHT = document.createElement("h4")
    HEIGHT.textContent = `Height: ${obj.height} ft`
    header.appendChild(HEIGHT)

    const ID = document.createElement("h4")
    ID.textContent = `Id: #00${obj.id}`
    header.appendChild(ID)

    const WEIGHT = document.createElement("h4")
    WEIGHT.textContent = `Weight: ${obj.weight}lbs`
    header.appendChild(WEIGHT)
}



function Abilities(obj){

  const ABILNAME = document.createElement("h4")
  ABILNAME.textContent = `Abilities: `
  header.appendChild(ABILNAME)

    const ABILITIES = obj["abilities"]
    for(ability in ABILITIES){
        const P1 = document.createElement("li")


        P1.textContent = ABILITIES[ability]["name"]

        section.appendChild(P1)

    }
}



function Stats(obj){
  const STATS = obj["stats"]
  for(stat in STATS){
      const STATNAME = document.createElement("p")
      const P3 = document.createElement("li")


      STATNAME.textContent = `${STATS[stat]["stat"]["name"]}: `

      P3.textContent = `Base Stat: ${STATS[stat]["base_stat"]} | Effort: ${STATS[stat]["effort"]}`


      section.appendChild(STATNAME)
      section.appendChild(P3)


  }
}

function Types(obj){
  const TYPES = obj["types"]
  for(type in TYPES){
      const SLOT = document.createElement("p")



      SLOT.textContent = `Slot ${TYPES[type]["slot"]}: ${TYPES[type]["type"]["name"]}`



      section.appendChild(SLOT)



  }
}







// Charmeleon




// All pages
// const charmander = require( 'charmader.json' );
// const charmeleon = require( 'charmelion.json' );
// const charizard = require( 'charizard.json' );


