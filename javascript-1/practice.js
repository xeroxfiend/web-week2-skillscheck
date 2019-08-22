//////////////////PROBLEM 1////////////////////

// Create a variable called 'myName' that's value is your name

const myName = 'Brian'
    //////////////////PROBLEM 2////////////////////

// Create a variable called 'faveNum' that's value is your favorite number

const faveNum = 7

//////////////////PROBLEM 3////////////////////

// Create a variable called 'lovesCode' and set it to true

const lovesCode = true

//////////////////PROBLEM 4////////////////////

// Create a function called 'sum' that takes in two parameters, num1 and num2, and returns the sum of those two parameters.

function sum(num1, num2) {
    return num1 + num2
}

//////////////////PROBLEM 5////////////////////

// Create a function called 'lovesCodeChecker' that takes in a single parameter called x. Check to see if x is equal to true. If it is, return true as a boolean. If x does not equal true, return false as a boolean

function lovesCodeChecker(x) {
    if (x) {
        return true
    } else {
        return false
    }
}

//////////////////PROBLEM 6////////////////////

// Create a function called 'oddChecker' that takes in one parameter, num. Check to see if the number is even or odd. If it is odd, return 'the number is odd' or return 'the number is even' if it is even.

function oddChecker(num) {
    if (num % 2 === 0) {
        return 'the number is even'
    } else {
        return 'the number is odd'
    }
}

//////////////////PROBLEM 7////////////////////

// Create a function called 'iLove' that takes in two parameters, name which will be a string  and love which will be a string of something you love. Have the function take the two parameters and retrun a string that says "NAMEPARAM loves LOVEPARAM" with the appropriate parameters in the string. e.g. "Bryan loves skateboarding"

function iLove(name, love) {
    return `${name} loves ${love}`
}

console.log(iLove('Bryan', 'skateboarding'))

// that should work^^^^

// function iLove(name, love) {
//     return name + ' loves ' + love + '!'
// }

// console.log(iLove('Bryan', 'skateboarding'))

// should also work^^^

//////////////////PROBLEM 8////////////////////

// Create a copy of the faveColors array called 'colorCopy' using slice
const faveColors = ['red', 'green', 'black']

const colorCopy = faveColors.slice()

//////////////////PROBLEM 9////////////////////

// Add a fourth color to the end of the 'colorCopy' array using push

colorCopy.push('purple')

//////////////////PROBLEM 10////////////////////

// Create a new array called 'middleNums' from the numbers array that will capture only the middle numbers (2, 3, 4).
const numbers = [1, 2, 3, 4, 5]

const middleNums = numbers.slice(1, numbers.length - 1)

//////////////////PROBLEM 11////////////////////

// Create an object called 'me' that has these keys with the correct values: firstName, state, age, greeter. firstName will be your name as a string. state will be your current state or providence as a string. age will be your age as a number. greeter will be a method that returns the string 'Hello! My name is NAMEVALUE and I live in STATEVALUE' with the correct values

const me = {
    firstName: 'Brian',
    state: 'Utah',
    age: 31,
    greeter: function() {
        return `Hello! My name is ${me.firstName} and I live in ${me.state}`
    }
}

//////////////////PROBLEM 12////////////////////

// Create a function called 'bigOrSmall' that takes in one parameter, arr. Create a new array inside of bigOrSmall called 'answers'. Loop over the passed in arr param. If the number is GREATER than 100, push 'big' as a string to the answers array. If the number is LESS than or EQUAL to 100, push 'small' as a string to the answers array. Return the answers array inside of the function

function bigOrSmall(arr) {
    const answers = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 100) {
            answers.push('big')
        } else {
            answers.push('small')
        }
    }
    return answers
}

//////////////////PROBLEM 13////////////////////

// Create a function called 'arrayReverser' that takes in one parameter, arr. Inside of arrayReverser, create an empty array called 'reversed'. Using a for loop, loop over the passed in array in reverse and add each item to the new reversed array. Finally, return the new reversed array

function arrayReverser(arr) {
    const reversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i])
    }
    return reversed
}

//////////////////PROBLEM 14 - 18 Setup////////////////////

// Below is an array, myNumbers. We will be using .map, .filter, .reduce and .forEach to manipulate the array in some form
const myNumbers = [3, 55, 788, 2, 1]


//////////////////PROBLEM 14////////////////////

// First, let's use .map to create a new array that doubles each number. Call the new array 'doubled'

const doubled = myNumbers.map(function(el) {
    return el *= 2
})

//////////////////PROBLEM 15////////////////////

// Now lets use .filter to only get the nubmer(s) greater than 100. Call the new array 'filtered'

const filtered = myNumbers.filter(function(el) {
    if (el > 100) {
        return true
    }
})

//////////////////PROBLEM 16////////////////////

// Next up, reduce to get the total of the array. call the new array 'total'

const total = myNumbers.reduce(function(acc, curValue) {
    return acc + curValue
})

//////////////////PROBLEM 17////////////////////

// Last, lets use .forEach to find the index of each item in the array. First, create an empty array called myNumbersIndex. Next, using forEach, push each items index from the myNumbers array to the myNumbersIndex array

const myNumbersIndex = []

myNumbers.forEach(function(el, i, arr) {
    return myNumbersIndex.push(i)
})

//////////////////PROBLEM 18////////////////////

// Did you know that George Foreman has five sons named George? Let's go ahead and change everyone's name in the notGeorge array to George using .map. Call the new array 'forTheLoveOfGeorge'
const notGeorge = ['Louis', 'Ted', 'Bill', 'Sharon', 'Mark', 'Angela']

const forTheLoveOfGeorge = notGeorge.map(function(el) {
        return el = 'George'
    })
    //////////////////PROBLEM 19////////////////////

// Using the people array, let's filter out everyone that isn't our friend to a new array called 'enemies'. Use .filter()
const people = [
    { name: 'Landy', friend: true, awesomeLevel: 10 },
    { name: 'Jeremy', friend: true, awesomeLevel: 10 },
    { name: 'Bart', friend: false, awesomeLevel: 3 },
    { name: 'Stephanie', friend: false, awesomeLevel: 6 },
    { name: 'Serena', friend: true, awesomeLevel: 8 },
    { name: 'George', friend: true, awesomeLevel: 7 }
]

const enemies = people.filter(function(el) {
    if (!el.friend) {
        return true
    }
})

//////////////////PROBLEM 20////////////////////

// Using the people array above, let's get a total of the awesomeLevel from all the people. Call the new array 'totallyAwesome'. Use .reduce()

const totallyAwesome = people.reduce(function(acc, curValue) {
    console.log(acc.awesomeLevel)
        // console.log(curValue.awesomeLevel)
    return acc + curValue.awesomeLevel
}, 0)