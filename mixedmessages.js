 //Creating a random number generator for later use
 const randomNumberGenerator = num => {
    return Math.floor(Math.random() * num);
}

// code review: don't make long ass sentences
// that will be the screen
// the best practice is lines max length 120 chars

//Creating an object which contains arrays as values to their respective keys 
// - inluding the necessary data related to beyblades for later use. 
// These will be used to construct the random string at the end.

// code review: can we try with a database? :)
const beybladeData = {
    wielder: ["Ginga Hagane", "Masamune Kadoya", "Tsubasa Otori", "Yu Tendo", "Kenta Yumiya", 
    "Benkei Hamawa", "kyoya Tategami", "Da Shan Wang", "Ryuga", "Sora Akatsuki"],
    beyblade: ["Galaxy Pegasus", "Ray Unicorno", "Earth Eagle", "Flame Libra", "Flame Sagittario",
     "Dark Bull", "Fang Leone", "Rock Zurafa", "L Drago", "Cyber Pegasis"],
    specialMove: ["Star Blast Attack", "Lightning Sword Flash", "Metal Wing Smash", "Sonic Wave", 
    "Flame Claw", "Red Horn Uppercut", "Lion Gale Force Wall", "Storm Surge", "Dragon Emperor Decends", "Avalanche Move"]
};

// code review: we could make things easier for ourselves like such
let maxWielders = beybladeData.wielder.length;
let maxBayblades = beybladeData.beyblade.length;
let maxMoves = beybladeData.specialMove.length;

// code review: we're using up excess memory this way
// then we are forced to use magic index numbers like 1,2,3
// there is a better way

//Creating an empty array so i can later push phrases into it  - 
// let combinedMessage = [];

// code review: we don't need to loop through the properties
// arrays can be accessed in constant time

//Using a for...in loop to loop through each key in the beybladeData object;
// utilising the randomNumberGenerator 
// to randomly select an index relative to the length of the array assosciated with the key.
// for(let data in beybladeData) {
//     let randomIndex = randomNumberGenerator(beybladeData[data].length);
//     combinedMessage.push(beybladeData[data][randomIndex]);
// }

// code review: lets format better

//Creating a displayedMessage variable which organises the values in the combinedMessage array into a string by using their index.
let displayedMessage = 
`
The character you've chosen is ${beybladeData.wielder[randomNumberGenerator(maxWielders)]}. 
They are wielding the beyblade known as ${beybladeData.beyblade[randomNumberGenerator(maxBayblades)]}. 
This beyblade is able to carry out the special move known as ${beybladeData.specialMove[randomNumberGenerator(maxMoves)]}!
`;

//Logging the newly created string to the console
console.log(displayedMessage);
