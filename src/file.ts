// 其他常见 MIME 类型
type MIMEType =
    "text/plain" |
    "text/html" |
    "application/json" ;

interface Options {
    multiple?: boolean
    accept?: MIMEType
}

interface Listener {
    (e: Event): void
}

interface SelectedResult {
    files: Array<File>
    target: HTMLInputElement,
    listener: Listener
}

export const selectFiles = (options: Options) => {
    return new Promise<SelectedResult>((resolve, reject) => {
        const files: Array<Blob> = []
        const input = document.createElement('input')
        input.type = 'file'
        if (options.multiple) input.multiple = true
        if (options.accept) input.accept = options.accept
        const inputListener: Listener = (e: Event) => {
            const target = e.target as HTMLInputElement
            const files = target.files
            if (files && files.length) {
                resolve({
                    files: Array.from(files),
                    target: input,
                    listener: inputListener
                })
            }

        }
        input.addEventListener('change', inputListener)
    }).then((ret: SelectedResult) => {
        if (ret && ret.target && ret.listener) {
            ret.target.removeEventListener('change', ret.listener)
        } else {
            throw new Error('文件选择错误')
        }
        return ret.files
    })
}
