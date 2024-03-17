export const tabStyle = {
    root: {
        width: 1,
        mb: '12px',
        minHeight: '0',
        borderBottom: 'solid 1px #BCBEBE',

        '.MuiTab-root': {
            display: 'block',
            minHeight: '0',
            padding: '6px 40px 12px',

            '.tabLabel': {
                fontFamily: 'iransans-fnum',
                fontSize: '16px',
                color: '#121516',
            },

            '&.Mui-selected': {
                '.tabLabel': {
                    fontFamily: 'iransans-fnum-medium',
                    color: '#065BAA',
                }
            }
        },
        '.MuiTabs-indicator': {
            height: '4px',
            background: '#065BAA',
        }

    },

}