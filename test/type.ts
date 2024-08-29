import { isPromise , toType} from "../src";


const p = Promise.resolve('')
console.log(toType(p))
console.log(isPromise(p))
