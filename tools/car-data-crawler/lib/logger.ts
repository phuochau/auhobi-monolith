export namespace Logger {
    export const success = (...args: any[]) => {
        console.log('\x1b[32m', new Date().toString(), ...args, '\x1b[0m')
    }

    export const warn = (...args: any[]) => {
        console.log('\x1b[43m', new Date().toString(), ...args, '\x1b[0m')
    }

    export const error = (...args: any[]) => {
        console.log('\x1b[41m', new Date().toString(), ...args, '\x1b[0m')
    }

    export const info = (...args: any[]) => {
        console.log('\x1b[35m', new Date().toString(), ...args, '\x1b[0m')
    }
}