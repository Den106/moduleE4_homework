let obj = {
    a:1,
    b:2,
    c:3,
    d:4
}

let str1 = 'a'
let str2 = 'e'

const contains = function (obj, str) {
    return (str in obj)
}

console.log(contains(obj, str1 ))
console.log(contains(obj, str2 ))