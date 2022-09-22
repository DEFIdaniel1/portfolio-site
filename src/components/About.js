import { useEffect, useState } from 'react'
import classes from './About.module.scss'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

import AboutSection from './UI/AboutSection'
import spaceSuit from '../images/spaceSuit.png'
import silver from '../images/silver.png'
import phones from '../images/phones.png'
import daniel from '../images/danielCross.png'
import binaryBitcoin from '../images/binaryBitcoin.png'
import robot from '../images/robot.png'

const About = () => {
    // const [visible, setVisible] = useState(false)
    const [danielRef, danielInView] = useInView({ threshold: 0.05 })
    const [uiRef, uiInView] = useInView({ threshold: 1 })

    const rightAnimate = {
        offScreen: { x: 500, opacity: 0, transition: { duration: 0.9 } },
        onScreen: { x: 0, opacity: 1, transition: { duration: 0.9 } },
    }
    const leftAnimate = {
        offScreen: { x: -500, opacity: 0, transition: { duration: 2 } },
        onScreen: { x: 0, opacity: 1, transition: { duration: 2 } },
    }
    const bottomAnimate = {
        offScreen: { y: 300, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: { duration: 1 } },
    }
    const topAnimate = {
        offScreen: { y: -500, opacity: 0 },
        onScreen: { y: 0, opacity: 1, transition: { duration: 1, type: 'spring', bounce: 0.2 } },
    }

    return (
        <motion.div className={classes.about}>
            {/* SECTION 1 - DANIEL */}
            <motion.div
                className={classes.container}
                initial={'offScreen'}
                whileInView={'onScreen'}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ staggerChildren: 0.2 }}
            >
                {/* LEFT SIDE */}
                <motion.div key="aboutLeft" className={classes.leftCol} variants={leftAnimate}>
                    <h1>About me</h1>
                    <div className="line" />
                    <p>I love building intuitive, beautiful applications.</p>
                    <p>
                        My background isn't your typical developer path. And I think that's a
                        <span className={classes.txtHighlight}> strength</span>.
                    </p>
                    <p>
                        My experience ranges from{' '}
                        <span className={classes.txtHighlight}> managing teams</span> and non-profit
                        programs to ensuring millions of dollars of ARR renewed for software
                        companies.
                    </p>
                    <p>
                        Most recently, I started and sold an{' '}
                        <span className={classes.txtHighlight}> eCommerce business</span>.
                        Responsible for product development, logistics, marketing, and of course,
                        our website.
                    </p>
                    <p>
                        Next step? After building out websites, I was hooked. I dove deep into CSS,
                        Javascript, React, and Solidity rabbit holes.
                    </p>
                    <p>I'm looking to work with companies building the future...</p>
                </motion.div>
                {/* RIGHT SIDE */}
                {
                    <motion.div className={classes.rightCol} variants={rightAnimate}>
                        <img src={daniel} alt="daniel pisterzi" />
                    </motion.div>
                }
            </motion.div>

            <motion.div
                className={classes.container}
                initial={'offScreen'}
                whileInView={'onScreen'}
                viewport={{ once: true, amount: 0.01 }}
                variants={bottomAnimate}
            >
                <AboutSection
                    type="phone"
                    title="A Little UX/UI Obsessed"
                    text={
                        <div>
                            I believe in crafting a user experience that's easy for everyone. Design
                            is my passion - crafting dynamic, beautiful applications. <br />
                            <br />
                            <div>The mission is the balance between.</div>
                        </div>
                    }
                    image={phones}
                    alt={'phone'}
                />
            </motion.div>

            <motion.div
                initial={'offScreen'}
                whileInView={'onScreen'}
                viewport={{ once: true, amount: 0.01 }}
                variants={bottomAnimate}
            >
                <AboutSection
                    type="bitcoin"
                    title="Immersed in Blockchain"
                    text={
                        <div>
                            I believe in crafting a user experience that's easy for everyone. Design
                            is my passion - crafting dynamic, beautiful applications. <br />
                            <br />
                            <div>The mission is the balance between.</div>
                        </div>
                    }
                    image={binaryBitcoin}
                    alt={'bitcoin from ones and zeroes'}
                />
            </motion.div>

            <motion.div
                initial={'offScreen'}
                whileInView={'onScreen'}
                viewport={{ once: true, amount: 0.01 }}
                variants={bottomAnimate}
            >
                <AboutSection
                    type="future"
                    title="Building the Future"
                    text={
                        <div>
                            Blockchain tech with a great UX is still a distant dream. I'm excited to
                            be working on that future - building out a great UX/UI experience for
                            the next generation of blockchain dApps.
                        </div>
                    }
                    image={robot}
                    alt={'space suit'}
                />
            </motion.div>
        </motion.div>
    )
}

export default About
