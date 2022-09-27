import About from './components/About'
import Experience from './components/Experience'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'
import classes from './App.module.scss'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect, useState } from 'react'

import treeline from './images/backgrounds/treeline.png'
import ghibliTree1 from './images/ghibliTree1.jpeg'
import ContactForm from './components/ContactForm'

function App() {
    const [headerRef, headerInView] = useInView({ threshold: 0.4 })
    const [headerClass, setHeaderClass] = useState('fadeIn')

    const [aboutRef, aboutInView] = useInView({ threshold: 0.1 })
    const [aboutClass, setAboutClass] = useState('fadeIn')

    const [skillsRef, skillsInView] = useInView({ threshold: 0.24 })
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
        return setAboutClass('fadeIn')
    }
    const checkSkillsClasses = () => {
        if (aboutInView) {
            return setSkillsClass('fadeOutDown')
        } else if (portfolioInView) {
            return setSkillsClass('fadeOutUp')
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
    }, [headerInView, aboutInView, portfolioInView, skillsInView, experienceInView, contactInView])

    return (
        <motion.div className="app" animate={animation}>
            <Navbar />
            <div id="header" className={classes.backgroundImg}>
                {!headerInView && !experienceInView && !skillsInView ? (
                    <img src={treeline} alt="treeline"></img>
                ) : (
                    ''
                )}
                {experienceInView && <img src={ghibliTree1} alt="treeline"></img>}
            </div>

            <div id="header" className={headerClass} ref={headerRef}>
                <Header fadeIn={headerInView} />
            </div>
            <div id="about" className={aboutClass} ref={aboutRef}>
                <About />
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
