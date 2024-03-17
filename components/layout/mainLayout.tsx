import * as React from 'react';
import {ReactNode} from 'react';
import {Header} from '../navbar';

interface IMainLayout {
    children: ReactNode;
}

export default function MainLayout({children}: IMainLayout) {
    return (
        <>
            <Header/>
            <div className='innerContainer'>
                {children}
            </div>
        </>
    )
}
