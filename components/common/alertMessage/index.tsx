import Alert from '@mui/material/Alert';
import {style} from './alertMessage.style';

interface IAlertMessage {
    type: 'success' | 'error' | 'info' | 'warning';
    message: string;
}

export const AlertMessage = ({type, message}: IAlertMessage) => {
    return (
        <>
            <Alert severity={type} sx={style.root}>{message}</Alert>
        </>
    )
}