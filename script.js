// All pages
// let superObj = JSON.parse(charizard);

// Charmander

// JSON Files
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
    "name": "Charmander",
    "order": 5,
    "stats": [
      {
        "base_stat": 39,
        "effort": 0,
        "stat": {
          "name": "Hp"
        }
      },
      {
        "base_stat": 52,
        "effort": 0,
        "stat": {
          "name": "Attack"
        }
      },
      {
        "base_stat": 43,
        "effort": 0,
        "stat": {
          "name": "Defense"
        }
      },
      {
        "base_stat": 60,
        "effort": 0,
        "stat": {
          "name": "Special-Attack"
        }
      },
      {
        "base_stat": 50,
        "effort": 0,
        "stat": {
          "name": "Special-Defense"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "Speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "Fire"
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
    "name": "Charmeleon",
    "order": 6,
    "stats": [
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "Hp"
        }
      },
      {
        "base_stat": 64,
        "effort": 0,
        "stat": {
          "name": "Attack"
        }
      },
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "Defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "Special-Attack"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "Special-Defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "Speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "Fire"
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
    "height": 1.7,
    "id": 6,
    "is_default": true,
    "name": "Charizard",
    "order": 7,

    "stats": [
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "Hp"
        }
      },
      {
        "base_stat": 84,
        "effort": 0,
        "stat": {
          "name": "Attack"
        }
      },
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "Defense"
        }
      },
      {
        "base_stat": 109,
        "effort": 3,
        "stat": {
          "name": "Special-Attack"
        }
      },
      {
        "base_stat": 85,
        "effort": 0,
        "stat": {
          "name": "Special-Defense"
        }
      },
      {
        "base_stat": 100,
        "effort": 0,
        "stat": {
          "name": "Speed"
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

function init(obj) {
  let pokemonObj = JSON.parse(obj);
  createHeader(pokemonObj);
  Abilities(pokemonObj);
  Stats(pokemonObj);
  Types(pokemonObj);
}

function choosePokemon(buttonPressed) {
  switch (buttonPressed) {
    case (`charmander`):
      init(charmander)
      break;
    case (`charmeleon`):
      init(charmander)
      break;
    case (`charizard`):
      init(charizrd)
      break;
  }
}

// Creates header which includes pokemon image

function createHeader(obj) {
  const H1 = document.createElement("h1")
  const TOP = document.createElement("article")
  TOP.setAttribute("id", "top");
  const IMGARTICLE = document.createElement("article")
  IMGARTICLE.setAttribute("id", "imgArticle");
  const MAINARTICLE = document.createElement("article")
  MAINARTICLE.setAttribute("id", "mainArticle");
  const BASEEXP = document.createElement("h4")
  const HEIGHT = document.createElement("h4")
  const ID = document.createElement("h4")
  const WEIGHT = document.createElement("h4")
  const ORDER = document.createElement("h4")

  const { name, base_experience: basexp, height, id, weight, order } = obj

  H1.textContent = name;
  BASEEXP.textContent = `Base Expereince: ${basexp}`;
  HEIGHT.textContent = `Height: ${height} m.`;
  ID.textContent = `Id: ${id}`;
  WEIGHT.textContent = `Weight: ${weight} lbs`;
  ORDER.textContent = `Order: ${order}`;

  const IMG = document.createElement("img")
  IMG.setAttribute("id", "pokeImage")
  if(H1.textContent == "Charmander"){
    IMG.setAttribute('src', 'images/charmanderShadow.png');
  } else if(H1.textContent == "Charmeleon"){
    IMG.setAttribute('src', 'images/charmeleonShadow.png');
  } else if(H1.textContent == "Charizard"){
    IMG.setAttribute('src', 'images/charizardShadow.png');
  }
  IMG.setAttribute("width", "250px")
  IMG.setAttribute("height", "250px")

  TOP.appendChild(H1)
  MAINARTICLE.appendChild(BASEEXP)
  MAINARTICLE.appendChild(HEIGHT)
  MAINARTICLE.appendChild(ID)
  MAINARTICLE.appendChild(WEIGHT)
  MAINARTICLE.appendChild(ORDER)
  IMGARTICLE.appendChild(IMG)
  
  header.appendChild(TOP)
  header.appendChild(IMGARTICLE)
  header.appendChild(MAINARTICLE)
}

function Abilities(obj) {

  const ABILARTICLE = document.createElement("article")
  ABILARTICLE.setAttribute("id", "abilArticle")
  const ABILNAME = document.createElement("h4")
  ABILNAME.textContent = `Abilities: `
  ABILNAME.setAttribute("id", "abilName")

  ABILARTICLE.appendChild(ABILNAME)

  const ABILITIES = obj["abilities"]
  for (ability in ABILITIES) {
    const P1 = document.createElement("li")

    P1.textContent = ABILITIES[ability]["name"]

    ABILARTICLE.appendChild(P1)

    section.appendChild(ABILARTICLE)
  }
}

function Stats(obj) {
  const LARGEARTICLE = document.createElement("article")
  LARGEARTICLE.setAttribute("id", "largeArticle")
  const STATS = obj["stats"]
  for (stat in STATS) {

    const ARTICLE = document.createElement("article")
    ARTICLE.setAttribute("id", "statArticle")
    const STATNAME = document.createElement("p")
    const P3 = document.createElement("li")

    STATNAME.textContent = `${STATS[stat]["stat"]["name"]} `
    STATNAME.setAttribute("id", "statName")

    P3.textContent = `Base Stat: ${STATS[stat]["base_stat"]} | Effort: ${STATS[stat]["effort"]}`

    ARTICLE.appendChild(STATNAME)
    ARTICLE.appendChild(P3)

    LARGEARTICLE.appendChild(ARTICLE)
    section.appendChild(LARGEARTICLE)


  }
}

function Types(obj) {
  const TYPESARTICLE = document.createElement("article")
  TYPESARTICLE.setAttribute("id", "typesArticle")
  const TYPES = obj["types"]
  for (type in TYPES) {
    const SLOT = document.createElement("p")

    SLOT.textContent = `Slot ${TYPES[type]["slot"]}: ${TYPES[type]["type"]["name"]}`

    TYPESARTICLE.appendChild(SLOT)
    section.appendChild(TYPESARTICLE)
  }
}