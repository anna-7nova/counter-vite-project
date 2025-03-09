import React from 'react';
import { Button } from './Button';
import { CounterViewType } from './Counter';

type CounterViewPropsType = {
    newMaxValue: number
    newMinValue: number
    setting: boolean
} & CounterViewType

export const CounterView = ({ count, counterFunc, resetFunc, isDisabled, isDisabledReset, newMaxValue, newMinValue, setting }: CounterViewPropsType) => {
    //style
    const stylesForCounter = {
        color: isDisabled ? "red" : "black",
        backgroundColor: "#63dbfd",
        borderRadius: "5px",
        margin: "10px",
    }

    const error = {
        color: "red"
    }

    function getStylesForButton(isBtnDisabled: boolean) {
        return (
            {
                backgroundColor: isBtnDisabled ? "#407382" : "#63dbfd",
                margin: "10px",
            }
        )

    }

    //handlers
    const counterFuncHandler = () => counterFunc(count)

    return (
        <>
            {setting&&((newMinValue < 0 || newMaxValue<=newMinValue)
            ?<div style={error}>Incorrect value!</div>
            :<div>enter value and press "set"</div>)}
            {!setting&&<div style={stylesForCounter}>{count}</div>}
            <div>
                <Button title='inc' onClick={counterFuncHandler} disabled={isDisabled} style={getStylesForButton(isDisabled)} />
                <Button title='reset' onClick={resetFunc} disabled={isDisabledReset} style={getStylesForButton(isDisabledReset)} />
            </div>
        </>
    );
}


