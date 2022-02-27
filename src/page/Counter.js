import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/ducks/counter";
import { getUser } from '../redux/ducks/user'

const Counter = () => {
    const count = useSelector((state) => state.counter.count)
    const user = useSelector((state) => state.user.user)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getUser())
    }, [dispatch])

  const handleIncrement = () => {
    dispatch(increment())
  }
  const handleDecrement = () => {
    dispatch(decrement())
  }

  console.log(user)

  return (
    <div style={{ backgroundColor: "grey", margin: "10px" }}>
      <h3> {`Count: ${count}`} </h3>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button onClick={handleIncrement}> Increment </button>
        <button onClick={handleDecrement}> Decrement </button>
      </div>
    </div>
  );
};

export default Counter;
