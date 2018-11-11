// Characters
/*
mrGreen
first_name:   Jacob
last_name:    Green
color:        green
description:  He has a lot of connections
age:          45
image:        https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg
occupation:   Entrepreneur

drOrchid
first_name:   Doctor
last_name:    Orchid
color:        white
description:  PhD in plant toxicology. Adopted daughter of Mr. Boddy
age:          26
image:        http://www.radiotimes.com/uploads/images/Original/111967.jpg
ocupation:   Scientist

profPlum
first_name:   Victor
last_name:    Plum
color:        purple
description:  Billionare video game designer
age:          22
image:        https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg
occupation:   Designer

missScarlet
first_name:   Kasandra
last_name:    Scarlet
color:        red
description:  She is an A-list movie star with a dark past
age:          31
image:        https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg
occupation:   Actor

mrsPeacock
first_name:   Eleanor
last_name:    Peacock
color:        blue
description:  She is from a wealthy family and uses her status and money to earn popularity
age:          36
image:        https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg
occupation:   Socialité

mrMustard
first_name:   Jack
last_name:    Mustard
color:        yellow
description:  He is a former football player who tries to get by on his former glory
age:          62
image:        https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg
occupation:   Retired Football player

// Weapons

name: rope        ---   weight: 10
name: knife       ---   weight: 8
name: candlestick ---   weight: 2
name: dumbbell    ---   weight: 30
name: poison      ---   weight: 2
name: axe         ---   weight: 15
name: bat         ---   weight: 13
name: trophy      ---   weight: 25
name: pistol      ---   weight: 20

// Rooms
name: Dinning Room
name: Conservatory
name: Kitchen
name: Study
name: Library
name: Billiard Room
name: Lounge
name: Ballroom
name: Hall
name: Spa
name: Living Room
name: Observatory
name: Theater
name: Guest House
name: Patio
*/

// Characters Collection


const mrGreen = {
        first_name : "Jacob",
        last_name :"Green",
        color :   "green", 
        description : "He has a lot of connections",
        age :     45,
        image :      "https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg",
        occupation :  "Entrepreneur"

    }


const drOrchid = {

        first_name:   "Doctor",
        last_name:    "Orchid",
        color:        "white",
        description:  "PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        age:          26,
        image:        "http://www.radiotimes.com/uploads/images/Original/111967.jpg",
        ocupation:   "Scientist",

        }



const profPlum = {
        first_name:   "Victor",
        last_name:    "Plum",
        color:        "purple",
        description:  "Billionare video game designer",
        age:          22,
        image:        "https://metrouk2.files.wordpress.com/2016/07/professor-plum.jpg",
        occupation:   "Designer"
        }

const missScarlet = {
        first_name:   "Kasandra",
        last_name:    "Scarlet",
        color:        "red",
        description:  "She is an A-list movie star with a dark past",
        age:          31,
        image:       "https://metrouk2.files.wordpress.com/2016/07/miss-scarlett.jpg",
        occupation:   "Actor"
        }


 const mrsPeacock = {
        first_name:   "Eleanor",
        last_name:    "Peacock",
        color:        "blue",
        description:  "She is from a wealthy family and uses her status and money to earn popularity",
        age:          36,
        image:        "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg",
        occupation:   "Socialité",
        }

const mrMustard = {
        first_name:   "Jack",
        last_name:    "Mustard",
        color:        "yellow",
        description:  "He is a former football player who tries to get by on his former glory",
        age:          62,
        image:        "https://metrouk2.files.wordpress.com/2016/07/colonel-mustard.jpg",
        occupation:   "Retired Football player"
        }

const charactersArray = [mrMustard,mrsPeacock,missScarlet,profPlum,profPlum,drOrchid,mrGreen]

// which of the two is prefarable let or const 
// console.log(charactersArray)

// Rooms' Collection
// var roomsArray = [];

// Weapons Collection
// var weaponsArray = [];

   
let rope = {
    name : "rope",
    weight: 10,
}

let knife = {
    name :"knife",
    weight: 8
}

let candlestick = {
    name: "candlestick",
    weight: 2
}

let dumbbell = {
    name: "dumbbell",
    weight: 30
}

let poison = {
    name: "poison",   
    weight: 2
}

let axe = {
    name: "axe",   
    weight: 15
}


let bat = {
    name: "bat",   
    weight: 13
}


let trophy = {
    name: "trophy",   
    weight: 25
}

let pistol = {
    name: "pistol",   
    weight: 20
}

const weaponsArray = [pistol,trophy,bat,axe,poison,dumbbell,candlestick,knife,rope];

// console.log(weaponsArray)

  // console.log(weaponsArray)  
 //  QUESTION i declared weaponsArray as an empty array at the begining but but returned error 
 // this is allowed inn ES 5 but not ES 6  why?

 let DinningRoom = {
    name :"Dinning Room"
  }
  
  
  let Conservatory = {
    name :"Conservatory"
  }
  
  
  let Kitchen = {
    name :"Kitchen"
  }
  
  let Study = {
    name :"Study"
  }
  
  let Library = {
    name :"Library"
  }
  
  let BilliardRoom = {
    name :"Billiard Room"
  }
  
  let  Hall = {
    name :"Hall"
  }
  
  let  Spa = {
    name :"Spa"
  }
  
  let  LivingRoom = {
    name :"Living Room"
  }
  
  let  Observatory = {
    name :"Observatory"
  }
  
  let  Theater = {
    name :"Theater"
  }
  
  let  GuestHouse = {
    name :"Guest House"
  }
  
  let Patio = {
    name :"Patio"
  }
  
  const roomsArray = [Patio,GuestHouse,Theater,Observatory,LivingRoom,Spa,Hall,BilliardRoom,Library,Study,Kitchen,Conservatory,DinningRoom];
  
  // console.log(roomsArray)

  var packOfCards = [roomsArray,weaponsArray,charactersArray]


  function randomSelector (packOfCards) {
   var random = Math.floor(Math.random * packOfCards.length)
  
   return packOfCards[random]
  }
  
   // console.log(randomSelector)
   // QUESTION i tried this and it returned Function but not a specfic character 

   // function pick mystery 

   function pickMystery(charactersArray,weaponsArray,roomsArray) {

    var mystery = [ randomSelector(charactersArray),
                    randomSelector(weaponsArray),
                    randomSelector(roomsArray),
    ]
     return mystery
        
  }
  
  // function pickmystery

        const mrMustardFirstName = mrMustard.first_name
        const mrMustardLastName = mrMustard.last_name

        const mrsPeacockFirstName = mrsPeacock.first_name
        const mrsPeacockLastName = mrsPeacock.last_name

        const missScarletFirstName = missScarlet.first_name
        const missScarletLastName =  missScarlet.last_name

        const profPlumFirstName = profPlum.first_name
        const profPlumLastName =  profPlum.last_name

        const drOrchidFirstName = drOrchid.first_name
        const drOrchidLastName =  drOrchid.last_name

        const mrGreenFirstName = mrGreen.first_name
        const mrGreenLastName =  mrGreen.last_name


        const characterFirstName = [mrMustardFirstName,mrsPeacockFirstName,missScarletFirstName,profPlumFirstName,drOrchidFirstName,mrGreenFirstName,]


        const characterLastName =[mrMustardLastName,mrsPeacockLastName,missScarletLastName,profPlumLastName,drOrchidLastName,mrGreenLastName]





function revealMystery(characterFirstName, characterLastName, weaponsArray, roomsArray) {

    let reveal = {
      characterFirst : randomSelector(characterFirstName),
      characterLast : randomSelector(characterLastName),
      characterWeapon : randomSelector(weaponsArray),
      characterRoom  : randomSelector(roomsArray)
    }
  
    return reveal
  }








