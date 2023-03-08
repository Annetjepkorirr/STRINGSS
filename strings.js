var y = "extravaganza"
console.log(y[8]);
console.log(y[9]);
console.log(y[10]);
console.log(y[11]);

const z = "eat";
const food = `The quick fox ${z} over the lazy dog`; 
console.log(food)

const story= "The quick brown fox jumps over the lazy dog"
let count=(story.match(/the/g)||[]).length;
console.log(count);
let count2=(story.match(/brown/g)||[]).length;
console.log(count2);

const string1 = "The pupils are reading in the library";
const string2 = "The child was sitting on the table before it fell"
const library=string1.search("are");
console.log(library);
const string="The child was sitting on the table before it fell"
const child=string2.search("sitting");
console.log(child);

const up="wonderful"
const huge=up.toUpperCase()
console.log(huge)
const low="amazing"
const less=low.toLowerCase()
console.assert(less)
const static="BEneath"
const tiny=static.toLowerCase()
console.log(tiny)
const content="A wonderful world"
const title2=content.toLocaleUpperCase()
console.log(title2)