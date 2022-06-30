import { SpinnerRoundFilled } from 'spinners-react';
import s from "./Spinners.module.css"


function Spinner(params) {
    return <div className={s.wrapp}>
        <SpinnerRoundFilled
        size={90}
        thickness={100}
        speed={120}
        color="rgb(7, 106, 104)"
      />
    </div>
}
export default Spinner