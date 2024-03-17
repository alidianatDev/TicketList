import {CircularProgress} from "@mui/material";
import style from './loadingCircle.module.scss';

export const LoadingCircle = () => {
    return (
        <div className={style.layout}>
            <CircularProgress color={'success'}/>
        </div>
    )
}