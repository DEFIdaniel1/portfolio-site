import './App.scss'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Skills from './components/Skills'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <About />
            <Skills />
            <Portfolio />
        </div>
    )
}

export default App
