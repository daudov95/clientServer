import React from 'react'

const Tab = ({children, active, tab, ...props}) => {
    return (
        <>
            {
                tab && tab === active && children
            }
        </>
    )
}

export default Tab