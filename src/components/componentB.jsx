
import React from "react";
import { useSelector } from "react-redux";
import { selectCounter } from "../app/service/counter.js"

const ComponentB = () => {
    const counter = useSelector(selectCounter);
    return (
        <div>
            {counter}
        </div>
    )
}
export default ComponentB;