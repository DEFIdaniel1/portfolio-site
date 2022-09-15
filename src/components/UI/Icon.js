import React from 'react'
import classes from './Icon.module.scss'

const Icon = ({ name, image }) => {
    return (
        <div className={classes.icon}>
            <div className={classes.name}>{name}</div>
            <img src={image} alt={`${name} icon`} />
        </div>
    )
}

export default Icon
