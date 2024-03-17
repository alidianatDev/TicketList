import * as React from 'react';
import {connect} from 'react-redux';
import {useEffect, useState} from "react";
import {TicketAccordion} from "@/components/pagesComponents/ticketListComp/ticketAccordion";
import {TicketDetails} from "../ticketDetails";
import {getAllTickets} from '@/stateManagement/actions/ticketActions';
import {AlertMessage} from "@/components/common/alertMessage";
import {LoadingCircle} from "@/components/common/loadingCircle";
import style from './ticketListStyle.module.scss'
import Head from "next/head";

const TicketList = (props: any) => {
    const ticketData = props.tickets;
    const isLoading = props.isLoading;
    const errorMessage = props.errorMessage;

    // Ticket Search
    const [searchItem, setSearchItem] = useState(ticketData);
    const [searchError, setError] = useState('');
    const handleInputChange = (e: any) => {
        const searchValue = e.target.value;
        const filtered = ticketData.filter((data: any) => data.airline.name.includes(searchValue));
        setSearchItem(filtered);
        if (!filtered.length) {
            setError('بلیط مورد نظر شما یافت نشد.');
        } else {
            setError('');
        }
    }

    useEffect(() => {
        props.getAll();
    }, []);

    useEffect(() => {
        setSearchItem(ticketData);
    }, [ticketData]);

    return (
        <>
            <Head>
                <title>هف هشتاد | خرید بلیط هواپیما</title>
            </Head>


        {/* Search */}
            <input
                type="text"
                onChange={handleInputChange}
                placeholder='جستجوی بلیط'
                className={style.inputSearch}
            />

        {/* Errors */}
        {searchError && <AlertMessage type={'error'} message={searchError}/>}
            {errorMessage && <AlertMessage type={'error'} message={'خطا در دریافت اطلاعات'}/>}

            {/* Tickets List*/}
            {isLoading ?
                <LoadingCircle/>
                :
                <>
                    {searchItem && searchItem.map((item: any, key: number) => (
                            <TicketAccordion
                                key={key}
                                title={item.flightClass}
                                AccId={`${key} + 1`}
                                data={item}
                            >
                                <TicketDetails data={item}/>
                            </TicketAccordion>
                        )
                    )}
                </>
            }
        </>
    )
}


// Redux
const mapStateToProps = (state: any) => {
    return {
        tickets: state.TicketState.ticketsData,
        isLoading: state.TicketState.isLoading,
        errorMessage: state.TicketState.errorMessage,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getAll: () => getAllTickets(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TicketList);

// export default TicketList;