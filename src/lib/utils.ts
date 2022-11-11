import {
    GOERLI2_FEEDER_GATEWAY,
    GOERLI_FEEDER_GATEWAY,
    MAINNET_FEEDER_GATEWAY,
} from "./contants";
import { Chain } from "./types/starknet";

export function getSequencerEndpoint(chain: Chain): string {
    switch (chain) {
        case "MAINNET": {
            return MAINNET_FEEDER_GATEWAY;
        }
        case "GOERLI": {
            return GOERLI_FEEDER_GATEWAY;
        }
        case "GOERLI2": {
            return GOERLI2_FEEDER_GATEWAY;
        }
    }
}

/**
 * Truncate a string and preserve only the first 5 and the last 3 characters.
 * String whose length is < 9, will be returned as is.
 *
 * @param str string to be truncated
 */
export function truncateString(str: string): string {
    const len = str.length;
    if (len < 9) return str;
    const prefix = str.slice(0, 5);
    const suffix = str.slice(len - 3, len);
    return prefix + "..." + suffix;
}

/**
 *
 * @param str snake case string - snake_case
 * @returns a new string with more presentable format - Snake case
 */
export function snakeCaseToStrPretty(str: string): string {
    const arr = str.split("_").map((e, i) => {
        if (i === 0) {
            const first = e.charAt(0).toUpperCase();
            return first.concat(e.slice(1).toLowerCase());
        } else return e.toLowerCase();
    });
    return arr.join(" ");
}
