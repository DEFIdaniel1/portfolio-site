import classes from './Header.module.scss'

const Header = ({ fadeIn }) => {
    return (
        <div className={classes.container}>
            <div className={classes.btnDiv}>
                <a href="https://www.linkedin.com/in/danielpisterzi/">LinkedIn</a>
                <a href="https://www.github.com/DEFIdaniel1/">GitHub</a>
            </div>
            <div className={classes.textbox}>
                <h1>Daniel Pisterzi.</h1>
                <div className="line" />
                <div className={classes.textbox__inner}>
                    <h2>Web Developer.</h2>
                    <h2>Blockchain Developer.</h2>
                </div>
            </div>
        </div>
    )
}

export default Header
