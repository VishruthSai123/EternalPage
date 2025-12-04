import Header from './components/Header'
import Hero from './components/Hero'
import CardGrid from './components/CardGrid'
import LogosRow from './components/LogosRow'
import SubscribeCTA from './components/SubscribeCTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-navy overflow-hidden">
      <Header />
      <main>
        <Hero />
        <CardGrid />
        <LogosRow />
        <SubscribeCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
