const accountID = 14453
let accoutEmail = "shekar@event.com"
var accountPassword = "23423"
accountCity = "Hyderabad"
let accountState;

// accountId = 2

console.log(accountId);
// prefer not to use var
// because of issue in blovk scope and functional scope.

accoutEmail = "abc@noemail.com"
accountPassword = "234234"
accountCity =  "mumbai"

console.table([accountID, accoutEmail, accountPassword, accountCity, accountState])
