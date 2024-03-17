import * as React from 'react';
import type {AppProps} from 'next/app';
import MainLayout from '@/components/layout/mainLayout';
import {Provider} from 'react-redux';
import store from '@/stateManagement/store';
import '@/styles/global.scss';

export default function App({Component, pageProps}: AppProps) {
    return (
        <Provider store={store}>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </Provider>
    )
}
