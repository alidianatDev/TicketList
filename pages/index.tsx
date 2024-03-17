import * as React from 'react';
import TicketList from "@/components/pagesComponents/ticketListComp/ticketList";
import Head from 'next/head';

const MainPage = () => {
    return (
        <>
            <Head>
                <title>هف هشتاد | خرید بلیط هواپیما</title>
            </Head>
            <TicketList/>
        </>
    )
}
export default MainPage;