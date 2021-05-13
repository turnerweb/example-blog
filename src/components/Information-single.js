import React from 'react'

export default function Info(props) {

    return (
        <div className="infos__single">
            <h3 className="infos__fieldtitle">{props.title}</h3>
            <p className="infos__fieldtext">{props.text}</p>
            <p className="infos__fieldtext">{props.text2}</p>
            <p className="infos__fieldtext">{props.text3}</p>
        </div>
    )
}