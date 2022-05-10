import React from 'react'

export const withWrap = (Component) => {
    return function (props) {
        return (
            <div className="full-screen">
                <Component {...props} />
            </div>
        )
    }
}
