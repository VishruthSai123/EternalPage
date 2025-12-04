import Header from './components/Header'
import Hero from './components/Hero'
import CardGrid from './components/CardGrid'
import FeaturesSection from './components/FeaturesSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <main>
        <Hero />
        <CardGrid />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
