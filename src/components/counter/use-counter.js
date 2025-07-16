import { useState } from "react";

export const useCounter = ({ min = 0, max = 5 } = {}) => {
    const [value, setValue] = useState(min);

    const increment = () => {
        if (value >= max) return;
        setValue(value + 1);
    }
    const decrement = () => {
        if (value <= min) return;
        setValue(value - 1);
    };

    return {
        value,
        increment,
        decrement,
    }
}
