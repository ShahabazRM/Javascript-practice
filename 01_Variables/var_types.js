const accountId = 457552;
let accountName = "John Doe";
var accountEmail = "john.doe@example.com";
let accountCity = "New York";


//accountId = 123456; // This will cause an error because accountId is a constant
accountName = "Jane Smith";
accountEmail = "jane.smith@example.com";
accountCity = "Los Angeles";



console.table([accountId, accountName, accountEmail, accountCity]);