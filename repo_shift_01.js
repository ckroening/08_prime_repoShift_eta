/*
In this assignment, you will be working with a bank to help them decide who they should approve to purchase a house.
You will be provided a customer array that contains the customers name, annual income, debt, and how much their purchased house
would cost them each month.

The approval process is a two step process that accounts for both 'front end' and 'back end' approval. 
When both approvals are 'true', the customer is approved.

The front end approval method will: 
- Accept a Customer object
- Convert the income information to a numeric value
- Compare 28% of montly income to the proposed monthly payment
-- If monthly income is greater than the proposed mortgage the front end decision is true
-- If not, the front end decision is false

The back end approval method will:
- Accept a Customer object
- Convert the debt information to a numeric value
- Convert the income infomation to a numeric value
- Compare 36% of monthly income to the debt
-- If that calculated number is greater than the debt, the back end decision will be true, if not, false.

Once both decisions come back:
- If both decisions are true, set decision to 'true' for that customer,
- If either of the decisions are false, set decision to 'false' for that customer

Once functionality for the above has been completed, consume the data to test the functionality.
*/

/**
* Customer constructor for housing approval.
*
* @param name {string} - customer's name
* @param income {string} - customer's income
* @param debt {string} - customer's debt
* @param monthlyPayment {number} - the amount the customer
* 		would pay each month for their house
*/
function Customer(name, income, debt, monthlyPayment, decision) {
this.name = name;
this.income = income;
this.debt = debt;
this.monthlyPayment = monthlyPayment;
this.decision = decision;
}
// Customers
var bridget = new Customer("Bridget Alexander", "$34,000", "$930", 640, null);
var jeremy = new Customer("Jeremy Wagner", "$26,000", "$550", 550, null);
var darrin = new Customer("Darrin Drake", "$75,500", "$1,800", 1400, null);
var holly = new Customer("Holly	Medina", "$61,000", "$2,900", 1100, null);
var victoria = new Customer("Victoria Silva", "$178,000", "$2,300", 2300, null);
// Customer collection
var customerArray = [bridget, jeremy, darrin, holly, victoria];

// NOTE: DO NOT CHANGE THIS FUNCTION
function removeNonNumeric(str){
var numericString = str.replace(/[^0-9]/g, '');
return numericString;
}

for (var i=0; i < customerArray.length; i++) {
	var income = (removeNonNumeric(customerArray[i].income) * 0.28)/12;
	var debt = removeNonNumeric(customerArray[i].debt);
	var income2 = (removeNonNumeric(customerArray[i].income)/12) * 0.36;
	var frontEnd = function(income, mortgage) {
		if (income > customerArray[i].monthlyPayment) {
			return true;
		} else {
			return false;
		}
	};
console.log(income);
console.log(customerArray[i].monthlyPayment);
console.log('frontend: ' + frontEnd(income, customerArray[i].monthlyPayment));

	var backEnd = function(income2, debt) {
		if (income2 > debt) {
			return true;
		} else {
			return false;
		}
	};
console.log(income2);
console.log(debt);
console.log('backend: ' + backEnd(income2, debt));

	var decision = function(frontEnd, backEnd) {
		if (frontEnd === true && backEnd === true) {
			customerArray[i].decision = true;
		} else {
			customerArray[i].decision = false;
		}
	};
	frontEnd(income, customerArray[i].monthlyPayment);
	backEnd(income2, debt);
	decision(frontEnd(income, customerArray[i].monthlyPayment), backEnd(income2, debt));
};

console.log(customerArray[0]);
console.log(customerArray[1]);
console.log(customerArray[2]);
console.log(customerArray[3]);
console.log(customerArray[4]);


