import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Footer from './components/Footer'
import Features from './components/Features'
import ContactForm from './components/ContactForm'
import './App.css'

function App() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
