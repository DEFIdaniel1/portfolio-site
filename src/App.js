import { useInView } from 'react-intersection-observer'
import React, { useEffect, useState } from 'react'

import Header from './components/Header'
import Navbar from './components/Navbar'

import tree from './images/tree.jpg'
import tree5 from './images/tree5.jpg'
import tree6 from './images/tree6.jpg'
import tree7 from './images/tree7.jpg'
import tree8 from './images/tree8.jpg'
import tree10 from './images/tree10.jpg'

// Lazy loading
const About = React.lazy(() => import('./components/About'))
const Skills = React.lazy(() => import('./components/Skills'))
const Experience = React.lazy(() => import('./components/Experience'))
const ContactForm = React.lazy(() => import('./components/ContactForm'))
const Portfolio = React.lazy(() => import('./components/Portfolio'))

function App() {
    // Refs from react-intersection-observer used for fade animations
    const [headerRef, headerInView] = useInView({ threshold: 0.01 })
    const [headerTopRef, headerTopInView] = useInView({ threshold: 0.7 })
    const [headerClass, setHeaderClass] = useState('fadeIn')

    const [aboutRef, aboutInView] = useInView({ threshold: 0.1 })
    const [aboutBottomRef, aboutBottomInView] = useInView({ threshold: 0.2 })

    const [aboutClass, setAboutClass] = useState('zero')

    const [skillsRef, skillsInView] = useInView({ threshold: 0.2 })
    const [skillsBottomRef, skillsBottomInView] = useInView({ threshold: 0.4 })
    const [skillsClass, setSkillsClass] = useState('zero')

    const [portfolioRef, portfolioInView] = useInView({ threshold: 0.2 })
    const [portfolioBottomRef, portfolioBottomInView] = useInView({ threshold: 0.2 })
    const [portfolioClass, setPortfolioClass] = useState('zero')

    const [experienceRef, experienceInView] = useInView({ threshold: 0.2 })
    const [experienceBottomRef, experienceBottomInView] = useInView({ threshold: 0.9 })
    const [experienceClass, setExperienceClass] = useState('zero')

    const [contactRef, contactInView] = useInView({ threshold: 0.2 })
    const [contactClass, setContactClass] = useState('zero')

    // Fix: DETECT IOS CHROME users -> broken CSS animations is a known chrome issue on IOS
    // Turns off animations
    const [iPhoneChrome, setiPhoneChrome] = useState(null)
    useEffect(() => {
        const iPhone = /iPhone/.test(navigator.userAgent)
        const chrome = /CriOS/.test(navigator.userAgent)
        if (iPhone && chrome) {
            setiPhoneChrome(true)
            return
        } else {
            setiPhoneChrome(false)
            return
        }
    }, [])

    // Functions change animation classes based on in-view refs
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
        //disable animation on iPhones using Chrome browsers
        if (iPhoneChrome === true) {
            console.log(iPhoneChrome)
            setHeaderClass('noAnimation')
            setAboutClass('noAnimation')
            setSkillsClass('noAnimation')
            setPortfolioClass('noAnimation')
            setExperienceClass('noAnimation')
            setContactClass('noAnimation')
            return
        } else if (!iPhoneChrome === true) {
            checkAboutClasses()
            checkHeaderClasses()
            checkSkillsClasses()
            checkPortfolioClasses()
            checkExperienceClass()
            checkContactClass()
        }
    }, [
        iPhoneChrome,
        headerInView,
        aboutInView,
        portfolioInView,
        skillsInView,
        experienceInView,
        contactInView,
    ])

    return (
        <div className="app">
            {/* Background images change based on the user's section */}
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
                <About
                    fadeDown={headerTopInView}
                    fadeIn={!headerInView}
                    fadeUp={skillsInView}
                    iPhoneChrome={iPhoneChrome}
                />
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
