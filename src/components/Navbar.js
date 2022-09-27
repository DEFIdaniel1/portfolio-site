import { useState } from 'react'
import './Navbar.scss'

function Navbar() {
    const [openNav, setOpenNav] = useState(false)
    const openNavHandler = () => {
        setOpenNav(!openNav)
    }

    return (
        <div className={!openNav ? 'navbar navbar__closed' : 'navbar navbar__open'}>
            <div
                className={!openNav ? 'navBurger navBurger__closed' : 'navBurger navBurger__open'}
                onClick={openNavHandler}
            >
                <div></div>
                <div></div>
                <div></div>
            </div>
            <nav className={!openNav ? 'navItems navItems__closed' : 'navItems navItems__open'}>
                <div className="navItems__item" onClick={openNavHandler}>
                    <a href="#about">About Me</a>
                </div>
                <div className="navItems__item" onClick={openNavHandler}>
                    <a href="#skills">Skills</a>
                </div>
                <div className="navItems__item" onClick={openNavHandler}>
                    <a href="#portfolio">Portfolio</a>
                </div>
                <div className="navItems__item" onClick={openNavHandler}>
                    <a href="#experience">Experience</a>
                </div>
                <div className="navItems__item" onClick={openNavHandler}>
                    <a href="#contact">Contact Me</a>
                </div>
            </nav>
        </div>
    )
}
export default Navbar
