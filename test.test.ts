import { describe, test, expect } from 'vitest'
import allFunctions from './function'

// 1
const sumLength = () => 
    test('sumLength', () => {
        expect(allFunctions.sumLength('fghj')).toBe(4)
    } )

// 2
const isPalindrome = () => {
    test('isPalindrome', () => {
        expect(allFunctions.isPalindrome('aba')).toEqual(true)
    })
}

// 3
const orderRising = () => {
    test('isOrderRising', () => {
        expect(allFunctions.orderRising([5, 7, 2, 4])).toBe([2, 4, 5, 7])
    } )
}

// 4
describe('isQuaring', () => {
    test('square', () => {
        expect(allFunctions.square(9)).toBe(3)
    })

    test('islower', () => {
        return expect(allFunctions.square(-5)).toBe(false)
    });
})

// 5
describe('sumArray', () => {
    test('sumArray', () => {
        expect(allFunctions.sumArray([1, 2, 3, 4])).toBe(10)
    })

    test('isGeateThen', () => {
        expect(allFunctions.sumArray([1, 2, 2, 9])).toBeGreaterThan(10)
    })
})

// 6
// describe('userData', () => {
//     test('return user data', async () => {
//         const userData = await allFunctions.fetchUserData(2)
//         expect(userData).toHaveProperty('id')
//     })

//     test('return null if user not found', async () => {
//         const userData = await allFunctions.fetchUserData(999)
//         expect(userData).toBe(null)
//     })
// })

// 7
describe('fibonacci', () => {
    test('newFibonacciArray', () => {
        expect(allFunctions.nextNumOfFibonacci([1, 2, 3, 4, 5])).toBe('is not fibonachi array')
    })

    test('newFibonacciArray', () => {
        expect(allFunctions.nextNumOfFibonacci([1, 2, 3, 5, 8])).toBe(13)
    })
})





