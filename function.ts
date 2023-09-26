import axios from 'axios'

const sumLength = (str: string) => {
    return str.length
}

const isPalindrome = (str: string) => {
    if (str.split("").reverse().join('') === str) {
        return true
    } else {
        return false
    }
}

const orderRising = (num: number[]) => {
    const rising = num.sort((a, b) => a - b)
    return rising
}

const square = (num: number):number | boolean => {
    if (num < 0) {
        return false
    } else {
        const result = Math.sqrt(num)
        return result
    }   
}

const sumArray = (arr: number[]) => {
    const result = arr.reduce((a, b) => a + b)
    return result
}

interface User {
        [x: string]: any
        id: number;
        name: string;
        username: string;
        email: string;
        address: {
          street: string;
          suite: string;
          city: string;
          zipcode: string;
          geo: {
            lat: string;
            lng: string;
            };
        };
        phone: string;
        website: string;
        company: {
          name: string;
          catchPhrase: string;
          bs: string;
        };
    }


const fetchUserData = async (userId: number) => {
    const userData:User = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`) 
    if (!userData) return null
    return userData.data 
}

const nextNumOfFibonacci = (fibonachi: number[]):string | number => {
    if (fibonachi.length < 3) return 'is not a min array'
    for (let i = 2; i < fibonachi.length; i++) {
        if (fibonachi[i] !== fibonachi[i - 1] + fibonachi[i - 2])
            return 'is not fibonachi array'
    }
    const nextNum:number = fibonachi[fibonachi.length - 1] + fibonachi[fibonachi.length - 2]
    return nextNum
}

const allFunctions = {
    sumLength,
    isPalindrome,
    orderRising,
    square,
    sumArray,
    fetchUserData,
    nextNumOfFibonacci
}

export default allFunctions


