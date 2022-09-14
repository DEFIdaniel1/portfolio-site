import React from 'react'
import classes from './Header.module.scss'

import headerImg from '../images/3dblue.jpg'
import wordLights from '../images/wordlights.jpg'
import puddle from '../images/puddle.jpg'
import purpleLines from '../images/purpleLines.jpg'
import neonBuilding from '../images/neonBuilding.jpg'
import headerVid from '../video/inkdrops.mp4'
import headerVid2 from '../video/inkswipe.mp4'
import headerVid3 from '../video/inkdrops2.mp4'

const Header = () => {
    return (
        <div className={classes.container}>
            <div className={classes.textbox}>
                <h1>I'm Daniel.</h1>
                <h2>A Web Developer.</h2>
                <h2>A Blockhain Developer.</h2>
                <h2>And UI Obsessed...</h2>
            </div>
            <img src={neonBuilding} alt="" />
            <video src={headerVid3} type="video/mp4" autoPlay muted loop></video>
            {/* <div className={classes.background}>hello</div> */}
        </div>
    )
}

export default Header
