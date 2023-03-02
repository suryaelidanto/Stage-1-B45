// foreach
// const arr = [1, 2, 2, 3, 4, 5]

// arr.forEach((item, index) => {
//     arr[index] = item * 2
// })

// console.log(arr)

// map -> untuk memodifikasi data array, tapi tidak mengubah data aslinya
// let surya = arr.map((rizki) => {
//     return rizki * 2
// })

// console.log(surya)

// filter
// let rating = 2

// const ratingfilter = arr.filter((x) => {
//     if (x === rating) {
//         return true
//     }
// })

// console.log(ratingfilter)

// 1 % 2 // 1
// 2 % 2 // 0
// 3 % 2 // 1
// 4 % 2 // 0
// 5 % 2 // 1

// [2,4]

const arr = ['a', 'b', 'c', 'd', 'e']

// reduce
const sum = arr.reduce((total, item) => {
    return total + item
}, 'a')

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 2 = 5
// 5 + 3 = 8
// 8 + 4 = 12
// 12 + 5 = 17

console.log(sum)


