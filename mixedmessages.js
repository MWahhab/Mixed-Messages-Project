//Creating a random number generator for later use
const randomNumberGenerator = num => {
    return Math.floor(Math.random() * num);
}

//Creating an object which contains arrays as values to their respective keys - inluding the necessary data related to beyblades for later use. These will be used to construct the random string at the end.
const beybladeData = {
    wielder: ["Ginga Hagane", "Masamune Kadoya", "Tsubasa Otori", "Yu Tendo", "Kenta Yumiya", 
    "Benkei Hamawa", "kyoya Tategami", "Da Shan Wang", "Ryuga", "Sora Akatsuki"],
    beyblade: ["Galaxy Pegasus", "Ray Unicorno", "Earth Eagle", "Flame Libra", "Flame Sagittario",
     "Dark Bull", "Fang Leone", "Rock Zurafa", "L Drago", "Cyber Pegasis"],
    specialMove: ["Star Blast Attack", "Lightning Sword Flash", "Metal Wing Smash", "Sonic Wave", 
    "Flame Claw", "Red Horn Uppercut", "Lion Gale Force Wall", "Storm Surge", "Dragon Emperor Decends", "Avalanche Move"]
};

//Creating an empty array so i can later push phrases into it
let combinedMessage = [];

//Using a for...in loop to loop through each key in the beybladeData object; utilising the randomNumberGenerator to randomly select an index relative to the length of the array assosciated with the key.
for(let data in beybladeData) {
    let randomIndex = randomNumberGenerator(beybladeData[data].length);
    combinedMessage.push(beybladeData[data][randomIndex]);
}

//Creating a displayedMessage variable which organises the values in the combinedMessage array into a string by using their index.
let displayedMessage = `The character you've chosen is ${combinedMessage[0]} who's wielding the beyblade known as ${combinedMessage[1]}. This beyblade is able to carry out the special move known 
as ${combinedMessage[2]}!`;

//Logging the newly created string to the console
console.log(displayedMessage);
