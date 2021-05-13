import React from 'react'
import Facebook from '../images/icons/facebook.svg'
import Insta from '../images/icons/instagram.svg'
import Pinterest from '../images/icons/pinterest.svg'

export default function Share(props) {

    return (
        <div className={props.class + "__share"}>
            <Facebook className={props.class + "__icon"}/>
            <Pinterest className={props.class + "__icon"}/>
            <Insta className={props.class + "__icon"}/>
        </div>
    )
}