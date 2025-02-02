import { useEffect } from "react";

export const useKeyPress = (callback: () => void, keyCodes: Array<string>): void => {
    useEffect(() => {
        const handler = ({ code }: KeyboardEvent) => {
            if (keyCodes.includes(code)) {
                callback();
            }
        };

        window.addEventListener("keydown", handler);
        return () => { window.removeEventListener("keydown", handler); };
    }, [keyCodes, callback]);
}