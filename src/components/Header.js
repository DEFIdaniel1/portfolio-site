import classes from './Header.module.scss'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
import wcLeavesLeft from '../images/wcLeavesLeft.png'
// import headerImg from '../images/3dblue.jpg'
// import wordLights from '../images/wordlights.jpg'
// import puddle from '../images/puddle.jpg'
// import purpleLines from '../images/purpleLines.jpg'
// import neonBuilding from '../images/neonBuilding.jpg'
// import sepiaPaper from '../images/sepiaPaper.jpg'
// import colorSmoke from '../images/colorSmoke.jpg'
// import explosion from '../images/explosion.jpg'
// import orangeBuilding from '../images/orangeBuilding.jpg'
// import headerVid from '../video/inkdrops.mp4'
// import headerVid2 from '../video/inkswipe.mp4'
// import headerVid3 from '../video/inkdrops2.mp4'
// import inkswipe3s from '../video/inkswipe3s.mp4'
// import lightbulb from '../video/lightbulb.mp4'
import treeBackground from '../video/treeBackground.mp4'

const Header = ({ fadeIn }) => {
    useEffect(() => {
        Aos.init({})
    }, [])
    return (
        <div className={classes.container}>
            <div className={classes.textbox}>
                {/* <img src={wcLeavesLeft} alt="" /> */}
                <h1>Daniel Pisterzi.</h1>
                <div className="line" />
                <div className={classes.textbox__inner}>
                    <h2>Web Developer.</h2>
                    <h2>Blockhain Developer.</h2>
                </div>
            </div>
            {/* BCK CLR + Particles */}
            <div className={fadeIn ? classes.headerFadeIn : classes.headerFadeOut}>
                <video src={treeBackground} type="video/mp4" autoPlay muted loop />
            </div>
            {/* {fadeOut && <div data-aos="fade-up" className={classes.box}></div>} */}
        </div>
    )
}

export default Header
