// console.log("Hello")

let value  = 121;

const checkValue = () => {
    let newValue = value.toString().split("").reverse().join("");
    let updatedValue = value.toString()

     if (newValue === updatedValue){
        console.log(`${newValue} is Palindrome`)
     } else {
         console.log(`${newValue} is Not a Palindrome `)
     }

    // console.log(newValue)
}

checkValue()