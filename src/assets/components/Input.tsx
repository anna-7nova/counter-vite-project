import React, { ChangeEvent, useState } from 'react';

type InputPropsType = {
    value: number
    setValue: (newValue: number) => void
    isError: boolean
}

export const Input = ({ value, setValue, isError }: InputPropsType) => {
    //style
    const errorStyle = {
        margin: "5px",

        borderColor: isError ? "red" : "#63dbfd",
        outline: "none",
        background: "white",
        color: "black"
    }

    const [newValue, setNewValue] = useState<number>(value)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewValue(Number(e.currentTarget.value))
        setValue(Number(e.currentTarget.value))
    }

    return (
        <input onChange={onChangeHandler} type={"number"} value={newValue} style={errorStyle} />
    );
}


