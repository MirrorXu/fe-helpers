// /**
//  * 随机数
//  * @param min
//  * @param max
//  */
// function random(min?: number, max?: number) {
//     let num: number;
//     if (isNumber(min) && isNumber(max)) {
//         if(max! < min!){
//             const temp:number = max as number
//             min = max
//             max = temp
//         }
//         num = Math.floor(Math.random() * (max as number - (min as number))) + (min as number)
//     } else if (isNumber(min) && !isNumber(max)) {
//         num = Math.floor(Math.random()) + (min as number)
//     } else {
//         num = Math.random()
//     }
//     return num;
// }


/**
 * 生成随机数
 * @param min 最小值（可选）
 * @param max 最大值（可选）
 */
function randomNum(min?: number, max?: number) {
    if (typeof min === 'number' && typeof max === 'number' && max < min) {
        [min, max] = [max, min];
    }

    if (typeof min === 'number' && typeof max === 'number') {
        return Math.floor(Math.random() * (max - min) + min);
    } else if (typeof min === 'number') {
        return Math.floor(Math.random() + min);
    } else {
        return Math.random();
    }
}
