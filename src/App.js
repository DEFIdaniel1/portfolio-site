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

function App() {
    const [headerRef, headerInView] = useInView({ threshold: 0.4 })
    const [headerClass, setHeaderClass] = useState('fadeIn')

    const [aboutRef, aboutInView] = useInView({ threshold: 0.2 })
    const [aboutClass, setAboutClass] = useState('fadeIn')

    const [skillsRef, skillsInView] = useInView({ threshold: 0.24 })
    const [skillsClass, setSkillsClass] = useState('fadeIn')

    const [portfolioRef, portfolioInView] = useInView({ threshold: 0.4 })
    const [portfolioClass, setPortfolioClass] = useState('fadeIn')

    const [experienceRef, experienceInView] = useInView({ threshold: 0.3 })
    const [experienceClass, setExperienceClass] = useState('fadeIn')

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
        }
        return setExperienceClass('fadeIn')
    }

    const animation = useAnimation()
    useEffect(() => {
        checkAboutClasses()
        checkHeaderClasses()
        checkSkillsClasses()
        checkPortfolioClasses()
        checkExperienceClass()
    }, [headerInView, aboutInView, portfolioInView, skillsInView, experienceInView])

    return (
        <motion.div className="app" animate={animation}>
            <Navbar />(
            <div className={classes.backgroundImg}>
                {!headerInView && !experienceInView && !skillsInView ? (
                    <img src={treeline} alt="treeline"></img>
                ) : (
                    ''
                )}
                {experienceInView && <img src={ghibliTree1} alt="treeline"></img>}
            </div>
            )
            <div className={headerClass} ref={headerRef}>
                <Header fadeIn={headerInView} />
            </div>
            <div className={aboutClass} ref={aboutRef}>
                <About />
            </div>
            <div className={skillsClass} ref={skillsRef}>
                <Skills fadeIn={skillsInView} />
            </div>
            <div className={portfolioClass} ref={portfolioRef}>
                <Portfolio />
            </div>
            <div className={experienceClass} ref={experienceRef}>
                <Experience />
            </div>
        </motion.div>
    )
}

export default App
