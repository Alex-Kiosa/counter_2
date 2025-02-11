import React, {useEffect, useState} from 'react';
import './App.css';
import {Settings} from "./components/settings/Settings";
import {Counter} from "./components/counter/Counter";

function App() {
    let startValueFromLocalStorage = localStorage.getItem('savedStartValue') || 0
    const [startValue, setStartValue] = useState(+startValueFromLocalStorage)
    const [maxValue, setMaxValue] = useState(2)
    const [count, setCount] = useState(startValue)
    const [error, setError] = useState("")
    const [tooltip, setTooltip] = useState("")
    const [editMode, setEditMode] = useState(false)

    useEffect(() => {
        const savedStartValue = localStorage.getItem('savedStartValue')
        if (savedStartValue) setStartValue(JSON.parse(savedStartValue))
    }, [])

    useEffect(() => {
        const savedMaxValue = localStorage.getItem('savedMaxValue')
        if (savedMaxValue) setMaxValue(JSON.parse(savedMaxValue))
    }, [])

    const counterIncHandler = () => setCount(count + 1)

    const counterResetHandler = () => setCount(startValue)

    const updateStartValueHandler = (value: number) => {
        setEditMode(true)
        setStartValue(value)
        if (maxValue <= value) {
            setError('incorrect value')
        } else {
            setError('')
            setTooltip("set value and press enter")
        }
    }

    const updateMaxValueHandler = (value: number) => {
        setEditMode(true)
        setMaxValue(value)
        if (startValue >= value) {
            setError('incorrect value')
        } else {
            setError('')
            setTooltip("set value and press enter")
        }
    }

    const updateSettingsHandler = () => {
        localStorage.setItem('savedStartValue', JSON.stringify(startValue))
        localStorage.setItem('savedMaxValue', JSON.stringify(maxValue))
        setCount(startValue)
        setTooltip('')
        setEditMode(false)
    }

    const toggleEditModeHandler = () => {
        setEditMode(!editMode)
    }

    const setDefaultHandler = () => {
        localStorage.removeItem('savedStartValue')
        localStorage.removeItem('savedMaxValue')
        setStartValue(0)
        setMaxValue(2)
    }

    if (!editMode) {
        return (
            <div className="App">
                <Counter
                    count={count}
                    maxValue={maxValue}
                    tooltip={tooltip}
                    error={error}
                    counterInc={counterIncHandler}
                    counterReset={counterResetHandler}
                    toggleEditMode={toggleEditModeHandler}
                />
            </div>
        );
    }

    return (
        <div className="App">
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                editMode={editMode}
                error={error}
                updateStartValue={updateStartValueHandler}
                updateMaxValue={updateMaxValueHandler}
                updateSettingsHandler={updateSettingsHandler}
                setDefaultSettings={setDefaultHandler}
            />
        </div>
    );
}

export default App;
