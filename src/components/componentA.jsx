import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCounter } from "../app/service/counter.js"

// import actions yang dibutuhkan di sini
import {
    increment,
    decrement,
    reset,
    incrementSpec,
    decrementSpec,
} from "../app/service/counter.js"



const ComponentA = () => {

    const counter = useSelector(selectCounter);
    const dispatcher = useDispatch();

    const buttonDecrementOnClickHandler = () => {
        // Perhatikan di sini dispatcher tidak mempassing action seperti biasa lagi
        // dispatcher({
        //   type: "decrement",
        // });

        // Action di sini dipanggil seperti kita memanggil fungsi biasanya
        dispatcher(decrement());
    };

    const buttonResetOnClickHandler = () => {
        // dispatcher({
        //   type: "reset",
        // });

        // Perhatikan di sini dispatcher tidak mempassing action seperti biasa lagi
        dispatcher(reset());
    };

    const buttonIncrementOnClickHandler = () => {
        // dispatcher({
        //   type: "increment",
        // });

        // Perhatikan di sini dispatcher tidak mempassing action seperti biasa lagi
        dispatcher(increment());
    };

    return (
        <div>
            <h1>Counter App</h1>
            <div>
                <button onClick={buttonIncrementOnClickHandler}>+</button>
                <p>{counter}</p>
                <button onClick={buttonDecrementOnClickHandler}>-</button>
            </div>

        </div>
    )
}
export default ComponentA;