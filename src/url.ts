// 参考 https://www.freecodecamp.org/chinese/news/how-to-validate-urls-in-javascript/
export const isURL = (str: string): boolean => {
    try {
        new URL(str);
        return true
    } catch (e) {
        return false
    }
}
