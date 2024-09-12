import { Dayjs } from "dayjs";

export namespace DateUtility {
    export const zeroSecond = (d: Dayjs) => {
        return d.second(0).millisecond(0)
    }
}