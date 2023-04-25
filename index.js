//created an object labeled customer and added the following key:value pairs:
const customer = {
    FirstName: "Jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone:  undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false,

};
// Modify / replace the properties in the customer object using bracket notation:
customer['email'] = "Jak3Smith1992@email.com";
customer['phone'] = 3195551234;
customer['zipCode'] =  "63132";
customer['favoriteFlavors'] =  ["coffee", "strawberry", "matcha"];

//Deleting  properties in the customer object using the delete keyword.
delete customer['zipCode'];
delete customer['favoriteStore']

//Adding the following key:values to the customer object using dot notation:
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavor = "mango";
customer.todaysPurchaseCost = 5.32;


// print only the keys in the survey.
for (const key in customer) {
    console.log(key);
  }
