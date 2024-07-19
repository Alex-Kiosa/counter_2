import styles from "./Counter.module.css"
import {Button} from "../button/Button";
import React from "react";

type CounterPropsType = {
    maxValue: number
    count: number
    tooltip: string
    error: string
    counterInc: () => void
    counterReset: () => void
    toggleEditMode: () => void
}

export function Counter({maxValue, count, tooltip, error, counterInc, counterReset, toggleEditMode}: CounterPropsType) {
    const title = error || tooltip || count
    let style
    if (count >= maxValue || error) {
        style = styles.display + " " + styles.display_red
    } else {
        style = styles.display
    }

    return <div className={styles.wrap}>
        <div className={style}>
            {title}
        </div>
        <div className={styles.buttons}>
            <Button disabled={count === maxValue || !!tooltip} onclick={counterInc} value={'inc'}/>
            <Button disabled={!!tooltip} onclick={counterReset} value={'reset'}/>
            <Button disabled={!!tooltip} onclick={toggleEditMode} value={'settings'}/>
        </div>
    </div>
}