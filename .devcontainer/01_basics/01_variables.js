let accountID = 14453;
let accountEmail = "shekar@event.com";
let accountPassword = "23423";
let accountCity = "Hyderabad";
let accountState;

// accountId = 2
// accountID = 2;


console.log(accountID);

// Prefer not to use var
// because of issues with block scope and function scope.

accountEmail = "abc@noemail.com";
accountPassword = "234234";
accountCity = "Mumbai";

console.table({
  "Account ID": accountID,
  "Account Email": accountEmail,
  "Account Password": accountPassword,
  "Account City": accountCity,
  "Account State": accountState
});
