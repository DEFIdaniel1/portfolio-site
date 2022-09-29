import { useInView } from 'react-intersection-observer'
import React, { useEffect, useState } from 'react'

import Header from './components/Header'
import Navbar from './components/Navbar'

import tree from './images/tree.jpg'
import tree2 from './images/tree2.jpg'
import tree3 from './images/tree3.jpg'
import tree5 from './images/tree5.jpg'
import tree6 from './images/tree6.jpg'
import tree7 from './images/tree7.jpg'
import tree8 from './images/tree8.jpg'
import tree9 from './images/tree9.jpg'
import tree10 from './images/tree10.jpg'
import tree11 from './images/tree11.jpg'

const About = React.lazy(() => import('./components/About'))
const Skills = React.lazy(() => import('./components/Skills'))
const Experience = React.lazy(() => import('./components/Experience'))
const ContactForm = React.lazy(() => import('./components/ContactForm'))
const Portfolio = React.lazy(() => import('./components/Portfolio'))

function App() {
    const [headerRef, headerInView] = useInView({ threshold: 0.01 })
    const [headerTopRef, headerTopInView] = useInView({ threshold: 0.7 })
    const [headerClass, setHeaderClass] = useState('fadeIn')

    const [aboutRef, aboutInView] = useInView({ threshold: 0.2 })
    const [aboutBottomRef, aboutBottomInView] = useInView({ threshold: 0.2 })

    const [aboutClass, setAboutClass] = useState('zero')

    const [skillsRef, skillsInView] = useInView({ threshold: 0.1 })
    const [skillsBottomRef, skillsBottomInView] = useInView({ threshold: 0.4 })
    const [skillsClass, setSkillsClass] = useState('zero')

    const [portfolioRef, portfolioInView] = useInView({ threshold: 0.3 })
    const [portfolioBottomRef, portfolioBottomInView] = useInView({ threshold: 0.2 })
    const [portfolioClass, setPortfolioClass] = useState('zero')

    const [experienceRef, experienceInView] = useInView({ threshold: 0.1 })
    const [experienceBottomRef, experienceBottomInView] = useInView({ threshold: 0.9 })
    const [experienceClass, setExperienceClass] = useState('zero')

    const [contactRef, contactInView] = useInView({ threshold: 0.3 })
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
        } else if (headerInView && !aboutInView) {
            return setAboutClass('fadeOut')
        } else if (skillsInView) {
            return setAboutClass('fadeOut')
        } else if (aboutInView) {
            return setAboutClass('fadeIn')
        } else {
            setAboutClass('zero')
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
        if (contactInView) {
            return setContactClass('fadeIn')
        } else if (experienceBottomInView) {
            return setContactClass('fadeOut')
        } else return
    }

    useEffect(() => {
        checkAboutClasses()
        checkHeaderClasses()
        checkSkillsClasses()
        checkPortfolioClasses()
        checkExperienceClass()
        checkContactClass()
        console.log('\n' + headerTopInView)
        console.log(headerInView + '\n')
    }, [headerInView, aboutInView, portfolioInView, skillsInView, experienceInView, contactInView])

    return (
        <div className="app">
            <div className="backgroundImg">
                {<img className={headerClass} src={tree7} alt="" />}
                {<img className={aboutClass} src={tree6} alt="" />}
                {<img className={skillsClass} src={tree} alt="" />}
                {<img className={portfolioClass} src={tree5} alt="" />}
                {<img className={experienceClass} src={tree8} alt="" />}
                {<img className={contactClass} src={tree10} alt="" />}
            </div>
            <Navbar />
            <div ref={headerTopRef}></div>
            <div id="header" className={headerClass} ref={headerRef}>
                <Header fadeIn={headerInView} />
            </div>
            <div id="about" className={aboutClass} ref={aboutRef}>
                <About fadeDown={headerTopInView} fadeIn={!headerInView} fadeUp={skillsInView} />
            </div>
            <div className="bottomRef" ref={aboutBottomRef}></div>
            <div id="skills" className={skillsClass} ref={skillsRef}>
                <Skills fadeIn={skillsInView} />
            </div>
            <div className="bottomRef" ref={skillsBottomRef}></div>
            <div id="portfolio" className={portfolioClass} ref={portfolioRef}>
                <Portfolio />
            </div>
            <div ref={portfolioBottomRef}></div>
            <div id="experience" className={experienceClass} ref={experienceRef}>
                <Experience />
                <div className="bottomRef" ref={experienceBottomRef}></div>
            </div>
            <div id="contact" className={contactClass} ref={contactRef}>
                <ContactForm />
            </div>
        </div>
    )
}

export default App
