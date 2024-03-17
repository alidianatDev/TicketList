import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {tabStyle} from './tabs.style';
import style from './ticketDetailsStyle.module.scss';
import {FlightContent} from "@/components/pagesComponents/ticketListComp/ticketDetails/flightContent";
import {Rules} from "@/components/pagesComponents/ticketListComp/ticketDetails/rules";
import {currencyFormatter} from "@/libs/currencyFormatter";

interface ITicketDetails {
    data: any;
}

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

// Rules Data
const refundRules = {
    'warning': [
        {'text': 'مسافرینی که قصد سفر به کشور مالزی را دارند، حتما می‌بایست بلیط رفت با ماکزیمم برگشت 45 روز به همراه داشته باشند، در غیر اینصورت از پذیرش مسافر در فرودگاه ممانعت به عمل خواهد آمد.'}
    ],
    'rules': [
        {'text': 'حضور مسافرین در فرودگاه ۴ ساعت قبل از پرواز ضروری میباشد، با توجه به رعایت کلیه پروتکل های بهداشتی در فرودگاه، کانترها از ۴ ساعت قبل پرواز باز خواهند بود و سیستمهای پذیرش مسافر طبق قوانین بین المللی ۱ ساعت قبل پرواز بصورت خودکار بسته شده ، بنابراین پس از آن از پذیرفتن مسافرین حتی در صورت حضور در ترمینال معذور خواهیم بود.'},
        {'text': 'کلیه مسافران پروازهای ورودی به ایران ملزم به دریافت گواهی سلامت و تست منفی کووید ۱۹ (PCR) به زبان انگلیسی مورد تایید وزارت بهداشت کشور مبدأ بوده، که حداکثر ۹۶ ساعت قبل از لحظه ورود به کشور ایران صادر شده و مسافر موظف است گواهی سلامت رو به نماینده بهداشت مرزی مستقر در فرودگاه تحویل دهد.مقررات فوق شامل افراد دارای کارت واکسن نیز میگردد .'},
        {'text': 'با توجه به شیوع ویروس کرونا و شرایط اعلامی تمامی ایرلاینها تا اطلاع ثانوی، مسافرانی که اقدام به سفر به کشورهای مختلف از ایران با ترانزیت یا بدون ترانزیت مینمایند، فقط با داشتن کارت اقامت یا پاسپورت همان کشور پذیرش میشوند و دارندگان انواع ویزا نیاز به بررسی مدارک و دریافت اوکی تو برد از سمت ایرلاین را دارند.'},
    ]
}

export const TicketDetails = ({data}: ITicketDetails) => {
    // Tab
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    function math(num1: number, num2: number) {
        return num1 * num2;
    }

    return (
        <div className={style.detailsHolder}>
            {/* Tab Column*/}
            <div className={style.tabCol}>
                <Tabs sx={tabStyle.root} value={value} onChange={handleChange} aria-label="ticket details">
                    <Tab label={<span className="tabLabel">جزییات پرواز</span>} {...a11yProps(0)}/>
                    <Tab label={<span className="tabLabel">قوانین استرداد</span>}{...a11yProps(1)} />
                </Tabs>
                <CustomTabPanel value={value} index={0}>
                    <FlightContent data={data}/>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Rules data={refundRules}/>
                </CustomTabPanel>
            </div>

            {/* Price Column*/}
            <div className={style.priceCol}>
                <div className={style.head}>جزییات قیمت</div>
                <div className={style.body}>
                    <div className={style.row}>
                        <div className={style.title}>بزرگسال ( ۱۲ سال به بالا )</div>
                        <div className={style.price}>
                            <span className={style.count}>x{data.remainingSeats}</span>
                            <span className={style.num}>{currencyFormatter(data.price)}</span>
                            <span className={style.currency}>ریال</span>
                        </div>
                    </div>
                    <div className={`${style.row} ${style.totalRow}`}>
                        <div className={style.title}>مجموع قیمت رفت و برگشت</div>
                        <div className={style.price}>
                            <span
                                className={style.num}>{currencyFormatter(math(data.price, data.remainingSeats))}</span>
                            <span className={style.currency}>ریال</span>
                        </div>
                    </div>

                    <button type="button" className={style.btn}>انتخاب بلیط و افزودن مسافر</button>
                </div>
            </div>
        </div>
    )
}