
export const wait = (millisecond:number)=>{
    return new Promise((resolve)=>{
        let timer = setTimeout(()=>{
            clearTimeout(timer);
            resolve(true)
        })
    })
}
