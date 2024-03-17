import * as React from 'react';
import style from './ticketRowsStyle.module.scss';
import Image from "next/image";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import {useClientMediaQuery} from "@/libs/sizeDetector";
import {currencyFormatter} from "@/libs/currencyFormatter";

interface ITicketRows {
    data: any;
    isOpen: any;
}

export const TicketRows = ({data, isOpen}: ITicketRows) => {
    const isMobile = useClientMediaQuery('(max-width: 768px)');
    return (
        <div className={style.listItem}>
            {/*Right Side*/}
            <div className={style.rightSide}>
                {/* Tags Row*/}
                <div className={style.tagsRow}>
                    {data.flightClass == 'BUSINESS' &&
                        <>
                            <div className={`${style.tagItem} ${style.offerTag}`}>
                                ‏200,000 تومان تخفیف ویژه خرید بعدی
                            </div>
                            <div className={`${style.tagItem} ${style.businessTag}`}>بیزینس</div>
                        </>
                    }
                    {data.isCharter &&
                        <div className={`${style.tagItem} ${style.charterTag}`}>چارتری</div>
                    }
                    {data.flightClass == 'ECONOMY' &&
                        <div className={style.tagItem}>اکونومی</div>
                    }
                </div>

                {/* Fly Time */}
                <div className={style.flyTimeRow}>
                    <div className={style.airline}>
                        {/* sample Logo*/}
                        <div className={style.airlineLogo}>
                            <Image
                                src="airlinesLogo/iran-air.svg"
                                width={40}
                                height={40}
                                sizes="(max-width: 768px) 20px, 40px"
                                alt={data.airline.name}
                            />
                        </div>
                        <h3 className={style.airlineName}>{data.airline.name}</h3>
                    </div>
                    <div className={style.timeInfo}>
                        <div className={style.col}>
                            <div className={style.time}>{data.departure.dateHourString}</div>
                            <div className={style.city}>{data.departure.airport.city.name.farsi}</div>
                        </div>
                        <Image
                            src="icons/arrow-left.svg"
                            width={24}
                            height={24}
                            alt={data.airline.name}
                        />
                        <div className={style.col}>
                            <div className={style.time}>{data.arrival.dateHourString}</div>
                            <div className={style.city}>{data.arrival.airport.city.name.farsi}</div>
                        </div>
                    </div>
                    {isMobile ?
                        <div className={style.diffTime}>۱h ۴۰m</div>
                        :
                        <div className={style.diffTime}>۱ ساعت و ۴۰ دقیقه</div>
                    }
                </div>
            </div>
            <div className={style.leftSide}>
                {!isOpen ?
                    <div className={style.remainingSeats}>{data.remainingSeats} صندلی باقی مانده</div>
                    :
                    <div className={style.remainingSeats}></div>
                }
                <div className={style.price}>
                    <span className={style.number}>{currencyFormatter(data.price)}</span>
                    <span className={style.curreny}>ریال</span>
                </div>

                <div className={style.toggleBtn}>
                    {isOpen ? <span>بستن جزئیات</span> : <span>مشاهده جزئیات و خرید</span>}
                    {isOpen ? <KeyboardArrowUpIcon color='inherit'/> : <KeyboardArrowDownIcon color='inherit'/>}
                </div>
            </div>
        </div>
    )
}