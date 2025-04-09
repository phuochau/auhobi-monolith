import { KeyValuePair } from "@react-native-async-storage/async-storage/lib/typescript/types";

export namespace DataUtils {
    export const enumToKeyValueArray = (enumList: any): KeyValuePair[] => {
        const items: KeyValuePair[] = [];
        for (const [key, value] of Object.entries(enumList)) {
            if (!Number.isNaN(Number(key))) {
                continue;
            }
            items.push([key, `${value}`]);
        }
        return items;
    };
}