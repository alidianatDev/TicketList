import * as React from 'react';
import style from './tabBodyStyle.module.scss';
import Image from "next/image";

interface IFlightContent {
    data: any;
}

export const FlightContent = ({data}: IFlightContent) => {

    return (
        <div className={style.contentBox}>
            {/*head*/}
            <div className={style.head}>
                <div className={style.cityName}>
                    {data.departure.airport.city.name.farsi} - {data.arrival.airport.city.name.farsi}
                </div>
                <div className={style.flightTime}>
                    <span>مدت سفر:</span> ۱ ساعت و ۴۰ دقیقه
                </div>
            </div>

            {/*body*/}
            <div className={style.body}>
                <div className={style.airline}>
                    <div className={style.logo}>
                        <Image
                            src="airlinesLogo/iran-air.svg"
                            width={40}
                            height={40}
                            alt={data.airline.name}
                        />
                    </div>
                    <div className={style.info}>
                        <div>
                            <div className={style.title}>{data.airline.name}</div>
                            {data.isCharter &&
                                <div className={style.title}>چارتری</div>
                            }
                            {data.flightClass == 'BUSINESS' &&
                                <div className={style.title}>بیزینس</div>
                            }
                            {data.flightClass == 'ECONOMY' &&
                                <div className={style.title}>اکونومی</div>
                            }
                            <div className={style.title}>{data.airplaneModel}</div>
                        </div>
                        <div className={style.fields}>
                            <div className={style.item}>
                                <span>شماره پرواز:</span>
                                {data.flightNumber}
                            </div>
                            <div className={style.item}>
                                <span>کلاس نرخی:</span>
                                {data.fareClass}
                            </div>
                            <div className={style.item}>
                                <span>ترمینال:</span>
                                {data.departure.terminal}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.flightTimeinfo}>
                    {/* Departure info*/}
                    <div className={style.departure_arrival}>
                        <div>
                            <div className={style.city}>
                                {data.departure.dateHourString} {data.departure.airport.city.name.farsi}
                            </div>
                            <div className={style.date}>
                                {data.departure.dateString}
                            </div>
                        </div>
                        <div>
                            <div className={style.airport}>
                                {data.departure.airport.name.farsi} ({data.departure.airport.iata})
                            </div>
                        </div>
                    </div>

                    {/* FLight Time*/}
                    <div className={style.flightTime}>
                        ۱ ساعت و ۴۰ دقیقه
                    </div>

                    {/* Arrival info*/}
                    <div className={style.departure_arrival}>
                        <div>
                            <div className={style.city}>
                                {data.arrival.dateHourString} {data.arrival.airport.city.name.farsi}
                            </div>
                            <div className={style.date}>
                                {data.arrival.dateString}
                            </div>
                        </div>
                        <div>
                            <div className={style.airport}>
                                {data.arrival.airport.name.farsi} ({data.arrival.airport.iata})
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.allowedBaggage}>
                    <div className={style.item}>
                        <Image
                            src="icons/luggage.svg"
                            width={16}
                            height={16}
                            alt='allowedBaggage'
                        />
                        <span>
                        بار مجاز پرواز : {data.allowedBaggage[0].adultAndChildWeight} کیلوگرم به ازای هر مسافر
                        </span>
                    </div>
                    <div className={style.item}>
                        <Image
                            src="icons/child_care.svg"
                            width={16}
                            height={16}
                            alt='allowedBaggage'
                        />
                        <span>
                            بار مجاز نوزاد: {data.allowedBaggage[0].infantWeight} کیلوگرم به ازای هر مسافر
                        </span>
                    </div>
                    <div className={style.item}>
                        <Image
                            src="icons/backpack.svg"
                            width={16}
                            height={16}
                            alt='allowedBaggage'
                        />
                        <span>
                            بار مجاز کابین: {data.allowedBaggage[0].weight} کیلوگرم به ازای هر مسافر
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}