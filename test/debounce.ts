import {debounce} from "../src";

console.log('start test debounce')

let obj = {
    name: '张三',
    sayName(prefix: string = '你好') {
        // @ts-ignore
        const str = prefix + this.name
        console.log('sayName:', str)
        return str
    }
}


// @ts-ignore
obj.sayName = debounce(obj.sayName)
let i = 0
while (i < 3) {
    obj.sayName(`${i} hi, my name is `)
    i++
}
// while (i < 5) {
//     const p = obj.sayName(`${i} hi, my name is`)
//     // @ts-ignore
//     p.then((res) => {
//         console.log(res)
//     })
//     i++
// }
