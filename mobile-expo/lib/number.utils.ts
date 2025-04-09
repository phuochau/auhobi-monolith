import numbro from 'numbro'

export namespace NumberUtils {
    export const format = (num: number, decimal = 0): string => {
        return numbro(num).format({ thousandSeparated: true, mantissa: decimal })
    }
}