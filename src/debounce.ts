import {isUndefined} from "./type";

export const debounce = (fn: Function, duration?: number | undefined) => {

    if (isUndefined(duration)) duration = 200 // 默认200毫秒

    let timer: number | null = null;
    let promise: Promise<any>;
    return function debounced(...args: unknown[]) {
        if (timer) {
            clearTimeout(timer);
            timer = null;
        }
        promise =  new Promise((resolve, reject) => {
            timer = setTimeout(() => {
                try {
                    // @ts-ignore
                    const ret = fn.apply(this, args)
                    resolve(ret)
                } catch (e) {
                    reject(e)
                }
            }, duration);
        })

        return promise
    }
}
