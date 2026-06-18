import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import RD from './components/RD'
import Production from './components/Production'
import Applications from './components/Applications'
import News from './components/News'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products />
      <RD />
      <Production />
      <Applications />
      <News />
      <Careers />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
