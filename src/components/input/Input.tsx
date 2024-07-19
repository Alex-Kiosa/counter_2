import {ChangeEvent} from "react";
import styles from "./Input.module.css";


type PropsType = {
    value: number
    error: boolean
    onChange: (value: number) => void
    onKeyUp: () => void
}

export function Input(props: PropsType) {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => props.onChange(+e.currentTarget.value)

    const style = props.error ? `${styles.input} ${styles.error}` : styles.input

    return <input
        type="number"
        value={props.value}
        min={0}
        onChange={onChangeHandler}
        onKeyUp={props.onKeyUp}
        className={style}
    />
}