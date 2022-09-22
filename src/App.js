import About from './components/About'
import Experience from './components/Experience'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'

function App() {
    const [ref, inView] = useInView({ threshold: 0.05 })
    const [ref2, inView2] = useInView({ threshold: 0.7 })
    const animation = useAnimation()
    useEffect(() => {
        if (inView || inView2) {
            animation.start({ backgroundColor: '#1b3e3f' })
        }
        if (!inView && !inView2) {
            animation.start({ backgroundColor: '#202020' })
        }

        console.log(`Ref1 status: ${inView}`)
        console.log(`Ref2 status: ${inView}`)
    }, [inView, inView2])

    return (
        <motion.div className="app" animate={animation}>
            {/* <Navbar /> */}
            <Header />
            <div ref={ref}>
                <About />
            </div>
            <div>
                <Skills />
            </div>
            <div ref={ref2}>
                <Portfolio />
            </div>
            <div>
                <Experience />
            </div>
        </motion.div>
    )
}

export default App
