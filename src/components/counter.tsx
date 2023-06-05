import classes from "./counter.module.scss";
import {useState} from "react";

export const Counter = () => {
  const [count, setCount] = useState(0)

    const handleClick = () => {
      setCount(count + 1)
    }

    return <button className={classes.btn} onClick={handleClick}>{count}</button>
}