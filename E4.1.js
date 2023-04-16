obj = {
    a:1,
    b:2,
    c:3,
    d:4
}

const printObject=function (obj) {
    for (let key in obj){
        if (obj.hasOwnProperty(key)) {
            const d = ` ${key} : ${obj[key]} `
            console.log(d)
        }
    }
}

printObject(obj)