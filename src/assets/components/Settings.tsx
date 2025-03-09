import React, { useState } from 'react';
import { SettingsType } from './Counter';
import { Input } from './Input';
import { Button } from './Button';

type SettingsPropsType = {
    setNewMaxValue: (value: number) =>void
    setNewMinValue: (value: number) =>void
    newMaxValue: number
    newMinValue: number
    isDisabledSet: boolean
} & SettingsType


export const Settings = ({ maxValue, minValue, updateSetValue, setNewMaxValue, setNewMinValue, newMaxValue, newMinValue, isDisabledSet}: SettingsPropsType) => {
    //styles
    const buttonStyle = {
        backgroundColor: isDisabledSet ? "#407382" : "#63dbfd",
        margin: "10px"
    }

    const updateNewMaxValue = (value: number)=>setNewMaxValue(value)
    const updateNewMinValue = (value: number)=>setNewMinValue(value)

    const onClickSetHandler = () => {
        updateSetValue(newMaxValue, newMinValue)
    }

    return (
        <>
            <div>
                <div>
                    <span>max value :</span>
                    <Input value={maxValue} setValue={updateNewMaxValue} isError={newMaxValue<=newMinValue}/>
                </div>
                <div>
                    <span>start value: </span>
                    <Input value={minValue} setValue={updateNewMinValue} isError={newMinValue<0 || newMaxValue<=newMinValue}/>
                </div>
            </div>
            <Button title={"set"} onClick={onClickSetHandler} disabled={isDisabledSet} style={buttonStyle} />
        </>
    );
}


