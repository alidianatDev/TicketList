import * as React from 'react';
import NextLink from 'next/link';
import style from './navbarStyle.module.scss';
import Image from "next/image";
import {useClientMediaQuery} from '@/libs/sizeDetector';

export const Header = () => {
    const isMobile = useClientMediaQuery('(max-width: 768px)');
    return (
        <nav className={style.nav}>
            <div className={'container'}>

                <NextLink href="/">
                    {!isMobile ?
                        <Image
                            src="logo.svg"
                            width={119}
                            height={19}
                            alt="هف هشتاد"
                            priority={true}
                        />
                        :
                        <Image
                            src="logo-mob.svg"
                            width={81}
                            height={15}
                            alt="هف هشتاد"
                            priority={true}
                        />
                    }
                </NextLink>
            </div>
        </nav>
    )
}