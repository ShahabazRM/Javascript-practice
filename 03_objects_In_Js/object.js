//singleton
//object.create


//object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Shahabaz",
    age: 35,
    isAdmin: true,
    [mySym] : "value1", //symbol as property key
    "likes birds": true, //property with space
    lastLoggedInDays : ["Monday", "Friday"]
};

console.log(JsUser);
console.log(JsUser.name);
console.log(JsUser["name"]);//another way to access property
console.log(JsUser[mySym]); //accessing property with symbol key
console.log(JsUser["likes birds"]); //accessing property with space