## Variables

- camelCasing
- can't start w/ a number
- best practice to declare each variable on its own line
  cont myName = 'Elisa'
  const lastName = 'Silly'
- no dashes inbetween words

## Primitive/Value Types

    - String Literal
    - Number Literal
    - Boolean Literal
    - undefined  --> also the default variable in JS
        - `let firstName;` (implicily set to undefined)
    - null --> used to explicily clear the value of a variable
        - when user selects a color it gets changed to that color

            `let selectedColor = null`

## Dyanmatic Type

    - Type of a variable can change at runtime
    - Let's say you start with a String type
        let name = 'Mosh'
        name = 50
    - This is why JS is called a Dyanmatic Language because variable types can be changed
    - All numbers are of type NUMBER --> no floats or integers in JS
    - undefined is a TYPE and a VALUE
    - null is TYPE OBJECT

## Reference Types

    - Object
        - Like a person in real life!
        - Each person has a name, age etc. which are PROPERTIES of the person

        let person = {
            name: "Elisa,
            age: 27
            height: 5.1
        }
       - 3 Key:Value pairs/ 3 Properties
       - Two forms to access a property is through dot notation or bracket notation
       - When the variable will be changed at runtime then we use bracket notation

    - Array
        - List of products in shopping cart, list of user selected colors
        - Access elements in a array via the index
        - Type of variables can change at runtype
        - Arrays are DYANMATIC which means the values within array can change and hold different types
        - Array is an Object
        - Array comes with different properties that we can use on the array
            - forEach
            - length
            - filter etc
        - An Array is also a DATA STRUCTURE used to represent a LIST OF ITEMS

    - Function
        - A function PERFORMS A TASK or CALCULATES a value
        - A function has a body which holds the logic of our function
        - Paramaters are variables availble within the function but NOT outside of the function
        - Parameter is what we have at the time of declaration
        - Argument is what is passed into the invocation of the function
        - console.log() is a FUNCTION :)
