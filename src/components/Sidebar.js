import React from 'react'

export default function Sidebar(props) {

    const author = props.writtenby

    return (
        <div className="sidebar">
            <p>Sidebar</p>
            <p>Autor: {author}</p>
        </div>
    )
}