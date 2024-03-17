import * as React from 'react';
import style from './tabBodyStyle.module.scss';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface IRules {
    data: any;
}

export const Rules = ({data}: IRules) => {
    return (

        <div className={style.contentBox}>
            {/*head*/}
            <div className={style.head}>
                <div className={style.ruleWarning}>
                    <InfoOutlinedIcon sx={{'color': '#696A6B'}}/>
                    <p>{data.warning[0].text}</p>
                </div>
            </div>

            {/*body*/}
            <div className={style.body}>
                {data && data.rules.map((item: any, key: number) => (
                    <p key={key} className={style.rulesItem}>{item.text}</p>
                ))}
            </div>
        </div>
    )
}