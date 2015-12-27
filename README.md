# prime_repoShift_eta
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