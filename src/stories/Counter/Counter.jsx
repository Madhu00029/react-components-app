import Button from '../Button/Button'
import { useState } from 'react';
import PropTypes from "prop-types";

export default function Counter({color}){
    let [count, setCount]= useState(0);
    
    const handleClick = (evtType) => {
        if(evtType === 'ADD'){
            setCount(count+1);
            return;
        }
        setCount(count-1);
    };
    return  (
        <div>
            <span style={{color}}>Counter: {count}</span>
            <br/>
            <Button label="+" onClick={() => handleClick("ADD")} backgroundColor="#2BB60B"></Button>
            <Button label="-" onClick={() => handleClick()} backgroundColor="#2BB60B"></Button>
        </div>
    );
}

Counter.propTypes = {
    color: PropTypes.string,
};