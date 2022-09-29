import { useInView } from 'react-intersection-observer'
import React, { useEffect, useState } from 'react'

import Header from './components/Header'
import Navbar from './components/Navbar'

const About = React.lazy(() => import('./components/About'))
const Skills = React.lazy(() => import('./components/Skills'))
const Experience = React.lazy(() => import('./components/Experience'))
const ContactForm = React.lazy(() => import('./components/ContactForm'))
const Portfolio = React.lazy(() => import('./components/Portfolio'))

function App() {
    const [headerRef, headerInView] = useInView({ threshold: 0.4 })
    const [headerTopRef, headerTopInView] = useInView({ threshold: 0.4 })
    const [headerClass, setHeaderClass] = useState('fadeIn')

    const [aboutRef, aboutInView] = useInView({ threshold: 0.2 })
    const [aboutBottomRef, aboutBottomInView] = useInView({ threshold: 0.2 })

    const [aboutClass, setAboutClass] = useState('zero')

    const [skillsRef, skillsInView] = useInView({ threshold: 0.2 })
    const [skillsBottomRef, skillsBottomInView] = useInView({ threshold: 0.2 })
    const [skillsClass, setSkillsClass] = useState('zero')

    const [portfolioRef, portfolioInView] = useInView({ threshold: 0.4 })
    const [portfolioBottomRef, portfolioBottomInView] = useInView({ threshold: 0.2 })
    const [portfolioClass, setPortfolioClass] = useState('zero')

    const [experienceRef, experienceInView] = useInView({ threshold: 0.3 })
    const [experienceBottomRef, experienceBottomInView] = useInView({ threshold: 0.2 })
    const [experienceClass, setExperienceClass] = useState('zero')

    const [contactRef, contactInView] = useInView({ threshold: 0.4 })
    const [contactClass, setContactClass] = useState('zero')

    const checkHeaderClasses = () => {
        if (!headerInView) {
            return setHeaderClass('fadeOut')
        }
        return setHeaderClass('fadeIn')
    }
    const checkAboutClasses = () => {
        if (headerTopInView) {
            return setAboutClass('zero')
        } else if (headerInView) {
            return setAboutClass('fadeOut')
        } else if (skillsInView) {
            return setAboutClass('fadeOut')
        } else if (aboutInView) {
            return setAboutClass('fadeIn')
        }
    }
    const checkSkillsClasses = () => {
        if (headerInView) {
            return setSkillsClass('zero')
        } else if (skillsInView) {
            return setSkillsClass('fadeIn')
        } else if (aboutBottomInView || portfolioInView) {
            return setSkillsClass('fadeOut')
        }
    }
    const checkPortfolioClasses = () => {
        if (headerInView) {
            return setPortfolioClass('zero')
        } else if (portfolioInView) {
            return setPortfolioClass('fadeIn')
        } else if (skillsBottomInView || experienceInView) {
            return setPortfolioClass('fadeOut')
        }
    }
    const checkExperienceClass = () => {
        if (headerInView) {
            return setExperienceClass('zero')
        } else if (experienceInView) {
            return setExperienceClass('fadeIn')
        } else if (portfolioBottomInView || contactInView) {
            setExperienceClass('fadeOut')
        }
    }
    const checkContactClass = () => {
        if (experienceInView) {
            return setContactClass('fadeOutDown')
        } else if (contactInView) {
            return setContactClass('fadeIn')
        } else return
    }

    useEffect(() => {
        checkAboutClasses()
        checkHeaderClasses()
        checkSkillsClasses()
        checkPortfolioClasses()
        checkExperienceClass()
        checkContactClass()
    }, [headerInView, aboutInView, portfolioInView, skillsInView, experienceInView, contactInView])

    return (
        <div className="app">
            <Navbar />
            <div ref={headerTopRef}></div>
            <div id="header" className={headerClass} ref={headerRef}>
                <Header fadeIn={headerInView} />
            </div>
            <div id="about" className={aboutClass} ref={aboutRef}>
                <About fadeDown={headerInView} fadeUp={skillsInView} />
            </div>
            <div ref={aboutBottomRef}></div>
            <div id="skills" className={skillsClass} ref={skillsRef}>
                <Skills fadeIn={skillsInView} />
            </div>
            <div ref={skillsBottomRef}></div>
            <div id="portfolio" className={portfolioClass} ref={portfolioRef}>
                <Portfolio />
            </div>
            <div ref={portfolioBottomRef}></div>
            <div id="experience" className={experienceClass} ref={experienceRef}>
                <Experience />
            </div>
            <div ref={experienceBottomRef}></div>
            <div id="contact" className={contactClass} ref={contactRef}>
                <ContactForm />
            </div>
        </div>
    )
}

export default App
