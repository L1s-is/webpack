import "./counter.scss";
import {useState} from "react";

export const Counter = () => {
  const [count, setCount] = useState(0)

    const handleClick = () => {
      setCount(count + 1)
    }

    return <button onClick={handleClick}>{count}</button>
}