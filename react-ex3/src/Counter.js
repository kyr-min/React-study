import { useState } from 'react'

const Counter = () => {
    let [count, setCount] = useState(0);

    // useEffect(() => {
    //     console.log("시작전");
    //     return () => {
    //         console.log("끝날 때");
    //     }
    // }, []);


    const increase = () => {
        setCount(count + 1 );
    }
    

    const decrease = () => {
        setCount(count - 1 );
    }

    return (
        <div>
            값: {count}
            <button onClick={increase}>+</button>
            <button onClick={decrease}>-</button>
        </div>
    )
};

export default Counter;