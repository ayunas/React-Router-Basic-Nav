import React from 'react'

export default function Test(props) {
    return (
        <div>
            Test Component
            {props.match.params.name}
        </div>
    )
}
