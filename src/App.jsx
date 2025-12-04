import Header from './components/Header'
import Hero from './components/Hero'
import CardGrid from './components/CardGrid'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy">
      <Header />
      <main>
        <Hero />
        <CardGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
