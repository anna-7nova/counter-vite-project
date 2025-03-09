import React, { useState } from 'react';
import { Button } from './Button';
import { CounterView } from './CounterView';
import { Settings } from './Settings';

export type CounterType = CounterViewType & SettingsType

export type CounterViewType = {
    count: number
    counterFunc: (count: number) => void
    resetFunc: () => void
    isDisabled: boolean
    isDisabledReset: boolean
}
export type SettingsType = {
    maxValue: number
    minValue: number
    updateSetValue: (newMaxValue: number, newMinValue: number)=> void
}

export const Counter = ({ count, maxValue, minValue, updateSetValue, counterFunc, resetFunc, isDisabled, isDisabledReset }: CounterType) => {
    //style
    const mainSectionStyle = {
        display: "flex",
        gap: "10px"

    }
    const styleComponent = {
        borderRadius: "5px",
        border: "2px solid #63dbfd",
        padding: "10px",
    }

    //local state
        const [newMaxValue, setNewMaxValue] = useState(maxValue)
        const [newMinValue, setNewMinValue] = useState(minValue)

        const setting = maxValue!==newMaxValue || minValue!==newMinValue
        const isDisabledValue = setting ? true : isDisabled
        const isDisabledSet = setting&&newMinValue>-1&&newMaxValue>newMinValue ? false : true
    return (
        <div style={mainSectionStyle}>
            <div style={styleComponent}>
                <Settings minValue={minValue} maxValue={maxValue} updateSetValue={updateSetValue} setNewMaxValue={setNewMaxValue} setNewMinValue={setNewMinValue} newMaxValue={newMaxValue} newMinValue={newMinValue} isDisabledSet={isDisabledSet}/>
            </div>
            <div style={styleComponent}>
                <CounterView
                    count={count}
                    newMaxValue={newMaxValue}
                    newMinValue={newMinValue}
                    setting={setting}
                    counterFunc={counterFunc}
                    resetFunc={resetFunc}
                    isDisabled={isDisabledValue}
                    isDisabledReset={isDisabledReset} />
            </div>
        </div>
    );
}


