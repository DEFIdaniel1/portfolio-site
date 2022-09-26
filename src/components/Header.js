import classes from './Header.module.scss'
import treeBackground from '../video/treeBackground.mp4'

const Header = ({ fadeIn }) => {
    return (
        <div className={classes.container}>
            <div className={classes.textbox}>
                <h1>Daniel Pisterzi.</h1>
                <div className="line" />
                <div className={classes.textbox__inner}>
                    <h2>Web Developer.</h2>
                    <h2>Blockhain Developer.</h2>
                </div>
            </div>
            <div className={fadeIn ? classes.headerFadeIn : classes.headerFadeOut}>
                <video src={treeBackground} type="video/mp4" autoPlay muted loop />
            </div>
        </div>
    )
}

export default Header
