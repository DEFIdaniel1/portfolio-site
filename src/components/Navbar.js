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
            <nav className={!openNav ? 'nav nav__closed' : 'nav nav__open'}>
                <div className="nav__item" onClick={openNavHandler}>
                    About Me
                </div>
                <div className="nav__item" onClick={openNavHandler}>
                    Skills
                </div>
                <div className="nav__item" onClick={openNavHandler}>
                    Portfolio
                </div>
                <div className="nav__item" onClick={openNavHandler}>
                    Experience
                </div>
            </nav>
        </div>
    )
}
export default Navbar
