const randomNumberGenerator = num => {
    return Math.floor(Math.random() * num);
}

const beybladeData = {
    wielder: ["Ginga Hagane", "Masamune Kadoya", "Tsubasa Otori", "Yu Tendo", "Kenta Yumiya", 
    "Benkei Hamawa", "kyoya Tategami", "Da Shan Wang", "Ryuga", "Sora Akatsuki"],
    beyblade: ["Galaxy Pegasus", "Ray Unicorno", "Earth Eagle", "Flame Libra", "Flame Sagittario",
     "Dark Bull", "Fang Leone", "Rock Zurafa", "L Drago", "Cyber Pegasis"],
    specialMove: ["Star Blast Attack", "Lightning Sword Flash", "Metal Wing Smash", "Sonic Wave", 
    "Flame Claw", "Red Horn Uppercut", "Lion Gale Force Wall", "Storm Surge", "Dragon Emperor Decends", "Avalanche Move"]
};

let combinedMessage = [];

for(let data in beybladeData) {
    let randomIndex = randomNumberGenerator(beybladeData[data].length);
    combinedMessage.push(beybladeData[data][randomIndex]);
}

let displayedMessage = `The character you've chosen is ${combinedMessage[0]} who's wielding the beyblade known as ${combinedMessage[1]}. This beyblade is able to carry out the special move known 
as ${combinedMessage[2]}!`;

console.log(displayedMessage);