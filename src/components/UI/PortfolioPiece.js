import React from 'react'
import classes from './PortfolioPiece.module.scss'

const PortfolioPiece = ({ title, subtitle, description, features, github, link, gif }) => {
    return (
        <div className={classes.piece}>
            <div className={classes.text}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{description}</p>
                <p>Features:</p>
                <ul>
                    {/* {props.features.map((item) => {
                        ;<li>{item}</li>
                    })} */}
                </ul>
                <div className={classes.links}>
                    <div>GitHub Link</div>
                    <div>Live Site Link</div>
                </div>
            </div>
            <div className={classes.gif}>
                <img src="https://media.giphy.com/media/LkxiDPFHOpfQrDi2xH/giphy.gif" alt="" />
                <div className={classes.gifText}>Hover for preview (HAND)</div>
            </div>
        </div>
    )
}

export default PortfolioPiece
