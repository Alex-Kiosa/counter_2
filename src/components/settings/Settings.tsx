import {Input} from "../input/Input";
import styles from "./Settings.module.css";
import {Button} from "../button/Button";

type PropsType = {
    maxValue: number
    startValue: number
    editMode: boolean
    error: string
    updateStartValue: (value: number) => void
    updateMaxValue: (value: number) => void
    updateSettingsHandler: () => void
    setDefaultSettings: () => void
}

export function Settings(props: PropsType) {
    return <div className={styles.wrap}>
        <div className={styles.display}>
            <div>Max value:
                <Input value={props.maxValue}
                       error={props.startValue >= props.maxValue}
                       onChange={props.updateMaxValue}
                       onKeyUp={props.updateSettingsHandler}
                />
            </div>
            <div>Start value:
                <Input value={props.startValue}
                       error={props.startValue >= props.maxValue}
                       onChange={props.updateStartValue}
                       onKeyUp={props.updateSettingsHandler}
                />
            </div>
        </div>
        <div className={styles.buttons}>
            <Button value={'set'} onclick={props.updateSettingsHandler} disabled={!props.editMode || !!props.error}/>
            <Button value={'default'} onclick={props.setDefaultSettings} disabled={!props.editMode || !!props.error}/>
        </div>
    </div>
}