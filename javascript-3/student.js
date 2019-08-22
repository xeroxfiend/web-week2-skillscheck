//////////////////SETUP////////////////////
// Close all other index.html files and open the index.html file in javascript-3/index.html. You should see an input and button that says "Add Item"

//////////////////STEP 1////////////////////
//Create an array called 'groceries' that contains three grocery items as a string

const groceries = ['toilet paper', 'cereal', 'bananas']
    //////////////////STEP 2////////////////////
    //Create a variable called 'yourName' that is equal to your name as a string

const yourName = 'Brian'

//////////////////STEP 3////////////////////
//Create a function called 'setGroceryListTitle' that takes in one parameter called x. The function should return a string of 'XPARAM's Grocery List'.

function setGroceryListTitle(x) {
    return `${x}'s Grocery List`
}

//////////////////STEP 4////////////////////
//Create a function called 'addItem' that takes in one paramter called item. Add the item param to the end of the groceries array created above. Inside of addItem, invoke displayData() which is a function we created that takes care of some of the leg work unrelated to this module.

function addItem(item) {
    groceries.push(item)
    displayData()
}

//////////////////STEP 5////////////////////
//Create a function called removeItem that takes in one parmater called index. Inside of the function remove the item from the groceries array above using splice. Invoke the displayData() function again.

function removeItem(index) {
    groceries.splice(groceries[index], 1)
    displayData()
}

//////////////////STEP 6////////////////////
//Create a function called 'checkGroceryCount'. Inside of the function check the total number of groceries you need to get using .length. Using an else/if statement, check if the number is greater than or equal to 5, return the string 'That looks like a big trip' from the function. If the number of groceries is equal to one, return the string '1 item'. For numbers between 1 and 5, return the string 'NUMBER items' with number replacing the number of items

function checkGroceryCount() {
    const groceryTotal = groceries.length
    if (groceryTotal >= 5) {
        return 'That looks like a big trip'
    } else if (groceryTotal === 1) {
        return '1 item'
    } else if (groceryTotal === 2) {
        return '2 items'
    } else if (groceryTotal === 3) {
        return '3 items'
    } else if (groceryTotal === 4) {
        return '4 items'
    }
}

//////////////////STEP 6////////////////////
// Refresh the index.html page. You should now see the same thing you saw when you first loaded the page but you should now be able to add items to your grocery list with a dynamic total showing. If you double click on an item, it should remove that item