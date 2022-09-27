import classes from './About.module.scss'
import { motion } from 'framer-motion'

import AboutSection from './UI/AboutSection'
import phones from '../images/phones.png'
import daniel from '../images/danielCross.png'
import binaryBitcoin from '../images/binaryBitcoin.png'
import robot from '../images/robot.png'

const About = ({ fadeUp }) => {
    const rightAnimate = {
        offScreen: {
            x: 500,
            opacity: 0,
            transition: { duration: 0.9, type: 'spring', bounce: 0.2 },
        },
        onScreen: { x: 0, opacity: 1, transition: { duration: 1.6, type: 'spring', bounce: 0.2 } },
    }
    const leftAnimate = {
        offScreen: {
            x: -500,
            opacity: 0,
            transition: { duration: 1.2, type: 'spring', bounce: 0.2 },
        },
        onScreen: { x: 0, opacity: 1, transition: { duration: 1.6, type: 'spring', bounce: 0.2 } },
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
                <motion.div className={classes.leftCol} variants={leftAnimate}>
                    <div className={classes.danielTitle}>
                        I love building intuitive, beautiful applications.
                    </div>
                    <div className="line" />
                </motion.div>
                {/* RIGHT SIDE */}
                {
                    <motion.div className={classes.rightCol} variants={rightAnimate}>
                        <img src={daniel} alt="daniel pisterzi" />
                    </motion.div>
                }
            </motion.div>
            {/* SECTION 2 - UI */}
            <motion.div
                initial={'offScreen'}
                whileInView={'onScreen'}
                viewport={{ once: true, amount: 0.4 }}
                variants={rightAnimate}
            >
                <AboutSection
                    type="phone"
                    title="A Little UX/UI Obsessed"
                    text={'A pixel perfectionist. I love well-designed UIs that work.'}
                    image={phones}
                    alt={'phone'}
                />
            </motion.div>
            {/* SECTION 3 - Blockchain */}
            <motion.div
                initial={'offScreen'}
                whileInView={'onScreen'}
                viewport={{ once: true, amount: 0.5 }}
                variants={leftAnimate}
            >
                <AboutSection
                    type="bitcoin"
                    title="Immersed in Blockchain"
                    text={
                        'From building smart contracts, to connecting front-ends. I love being at the frontier.'
                    }
                    image={binaryBitcoin}
                    alt={'bitcoin from ones and zeroes'}
                />
            </motion.div>
            {/* SECTION 4 - Future */}
            <motion.div
                initial={'offScreen'}
                whileInView={'onScreen'}
                viewport={{ once: true, amount: 0.2 }}
                variants={rightAnimate}
                className={fadeUp && classes.aboutOut}
            >
                <AboutSection
                    type="future"
                    title="Let's Build the Future"
                    text={
                        "Creating well-designed UIs for next generation apps. I'm excited for where web applications can go."
                    }
                    image={robot}
                    alt={'space suit'}
                />
            </motion.div>
        </motion.div>
    )
}

export default About
