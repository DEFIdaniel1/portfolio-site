import classes from './About.module.scss'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

// import backgroundImg from '../images/backgrounds/treeline.png'

import AboutSection from './UI/AboutSection'
import phones from '../images/phones.png'
import daniel from '../images/danielCross.png'
import binaryBitcoin from '../images/binaryBitcoin.png'
import robot from '../images/robot.png'

const About = ({ fadeDown, fadeIn }) => {
    const [danielRef, danielInView] = useInView({ threshold: 0.1 })
    const [danielClass, setDanielClass] = useState('zero')

    const [uiRef, uiInView] = useInView({ threshold: 0.6 })
    const [uiClass, setUiClass] = useState('zero')

    const [bitcoinRef, bitcoinInView] = useInView({ threshold: 0.6 })
    const [bitcoinClass, setBitcoinClass] = useState('zero')

    const [futureRef, futureInView] = useInView({ threshold: 0.6 })
    const [futureClass, setFutureClass] = useState('zero')

    const checkDanielClass = () => {
        if (fadeDown) {
            return setDanielClass('fadeOutDown')
        }
        if (danielInView) {
            return setDanielClass('fadeInLeft')
        } else if (bitcoinInView) {
            return setDanielClass('fadeOutLeft')
        }
    }
    const checkUiClass = () => {
        if (uiInView) {
            return setUiClass('fadeInRight')
        }
        if (!uiInView) {
            return setUiClass('fadeOutLeft')
        }
        return setUiClass('fadeOutLeft')
    }
    const checkBitcoinClass = () => {
        if (bitcoinInView) {
            return setBitcoinClass('fadeInLeft')
        }
        if (!bitcoinInView) {
            return setBitcoinClass('fadeOutLeft')
        }
        return setBitcoinClass('fadeOutLeft')
    }
    const checkFutureClass = () => {
        if (futureInView) {
            return setFutureClass('fadeInLeft')
        }
        if (!futureInView) {
            return setFutureClass('fadeOutLeft')
        }
        return setFutureClass('fadeOutLeft')
    }

    useEffect(() => {
        checkDanielClass()
        checkUiClass()
        checkBitcoinClass()
        checkFutureClass()
        console.log(danielClass)
    }, [danielInView, uiInView, bitcoinInView, futureInView])

    return (
        <div className={classes.about}>
            {/* SECTION 1 - DANIEL */}
            <div className={`${classes.container} ${danielClass}`} ref={danielRef}>
                {/* LEFT SIDE */}
                <div className={classes.leftCol}>
                    <div className={classes.danielTitle}>
                        I love building intuitive, beautiful applications.
                    </div>
                    <div className="line" />
                </div>
                {/* RIGHT SIDE */}
                {
                    <div className={classes.rightCol}>
                        <img src={daniel} alt="daniel pisterzi" />
                    </div>
                }
            </div>
            {/* SECTION 2 - UI */}
            <div ref={uiRef} className={uiClass}>
                <AboutSection
                    type="phone"
                    title="A Little UX/UI Obsessed"
                    text={'A pixel perfectionist. I love well-designed UIs that work.'}
                    image={phones}
                    alt={'phone'}
                />
            </div>
            {/* SECTION 3 - Blockchain */}
            <div ref={bitcoinRef} className={bitcoinClass}>
                <AboutSection
                    type="bitcoin"
                    title="Immersed in Blockchain"
                    text={
                        'From building smart contracts, to connecting front-ends. I love being at the frontier.'
                    }
                    image={binaryBitcoin}
                    alt={'bitcoin from ones and zeroes'}
                />
            </div>
            {/* SECTION 4 - Future */}
            <div ref={futureRef} className={futureClass}>
                <AboutSection
                    type="future"
                    title="Let's Build the Future"
                    text={
                        "Creating well-designed UIs for next generation apps. I'm excited for where web applications can go."
                    }
                    image={robot}
                    alt={'space suit'}
                />
            </div>
        </div>
    )
}

export default About
