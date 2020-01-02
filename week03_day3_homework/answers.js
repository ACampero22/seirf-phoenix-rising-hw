///////////////////////////
//Datatypes Refresher//////
///////////////////////////
//1. A light switch can be either on or off
/*Data Type: boolean 
  Data Structure example: const switch = false; 
*/
//2.A user's email address.
/*Data Type: String
  Data structure example: let useremail = "ac312@garules.com"  
*/
//3.A spaceship with a hull, laser blasters, tractor beam, and warp drive.
/*Data type: Array
  Data Structure example: const spaceshift= ["hull", "laser blasters", "tractor beam", "warp drive"]
*/
//4.A list of student names from our class
/*Data Type: object 
  Data structure example: const ourClass= {student1:"Axel Campero", student2:"Alex Miller"}
*/
//5.A list of student names from our class, each with a location.
/*Data Type: array of objects
  Data Structure example: const ourClass= [{student1:"Axel Campero", location:"New York"}, {student2: "Alex Miller", Location:"Michigan"}];
*/
//6.A list of student names from our class, each with a location and each with a list of favorite tv shows.
/*Data Type: array of objects
  Data Structure example: 
  const ourClass= [{student1:"Axel Campero", location:"New York", favTVShow: "Naruto"}, {student1:"Alex Miller", location:"Michigan", favTVShow: "busted"}] 
*/

//////////////////////////////
//Take it easy////////////////
//////////////////////////////
//1.Make an array that holds all of the colors of the rainbow.
const rainbow = ["Violet","Indigo","Blue","Green","Yellow","Orange","Red"];

//2.Write code that will access "blue" from the rainbow array.
console.log(rainbow[2]);

//3.Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const Axel={ favFood:"Cake", hobby:"Read Books", MyTown:"Deer park"}
console.log(Axel);

//4.Write code that will access your hobby from the object that you just created.
console.log(Axel.hobby)

////////////////////////////////
//Crazy Object//////////////////
////////////////////////////////

const crazyObject = {
    taco: [{meat: 'steak',
           cheese: ['panela', 'queso', 'chihuahua']},
           {meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
          ],
    larry: {
      nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
      quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
      characters: [{
        name: "Jeff",
        occupation: "manager"
      },
      {
        name: "funkhauser",
        occupation: "tv dude"
      },
      {
        name: "susie",
        occupation: "jeffs wife",
        favourtieHobby: "Swearing at Larry and Jeff"
      },
      ]
    }
}


//Use crazy Object to log the following.
//1."omg my mouth is burning"
console.log(crazyObject.taco[1].salsa[5]);

//2."Pretty pretty prettayyyyy good"
console.log(crazyObject.larry.quotes[0]);

//3."Swearing at Larry and Jeff"
console.log(crazyObject.larry.characters[2].favourtieHobby);

//4."Chicken Teriyaki Boyyyyyy"
console.log(crazyObject.larry.nicknames[1]);

//5.The object the contains the name funkhauser
console.log(crazyObject.larry.characters)

//6.Add the quote "I'm trying to elevate small talk to medium talk" to Larry's quote array. Confirm that it was added.
crazyObject.larry.quotes.push("I'm trying to elevate small talk to medium talk")
console.log(crazyObject.larry.quotes)

//////////////////////////////////
//Object-Ception//////////////////
//////////////////////////////////

const inception = {
    reality: {
        dreamLayer1: {
            dreamLayer2: {
                dreamLayer3: {
                    dreamLayer4: {
                        dreamLayer5: {
                            dreamLayer6: {
                                limbo: "Joseph Gordon Levitt"
                           }
                        }
                    }
                }
            }
        }
    }
 }

 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6)
 inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.null = inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo;
 delete inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo;
 console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6)
