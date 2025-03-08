import React from 'react';
import { Button } from './Button';

type CounterType = {
    count: number
    maxValue: number
    counterFunc: (count: number) => void
    resetFunc: () => void
    isDisabled: boolean
    isDisabledReset: boolean
}

export const Counter = ({ count, maxValue, counterFunc, resetFunc, isDisabled, isDisabledReset }: CounterType) => {
    //handlers
    const counterFuncHandler = () => counterFunc(count)

    //style
    const styleComponent = {
        borderRadius: "5px",
        border: "2px solid #63dbfd",
        padding: "10px",
    }
    const stylesForCounter = {
        color: (count === maxValue) ? "red" : "black",
        backgroundColor: "#63dbfd",
        borderRadius: "5px",
        margin: "10px",
    }

    function getStylesForButton(isBtnDisabled:boolean) {
        return(
            {
                backgroundColor: isBtnDisabled ? "#407382" : "#63dbfd",
                margin: "10px",
            }
        )


    }
    return (
        <div style={styleComponent}>
            <div style={stylesForCounter}>{count}</div>
            <div>
                <Button title='inc' onClick={counterFuncHandler} disabled={isDisabled} style={getStylesForButton(isDisabled)}/>
                <Button title='reset' onClick={resetFunc} disabled={isDisabledReset} style={getStylesForButton(isDisabledReset)}/>
            </div>
        </div>
    );
}


