export namespace Timer {
    export const wait = (second: number) => {
        return new Promise<void>(resolve => {
            setTimeout(() => {
                resolve()
            }, second * 1000)
        })
    }
}