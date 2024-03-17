export const style = {
    root: {
        p: 0,
        m: 0,
        mb: '12px !important',
        borderRadius: '12px !important',
        boxShadow: '0px 0px 6px 0px rgba(0, 0, 0, 0.15)',
        overflow: 'hidden',
        background: 'transparent !important',
        '.Mui-disabled': {
            opacity: '1 !important',
        },

        '.MuiAccordionSummary-root': {
            p: 0,
            m: 0,
            border: 'none',
            cursor: 'default !important',

            '&.Mui-expanded': {
                m: 0,
                background: '#F2F4F7',
            }
        },
        '.MuiAccordionSummary-content': {
            p: 0,
            m: 0,
            '&.Mui-expanded': {
                m: 0,
                background: '#F2F4F7',
            }
        },
        '.MuiAccordionDetails-root': {
            padding: '24px'
        }
    },

}