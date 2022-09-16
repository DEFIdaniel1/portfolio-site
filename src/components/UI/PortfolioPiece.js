import React from 'react'
import classes from './PortfolioPiece.module.scss'

const PortfolioPiece = ({ title, subtitle, description, features, github, link, gif }) => {
    let featureList = []
    const featureItems = () => {
        for (let i = 0; i < features.length; i++) {
            featureList.push(<li>{features[i]}</li>)
        }
        return featureList
    }
    featureItems()

    return (
        <div className={classes.piece}>
            <div className={classes.text}>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>{description}</p>
                <p>Features:</p>
                <ul>{featureList}</ul>
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
