import styles from "./Button.module.css";

type PropsType = {
    onclick: () => void
    value: string
    disabled: boolean
}


export function Button(props: PropsType) {
    return <button disabled={props.disabled} onClick={props.onclick} className={styles.button}>{props.value}</button>
}