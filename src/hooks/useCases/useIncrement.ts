// Types
import { useState } from "react";

export function useIncrement(){
    const [count, setCounter] = useState<number>(0);

    function increment(value: number){
        setCounter(count + value)
    }

    return {
        increment,
        count
    }
}
