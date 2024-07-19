import styles from "./Counter.module.css"

type CounterPropsType = {
    startValue: number
    maxValue: number
    count: number
    tooltip: string
    error: string
}

export function Counter({startValue, maxValue, count, tooltip, error}: CounterPropsType) {
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
    </div>
}