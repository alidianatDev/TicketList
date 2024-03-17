import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import {AccordionProps} from '@mui/material';
import {style} from './accordion.style';
import {TicketRows} from "@/components/pagesComponents/ticketListComp/ticketRows";
import {useClientMediaQuery} from "@/libs/sizeDetector";

interface ITicketAccordion extends AccordionProps {
    AccId?: any;
    title?: string;
    data?: any;
    children: any;
    otherClass?: string;
}

export const TicketAccordion = ({
                                    AccId,
                                    title,
                                    data,
                                    children,
                                    otherClass,
                                    ...rest
                                }: ITicketAccordion) => {
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };
    const isMobile = useClientMediaQuery('(max-width: 768px)');

    return (
        <div>
            <Accordion
                sx={style.root}
                expanded={expanded === AccId}
                onChange={handleChange(AccId)}
                {...rest}
                disabled={isMobile}>
                <AccordionSummary
                    aria-controls={AccId + '-content'}
                    id={AccId + '-header'}
                >
                    <TicketRows data={data} isOpen={expanded}/>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
        </div>
    )
}