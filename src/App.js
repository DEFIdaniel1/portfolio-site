import './App.scss'
import About from './components/About'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Skills from './components/Skills'

function App() {
    return (
        <div className="App">
            <Navbar />
            <Header />
            <About />
            <Skills />
        </div>
    )
}

export default App
