import classes from './App.module.scss'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import Header from './components/Header'
import Navbar from './components/Navbar'
import treeBackgroundLOW from './video/treeBackgroundLOW.mp4'
import treeline from './images/backgrounds/treeline.png'
import ghibliTree1 from './images/ghibliTree1.jpeg'

const About = React.lazy(() => import('./components/About'))
const Skills = React.lazy(() => import('./components/Skills'))
const Experience = React.lazy(() => import('./components/Experience'))
const ContactForm = React.lazy(() => import('./components/ContactForm'))
const Portfolio = React.lazy(() => import('./components/Portfolio'))

function App() {
    const [headerRef, headerInView] = useInView({ threshold: 0.4 })
    const [headerClass, setHeaderClass] = useState('fadeIn')

    const [aboutRef, aboutInView] = useInView({ threshold: 0.2 })
    const [aboutClass, setAboutClass] = useState('fadeIn')

    const [skillsRef, skillsInView] = useInView({ threshold: 0.3 })
    const [skillsClass, setSkillsClass] = useState('fadeIn')

    const [portfolioRef, portfolioInView] = useInView({ threshold: 0.4 })
    const [portfolioClass, setPortfolioClass] = useState('fadeIn')

    const [experienceRef, experienceInView] = useInView({ threshold: 0.3 })
    const [experienceClass, setExperienceClass] = useState('fadeIn')

    const [contactRef, contactInView] = useInView({ threshold: 0.4 })
    const [contactClass, setContactClass] = useState('fadeIn')

    const checkHeaderClasses = () => {
        if (!headerInView) {
            return setHeaderClass('fadeOut')
        }
        return setHeaderClass('fadeIn')
    }
    const checkAboutClasses = () => {
        if (headerInView) {
            return setAboutClass('fadeOutDown')
        } else if (skillsInView) {
            return setAboutClass('fadeOutUp')
        }
        return setAboutClass('fadeInLeft')
    }
    const checkSkillsClasses = () => {
        if (aboutInView) {
            return setSkillsClass('fadeOut')
        } else if (portfolioInView) {
            return setSkillsClass('fadeOut')
        }
        return setSkillsClass('fadeIn')
    }
    const checkPortfolioClasses = () => {
        if (skillsInView) {
            return setPortfolioClass('fadeOutDown')
        } else if (experienceInView) {
            return setPortfolioClass('fadeOutUp')
        }
        return setPortfolioClass('fadeIn')
    }
    const checkExperienceClass = () => {
        if (portfolioInView) {
            return setExperienceClass('fadeOutDown')
        } else if (contactInView) {
            return setExperienceClass('fadeOutUp')
        }
        return setExperienceClass('fadeIn')
    }
    const checkContactClass = () => {
        if (experienceInView) {
            return setContactClass('fadeOutDown')
        }
        return setContactClass('fadeIn')
    }

    const animation = useAnimation()
    useEffect(() => {
        checkAboutClasses()
        checkHeaderClasses()
        checkSkillsClasses()
        checkPortfolioClasses()
        checkExperienceClass()
        checkContactClass()
        // console.log('about class ' + aboutClass)
    }, [headerInView, aboutInView, portfolioInView, skillsInView, experienceInView, contactInView])

    return (
        <motion.div className="app">
            <Navbar />
            <div className={headerInView ? 'headerVideo fadeIn' : 'headerVideo fadeOut'}>
                <video src={treeBackgroundLOW} type="video/mp4" autoPlay muted loop />
            </div>
            <div id="header" className={classes.backgroundImg}>
                {headerInView && (
                    <video src={treeBackgroundLOW} type="video/mp4" autoPlay muted loop />
                )}
                {experienceInView && <img src={ghibliTree1} alt="tree background"></img>}
                {!headerInView && !experienceInView && !skillsInView ? (
                    <img src={treeline} alt="treeline"></img>
                ) : (
                    ''
                )}
            </div>

            <div id="header" className={headerClass} ref={headerRef}>
                <Header fadeIn={headerInView} />
            </div>
            <div id="about" className={aboutClass} ref={aboutRef}>
                <About fadeDown={headerInView} fadeUp={skillsInView} />
            </div>
            <div id="skills" className={skillsClass} ref={skillsRef}>
                <Skills fadeIn={skillsInView} />
            </div>
            <div id="portfolio" className={portfolioClass} ref={portfolioRef}>
                <Portfolio />
            </div>
            <div id="experience" className={experienceClass} ref={experienceRef}>
                <Experience />
            </div>
            <div id="contact" className={contactClass} ref={contactRef}>
                <ContactForm />
            </div>
        </motion.div>
    )
}

export default App
